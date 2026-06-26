const COLORS = {
  Black: "#111111", White: "#e5e7eb", Red: "#ef4444",
  Silver: "#9ca3af", Brown: "#92400e", Teal: "#0d9488",
  Blue: "#3b82f6", Green: "#22c55e", Gray: "#6b7280",
};

/* ============================================================
   محصولات از API
============================================================ */
let products = [];

async function loadProducts() {
  const res = await fetch('http://localhost:3000/products');
  products = await res.json();
}

/* ============================================================
   خواندن سبد از localStorage
============================================================ */
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

/* ساخت آیتم‌های checkout از cart واقعی */
function buildItems() {
  const cart = getCart();
  return cart.map(item => {
    const p = products.find(p => p.id === item.id);
    if (!p) return null;
    const colorRaw = item.color || "Black";
    const color    = colorRaw.charAt(0).toUpperCase() + colorRaw.slice(1);
    const size     = item.size || 42;
    return {
      id:    p.id,
      name:  p.title,
      attr:  `${color} | Size = ${size}`,
      price: p.price * item.qty,
      qty:   item.qty,
      dot:   COLORS[color] || "#9ca3af",
      image: p.image,
    };
  }).filter(Boolean);
}

/* ============================================================
   STATE
============================================================ */
let ITEMS  = [];
let AMOUNT = 0;
const PROMO_PERCENT = 0.30;

const SHIPPING_ICONS = {
  Economy: '<path d="M20 7L12 3 4 7l8 4 8-4z"/><path d="M4 7v10l8 4 8-4V7"/><path d="M12 11v10"/>',
  Regular: '<path d="M3 9l9-6 9 6-9 6-9-6z"/><path d="M3 9v6l9 6 9-6V9"/><path d="M12 15V9"/>',
  Cargo:   '<path d="M2 7h13v9H2z"/><path d="M15 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/>',
  Express: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
};

let currentAddress = { name: "Home", text: "6480 Sunbrook Park, PC 5679" };
let pendingAddress  = null;

let currentShipping = null;
let pendingShipping = null;

let promoApplied = false;
let pin = "";

/* ============================================================
   HELPERS
============================================================ */
function fmt(n) { return "$" + n.toFixed(2); }

/* ============================================================
   RENDER ITEMS
============================================================ */
function renderItems() {
  const wrap = document.getElementById("checkout-items");

  if (ITEMS.length === 0) {
    wrap.innerHTML = `<p class="text-center text-[#9a9a9b] text-sm py-6">Your cart is empty.</p>`;
    return;
  }

  wrap.innerHTML = ITEMS.map(it => `
    <div class="flex items-center gap-3 bg-card card-shadow rounded-[22px] p-3 mb-2.5">
      <div class="w-[68px] h-[68px] rounded-2xl bg-[#f1f1f2] flex items-center justify-center shrink-0 overflow-hidden">
        <img src="${it.image}?w=200&auto=format" alt="${it.name}"
             class="w-full h-full object-cover"
             onerror="this.style.display='none'">
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-ink text-[13px] font-semibold truncate">${it.name}</p>
        <div class="flex items-center gap-1.5 mt-1">
          <span class="w-2.5 h-2.5 rounded-full shrink-0"
            style="background:${it.dot}; box-shadow:0 0 0 1px #e3e3e4 inset;"></span>
          <span class="text-[#9a9a9b] text-[10.5px]">${it.attr}</span>
        </div>
        <p class="text-ink text-sm font-bold mt-1.5">${fmt(it.price)}</p>
      </div>
      <div class="w-7 h-7 rounded-full bg-[#eeeeef] flex items-center justify-center
                  text-[#8c8c8d] text-[11px] font-semibold shrink-0 self-end mb-1">
        ${it.qty}
      </div>
    </div>
  `).join("");
}

/* ============================================================
   RENDER SHIPPING ROW
============================================================ */
function renderShippingRow() {
  const wrap = document.getElementById("shipping-row-container");
  if (currentShipping) {
    const icon = SHIPPING_ICONS[currentShipping.name] || SHIPPING_ICONS.Regular;
    wrap.innerHTML = `
      <div class="flex items-center gap-3 bg-card card-shadow rounded-[22px] p-4 cursor-pointer tap"
           onclick="goto('step-shipping')">
        <div class="w-10 h-10 flex items-center justify-center bg-ink rounded-full shrink-0">
          <svg width="18" height="18" fill="none" stroke="#fff" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">${icon}</svg>
        </div>
        <div class="flex-1">
          <p class="text-ink text-[13px] font-semibold">${currentShipping.name}</p>
          <p class="text-[#9a9a9b] text-[10.5px] mt-0.5">
            Estimated Arrival: ${currentShipping.eta}
          </p>
        </div>
        <span class="text-ink text-sm font-bold mr-3">$${currentShipping.price}</span>
        <button class="border-0 bg-transparent cursor-pointer p-0 shrink-0">
          <svg width="14" height="14" fill="none" stroke="#9a9a9b" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
      </div>`;
  } else {
    wrap.innerHTML = `
      <div class="flex items-center gap-3 bg-card card-shadow rounded-2xl px-4 py-3.5
                  cursor-pointer tap" onclick="goto('step-shipping')">
        <svg width="18" height="18" fill="none" stroke="#9a9a9b" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M3 9l9-6 9 6-9 6-9-6z"/>
          <path d="M3 9v6l9 6 9-6V9"/>
          <path d="M12 15V9"/>
        </svg>
        <span class="text-[#9a9a9b] text-xs flex-1">Choose Shipping Type</span>
        <svg width="14" height="14" fill="none" stroke="#c2c2c3" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>`;
  }
}

/* ============================================================
   RENDER SUMMARY
============================================================ */
function renderSummary() {
  document.getElementById("summary-amount").textContent   = fmt(AMOUNT);
  document.getElementById("summary-shipping").textContent = currentShipping
    ? fmt(currentShipping.price) : "-";

  let total = AMOUNT + (currentShipping ? currentShipping.price : 0);

  if (promoApplied) {
    const discount = AMOUNT * PROMO_PERCENT;
    document.getElementById("summary-promo").textContent = "- " + fmt(discount);
    document.getElementById("promo-row-summary").classList.remove("hidden");
    total -= discount;
  } else {
    document.getElementById("promo-row-summary").classList.add("hidden");
  }

  document.getElementById("summary-total").textContent = currentShipping
    ? fmt(total) : "-";
}

/* ============================================================
   NAVIGATION
============================================================ */
function goto(stepId) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById(stepId).classList.add("active");
  if (stepId === "step-checkout") renderSummary();
}
function goBack() { location.href = 'cart.html'; }

/* ============================================================
   ADDRESS
============================================================ */
function selectAddr(id, name, text) {
  document.querySelectorAll('#step-address [id^="addr-"]')
    .forEach(el => el.classList.remove("radio-sel"));
  document.getElementById(id).classList.add("radio-sel");
  pendingAddress = { name, text };
}
function applyAddress() {
  if (pendingAddress) currentAddress = pendingAddress;
  document.getElementById("checkout-address-name").textContent = currentAddress.name;
  document.getElementById("checkout-address").textContent      = currentAddress.text;
  goto("step-checkout");
}

/* ============================================================
   SHIPPING
============================================================ */
function selectShipping(name, price, eta, id) {
  document.querySelectorAll('#step-shipping [id^="ship-"]')
    .forEach(el => el.classList.remove("radio-sel"));
  document.getElementById(id).classList.add("radio-sel");
  pendingShipping = { name, price, eta };
}
function applyShipping() {
  if (pendingShipping) currentShipping = pendingShipping;
  renderShippingRow();
  goto("step-checkout");
}

/* ============================================================
   PROMO
============================================================ */
function applyPromo() {
  promoApplied = true;
  document.getElementById("promo-row").classList.add("hidden");
  document.getElementById("promo-tag-container").classList.remove("hidden");
  document.getElementById("promo-tag-container").classList.add("flex");
  renderSummary();
}
function removePromo() {
  promoApplied = false;
  document.getElementById("promo-input").value = "";
  document.getElementById("promo-row").classList.remove("hidden");
  document.getElementById("promo-tag-container").classList.add("hidden");
  document.getElementById("promo-tag-container").classList.remove("flex");
  renderSummary();
}

/* ============================================================
   PAYMENT
============================================================ */
function selectPayment(id) {
  document.querySelectorAll('#step-payment [id^="pay-"]')
    .forEach(el => el.classList.remove("radio-sel"));
  document.getElementById(id).classList.add("radio-sel");
}

/* ============================================================
   PIN ENTRY
============================================================ */
function updateDots() {
  for (let i = 0; i < 6; i++) {
    const dot = document.getElementById("dot-" + i);
    if (i < pin.length) dot.classList.add("pin-dot-filled");
    else dot.classList.remove("pin-dot-filled");
  }
}
function pinPress(d) {
  if (pin.length >= 6) return;
  pin += d;
  updateDots();
  if (pin.length === 6) setTimeout(showSuccess, 350);
}
function pinDel() {
  pin = pin.slice(0, -1);
  updateDots();
}
function showSuccess() {
  const ov = document.getElementById("success-overlay");
  ov.classList.remove("hidden");
  ov.classList.add("flex");
}
function resetAfterSuccess() {
  const ov = document.getElementById("success-overlay");
  ov.classList.add("hidden");
  ov.classList.remove("flex");
  pin = "";
  updateDots();
  goto("step-checkout");
}
function viewOrder()   { resetAfterSuccess(); }
function viewReceipt() { resetAfterSuccess(); }

/* ============================================================
   INIT
============================================================ */
async function init() {
  await loadProducts();      // ← اول محصولات از API لود میشن
  ITEMS  = buildItems();     // ← بعد cart با محصولات ترکیب میشه
  AMOUNT = ITEMS.reduce((s, i) => s + i.price, 0);
  renderItems();
  renderShippingRow();
  renderSummary();
}
init();
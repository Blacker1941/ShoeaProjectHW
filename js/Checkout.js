/* ============================================================
   PRODUCTS (همان db.json)
============================================================ */
const products = [
  { id:1,  title:"Air Jordan 3 Retro",         brand:"Nike",        price:120, image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { id:2,  title:"Nike Zoom Rival",             brand:"Nike",        price:130, image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
  { id:3,  title:"Nike Air Max 97",             brand:"Nike",        price:160, image:"https://images.unsplash.com/photo-1514989940723-e8e51635b782" },
  { id:4,  title:"Nike Air Force 1",            brand:"Nike",        price:110, image:"https://images.unsplash.com/photo-1579298245158-33e8f568f7d3" },
  { id:5,  title:"Nike React Infinity",         brand:"Nike",        price:145, image:"https://images.unsplash.com/photo-1491553895911-0055eca6402d" },
  { id:6,  title:"Nike Dunk Low",               brand:"Nike",        price:105, image:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a" },
  { id:7,  title:"Nike Blazer Mid 77",          brand:"Nike",        price:100, image:"https://images.unsplash.com/photo-1612015600528-e5738b878d55" },
  { id:8,  title:"Air Jordan 1 High OG",        brand:"Nike",        price:180, image:"https://images.unsplash.com/photo-1556906781-9a412961a28c" },
  { id:9,  title:"Adidas Ultraboost 22",        brand:"Adidas",      price:140, image:"https://images.unsplash.com/photo-1549298916-b41d501d3772" },
  { id:10, title:"Adidas Stan Smith",           brand:"Adidas",      price:90,  image:"https://images.unsplash.com/photo-1584735175315-9d5df23860e6" },
  { id:11, title:"Adidas NMD R1",               brand:"Adidas",      price:135, image:"https://images.unsplash.com/photo-1588361035994-295e21daa761" },
  { id:12, title:"Adidas Superstar",            brand:"Adidas",      price:85,  image:"https://images.unsplash.com/photo-1575537302964-96cd47c06b1b" },
  { id:13, title:"Adidas Yeezy 350 V2",         brand:"Adidas",      price:220, image:"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb" },
  { id:14, title:"Adidas Forum Low",            brand:"Adidas",      price:95,  image:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa" },
  { id:15, title:"Adidas Gazelle",              brand:"Adidas",      price:100, image:"https://images.unsplash.com/photo-1560769629-975ec94e6a86" },
  { id:16, title:"Puma RS-X",                   brand:"Puma",        price:115, image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5" },
  { id:17, title:"Puma Suede Classic",          brand:"Puma",        price:80,  image:"https://images.unsplash.com/photo-1539185441755-769473a23570" },
  { id:18, title:"Puma Clyde All-Pro",          brand:"Puma",        price:125, image:"https://images.unsplash.com/photo-1518002054494-3a6f94352e9d" },
  { id:19, title:"Puma Future Rider",           brand:"Puma",        price:95,  image:"https://images.unsplash.com/photo-1510771463146-e89e6e86560e" },
  { id:20, title:"Puma Speedcat OG",            brand:"Puma",        price:110, image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2" },
  { id:21, title:"Asics Gel Kayano 29",         brand:"Asics",       price:125, image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
  { id:22, title:"Asics Gel Nimbus 24",         brand:"Asics",       price:155, image:"https://images.unsplash.com/photo-1562183241-b937e95585b6" },
  { id:23, title:"Asics Gel Lyte III",          brand:"Asics",       price:100, image:"https://images.unsplash.com/photo-1600269452121-4f2416e55c28" },
  { id:24, title:"Asics Gel DS Trainer",        brand:"Asics",       price:115, image:"https://images.unsplash.com/photo-1520256862855-398228c41684" },
  { id:25, title:"Reebok Classic Leather",      brand:"Reebok",      price:80,  image:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62" },
  { id:26, title:"Reebok Club C 85",            brand:"Reebok",      price:75,  image:"https://images.unsplash.com/photo-1574435970977-f36f00bc6967" },
  { id:27, title:"Reebok Nano X2",              brand:"Reebok",      price:130, image:"https://images.unsplash.com/photo-1571945153237-4929e783af4a" },
  { id:28, title:"Reebok Floatride Run",        brand:"Reebok",      price:120, image:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2" },
  { id:29, title:"New Balance 574",             brand:"New Balance", price:110, image:"https://images.unsplash.com/photo-1605348532760-6753d2c43329" },
  { id:30, title:"New Balance 990v5",           brand:"New Balance", price:185, image:"https://images.unsplash.com/photo-1539185441755-769473a23570" },
  { id:31, title:"New Balance 327",             brand:"New Balance", price:100, image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb" },
  { id:32, title:"New Balance Fresh Foam 1080", brand:"New Balance", price:160, image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { id:33, title:"New Balance 2002R",           brand:"New Balance", price:130, image:"https://images.unsplash.com/photo-1560769629-975ec94e6a86" },
];

const COLORS = {
  Black: "#111111", White: "#e5e7eb", Red: "#ef4444",
  Silver: "#9ca3af", Brown: "#92400e", Teal: "#0d9488",
  Blue: "#3b82f6", Green: "#22c55e", Gray: "#6b7280",
};

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
    const p     = products.find(p => p.id === item.id);
    if (!p) return null;
    const color = item.color || "Black";
    const size  = item.size  || 42;
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
const ITEMS = buildItems();
const AMOUNT = ITEMS.reduce((s, i) => s + i.price, 0);
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
   RENDER ITEMS  (تصویر واقعی + اطلاعات کارت)
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
renderItems();
renderShippingRow();
renderSummary();
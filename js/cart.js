

let products = [];


async function loadProducts() {
  const res = await fetch('http://localhost:3000/products');
  products = await res.json();
}

const COLORS = {
  Black: "#111111", White: "#e5e7eb", Red: "#ef4444",
  Silver: "#9ca3af", Brown: "#92400e", Teal: "#0d9488",
  Blue: "#3b82f6", Green: "#22c55e", Gray: "#6b7280",
};

/* ─── Seed demo cart if empty ─── */
function seedDemoCart() {
  const existing = JSON.parse(localStorage.getItem("cart") || "[]");
  if (existing.length > 0) return;
  const demo = [
    { id: 1, qty: 1, color: "Black", size: 42 },
    { id: 5, qty: 2, color: "Silver", size: 41 },
    { id: 29, qty: 1, color: "Brown", size: 42 },
    { id: 16, qty: 1, color: "Silver", size: 41 },
  ];
  localStorage.setItem("cart", JSON.stringify(demo));
}

/* ─── Load cart ─── */
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* ─── Render ─── */
function render() {
  const cart = getCart();
  const listEl = document.getElementById("cartList");
  const emptyEl = document.getElementById("emptyState");
  const footerEl = document.getElementById("checkoutBar");

  if (cart.length === 0) {
    listEl.classList.add("hidden");
    emptyEl.classList.remove("hidden");
    emptyEl.classList.add("flex");
    footerEl.classList.add("hidden");
    return;
  }

  emptyEl.classList.add("hidden");
  emptyEl.classList.remove("flex");
  listEl.classList.remove("hidden");
  footerEl.classList.remove("hidden");

  let total = 0;

  listEl.innerHTML = cart.map((item, idx) => {
    const p = products.find(p => p.id === item.id);
    if (!p) return "";
    const color = item.color || "Black";
    const size = item.size || 42;
    const lineTotal = p.price * item.qty;
    total += lineTotal;
    const colorHex = COLORS[color] || "#9ca3af";

    return `
          <div class="cart-item bg-white rounded-2xl p-3 flex gap-3 items-center shadow-sm border border-gray-100">

            <!-- Image -->
            <div class="w-[80px] h-[75px] rounded-xl bg-gray-100 flex-shrink-0 overflow-hidden">
              <img src="${p.image}?w=200&auto=format"
                class="w-full h-full object-cover" alt="${p.title}"
                onerror="this.src='https://via.placeholder.com/200?text=Shoe'">
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start">
                <h3 class="font-semibold text-sm text-gray-900 line-clamp-1 pr-2">${p.title}</h3>
                <!-- Delete -->
                <button onclick="openModal(${idx})"
                  class="flex-shrink-0 w-7 h-7 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                    <path d="M10 11v6M14 11v6"/>
                    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
                  </svg>
                </button>
              </div>

              <!-- Color + Size -->
              <div class="flex items-center gap-1 mt-0.5">
                <span class="w-3 h-3 rounded-full border border-gray-200 flex-shrink-0"
                  style="background-color:${colorHex}"></span>
                <span class="text-[11px] text-gray-400">${color}</span>
                <span class="text-gray-300 mx-0.5">|</span>
                <span class="text-[11px] text-gray-400">Size × ${size}</span>
              </div>

              <!-- Price + Qty -->
              <div class="flex items-center justify-between mt-2">
                <p class="font-bold text-sm text-gray-900">$${lineTotal.toFixed(2)}</p>

                <!-- Qty stepper -->
                <div class="flex items-center gap-0 bg-gray-100 rounded-full overflow-hidden">
                  <button onclick="changeQty(${idx}, -1)"
                    class="w-8 h-8 flex items-center justify-center text-gray-500 text-lg font-light hover:bg-gray-200 transition-colors">
                    −
                  </button>
                  <span class="text-sm font-semibold text-gray-900 min-w-[20px] text-center">${item.qty}</span>
                  <button onclick="changeQty(${idx}, 1)"
                    class="w-8 h-8 flex items-center justify-center text-gray-500 text-lg font-light hover:bg-gray-200 transition-colors">
                    +
                  </button>
                </div>
              </div>
            </div>

          </div>
        `;
  }).join("");

  document.getElementById("totalPrice").textContent = `$${total.toFixed(2)}`;
}

/* ─── Qty change ─── */
function changeQty(idx, delta) {
  const cart = getCart();
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    openModal(idx);
    return;
  }
  saveCart(cart);
  render();
}

/* ─── Modal ─── */
let pendingRemoveIdx = null;

function openModal(idx) {
  pendingRemoveIdx = idx;
  const cart = getCart();
  const item = cart[idx];
  const p = products.find(p => p.id === item.id);
  const color = item.color || "Black";
  const size = item.size || 42;

  document.getElementById("modalImg").src = p.image + "?w=200&auto=format";
  document.getElementById("modalImg").alt = p.title;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalColorDot").style.backgroundColor = COLORS[color] || "#9ca3af";
  document.getElementById("modalColorName").textContent = color;
  document.getElementById("modalSize").textContent = `Size × ${size}`;
  document.getElementById("modalPrice").textContent = `$${p.price.toFixed(2)}`;
  document.getElementById("modalQty").textContent = item.qty;

  const overlay = document.getElementById("modalOverlay");
  const sheet = document.getElementById("modalSheet");
  overlay.classList.remove("hidden");
  // animate in
  requestAnimationFrame(() => {
    sheet.style.transform = "translateY(0)";
  });
}

function closeModal() {
  const sheet = document.getElementById("modalSheet");
  sheet.style.transform = "translateY(100%)";
  setTimeout(() => {
    document.getElementById("modalOverlay").classList.add("hidden");
    pendingRemoveIdx = null;
  }, 300);
}

function confirmRemove() {
  if (pendingRemoveIdx === null) return;
  const cart = getCart();
  cart.splice(pendingRemoveIdx, 1);
  saveCart(cart);
  closeModal();
  setTimeout(render, 320);
}

/* ─── Init ─── */
async function init() {
  await loadProducts();
  seedDemoCart();
  render();
}
init();
/* ─── Mock orders data (in a real app this comes from your backend) ─── */
const COLORS = {
  Black:  "#111111",
  White:  "#d1d5db",
  Red:    "#ef4444",
  Silver: "#9ca3af",
  Brown:  "#92400e",
  Teal:   "#0d9488",
  Blue:   "#3b82f6",
  Green:  "#22c55e",
};

const mockActive = [
  { orderId: "ORD-001", productId: 1,  color: "Black",  size: 42, qty: 1, status: "In Delivery" },
  { orderId: "ORD-002", productId: 5,  color: "Silver", size: 41, qty: 2, status: "In Delivery" },
  { orderId: "ORD-003", productId: 29, color: "Brown",  size: 42, qty: 1, status: "In Delivery" },
  { orderId: "ORD-004", productId: 16, color: "Silver", size: 41, qty: 1, status: "In Delivery" },
];

const mockCompleted = [
  { orderId: "ORD-101", productId: 5,  color: "Red",   size: 42, qty: 2, status: "Completed" },
  { orderId: "ORD-102", productId: 9,  color: "Brown", size: 42, qty: 3, status: "Completed" },
  { orderId: "ORD-103", productId: 13, color: "Teal",  size: 42, qty: 1, status: "Completed" },
  { orderId: "ORD-104", productId: 3,  color: "Brown", size: 43, qty: 2, status: "Completed" },
];

/* ─── Products: load from json-server instead of hardcoding ─── */
let products = [];

async function loadProducts() {
  const res = await fetch('http://localhost:3000/products');
  products = await res.json();
}

let currentTab = "active";

/* ─── Tab switch ─── */
function switchTab(tab) {
  currentTab = tab;
  const line = document.getElementById("tabLine");
  const tabActive    = document.getElementById("tab-active");
  const tabCompleted = document.getElementById("tab-completed");

  if (tab === "active") {
    line.style.transform = "translateX(0%)";
    tabActive.classList.replace("text-gray-400", "text-gray-900");
    tabActive.classList.add("font-semibold");
    tabCompleted.classList.replace("text-gray-900", "text-gray-400");
    tabCompleted.classList.remove("font-semibold");
    renderOrders(mockActive, "active");
  } else {
    line.style.transform = "translateX(100%)";
    tabCompleted.classList.replace("text-gray-400", "text-gray-900");
    tabCompleted.classList.add("font-semibold");
    tabActive.classList.replace("text-gray-900", "text-gray-400");
    tabActive.classList.remove("font-semibold");
    renderOrders(mockCompleted, "completed");
  }
}

/* ─── Render orders ─── */
function renderOrders(orders, type) {
  const empty = document.getElementById("emptyState");
  const list  = document.getElementById("ordersList");

  if (orders.length === 0) {
    empty.classList.remove("hidden");
    empty.classList.add("flex");
    list.classList.add("hidden");
    return;
  }

  empty.classList.add("hidden");
  empty.classList.remove("flex");
  list.classList.remove("hidden");

  list.innerHTML = orders.map(order => {
    const product = products.find(p => p.id === order.productId);
    if (!product) return "";

    const total = (product.price * order.qty).toFixed(2);
    const colorDot = COLORS[order.color] || "#9ca3af";

    let actionBtn = "";
    if (type === "active") {
      actionBtn = `
        <button onclick="trackOrder('${order.orderId}')"
          class="px-5 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap">
          Track Order
        </button>`;
    } else {
      const isReview = orders.indexOf(order) % 2 === 0;
      if (isReview) {
        actionBtn = `
          <button onclick="leaveReview('${order.orderId}')"
            class="px-5 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap">
            Leave Review
          </button>`;
      } else {
        actionBtn = `
          <button onclick="buyAgain(${product.id})"
            class="px-5 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap">
            Buy Again
          </button>`;
      }
    }

    return `
      <div class="order-card bg-white rounded-2xl p-3 flex gap-3 items-center shadow-sm border border-gray-100">

        <!-- Image -->
        <div class="w-[80px] h-[80px] rounded-xl bg-gray-100 flex-shrink-0 overflow-hidden">
          <img src="${product.image}?w=200&auto=format"
            class="w-full h-full object-cover"
            alt="${product.title}">
        </div>

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <h3 class="font-semibold text-sm text-gray-900 leading-tight line-clamp-1">${product.title}</h3>

          <div class="flex items-center gap-1 mt-1 flex-wrap">
            <span class="w-3 h-3 rounded-full flex-shrink-0 border border-gray-200"
              style="background-color:${colorDot}"></span>
            <span class="text-[11px] text-gray-400">${order.color}</span>
            <span class="text-gray-300 text-[11px]">|</span>
            <span class="text-[11px] text-gray-400">Size × ${order.size}</span>
            <span class="text-gray-300 text-[11px]">|</span>
            <span class="text-[11px] text-gray-400">Qty × ${order.qty}</span>
          </div>

          <div class="mt-1.5">
            <span class="text-[10px] px-2 py-0.5 rounded-full font-medium
              ${type === 'active'
                ? 'bg-blue-50 text-blue-500'
                : 'bg-green-50 text-green-600'}">
              ${order.status}
            </span>
          </div>

          <div class="flex justify-between items-center mt-2">
            <p class="font-bold text-sm text-gray-900">$${total}</p>
            ${actionBtn}
          </div>
        </div>

      </div>
    `;
  }).join("");
}

/* ─── Actions ─── */
function trackOrder(orderId) {
  alert(`Tracking order: ${orderId}`);
}

function leaveReview(orderId) {
  alert(`Leave a review for order: ${orderId}`);
}

function buyAgain(productId) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const ex = cart.find(i => i.id === productId);
  if (ex) { ex.qty += 1; } else { cart.push({ id: productId, qty: 1 }); }
  localStorage.setItem("cart", JSON.stringify(cart));

  const toast = document.createElement("div");
  toast.className = "fixed top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-2 rounded-full z-[999] shadow-lg";
  toast.textContent = "Added to cart ✓";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1800);
}

/* ─── Init ─── */
async function init() {
  await loadProducts();
  switchTab("active");
}
init();
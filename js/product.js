const API    = "http://localhost:3000/products";
const params = new URLSearchParams(window.location.search);
const id     = params.get("id");

let quantity      = 1;
let selectedSize  = 42;
let selectedColor = "charcoal";
let isWishlisted  = false;
let productPrice  = 0;

const sizes  = [40, 41, 42, 43, 44];
const colors = [
  { name: "charcoal", hex: "#444444" },
  { name: "teal",     hex: "#2A7C76" },
  { name: "purple",   hex: "#7B4DA8" },
  { name: "brown",    hex: "#8B5E3C" },
  { name: "blue",     hex: "#3A7BD5" },
];

async function loadProduct() {
  try {
    const res = await fetch(`${API}/${id}`);
    const p   = await res.json();
    productPrice = p.price;

    const wl     = JSON.parse(localStorage.getItem("wishlist") || "[]");
    isWishlisted = wl.includes(p.id);

    render(p);
  } catch (e) {
    document.querySelector("#product").innerHTML = `
      <div class="flex items-center justify-center min-h-screen text-gray-400 text-sm">
        Could not load product. Make sure your server is running.
      </div>`;
  }
}

function render(p) {
  document.querySelector("#product").innerHTML = `
<div class="max-w-[390px] mx-auto min-h-screen bg-white flex flex-col">

  <!-- Top Nav -->
  <div class="flex items-center justify-between px-5 pt-10 pb-2">
    <button onclick="history.back()"
      class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 text-lg font-semibold">
      &#8592;
    </button>
  </div>

  <!-- Product Image -->
  <div class="mx-5 mt-2 rounded-3xl bg-[#F4F4F4] overflow-hidden flex items-center justify-center"
    style="height:230px">
    <img src="${p.image}?w=600&auto=format"
      class="h-full w-full object-contain p-6" alt="${p.title}">
  </div>

  <!-- Dot indicators -->
  <div class="flex justify-center gap-1.5 mt-3">
    <span class="w-5 h-1.5 rounded-full bg-gray-800"></span>
    <span class="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
    <span class="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
  </div>

  <!-- Details -->
  <div class="px-6 pt-5 pb-10 flex-1">

    <!-- Title row -->
    <div class="flex items-start justify-between gap-2">
      <div class="flex-1">
        <h1 class="font-bold text-2xl leading-tight text-gray-900">${p.title}</h1>
        <div class="flex items-center gap-2 mt-1.5">
          <span class="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-medium">
            ${(3200 + p.id * 621).toLocaleString()} sold
          </span>
          <span class="flex items-center gap-1">
            <span class="text-yellow-400 text-xs">&#9733;</span>
            <span class="text-xs font-semibold text-gray-700">4.3</span>
            <span class="text-xs text-gray-400">(${(5000 + p.id * 389).toLocaleString()} reviews)</span>
          </span>
        </div>
      </div>
      <button id="wishlist-btn" onclick="toggleWishlist(${p.id})"
        class="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-xl mt-1">
        <span>${isWishlisted ? "♥" : "♡"}</span>
      </button>
    </div>

    <!-- Description -->
    <div class="mt-5">
      <h3 class="font-semibold text-sm text-gray-900 mb-1.5">Description</h3>
      <p class="text-gray-500 text-xs leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        <button class="text-gray-800 font-semibold underline-offset-1 underline text-xs">view more</button>
      </p>
    </div>

<!-- Size + Color side by side -->
    <div class="mt-5">
      <div class="flex gap-16">
        <h3 class="font-semibold text-sm text-gray-900">Size</h3>
        <h3 class="font-semibold text-sm text-gray-900">Color</h3>
      </div>

      <div class="flex items-center gap-3 mt-2.5">

        <!-- Size buttons -->
        <div class="flex gap-2" id="size-container">
          ${sizes.map(s => `
            <button onclick="selectSize(${s})" id="size-${s}"
              class="w-10 h-10 rounded-full text-xs font-semibold border transition-all
                ${s === selectedSize
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"}">
              ${s}
            </button>
          `).join("")}
        </div>

        <!-- Divider -->
        <div class="w-px h-8 bg-gray-200 mx-1"></div>

        <!-- Color buttons -->
        <div class="flex gap-2 items-center" id="color-container">
          ${colors.map(c => `
            <button onclick="selectColor('${c.name}')" id="color-${c.name}"
              class="flex items-center justify-center rounded-full transition-all flex-shrink-0"
              style="
                width: 32px;
                height: 32px;
                background: ${c.hex};
                outline: ${c.name === selectedColor ? "2px solid #111" : "2px solid transparent"};
                outline-offset: 2px;
              ">
              ${c.name === selectedColor
                ? `<svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                     <path d="M2.5 6.5l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>`
                : ""}
            </button>
          `).join("")}
        </div>

      </div>
    </div>

    <!-- Quantity -->
    <div class="flex items-center mt-5 gap-6">
      <h3 class="font-semibold text-sm text-gray-900">Quantity</h3>
      <div class="flex items-center gap-4">
        <button onclick="changeQty(-1)"
          class="w-8 h-8 rounded-full bg-gray-100 text-gray-800 text-lg font-bold flex items-center justify-center hover:bg-gray-200 transition-colors">
          &#8722;
        </button>
        <span id="qty-display" class="text-sm font-bold text-gray-900 w-4 text-center">1</span>
        <button onclick="changeQty(1)"
          class="w-8 h-8 rounded-full bg-gray-900 text-white text-lg font-bold flex items-center justify-center hover:bg-gray-700 transition-colors">
          &#43;
        </button>
      </div>
    </div>

    <!-- Price + Add to Cart -->
    <div class="mt-7 flex items-center justify-between">
      <div>
        <p class="text-gray-400 text-[11px] mb-0.5">Total price</p>
        <h2 id="price-display" class="font-bold text-2xl text-gray-900">
          $${(p.price * quantity).toFixed(2)}
        </h2>
      </div>
      <button onclick="addToCart(${p.id})"
        id="cart-btn"
        class="bg-gray-900 text-white px-7 py-4 rounded-full font-semibold text-sm
               flex items-center gap-2 hover:bg-gray-700 active:scale-95 transition-all">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        Add to Cart
      </button>
    </div>

  </div>
</div>
`;
}

function selectSize(s) {
  selectedSize = s;
  sizes.forEach(sz => {
    const btn = document.getElementById(`size-${sz}`);
    if (!btn) return;
    btn.className = `w-10 h-10 rounded-full text-xs font-semibold transition-all ${
      sz === s ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`;
  });
}

function selectColor(name) {
  selectedColor = name;
  colors.forEach(c => {
    const btn = document.getElementById(`color-${c.name}`);
    if (!btn) return;
    const isActive = c.name === name;
    btn.style.outline       = isActive ? "2.5px solid #111" : "none";
    btn.style.outlineOffset = "2px";
    btn.innerHTML = isActive
      ? `<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
           <path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>`
      : "";
  });
}

function changeQty(delta) {
  quantity = Math.max(1, quantity + delta);
  document.getElementById("qty-display").textContent = quantity;
  document.getElementById("price-display").textContent =
    "$" + (productPrice * quantity).toFixed(2);
}

function toggleWishlist(productId) {
  let wl = JSON.parse(localStorage.getItem("wishlist") || "[]");
  if (wl.includes(productId)) {
    wl = wl.filter(i => i !== productId);
    isWishlisted = false;
  } else {
    wl.push(productId);
    isWishlisted = true;
  }
  localStorage.setItem("wishlist", JSON.stringify(wl));

  const btn  = document.getElementById("wishlist-btn");
  const span = btn.querySelector("span");
  span.textContent = isWishlisted ? "♥" : "♡";
  span.style.color = isWishlisted ? "#ef4444" : "";
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ id: productId, qty: quantity, size: selectedSize, color: selectedColor });
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  const btn = document.getElementById("cart-btn");
  btn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    Added!`;
  btn.classList.replace("bg-gray-900", "bg-green-600");
  setTimeout(() => {
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      Add to Cart`;
    btn.classList.replace("bg-green-600", "bg-gray-900");
  }, 1500);
}

loadProduct();
const productsContainer = document.querySelector("#products");
const filtersContainer  = document.querySelector("#filters");
const brandsContainer   = document.querySelector("#brands");
const searchInput       = document.querySelector("#search");

let allProducts = [];
let wishlist    = JSON.parse(localStorage.getItem("wishlist") || "[]");

/* ─── Brand config with real SVG logos ─── */
const brandConfig = [
  {
    name: "Nike",
    svg: `<svg viewBox="0 0 80 30" width="38" height="16" fill="#111"><path d="M80 0L25.4 30 0 20.9l54.6-10.1L80 0z"/></svg>`
  },
  {
    name: "Adidas",
    svg: `<svg viewBox="0 0 40 32" width="28" height="22" fill="#111"><polygon points="20,0 40,32 0,32"/><line x1="6" y1="24" x2="34" y2="24" stroke="white" stroke-width="4"/><line x1="11" y1="16" x2="29" y2="16" stroke="white" stroke-width="4"/></svg>`
  },
  {
    name: "Puma",
    svg: `<svg viewBox="0 0 60 40" width="34" height="22" fill="#111"><path d="M10,38 C10,38 0,20 8,10 C14,3 24,2 30,8 C36,14 32,26 40,30 C48,34 56,28 58,20 L54,18 C52,24 46,28 40,26 C34,22 36,10 28,4 C20,-2 8,0 4,10 C-2,22 6,40 10,38 Z"/></svg>`
  },
  {
    name: "Asics",
    svg: `<svg viewBox="0 0 70 24" width="40" height="14" fill="#111"><text x="0" y="20" font-family="Arial" font-weight="900" font-size="22" letter-spacing="-1">ASICS</text></svg>`
  },
  {
    name: "Reebok",
    svg: `<svg viewBox="0 0 80 24" width="42" height="14" fill="#111"><text x="0" y="20" font-family="Arial" font-weight="900" font-size="20">Reebok</text></svg>`
  },
  {
    name: "New Balance",
    svg: `<svg viewBox="0 0 36 36" width="30" height="30" fill="#111"><text x="2" y="28" font-family="Arial" font-weight="900" font-size="30">N</text></svg>`
  },
  {
    name: "Converse",
    svg: `<svg viewBox="0 0 36 36" width="26" height="26" fill="none" stroke="#111" stroke-width="2.5"><circle cx="18" cy="18" r="14"/><line x1="18" y1="4" x2="18" y2="32"/><line x1="4" y1="18" x2="32" y2="18"/></svg>`
  },
  {
    name: "More",
    svg: `<svg viewBox="0 0 36 12" width="28" height="10" fill="#111"><circle cx="6" cy="6" r="4"/><circle cx="18" cy="6" r="4"/><circle cx="30" cy="6" r="4"/></svg>`
  }
];

const filterBrands = ["All", "Nike", "Adidas", "Puma", "Asics", "Reebok", "New Balance"];

/* ─── Render brands grid ─── */
function renderBrands() {
  brandsContainer.innerHTML = brandConfig.map(b => `
    <div onclick="goBrand('${b.name}')"
      class="flex flex-col items-center cursor-pointer group">
      <div onclick="location.href='popular.html'" class="w-[62px] h-[62px] mx-auto rounded-full bg-gray-100 flex items-center justify-center
                  group-hover:bg-gray-200 transition-colors">
        ${b.svg}
      </div>
      <p class="text-[11px] text-gray-700 mt-1.5 font-medium text-center leading-tight">
        ${b.name === "New Balance" ? "New Ba..." : b.name}
      </p>
    </div>
  `).join("");
}

/* ─── Render filter pills ─── */
function renderFilters() {
  filtersContainer.innerHTML = filterBrands.map((brand, i) => `
    <button data-brand="${brand}"
      class="filter-btn ${i === 0 ? "bg-gray-900 text-white" : "bg-white text-gray-600 border border-gray-200"}
             px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
      ${brand}
    </button>
  `).join("");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => {
        b.classList.remove("bg-gray-900", "text-white");
        b.classList.add("bg-white", "text-gray-600", "border", "border-gray-200");
      });
      btn.classList.remove("bg-white", "text-gray-600", "border", "border-gray-200");
      btn.classList.add("bg-gray-900", "text-white");

      const brand = btn.dataset.brand;
      renderProducts(brand === "All" ? allProducts : allProducts.filter(p => p.brand === brand));
    });
  });
}

/* ─── Render products ─── */
function renderProducts(products) {
  if (products.length === 0) {
    productsContainer.innerHTML = `
      <div class="col-span-2 text-center text-gray-400 text-sm py-10">No products found.</div>`;
    return;
  }

  productsContainer.innerHTML = products.map(product => {
    const inWishlist = wishlist.includes(product.id);
    return `
    <div onclick="goProduct(${product.id})"
      class="bg-[#f5f5f5] rounded-3xl p-3 cursor-pointer hover:scale-[1.02] transition-transform duration-200 relative">

      <!-- Wishlist heart -->
      <button
        onclick="event.stopPropagation(); toggleWishlist(${product.id}, this)"
        class="absolute top-3 right-3 w-7 h-7 flex items-center justify-center
               rounded-full bg-white shadow-sm text-sm z-10"
        aria-label="Wishlist">
        <span class="${inWishlist ? "text-red-500" : "text-gray-400"}">
          ${inWishlist ? "♥" : "♡"}
        </span>
      </button>

      <!-- Product image -->
      <div class="h-[100px] flex items-center justify-center">
        <img src="${product.image}?w=300&auto=format"
          class="h-full w-full object-contain" alt="${product.title}">
      </div>

      <!-- Info -->
      <div class="mt-3 px-1">
        <h3 class="font-semibold text-xs text-gray-900 line-clamp-1">${product.title}</h3>
        <div class="flex justify-between items-center mt-2">
          <p class="text-sm font-bold text-gray-900">$ ${product.price.toFixed(2)}</p>
        </div>
      </div>

    </div>
  `;
  }).join("");
}

/* ─── Load products from API ─── */
async function loadProducts() {
  try {
    const res = await fetch("http://localhost:3000/products");
    allProducts = await res.json();
    renderProducts(allProducts);
  } catch (e) {
    productsContainer.innerHTML = `
      <div class="col-span-2 text-center text-gray-400 text-sm py-10">
        Could not load products.<br>Make sure your server is running.
      </div>`;
  }
}

/* ─── Search ─── */
searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase().trim();
  const filtered = allProducts.filter(p => p.title.toLowerCase().includes(val));
  renderProducts(filtered);
});

/* ─── Navigate ─── */
function goProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function goBrand(brand) {
  if (brand === "More") return;
  localStorage.setItem("selectedBrand", brand);
  window.location.href = `brand.html?brand=${brand}`;
}

/* ─── Wishlist toggle ─── */
function toggleWishlist(id, btn) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(i => i !== id);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  const span = btn.querySelector("span");
  if (wishlist.includes(id)) {
    span.textContent = "♥";
    span.className = "text-red-500";
  } else {
    span.textContent = "♡";
    span.className = "text-gray-400";
  }
}

/* ─── Add to cart ─── */
function addToCart(id, btn) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  btn.textContent = "✓";
  btn.classList.replace("bg-gray-900", "bg-green-500");
  setTimeout(() => {
    btn.textContent = "+";
    btn.classList.replace("bg-green-500", "bg-gray-900");
  }, 1000);
}

/* ─── Init ─── */
renderBrands();
renderFilters();
loadProducts();
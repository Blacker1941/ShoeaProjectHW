const productsContainer = document.querySelector("#products");
const filtersContainer  = document.querySelector("#filters");

let allProducts  = [];
let wishlist     = JSON.parse(localStorage.getItem("wishlist") || "[]");
let activeBrand  = "All";

const filterBrands = ["All", "Nike", "Adidas", "Puma", "Asics", "Reebok", "New Balance"];

/* ─── Load products ─── */
async function loadProducts() {
  try {
    const res  = await fetch("http://localhost:3000/products");
    allProducts = await res.json();

    const selected = localStorage.getItem("selectedBrand");
    if (selected) {
      activeBrand = selected;
      localStorage.removeItem("selectedBrand");
    }

    renderFilters();
    renderProducts(
      activeBrand === "All"
        ? allProducts
        : allProducts.filter(p => p.brand === activeBrand)
    );
  } catch (e) {
    productsContainer.innerHTML = `
      <div class="col-span-2 text-center text-gray-400 text-sm py-10">
        Could not connect to server.
      </div>`;
  }
}

/* ─── Render filter pills ─── */
function renderFilters() {
  filtersContainer.innerHTML = filterBrands.map(brand => `
    <button onclick="filterBrand('${brand}')"
      data-brand="${brand}"
      class="filter-btn ${brand === activeBrand ? "bg-gray-900 text-white" : "bg-white text-gray-600 border border-gray-200"}
             px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all">
      ${brand}
    </button>
  `).join("");
}

/* ─── Filter by brand ─── */
function filterBrand(brand) {
  activeBrand = brand;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    const isActive = btn.dataset.brand === brand;
    btn.className = `filter-btn ${
      isActive ? "bg-gray-900 text-white" : "bg-white text-gray-600 border border-gray-200"
    } px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all`;
  });

  renderProducts(
    brand === "All" ? allProducts : allProducts.filter(p => p.brand === brand)
  );
}

/* ─── Render products ─── */
function renderProducts(products) {
  if (!products.length) {
    productsContainer.innerHTML = `
      <div class="col-span-2 text-center text-gray-400 text-sm py-10">No products found.</div>`;
    return;
  }

  productsContainer.innerHTML = products.map(product => {
    const inWishlist = wishlist.includes(product.id);
    return `
    <div onclick="location.href='product.html?id=${product.id}'"
      class="bg-[#f5f5f5] rounded-3xl p-3 cursor-pointer hover:scale-[1.02] transition-transform duration-200 relative">

      <button onclick="event.stopPropagation(); toggleWishlist(${product.id}, this)"
        class="absolute top-3 right-3 w-7 h-7 flex items-center justify-center
               rounded-full bg-white shadow-sm text-sm z-10">
        <span class="${inWishlist ? "text-red-500" : "text-gray-400"}">${inWishlist ? "♥" : "♡"}</span>
      </button>

      <div class="h-[100px] flex items-center justify-center">
        <img src="${product.image}?w=300&auto=format"
          class="h-full w-full object-contain" alt="${product.title}">
      </div>

      <div class="mt-3 px-1">
        <h3 class="font-semibold text-xs text-gray-900 line-clamp-1">${product.title}</h3>
        <p class="text-sm font-bold text-gray-900 mt-1">$ ${product.price.toFixed(2)}</p>
      </div>

    </div>
  `;
  }).join("");
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
  span.textContent = wishlist.includes(id) ? "♥" : "♡";
  span.className   = wishlist.includes(id) ? "text-red-500" : "text-gray-400";
}

loadProducts();
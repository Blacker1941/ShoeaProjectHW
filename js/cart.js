
    /* ─── Products from db.json ─── */
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
      const listEl   = document.getElementById("cartList");
      const emptyEl  = document.getElementById("emptyState");
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
        const color     = item.color || "Black";
        const size      = item.size  || 42;
        const lineTotal = p.price * item.qty;
        total += lineTotal;
        const colorHex  = COLORS[color] || "#9ca3af";

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
      const p    = products.find(p => p.id === item.id);
      const color = item.color || "Black";
      const size  = item.size  || 42;

      document.getElementById("modalImg").src         = p.image + "?w=200&auto=format";
      document.getElementById("modalImg").alt         = p.title;
      document.getElementById("modalTitle").textContent  = p.title;
      document.getElementById("modalColorDot").style.backgroundColor = COLORS[color] || "#9ca3af";
      document.getElementById("modalColorName").textContent = color;
      document.getElementById("modalSize").textContent   = `Size × ${size}`;
      document.getElementById("modalPrice").textContent  = `$${p.price.toFixed(2)}`;
      document.getElementById("modalQty").textContent    = item.qty;

      const overlay = document.getElementById("modalOverlay");
      const sheet   = document.getElementById("modalSheet");
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
    seedDemoCart();
    render();
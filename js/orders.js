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

    /* ─── Products from db.json (embedded) ─── */
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
          // Alternate between Leave Review and Buy Again
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
                alt="${product.title}"
                onerror="this.src='https://via.placeholder.com/200?text=Shoe'">
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-sm text-gray-900 leading-tight line-clamp-1">${product.title}</h3>

              <!-- Color + Size + Qty -->
              <div class="flex items-center gap-1 mt-1 flex-wrap">
                <span class="w-3 h-3 rounded-full flex-shrink-0 border border-gray-200"
                  style="background-color:${colorDot}"></span>
                <span class="text-[11px] text-gray-400">${order.color}</span>
                <span class="text-gray-300 text-[11px]">|</span>
                <span class="text-[11px] text-gray-400">Size × ${order.size}</span>
                <span class="text-gray-300 text-[11px]">|</span>
                <span class="text-[11px] text-gray-400">Qty × ${order.qty}</span>
              </div>

              <!-- Status badge -->
              <div class="mt-1.5">
                <span class="text-[10px] px-2 py-0.5 rounded-full font-medium
                  ${type === 'active'
                    ? 'bg-blue-50 text-blue-500'
                    : 'bg-green-50 text-green-600'}">
                  ${order.status}
                </span>
              </div>

              <!-- Price + Action -->
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
    switchTab("active");
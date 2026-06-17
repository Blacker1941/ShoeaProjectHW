const API = "http://localhost:3000/products";

async function loadWishlist() {
  const res = await fetch(API);
  const products = await res.json();

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const filtered = products.filter(p => wishlist.includes(p.id));

  document.getElementById("wishlist").innerHTML = filtered.map(p => `
    <div class="bg-white p-3 rounded-xl shadow">
      <img src="${p.image}" />
      <h2>${p.name}</h2>
      <p>$${p.price}</p>
    </div>
  `).join("");
}

loadWishlist();
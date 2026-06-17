const API = "http://localhost:3000/products";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadProduct() {
  const res = await fetch(`${API}/${id}`);
  const p = await res.json();

  document.getElementById("product").innerHTML = `
    <img src="${p.image}" class="rounded-xl mb-4"/>
    <h1 class="text-2xl font-bold">${p.name}</h1>
    <p class="text-gray-500">${p.desc}</p>
    <p class="text-xl mt-2">$${p.price}</p>

    <button class="bg-black text-white px-4 py-2 mt-4 rounded-xl">
      Add to Cart
    </button>
  `;
}

loadProduct();
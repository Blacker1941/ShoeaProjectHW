const productsContainer =
document.querySelector("#products");

async function loadProducts() {

    const res =
    await fetch(
        "http://localhost:3000/products"
    );

    const products =
    await res.json();

    productsContainer.innerHTML =
    products.map(product => `

        <div
            onclick="goProduct(${product.id})"
            class="bg-white rounded-2xl p-3">

            <img
                src="${product.image}"
                class="h-24 w-full object-contain">

            <h3
                class="font-semibold text-sm mt-3">

                ${product.title}

            </h3>

            <p
                class="font-bold mt-2">

                $${product.price}

            </p>

        </div>

    `).join("");

}

loadProducts();

function goProduct(id){

    window.location.href =
    `product.html?id=${id}`;

}
const loading = document.querySelector("#loading");
const onboarding = document.querySelector("#onboarding");

const imageContainer =
    document.querySelector("#image-container");

const image =
    document.querySelector("#slide-image");

const subtitle =
    document.querySelector("#slide-subtitle");

const title =
    document.querySelector("#slide-title");

const description =
    document.querySelector("#slide-description");

const welcomeOverlay =
    document.querySelector("#welcome-overlay");

const contentCard =
    document.querySelector("#content-card");

const normalTitle =
    document.querySelector("#normal-title");

const normalDescription =
    document.querySelector("#normal-description");

const dots =
    document.querySelector("#dots");

const nextBtn =
    document.querySelector("#next-btn");

let currentSlide = 0;

const slides = [

    {
        type: "welcome",
        image: "https://dkstatics-public.digikala.com/digikala-products/45ce18ac54d6fc4c3aee7d978e0c41835fa28245_1763364242.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        subtitle: "Welcome to 👋",
        title: "Shoea",
        description:
            "The best sneakers & shoes e-commerce app of the century for your fashion needs!"
    },

    {
        type: "normal",
        image: "https://dkstatics-public.digikala.com/digikala-products/a41395c56d41728d7eaf6e018982febfc3b67710_1781009562.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title:
            "We provide high quality products just for you",
        description: ""
    },

    {
        type: "normal",
        image: "https://dkstatics-public.digikala.com/digikala-products/b2d909b1a08911d89ebac273ae5eafe13aa92d5c_1776087191.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title:
            "Your satisfaction is our number one priority",
        description: ""
    },

    {
        type: "normal",
        image: "https://dkstatics-public.digikala.com/digikala-products/7521076e7e24e3ba69801c8831d61cd28ea95aca_1759516148.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        title:
            "Let's fulfill your fashion needs with shoea right now!",
        description: ""
    }

];

function renderDots() {

    dots.innerHTML = "";

    slides.slice(1).forEach((_, index) => {

        const dot =
            document.createElement("span");

        dot.className =
            (index + 1 === currentSlide)
                ?
                "w-8 h-1 bg-black rounded-full"
                :
                "w-8 h-1 bg-gray-300 rounded-full";

        dots.appendChild(dot);

    });

}

function renderSlide() {

    const slide =
        slides[currentSlide];

    image.classList.add(
        "opacity-0",
        "scale-105"
    );

    setTimeout(() => {

        image.src =
            slide.image;

        image.classList.remove(
            "opacity-0",
            "scale-105"
        );

    }, 150);

    if (slide.type === "welcome") {

        imageContainer.className =
            "relative h-screen transition-all duration-500";

        welcomeOverlay.classList.remove(
            "hidden"
        );

        contentCard.classList.add(
            "hidden"
        );

        subtitle.textContent =
            slide.subtitle;

        title.textContent =
            slide.title;

        description.textContent =
            slide.description;

    }
    else {

        imageContainer.className =
            "relative h-[65vh] transition-all duration-500";

        welcomeOverlay.classList.add(
            "hidden"
        );

        contentCard.classList.remove(
            "hidden"
        );

        normalTitle.textContent =
            slide.title;

        normalDescription.textContent =
            slide.description;

        renderDots();

        nextBtn.textContent =
            currentSlide === slides.length - 1
                ?
                "Get Started"
                :
                "Next";

    }

}

setTimeout(() => {

    loading.classList.add("hidden");

    onboarding.classList.remove("hidden");

    renderSlide();

}, 2000);

nextBtn.addEventListener(
    "click",
    () => {

        if (
            currentSlide <
            slides.length - 1
        ) {

            currentSlide++;

            renderSlide();

        }
        else {

            window.location.href =
                "login.html";

        }

    }
);

onboarding.addEventListener(
    "click",
    () => {

        if (
            slides[currentSlide].type ===
            "welcome"
        ) {

            currentSlide++;

            renderSlide();

        }

    }
);

let startX = 0;

onboarding.addEventListener(
    "touchstart",
    e => {

        startX =
            e.touches[0].clientX;

    }
);

onboarding.addEventListener(
    "touchend",
    e => {

        const endX =
            e.changedTouches[0].clientX;

        if (
            startX - endX > 50 &&
            currentSlide < slides.length - 1
        ) {

            currentSlide++;

            renderSlide();

        }

    }
);

const API = "http://localhost:3000/products";

async function loadProducts() {
  const res = await fetch(API);
  const data = await res.json();

  const container = document.getElementById("products");

  container.innerHTML = data.map(p => `
    <div class="bg-white rounded-xl p-3 shadow">
      <img src="${p.image}" class="rounded-xl mb-2"/>
      <h2 class="font-bold">${p.name}</h2>
      <p class="text-sm text-gray-500">${p.category}</p>
      <div class="flex justify-between mt-2">
        <span>$${p.price}</span>
        <button onclick="addWishlist(${p.id})">❤️</button>
      </div>
      <a href="product.html?id=${p.id}" class="text-blue-500 text-sm">View</a>
    </div>
  `).join("");
}

function addWishlist(id) {
  let list = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (!list.includes(id)) list.push(id);
  localStorage.setItem("wishlist", JSON.stringify(list));
  alert("Added!");
}

loadProducts();
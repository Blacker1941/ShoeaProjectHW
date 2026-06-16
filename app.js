const loading = document.querySelector("#loading");
const onboarding = document.querySelector("#onboarding");

const image = document.querySelector("#slide-image");
const subtitle = document.querySelector("#slide-subtitle");
const title = document.querySelector("#slide-title");
const description = document.querySelector("#slide-description");

const dots = document.querySelector("#dots");
const nextBtn = document.querySelector("#next-btn");

let slides = [];
let currentSlide = 0;

async function getData() {
    try {
        const response = await fetch(
            "http://localhost:3000/onboarding"
        );

        slides = await response.json();

        setTimeout(() => {
            loading.classList.add("hidden");
            onboarding.classList.remove("hidden");

            renderSlide();
        }, 2000);

    } catch (error) {
        console.error("Error:", error);
    }
}

function renderDots() {
    dots.innerHTML = "";

    slides.forEach((_, index) => {

        const dot = document.createElement("span");

        dot.className =
            index === currentSlide
                ? "w-8 h-1 bg-black rounded"
                : "w-8 h-1 bg-gray-300 rounded";

        dots.appendChild(dot);
    });
}

function renderSlide() {
    const slide = slides[currentSlide];

    image.src = slide.image;

    subtitle.textContent =
        slide.subtitle || "";

    title.textContent =
        slide.title || "";

    description.textContent =
        slide.description || "";

    renderDots();

    nextBtn.textContent =
        currentSlide === slides.length - 1
            ? "Get Started"
            : "Next";
}

nextBtn.addEventListener("click", () => {

    if (currentSlide < slides.length - 1) {

        currentSlide++;

        renderSlide();

    } else {

        window.location.href = "login.html";

    }

});

getData();
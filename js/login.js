const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("remember");
const signinBtn = document.getElementById("signin-btn");
const togglePassword = document.getElementById("toggle-password");
const eyeIcon = document.getElementById("eye-icon");

// اگه قبلاً Remember زده بود، مستقیم بره داخل
const saved = JSON.parse(localStorage.getItem("rememberedUser"));
if (saved?.email) {
    window.location.href = "home.html";
}

// فعال/غیرفعال کردن دکمه Sign In
function checkInputs() {
    signinBtn.disabled =
        !emailInput.value || !passwordInput.value;
    signinBtn.className = signinBtn.disabled
        ? "mt-auto mb-8 h-12 rounded-full bg-gray-400 text-white transition"
        : "mt-auto mb-8 h-12 rounded-full bg-black text-white transition";
}

emailInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

// نمایش/مخفی کردن پسورد
togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    eyeIcon.className = isPassword
        ? "fa-solid fa-eye-slash"
        : "fa-solid fa-eye";
});

// Sign In
signinBtn.addEventListener("click", () => {
    if (rememberCheckbox.checked) {
        localStorage.setItem("rememberedUser", JSON.stringify({
            email: emailInput.value
        }));
    } else {
        localStorage.removeItem("rememberedUser");
    }
    window.location.href = "index.html";
});

// دکمه Back
document.getElementById("back-btn").addEventListener("click", () => {
    history.back();
});
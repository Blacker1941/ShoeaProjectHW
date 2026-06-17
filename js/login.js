const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const rememberMe = document.querySelector("#remember");

const signInBtn = document.querySelector("#signin-btn");

const togglePassword =
    document.querySelector("#toggle-password");

const eyeIcon =
    document.querySelector("#eye-icon");

const backBtn =
    document.querySelector("#back-btn");


// برگشت

backBtn.addEventListener("click", () => {

    window.history.back();

});


// نمایش و مخفی کردن پسورد

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    } else {

        passwordInput.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");

    }

});


// فعال شدن دکمه

function checkInputs() {

    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value.trim();

    if (email && password) {

        signInBtn.disabled = false;

        signInBtn.classList.remove(
            "bg-gray-400"
        );

        signInBtn.classList.add(
            "bg-[#1d232d]"
        );

    } else {

        signInBtn.disabled = true;

        signInBtn.classList.remove(
            "bg-[#1d232d]"
        );

        signInBtn.classList.add(
            "bg-gray-400"
        );

    }

}

emailInput.addEventListener(
    "input",
    checkInputs
);

passwordInput.addEventListener(
    "input",
    checkInputs
);


// بارگذاری اطلاعات ذخیره شده

window.addEventListener("load", () => {

    const savedEmail =
        localStorage.getItem("email");

    const savedRemember =
        localStorage.getItem("remember");

    if (savedEmail) {

        emailInput.value = savedEmail;

    }

    if (savedRemember === "true") {

        rememberMe.checked = true;

    }

    checkInputs();

});


// ورود

signInBtn.addEventListener("click", () => {

    const email =
        emailInput.value.trim();

    if (rememberMe.checked) {

        localStorage.setItem(
            "email",
            email
        );

        localStorage.setItem(
            "remember",
            "true"
        );

    } else {

        localStorage.removeItem(
            "email"
        );

        localStorage.removeItem(
            "remember"
        );

    }

    alert("Login Success");

    // انتقال به صفحه اصلی

     window.location.href = "home.html";

});
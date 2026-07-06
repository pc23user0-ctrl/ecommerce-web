/*=====================================
    ShopEase E-Commerce JavaScript
======================================*/

// ===============================
// Current Year
// ===============================

const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ===============================
// Product Search
// ===============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            let title = card.querySelector(".card-title").innerText.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ===============================
// Quantity Buttons
// ===============================

document.querySelectorAll(".increase").forEach(button => {

    button.addEventListener("click", () => {

        const input = button.previousElementSibling;

        input.value = parseInt(input.value) + 1;

    });

});

document.querySelectorAll(".decrease").forEach(button => {

    button.addEventListener("click", () => {

        const input = button.nextElementSibling;

        if (parseInt(input.value) > 1) {

            input.value = parseInt(input.value) - 1;

        }

    });

});

// ===============================
// Newsletter Form
// ===============================

const newsletter = document.getElementById("newsletterForm");

if (newsletter) {

    newsletter.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you for subscribing!");

        newsletter.reset();

    });

}

// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Message sent successfully!");

        contactForm.reset();

    });

}

// ===============================
// Login Form
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Login Successful!");

    });

}

// ===============================
// Register Form
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const password = document.getElementById("password");
        const confirm = document.getElementById("confirmPassword");

        if (password.value !== confirm.value) {

            alert("Passwords do not match!");

            return;

        }

        alert("Registration Successful!");

        registerForm.reset();

    });

}

// ===============================
// Add To Cart Button
// ===============================

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        alert("Product added to cart!");

    });

});

// ===============================
// Buy Now Button
// ===============================

document.querySelectorAll(".buy-now").forEach(button => {

    button.addEventListener("click", () => {

        window.location.href = "checkout.html";

    });

});

// ===============================
// Loading Animation
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});

// ===============================
// Dark Mode Toggle
// ===============================

const darkToggle = document.getElementById("darkMode");

if (darkToggle) {

    darkToggle.addEventListener("click", () => {

        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");

    });

}

// ===============================
// Product Image Gallery
// ===============================

const mainImage = document.getElementById("mainImage");

const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(img => {

    img.addEventListener("click", () => {

        if (mainImage) {

            mainImage.src = img.src;

        }

    });

});

// ===============================
// Toast Notification
// ===============================

function showToast(message) {

    alert(message);

}

console.log("ShopEase Loaded Successfully!");
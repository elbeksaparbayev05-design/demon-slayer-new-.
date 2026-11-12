// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav-menu");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            const isOpen = nav.classList.contains("open");
            nav.classList.toggle("open");
            hamburger.setAttribute("aria-expanded", !isOpen);
        });
    }
});

// Original index page logic
let index = document.getElementById("index");
if (index) {
    index.addEventListener("click", (e) => {
        e.preventDefault();
        setTimeout(() => {
            index.className = "content";
            console.log("salom !?");
            window.location.href = index.href;
        }, 200);
    });
}


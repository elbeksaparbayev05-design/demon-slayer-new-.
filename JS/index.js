// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navPanel = document.getElementById("nav-panel");
    const nav = document.getElementById("nav-menu");
    const closeButton = document.getElementById("nav-close");

    if (hamburger && navPanel && nav) {
        const closeMenu = () => {
            navPanel.classList.remove("open");
            document.body.classList.remove("nav-open");
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Navigatsiyani ochish");
        };

        hamburger.addEventListener("click", () => {
            const isOpen = navPanel.classList.toggle("open");
            document.body.classList.toggle("nav-open", isOpen);
            hamburger.setAttribute("aria-expanded", String(isOpen));
            hamburger.setAttribute("aria-label", isOpen ? "Navigatsiyani yopish" : "Navigatsiyani ochish");
            if (isOpen && closeButton) closeButton.focus();
        });

        if (closeButton) {
            closeButton.addEventListener("click", () => {
                closeMenu();
                hamburger.focus();
            });
        }

        nav.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                closeMenu();
            }
        });

        document.addEventListener("click", (event) => {
            if (
                navPanel.classList.contains("open") &&
                !navPanel.contains(event.target) &&
                !hamburger.contains(event.target)
            ) {
                closeMenu();
                hamburger.focus();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && navPanel.classList.contains("open")) {
                closeMenu();
                hamburger.focus();
            }
        });
    }

    document.querySelectorAll(".read-more-btn").forEach((button) => {
        const description = button.parentElement.querySelector(".hero-desc");
        if (!description) return;

        button.addEventListener("click", () => {
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!isExpanded));
            description.classList.toggle("expanded", !isExpanded);
            button.textContent = isExpanded ? "Batafsil" : "Yopish";
        });
    });
});


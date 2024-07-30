function initializeScrollAndNav() {
    const header = document.getElementById("main-header");
    if (!header) {
        console.error("Header not found");
        return;
    }

    // Function to handle smooth scrolling
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: "smooth"
            });

            // Close the mobile menu if it is open
            const mobileMenu = document.getElementById("mobile-menu");
            if (mobileMenu.style.display === "block") {
                mobileMenu.style.display = "none";
            }
        } else {
            console.error("Target section not found for link:", targetId);
        }
    }

    const navLinks = document.querySelectorAll(".header-nav ul li a, .header-contact-btn, .mobile-menu ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    // Function to handle scroll effect on header
    function handleScroll() {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);

    // Add toggle functionality for the mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.addEventListener("click", function() {
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    });

    // Initial scroll state check
    handleScroll();
}

// Ensure the scroll and navigation functionalities are initialized after DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeScrollAndNav);

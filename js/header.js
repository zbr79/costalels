document.addEventListener("DOMContentLoaded", initializeScrollAndNav);

function initializeScrollAndNav() {
    const header = document.getElementById("main-header");
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!header) {
        console.error("Header not found");
        return;
    }

    if (!menuToggle) {
        console.error("Menu toggle button not found");
        return;
    }

    if (!mobileMenu) {
        console.error("Mobile menu not found");
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
            if (mobileMenu.style.display === "block") {
                mobileMenu.style.display = "none";
                menuToggle.innerHTML = "&#9776;"; // Change back to hamburger icon
                menuToggle.classList.remove("open"); // Remove the open class
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
    menuToggle.addEventListener("click", function() {
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
            menuToggle.innerHTML = "&#9776;"; // Change back to hamburger icon
            menuToggle.classList.remove("open"); // Remove the open class
        } else {
            mobileMenu.style.display = "block";
            menuToggle.innerHTML = "&times;"; // Change to "X" icon
            menuToggle.classList.add("open"); // Add the open class
        }
    });

    // Initial scroll state check
    handleScroll();
}

function initializeScrollAndNav() {
    const navLinks = document.querySelectorAll("nav ul li a, .contact-btn");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector("header").offsetHeight,
                behavior: "smooth"
            });
        });
    });

    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// Ensure the scroll and navigation functionalities are initialized after DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeScrollAndNav);

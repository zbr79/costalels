document.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.addEventListener("DOMContentLoaded", function() {
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
});
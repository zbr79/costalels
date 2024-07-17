document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML file into a placeholder
    function loadHTML(file, placeholder) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(placeholder).innerHTML = data;
                // Re-initialize scroll and navigation functionality after loading new HTML content
                if (file === 'header.html') {
                    initializeScrollAndNav();
                }
            })
            .catch(error => console.log('Error loading HTML file:', error));
    }

    loadHTML('header.html', 'header-placeholder');
    loadHTML('hero.html', 'hero-placeholder');
    loadHTML('about.html', 'about-placeholder');
    loadHTML('services.html', 'services-placeholder');
    loadHTML('global.html', 'global-placeholder');
    loadHTML('solutions.html', 'solutions-placeholder');
    loadHTML('statistics.html', 'statistics-placeholder');
    loadHTML('news.html', 'news-placeholder');
    loadHTML('testimonials.html', 'testimonials-placeholder');
    loadHTML('contact.html', 'contact-placeholder');
    loadHTML('footer.html', 'footer-placeholder');
});

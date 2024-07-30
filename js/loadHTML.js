document.addEventListener("DOMContentLoaded", function() {
    function loadHTML(file, elementId, callback) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                const element = document.getElementById(elementId);
                element.insertAdjacentHTML('beforeend', data);
                if (callback) callback();
            })
            .catch(error => console.log('Error loading HTML file:', error));
    }

    loadHTML('header.html', 'main-header', initializeScrollAndNav);
    loadHTML('hero.html', 'main-content');
    loadHTML('about.html', 'main-content');
    loadHTML('services.html', 'main-content');
    loadHTML('global.html', 'main-content');
    loadHTML('solutions.html', 'main-content');
    loadHTML('statistics.html', 'main-content');
    loadHTML('news.html', 'main-content');
    loadHTML('testimonials.html', 'main-content');
    loadHTML('contact.html', 'main-content');
    loadHTML('footer.html', 'main-footer');
});

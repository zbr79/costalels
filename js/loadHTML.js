document.addEventListener("DOMContentLoaded", function() {
    function loadHTML(file, elementId, callback) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;  // Changed to innerHTML to replace content
                    if (callback) callback();
                } else {
                    console.error(`Element with ID '${elementId}' not found.`);
                }
            })
            .catch(error => console.log('Error loading HTML file:', error));
    }

    loadHTML('header.html', 'main-header', initializeScrollAndNav);
    loadHTML('hero.html', 'hero');
    loadHTML('about.html', 'about');
    loadHTML('services.html', 'services');
    loadHTML('global.html', 'global');
    loadHTML('solutions.html', 'solutions');
    loadHTML('contact.html', 'contact');
    loadHTML('footer.html', 'main-footer');
});

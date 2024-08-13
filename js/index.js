document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav ul li a');

    const loadContent = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => content.innerHTML = data)
            .catch(error => console.error('Error loading content:', error));
    };

    const selectContent = (event) => {
        event.preventDefault();
        const url = event.target.getAttribute('href').substring(1);
        loadContent(`./partials/${url}.html`);
    };

    links.forEach(link => link.addEventListener('click', selectContent));

    loadContent('./partials/home.html');
});

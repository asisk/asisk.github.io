document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    var closeButton = document.getElementById('close-button');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        closeButton.style.display = navLinks.classList.contains('show') ? 'block' : 'none';
    });

    var navLinksArray = Array.from(document.querySelectorAll('.nav-links a'));
    navLinksArray.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('show');
            closeButton.style.display = 'none';
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar') && !event.target.classList.contains('menu-toggle')) {
            navLinks.classList.remove('show');
            closeButton.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', function () {
        navLinks.classList.remove('show');
        closeButton.style.display = 'none';
    });

    // Add transitionend event listener to handle transition end
    // navLinks.addEventListener('transitionend', function () {
    //     if (!navLinks.classList.contains('show')) {
    //         // Remove inline styles when the menu is fully closed
    //         navLinks.style.width = '';
    //         navLinks.style.height = '';
    //     }
    // });
});

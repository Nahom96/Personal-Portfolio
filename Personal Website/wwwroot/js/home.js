window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) { // Add class when scrolled more than 50px
        nav.classList.add('scrolled');
    } else { // Remove class when at the top
        nav.classList.remove('scrolled');
    }
});

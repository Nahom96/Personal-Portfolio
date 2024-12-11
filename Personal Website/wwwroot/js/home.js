// Detect the scroll and change navbar style
window.onscroll = function () {
    const navbar = document.getElementById('mainNav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Detect screen resize to add/remove the navbar background and font color
window.addEventListener('resize', function () {
    const navbar = document.getElementById('mainNav');
    const width = window.innerWidth;

    if (width <= 576) { // When screen width is less than or equal to 576px
        navbar.classList.add('scrolled'); // Always show white background and black font
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.getElementById("getStartedBtn").addEventListener("click", function () {
    // Scroll to the about section
    document.getElementById("aboutSection").scrollIntoView({ behavior: "smooth" });
});

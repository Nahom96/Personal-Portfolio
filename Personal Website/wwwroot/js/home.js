window.onscroll = function () {
    const navbar = document.getElementById('mainNav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

window.addEventListener('resize', function () {
    const navbar = document.getElementById('mainNav');
    const width = window.innerWidth;

    if (width <= 576) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.getElementById("getStartedBtn").addEventListener("click", function () {
    document.getElementById("aboutSection").scrollIntoView({ behavior: "smooth" });
});

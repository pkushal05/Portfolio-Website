// Adding an underline animation on the current page

// Selecting current url path and all navigation links
const current = window.location.pathname;
const links = document.querySelectorAll(".nav-links");

links.forEach(link => {

    // If the link's href matches the current path, add the "active" class to it
    if (link.getAttribute("href") === current) {
        setTimeout(() => {
            link.classList.add("active"); // Adds active class after 200ms
        }, 200);
    };
});

// Initialize Typed.js animation for auto-typing text on the page
const typed = new Typed(".auto-type-function", {
    strings: ["Full Stack Developer", "Javascript Enthusiast", "Always learning"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    showCursor: false
})

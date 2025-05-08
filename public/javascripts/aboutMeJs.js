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
const typed = new Typed(".auto-type-text", {
    strings: ["Object Oriented Programming", "Systems Development", "Web Development", "Software Testing", "Software Development"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    showCursor: false,
    shuffle: true
});

// Initialize Typed.js animation for the "About me" text on the page
const typedOne = new Typed(".aboutme-text", {
    strings: ["About me"],
    typeSpeed: 70,
    loop: false,
    showCursor: false
})

// Initialize Typed.js animation for the "Education" text on the page
const typedTwo = new Typed(".education-text", {
    strings: ["Education"],
    typeSpeed: 70,
    loop: false,
    showCursor: false
})
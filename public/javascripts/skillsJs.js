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

// Initialize Typed.js animation for all the skills text on the page

const typedOne = new Typed(".web-development", {
    strings: ["Web Development"],
    typeSpeed: 60,
    showCursor: false
});

const typedTwo = new Typed(".programming-languages", {
    strings: ["Programming Languages"],
    typeSpeed: 60,
    showCursor: false
});

const typedThree = new Typed(".back-end", {
    strings: ["Back-End"],
    typeSpeed: 60,
    showCursor: false
});

const typedFour = new Typed(".tools-ides", {
    strings: ["Tools &amp; IDEs"],
    typeSpeed: 60,
    showCursor: false
});

const typedFive = new Typed(".software-development", {
    strings: ["Software Development"],
    typeSpeed: 60,
    showCursor: false
});

const typedSix = new Typed(".soft-skills", {
    strings: ["Soft Skills"],
    typeSpeed: 60,
    showCursor: false
});
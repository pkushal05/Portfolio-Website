
const typed = new Typed(".auto-type-text", {
    strings: ["Object Oriented Programming", "Systems Development", "Web Development", "Software Testing", "Software Development"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    showCursor: false,
    shuffle: true
});

const typedOne = new Typed(".aboutme-text", {
    strings: ["About me"],
    typeSpeed: 70,
    loop: false,
    showCursor: false
})

const typedTwo = new Typed(".education-text", {
    strings: ["Education"],
    typeSpeed: 70,
    loop: false,
    showCursor: false
})

const current = window.location.pathname;
const links = document.querySelectorAll(".nav-links");

links.forEach(link => {
    if (link.getAttribute("href") === current) {
        setTimeout(() => {
            link.classList.add("active");
        }, 200);
    }
})
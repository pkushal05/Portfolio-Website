const current = window.location.pathname;
const links = document.querySelectorAll(".nav-links");

links.forEach(link => {
    if (link.getAttribute("href") === current) {
        setTimeout(() => {
            link.classList.add("active");
        }, 200);
    }
})

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
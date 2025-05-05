const current = window.location.pathname;
const links = document.querySelectorAll(".nav-links");

links.forEach(link => {
    if (link.getAttribute("href") === current) {
        setTimeout(() => {
            link.classList.add("active");
        }, 200);
    }
})

const typed = new Typed("#project-2", {
    strings: ["Automated Website Testing"],
    typeSpeed: 60,
    loop: false,
    showCursor: false
})

const typedTwo = new Typed("#project-1", {
    strings: ["Portfolio Website"],
    typeSpeed: 60,
    loop: false,
    showCursor: false
})
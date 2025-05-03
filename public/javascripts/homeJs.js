

const typed = new Typed(".auto-type-function", {
    strings: ["Full Stack Developer", "Javascript Enthusiast", "Always learning"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
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
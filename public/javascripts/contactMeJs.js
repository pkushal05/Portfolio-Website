const current = window.location.pathname;
const links = document.querySelectorAll(".nav-links");

links.forEach(link => {
    if (link.getAttribute("href") === current) {
        setTimeout(() => {
            link.classList.add("active");
        }, 200);
    }
})

const form = document.getElementById("form");
const submitButton = document.getElementById("submit");

form.addEventListener("submit", async function (e) {
  e.preventDefault();


  try {
    submitButton.classList.add("disabled");

    const response = await fetch("/sendmail", {
      method: "POST",
      body: new FormData(form),
    });

    if (!response.ok) {
      throw new Error("Server responded with an error");
    }

    const data = await response.json(); 
    alert(data.message);
    window.location.reload();
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Something went wrong. Please try again later.");
  } finally {
    submitButton.classList.remove("disabled");
  }
});

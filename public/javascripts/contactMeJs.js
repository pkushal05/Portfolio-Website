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
  }
})

// Get references to the form and submit button elements
const form = document.getElementById("form");
const submitButton = document.getElementById("submit");

// Event listener for form submission
form.addEventListener("submit", async function (e) {
  e.preventDefault();  // Prevent the default form submission behavior

  try {
    // Disable the submit button while the request is being processed
    submitButton.classList.add("disabled");

    // Send the form data to the server using the POST method
    const response = await fetch("/sendmail", {
      method: "POST",
      body: new FormData(form),  // Send form data as FormData
    });

    // If the server response is not ok (status code not in 2xx range), throw an error
    if (!response.ok) {
      throw new Error("Server responded with an error");
    }

    // Parse the response as JSON
    const data = await response.json();

    // Show an alert with the success message from the server
    alert(data.message);

    // Reload the page after the form is successfully submitted
    window.location.reload();
  } catch (error) {
    // If there's an error, log it to the console and show an error message
    console.error("Error sending email:", error);
    alert("Something went wrong. Please try again later.");
  } finally {
    // Re-enable the submit button after the request is complete
    submitButton.classList.remove("disabled");
  }
});
// Renders the Projects page
const getProjectsPage = (req, res) => {
    res.render("projects");
};

// Export the controller function
module.exports = { getProjectsPage };
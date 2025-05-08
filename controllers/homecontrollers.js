// Renders the home page
const getHomepage = (req, res) => {
    res.render('home');
}

// Export the controller function
module.exports = { getHomepage };

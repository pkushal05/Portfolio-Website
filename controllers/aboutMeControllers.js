// Controller function to handle GET request for the "About Me" page
const getAboutMePage = (req, res) => {
    // Renders the 'aboutMe' EJS view when the route is accessed
    res.render('aboutMe');
};

// Export the controller function so it can be used in routes
module.exports = { getAboutMePage };

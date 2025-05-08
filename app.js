// Import necessary modules
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

// Import route modules
const homeroutes = require('./routes/homeroutes');
const aboutMeRoutes = require('./routes/aboutMeRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const contactMeRoutes = require('./routes/contactMeRoutes');

// Set EJS as the view engine for rendering dynamic HTML pages
app.set('view engine', 'ejs');

// Middleware to parse incoming JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route handling
app.use('/', homeroutes);                // Home page route
app.get('/aboutme', aboutMeRoutes);      // About Me page route
app.get('/skills', skillsRoutes);        // Skills page route
app.get('/projects', projectsRoutes);    // Projects page route
app.use('/', contactMeRoutes);          // Contact Me routes (GET and POST)

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running!");
});

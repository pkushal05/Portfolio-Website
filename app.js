const express = require('express');
const app = express();
const path = require('path');

const homeroutes = require('./routes/homeroutes');
const aboutMeRoutes = require('./routes/aboutMeRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const contactMeRoutes = require('./routes/contactMeRoutes');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeroutes);

app.get('/aboutme', aboutMeRoutes);

app.get('/skills', skillsRoutes);

app.get('/projects', projectsRoutes);

app.get('/contactme', contactMeRoutes);

app.listen(3000, () => {
    console.log("Server is running!");
});
//Dependencies
const express = require('express');
const path = require('path');
const routes = require('./controllers');

<<<<<<< Updated upstream
//
=======
//Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');

//import sequelize connection
>>>>>>> Stashed changes
const sequelize = require('./config/connection');

//Set up for express app
const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< Updated upstream
=======
//Set Handlebars.js as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up sessions (require express-session)
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

//middleware
>>>>>>> Stashed changes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up for the routes
app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`Sever listening on http://localhost:${PORT}`));
});
//Dependencies
const express = require('express');
const path = require('path');
const routes = require('./controllers');

//Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
//const session = require('express-session');

//import sequelize connection
const sequelize = require('./config/connection');

//Set up for express app
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up for the routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`Sever listening on http://localhost:${PORT}`));
});
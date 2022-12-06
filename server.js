//Dependencies
const express = require('express');
const path = require('path');
const routes = require('./controllers');

//
const sequelize = require('./config/connection');

//Set up for express app
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up for the routes
app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`Sever listening on http://localhost:${PORT}`));
});
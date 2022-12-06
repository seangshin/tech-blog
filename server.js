//Dependencies
const express = require('express');
const path = require('path');

//Set up for express app
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

// Set up for the routes
app.use(require('./controllers'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`Sever listening on http://localhost:${PORT}`);
});
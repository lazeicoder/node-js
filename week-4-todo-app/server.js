// 1. import the express library
const express = require('express');

// 2. Create the app
const app = express();

// 3. Create the route handlers
app.get('/', (req, res) => {
    res.status(200).send('Hello World, yoooooooooo')
})

// Create the port where the server will be loaded
app.listen(3000);
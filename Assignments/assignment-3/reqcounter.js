const express = require('express');
const app = express();

let requestCounter = 0;

app.use((req, res, next) => {
    requestCounter = requestCounter + 1;
    next();
});

app.get('/user', (req, res) => {
    res.status(200).json({
        name: "John"
    });
});

app.post('/user', (req, res) => {
    res.status(200).json({
        msg: "Dummy user created"
    });
});

app.get('/requestCount', (req, res) => {
    res.status(200).json({
        requestCounter
    });
});

// For local server
app.listen(3000);

module.exports = app;
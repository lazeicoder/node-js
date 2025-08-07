const express = require('express');
const app = express();

let requestCounter = 0;

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


module.exports = app;
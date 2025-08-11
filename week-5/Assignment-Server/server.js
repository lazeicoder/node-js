const express = require("express");
const app = express();

app.get('/multiply', (req, res) => {
    let { a, b } = req.query;
    a = parseInt(a);
    b = parseInt(b);

    res.json({
        multiply: a*b
    });
});

app.get('/add', (req, res) => {
    let { a, b } = req.query;
    a = parseInt(a);
    b = parseInt(b);

    res.json({
        add: a+b
    });
});

app.get('/divide', (req, res) => {
    let { a, b } = req.query;
    a = parseInt(a);
    b = parseInt(b);

    res.json({
        divide: a/b
    });
});

app.get('/subtract', (req, res) => {
    let { a, b } = req.query;
    a = parseInt(a);
    b = parseInt(b);

    res.json({
        subtract: a-b 
    });
});

app.listen(3000, () => {
    console.log(`The server is running on port : 3000`);
});
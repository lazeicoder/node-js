const express = require("express");
const app = express();

app.get('/multiply/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        multiply: a*b
    });
});

app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        add: a+b
    });
});

app.get('/divide/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        divide: a/b
    });
});

app.get('/subtract/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        subtract: a-b 
    });
});

app.listen(3000, () => {
    console.log(`The server is running on port : 3000`);
});
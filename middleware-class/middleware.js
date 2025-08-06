const express = require('express');
const app = express();

// a function that returns a boolean that returns that if the person is old enough to ride, where the age is taken as a query parameter.

const ageChecker = (ageIs) => {
    if(ageIs >= 14) {
        return true;
    } else {
        return false;
    }
}

// Adding a middleware function to our server

const isOldEnoughMiddleware = (req, res, next) => {
    if(ageIs >= 14) {
        next();
    }else {
        res.json({
            msg: "Sorry you're not of age yet!"
        });
    }
}

app.get('/ride1', (req, res) => {
    if(ageChecker(req.query.age) === true) {
        res.json({
            msg: "You've successfully riden the ride!!"
        });
    } else {
        res.status(403).json({
            msg: "Your access to ride has been denied"
        });
    }
});

app.get('/ride2', (req, res) => {
    if(ageChecker(req.query.age) === true) {
        res.json({
            msg: "You've successfully riden the second ride!!"
        });
    } else {
        res.status(403).json({
            msg: "Your access to ride has been denied"
        });
    }
});

app.listen(3000);
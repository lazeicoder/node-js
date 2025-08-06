const express = require('express');
const app = express();

const ageChecker = (ageIs) => {
    if(ageIs >= 14) {
        return true;
    } else {
        return false;
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

app.listen(3000);
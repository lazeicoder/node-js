const express = require('express');
const app = express();

// Adding a middleware function to our server

function isOldEnoughMiddleware(req, res, next) {
    const ageIs = parseInt(req.query.ageIs);

    if(ageIs >= 14) {
        next();
    }else {
        res.json({
            msg: "Sorry you're not of age yet!"
        });
    }
}

// This is used to globally define the use of the middleware function, instead of calling it individually for each middleware

app.get('/ride3', function (req, res) {
    res.json({
        msg: "You've successfully riden the third ride!!",
    });
});

// Either this, also the instance of this matters for the other functions, the methods above this instance won't be able to go through the middleware function
app.use(isOldEnoughMiddleware);

// Or individually calling it within the methods
// app.get('/ride1', isOldEnoughMiddleware, function (req, res){
//     res.json({
//         msg: "You've successfully riden the ride!!"
//     });
// });

app.get('/ride2', function (req, res){
    res.json({
        msg: "You've successfully riden the second ride!!"
    });
});

app.listen(3000);
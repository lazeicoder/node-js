const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        msg: "Request received"
    });
});

app.listen(3000, () => {
    console.log(`Server is live on Port 3000!`);
});
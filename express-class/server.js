const express = require('express');
const app = express();

const users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: true
            },
            {
                healthy: false
            }
        ]
    }
];

app.use(express.json()); 

app.get('/', function(req, res) {
    const userName = req.query.userName;
    let i = 0;
    for (; i < users.length; i++) {
        if(userName === users[i].name) break;
    }

    let numOfKidneys = users[i].kidneys.length;
    console.log(`Hello, ${userName} you have ${numOfKidneys} kidneys!! Thank You!!`);

    const healthyKidneys = users[i].kidneys.filter(kidney => kidney.healthy);
    console.log(`You have ${healthyKidneys.length} healthy kidneys!!`);

    const numOfHealthyKidneys = healthyKidneys.length;

    res.json({
        userName,
        numOfKidneys,
        numOfHealthyKidneys,
        healthyKidneys
    });
});

app.post('/add-kidney', function(req, res) {
    const userName = req.query.userName;
    const isHealthy = req.body.isHealthy;

    let i = 0;
    for(; i < users.length; i++) {
        if (users[i].name === userName) break;
    }

    if (i === users.length) {
        users.push({
            name: userName,
            kidneys: [
                {
                    healthy: isHealthy
                }
            ]
        });
    } else {
        users[i].kidneys.push({healthy: isHealthy});
    }

    res.json({
        msg: "Done"
    });
});

app.put('/replace-kidney', function(req, res) {
    const userName = req.query.userName;
    let budget = req.query.budget;

    let i = 0;
    for(; i < users.length; i++) {
        if(userName === users[i].name)break;
    }

    if (i === users.length) {
        res.json({
            msg: "User not Found!!"
        });
    }else {
        for (let j = 0; j < users[i].kidneys.length; j++) {
            if (users[i].kidneys[j].healthy === false) {
                users[i].kidneys[j].healthy = true;
                budget--;
            }

            if (budget === 0) break; 
        }

        res.json({
            msg: "Update completed!!"
        });
    }
});

app.delete('/remove-kidney', function(req, res) {
    const userName = req.query.userName;

    let i = 0;
    for(; i < users.length; i++) {
        if (userName === users[i].name) break;
    }

    if (i === users.length) {
        res.json({
            msg: "User not found!!"
        });
    }else {
        const newKidneys = users[i].kidneys.filter(kidney => (kidney.healthy == true));
        users[i].kidneys = newKidneys;

        res.json({
            msg: "Deletion Done!!"
        });
    }
});

app.listen(3000);
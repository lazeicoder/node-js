const fs = require('fs').promises;
const path = require('path');

// Creating directory / folder
try {
    fs.mkdir(path.join(__dirname, 'logs'));
} catch (error) {
    console.log(error);
}
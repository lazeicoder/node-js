const fs = require('fs');
const path = require('path');

// Also we simultaneously check the readFile function to see the synchronous nature of js.

fs.readFile(path.join(__dirname, 'files', 'a.txt'), 'utf-8', (err, data) => {
    if (err){
        throw err;
    }else {
        console.log(data);
    }
});

console.log('Reading file in progress!!');

// This block of code is for Writing a text file.

let message = 'Nice to meet you, keep learniing node js. Happy Coding!!';

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), message, (err) => {
    if (err) {
        throw err;
    }else {
        console.log('Writing process completed!!');
    }
});

// Next on we're going to append some new message to the existing file, by using the appendFile function.

fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), message, (err) => {
    if (err) {
        throw err;
    }else {
        console.log('New message has been appended to the existing file.')
    }
})
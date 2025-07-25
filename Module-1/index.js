const fs = require('fs');
const path = require('path');

// The 2 ways to read a file is : 
// 1. Using the toString method
// fs.readFile('./files/a.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }else {
//         console.log(data.toString());
//     }
// });

// console.log("Hello 1!!");

// 2. Using encoding that is utf-8
// fs.readFile('./files/a.txt', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }else {
//         console.log(data);
//     }
// });


// console.log("Hello 2!!");

// Now let's go on and throw an error code, Yayyyy!! Mentally illness Strikes harddd!!

// fs.readFile('./files/hello.txt', 'utf-8', (err, data) => {
//     if(err) {
//         throw err;
//     }else {
//         console.log(data);
//     }
// });

// Instead of hard coding the file path, we can also use the path module provided by node to get the path of the file in an efficient way!
fs.readFile(path.join(__dirname, 'files', 'a.txt'), 'utf-8', (err, data) => {
    if(err) {
        throw err;
    }else {
        console.log(data);
    }
})

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});
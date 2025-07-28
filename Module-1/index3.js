const fs = require('fs');
const path = require('path');

// This is the nested operation of writing, appending and renaming a file, but alas this is what we call callback hell => tooo bad for performance and efficiency!!! Blahhhh

let message = "Hello there me from india, trying to fuck up my own life learning CS!!!! Blahhhhhhhhhhhhh!!\n";

fs.writeFile(path.join(__dirname, 'files', 'newfile.txt'), message, (err) => {
    if (err) {
        throw err;
    }else {
        console.log("Writing file completed!!");
    }

    let lastestMsg = "Hello there, do you fucking remember mee!!!! Blahhhhhhhhhhh\n";

    fs.appendFile(path.join(__dirname, 'files', 'newfile.txt'), lastestMsg, (err) => {
        if (err) {
            throw err;
        }else {
            console.log("New message has been appended!!!!!");
        }

        fs.rename(path.join(__dirname, 'files', 'newfile.txt'), path.join(__dirname, 'files', 'newreply.txt'), (err) => {
            if (err) {
                throw err;
            }else {
                console.log("File has been renamed!!!!");
            }
        });
    });
});
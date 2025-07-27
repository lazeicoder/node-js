const fs = require('fs');
const {Command} = require('commander');

const program = new Command();

program 
    .name('word-counter')
    .description('CLI tool for counting the number of words in a text file.')
    .version('1.2.4');

program
    .command('count')
    .description('Counts the words of the text file.')
    .argument('<filename>', 'file to count the words in')
    .option('--cnt', 'return the number of words')
    .action((fileName) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                throw err;
            } else {
                const words = data.trim().match(/\b\w+\b/g);
                let noOfWords = words ? words.length : 0;
                console.log(noOfWords);
            }
        });
    });


program.parse();
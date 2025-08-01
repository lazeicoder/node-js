const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const timeDate = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${timeDate}\n${uuid()}\t${message}\n`;
    console.log(logItem);

    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLogs.txt'), logItem);
    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;
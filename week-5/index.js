// function greet() {
//     console.log(`Hello there!!`);
// }

// const newInterval = setInterval(() => {
//     greet();
// }, 1000);

// setTimeout(() => {
//     clearInterval(newInterval);
// }, 10000);

let timer = 0;
const pizzaMaker = () => {
    if(timer === 0) {
        console.log(`Pizza making in progress!!`);
    }else if (timer === 30) {
        console.log(`Grab a drink, your pizza is being servedd!!`);
    }
}

const progress = setInterval(() => {
    pizzaMaker();
    timer++;
    if(timer === 29) {
        console.log(`Pizza is ready bitchh!!`);
    } else if (timer === 31) {
        clearInterval(progress);
    }
}, 1000);
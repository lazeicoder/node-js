// practising callbacks

// Example-1
// console.log(`Fetching data.....`);

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log(`Data fetched from server!!`);
//         callback();
//     }, 3000);
// }

// fetchData(() => {
//     console.log(`Processing fetched data....`);
// });

// console.log(`Prepare other tasks while we fetch data!!`);

// Example-2

// const greetPerson = (nameIs) => {
//     console.log(`Hello there, ${nameIs}`);
// }

// const greetName = (greetCallback) => {
//     const nameIs = `Sursadhu`;
//     console.log(`Calling name : ${nameIs}`);
//     greetCallback(nameIs);
// }

// greetName(greetPerson);

// Asynchronous callbacks

const greetUser = (userName) => {
    console.log(`Welcome back user : ${userName}`);
}

setTimeout(greetUser, 3000, 'Vamesh');
console.log(`First print into the console!`);
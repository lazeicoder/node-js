This is a readme file for just the Asynchronous JS concepts I have been going through.

Follow along the lecture : https://www.youtube.com/watch?v=exBgWAIeIeg&t=576s

- Firstly `setTimeout()` is a functionality that is provided by the browser and is used in js scripts. It executes a particular block of code once after a specified time has elapsed.
```
setTimeout(callback, delay, param1, param2, ...)
```

- Secondly, `setInterval()` is also like `setTimeout()` and is provided by the browser. It executes a particular block of code again and again after a specific interval.
```
setInterval(callback, interval, param1, param2, ...)
```

- `callback` is, in easy terms, a function that is passed as an argument to another function and the function that accepts a function or returns a function is known as `higher order function`.

```
const greetPerson = (nameIs) => {
    console.log(`Hello there, ${nameIs}`);
}

const greetName = (greetCallback) => {
    const nameIs = `Sursadhu`;
    console.log(`Calling name : ${nameIs}`);
    greetCallback(nameIs);
}

greetName(greetPerson);
```
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
From the above code example we can say that 
`greetName()` function is an `higher order function` and `greetPerson()` function is the `callback function`. 

- A callback can be divided as `Synchronous` and `Asynchronous` callbacks. 
    - In our previous example, we have looked into synchronous callback, as it is executed immediately.
    - In case of an `Asynchronous callback function`, the function is called `only after an asynchronous operation finishes` -> that means it runs in the future and not immediately.

```
    function onClickCallback() {
        document.getElementById("demo").innerHTML = `Hello There!! Happy coding!!!`;
    }  

    document.getElementById("btn").addEventListener("click", onClickCallback);
```

- A very good real world use case of the `Asynchronous Callback` is the `fs module` of node. A certain example is:

```
const fs = require("fs");

console.log("Reading file...");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

console.log("Doing other work while file is being read...");
```

- If we have multiple callback functions where each level depends on the result obtained from the previous level, the nesting becomes so deep that the code becomes difficult to read and maintain. This is called `callback hell` -> Can be solved by using `Promises` that was introduced in modern JS.
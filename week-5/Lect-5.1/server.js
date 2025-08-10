// Way 1: Simple fetch Data using js

// async function fetchPost() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const json = await res.json();
//     document.getElementById("posts").innerHTML = json.title;
// }

// fetchPost();

// Way 2: Fetch data using axios

async function getRecentPost() {
    console.log(`Before sending request!`);
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    document.getElementById("posts").innerHTML = response.data.title;
    console.log(response.data.title);
}

getRecentPost();
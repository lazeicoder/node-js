async function fetchPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await res.json();
    document.getElementById("posts").innerHTML = json.title;
}

fetchPost();
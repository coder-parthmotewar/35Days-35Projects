const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function getQuote() {
    quoteEl.innerText = "Loading...";
    authorEl.innerText = "";

    try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();

        quoteEl.innerText = `"${data.content}"`;
        authorEl.innerText = `— ${data.author}`;
    } catch (error) {
        quoteEl.innerText = "Failed to load quote 😢";
    }
}

let count = 0;

const countEl = document.getElementById("count");

function updateCount() {
    countEl.innerText = count;
}

function increase() {
    count++;
    updateCount();
}

function decrease() {
    count--;
    updateCount();
}

function reset() {
    count = 0;
    updateCount();
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task");

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button onclick="deleteTask(this)">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function toggleComplete(task) {
    task.parentElement.classList.toggle("completed");
}

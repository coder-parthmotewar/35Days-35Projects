const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");

let draggedTask = null;

tasks.forEach(task => {
  task.addEventListener("dragstart", () => {
    draggedTask = task;
    setTimeout(() => task.style.display = "none", 0);
  });

  task.addEventListener("dragend", () => {
    setTimeout(() => {
      draggedTask.style.display = "block";
      draggedTask = null;
    }, 0);
  });
});

columns.forEach(column => {
  column.addEventListener("dragover", e => {
    e.preventDefault();
    column.classList.add("drag-over");
  });

  column.addEventListener("dragleave", () => {
    column.classList.remove("drag-over");
  });

  column.addEventListener("drop", () => {
    column.appendChild(draggedTask);
    column.classList.remove("drag-over");
  });
});

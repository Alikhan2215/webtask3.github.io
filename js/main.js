document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText) {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
                <button class="complete">Complete</button>
            `;

      taskList.appendChild(taskItem);

      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("delete")) {
      target.parentElement.remove();
    }
    else if (target.classList.contains("complete")) {
      target.parentElement.classList.toggle("completed");
    }
  });
});

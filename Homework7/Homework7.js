const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("task-buttons");

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  buttonContainer.appendChild(completeButton);
  buttonContainer.appendChild(removeButton);
  li.appendChild(buttonContainer);

  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

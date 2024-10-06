// Get references to elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn");

// Add event listener for the form submission
todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const taskText = todoInput.value.trim(); // Get the value and remove whitespace

  // Ensure the input is not empty
  if (taskText !== "") {
    addTask(taskText);
    todoInput.value = ""; // Clear input field
  }
});

// Function to add a new task
function addTask(task) {
  const li = document.createElement("li");
  li.innerHTML = `${task} <button class="delete-btn">Remove</button>`;

  // Add task to the list
  todoList.appendChild(li);

  // Add event listener for removing the task
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  });
}

// Clear all tasks
clearBtn.addEventListener("click", function () {
  todoList.innerHTML = ""; // Clear all list items
});

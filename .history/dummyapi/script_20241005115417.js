// Get references to elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn");

let editMode = false; // To track whether we're editing
let currentTaskElement = null; // To store the task currently being edited

// Add event listener for the form submission
todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const taskText = todoInput.value.trim(); // Get the value and remove whitespace

  // Ensure the input is not empty
  if (taskText !== "") {
    if (editMode) {
      // If we are in edit mode, update the task
      updateTask(taskText);
    } else {
      // If not in edit mode, add a new task
      addTask(taskText);
    }
    todoInput.value = ""; // Clear input field
  }
});

// Function to add a new task
function addTask(task) {
  const li = document.createElement("li");
  li.innerHTML = `${task} <button class="delete-btn">Remove</button> <button class="edit-btn">Edit</button>`;

  // Add task to the list
  todoList.appendChild(li);

  // Add event listener for removing the task
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  });

  // Add event listener for editing the task
  li.querySelector(".edit-btn").addEventListener("click", function () {
    setTaskToEdit(li);
  });
}

// Function to set a task to edit mode
function setTaskToEdit(li) {
  editMode = true; // We're now in edit mode
  currentTaskElement = li; // Track the task being edited
  todoInput.value = li.firstChild.textContent.trim(); // Set the input value to the task text

  // Change the button text to indicate editing
  document.querySelector(".add-btn").textContent = "Update Task";
  document.querySelector(".add-btn").style.backgroundColor = "green";
}

// Function to update an existing task
function updateTask(newText) {
  if (currentTaskElement) {
    currentTaskElement.firstChild.textContent = newText; // Update the task text in the list
    resetEditMode(); // Reset the form to its original state
  }
}

// Function to reset from edit mode
function resetEditMode() {
  editMode = false;
  currentTaskElement = null;

  // Reset the form button text and color
  document.querySelector(".add-btn").textContent = "Add Task";
  document.querySelector(".add-btn").style.backgroundColor = "#007bff";
}

// Clear all tasks
clearBtn.addEventListener("click", function () {
  todoList.innerHTML = ""; // Clear all list items
});

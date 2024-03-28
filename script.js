// JavaScript code (script.js)

// Select the form and task list elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add an event listener to the form for form submission
taskForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the task name and description from the form inputs
    const taskNameInput = document.getElementById('task-name');
    const taskDescriptionInput = document.getElementById('task-description');
    const taskName = taskNameInput.value;
    const taskDescription = taskDescriptionInput.value;
    
    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Set the text content of the list item to display the task name and description
    listItem.textContent = `${taskName}: ${taskDescription}`;
    
    // Append the new list item to the task list
    taskList.appendChild(listItem);
    
    // Clear the input fields after adding the task
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
});

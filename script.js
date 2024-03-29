const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskStatusDropdown = document.getElementById('task-status');

// Function to remove a task item
function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

// Add an event listener to the form for form submission
taskForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the task name, description, and selected status from the form inputs
    const taskNameInput = document.getElementById('task-name');
    const taskDescriptionInput = document.getElementById('task-description');
    const taskName = taskNameInput.value;
    const taskDescription = taskDescriptionInput.value;
    const taskStatus = taskStatusDropdown.value; // Retrieve the selected status
    
    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Set the text content of the list item to display the task name, description, and status
    const taskStatusText = taskStatus === "" ? "" : `(${taskStatus})`; // Add status only if it's not empty
    listItem.textContent = `${taskName}: ${taskDescription} ${taskStatusText}`;
    
    // Create a remove button for the task item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        removeTask(removeButton);
    });

    // Create a space element
    const space = document.createTextNode(' ');
    
    // Append the remove button and space to the list item
    listItem.appendChild(space);
    listItem.appendChild(removeButton);
    
    // Append the new list item to the task list
    taskList.appendChild(listItem);
    
    // Clear the input fields after adding the task
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
});

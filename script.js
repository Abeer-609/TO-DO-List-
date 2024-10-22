// Add a task
function addTask() {
    const taskText = document.getElementById("new-task").value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("task-list");

    // Create new task item
    const li = document.createElement("li");

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    li.appendChild(taskSpan);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editTask(taskSpan);
    li.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteTask(li);
    li.appendChild(deleteBtn);

    // Append the task item to the list
    taskList.appendChild(li);

    // Clear the input field
    document.getElementById("new-task").value = "";
}

// Edit a task
function editTask(taskSpan) {
    const newTaskText = prompt("Edit the task:", taskSpan.innerText);
    if (newTaskText && newTaskText.trim() !== "") {
        taskSpan.innerText = newTaskText.trim();
    }
}

// Delete a task
function deleteTask(taskItem) {
    const taskList = document.getElementById("task-list");
    taskList.removeChild(taskItem);
}

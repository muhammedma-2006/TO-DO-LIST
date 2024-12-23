document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task");
    const todoList = document.getElementById("todo-list");

    // Function to add a task
    const addTask = () => {
        const taskText = inputField.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new task element
        const taskItem = document.createElement("li");
        taskItem.classList.add("todo-item");

        // Task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Complete button
        taskSpan.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#10060;";
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });

        // Append elements
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        todoList.appendChild(taskItem);

        // Clear the input field
        inputField.value = "";
    };

    // Add task button click event
    addTaskButton.addEventListener("click", addTask);

    // Add task on Enter key
    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});

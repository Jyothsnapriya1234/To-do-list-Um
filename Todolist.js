document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText}
                <button class="delete-button">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteButtons = document.getElementsByClassName("delete-button");

            for (let i = 0; i < deleteButtons.length; i++) {
                deleteButtons[i].addEventListener("click", function () {
                    taskList.removeChild(this.parentElement);
                });
            }
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});

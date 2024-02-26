let taskCount = 1;

alert(
    `Instructions:\n=>Type a Valid Task & click 'Add Task' too add the item.\n=> Single Click on the task to mark it done or vice-versa.\n=>Click On the Delete button to delte the task.`
);

let taskList = document.querySelector("#task-list");

document.querySelector("#add-btn").addEventListener("click", () => {
    if (document.querySelector("#input-task").value) {
        let newTask = {
            task: document.querySelector("#input-task").value,
            taskID: taskCount++,
        };

        let li = document.createElement("li");
        li.classList.add("task-item");
        li.classList.add(`item${newTask.taskCount}`);
        li.textContent = newTask.task;

        li.addEventListener("click", () => {
            if (!li.classList.contains("item-checked")) {
                li.classList.add("item-checked");
            } else {
                li.classList.remove("item-checked");
            }
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add(`item${newTask.taskCount}`);
        deleteBtn.innerHTML = `<i class="fa fa-trash-o"></i>`;

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        document.querySelector("#input-task").value = "";
    } else {
        alert("Task cannot be empty.");
    }
});

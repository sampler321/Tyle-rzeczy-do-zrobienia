const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = input.value;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = text;

    checkbox.addEventListener("change", function(){
        taskText.classList.toggle("completed", this.checked);
    })

    const taskLeftDiv = document.createElement("div");
    taskLeftDiv.className = "task-left";
    taskLeftDiv.appendChild(checkbox);
    taskLeftDiv.appendChild(taskText);

    const removeBtn = document.createElement("span");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "🗑️";
    removeBtn.role = "button";
    
    removeBtn.addEventListener("click", function(){
        li.remove(); // this deletes the entire li
        console.log("removed task:", text)
    })

    const li = document.createElement("li");
    li.appendChild(taskLeftDiv);
    li.appendChild(removeBtn);

    list.appendChild(li);
    input.value = "";

    console.log("Added task:", text);
});


document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const taskInput = document.getElementById("todo-input");
    const taskText = taskInput.value;

    if (taskText.trim()) {
        addTask(taskText);
    }

    
    taskInput.value = "";
});

function addTask(taskText) {
    const todoList = document.getElementById("todo-list");

   
    const li = document.createElement("li");
    li.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

   
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        todoList.removeChild(li);
    });

    
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    
    todoList.appendChild(li);
}
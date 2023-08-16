document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function() {
        const newTask = taskInput.value;
        if (newTask.trim() !== '') {
            addTask(newTask);
            taskInput.vale = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li); 
    }
})
  
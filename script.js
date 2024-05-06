document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('taskInput');
    var addTaskBtn = document.getElementById('addTaskBtn');
    var taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        var taskText = taskInput.value.trim();
        if (taskText !== '') {
            var li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });
});

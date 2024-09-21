document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskValue = taskInput.value.trim();
    const taskDateValue = taskDate.value;

    if (taskValue) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = `${taskValue} ${taskDateValue ? `(${new Date(taskDateValue).toLocaleString()})` : ''}`;
        
        li.appendChild(span);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            taskInput.value = taskValue;
            taskDate.value = taskDateValue;
            li.remove();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        
        taskInput.value = '';
        taskDate.value = '';
    }
}

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">✔</button>
        <button class="delete-btn">✖</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';

    // Complete task functionality
    listItem.querySelector('.complete-btn').addEventListener('click', function() {
        listItem.querySelector('span').classList.toggle('completed');
    });

    // Delete task functionality
    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
});
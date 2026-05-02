function addTask() {
    const input = document.getElementById('todoInput');
    const dateInput = document.getElementById('todoDate');
    const list = document.getElementById('todoList');

    if (input.value === '') return alert("Kuch toh likh bhai!");

    const li = document.createElement('li');
    li.innerHTML = `
        <div>
            <strong>${input.value}</strong> <br>
            <small>${dateInput.value ? dateInput.value.replace('T', ' ') : 'No date set'}</small>
        </div>
        <div>
            <button onclick="toggleComplete(this)">Done</button>
            <button class="delete-btn" onclick="deleteTask(this)">X</button>
        </div>
    `;
    
    list.appendChild(li);
    input.value = '';
    dateInput.value = '';
}

function toggleComplete(btn) {
    btn.parentElement.parentElement.classList.toggle('completed');
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Por favor, ingresa una tarea válida");
        return;
    }

    var taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;
    taskList.appendChild(taskItem);

    taskInput.value = "";
}
// Definir una función para crear un elemento de tarea
function createTaskElement(taskText) {
    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Agregar botón de completado
    var completeButton = document.createElement("button");
    completeButton.textContent = "Completar";
    completeButton.onclick = function () {
        toggleTaskComplete(taskItem);
    };
    taskItem.appendChild(completeButton);

    // Agregar botón de eliminar
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function () {
        deleteTask(taskItem);
    };
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Función para agregar una tarea
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Por favor, ingresa una tarea válida");
        return;
    }

    var taskItem = createTaskElement(taskInput.value);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

// Función para cambiar el estado de completado de una tarea
function toggleTaskComplete(taskItem) {
    taskItem.classList.toggle("completed");
}

// Función para eliminar una tarea
function deleteTask(taskItem) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskItem);
}
// ...

// Función para limpiar todas las tareas realizdas
function clearCompletedTasks() {
    var completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(function (task) {
        task.remove();
    });
}

// Función para marcar todas las tareas como realizadas
function markAllTasksCompleted() {
    var taskItems = document.querySelectorAll('#taskList li');
    taskItems.forEach(function (task) {
        task.classList.add('completed');
    });
}

// Función para desmarcar todas las tareas como realizadas
function markAllTasksIncomplete() {
    var taskItems = document.querySelectorAll('#taskList li');
    taskItems.forEach(function (task) {
        task.classList.remove('completed');
    });
}

// ...
// Mejora en la función addTask para manejar errores
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Por favor, ingresa una tarea válida");
        return;
    }

    var taskItem = createTaskElement(taskInput.value);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}
// Ejemplo de animación de entrada con GSAP
function animateTaskEntry(taskItem) {
    gsap.from(taskItem, { opacity: 0, y: -10, duration: 0.5, ease: "power3.out" });
}

// Llamar a la función en la creación de la tarea
var taskItem = createTaskElement(taskInput.value);
taskList.appendChild(taskItem);
animateTaskEntry(taskItem);



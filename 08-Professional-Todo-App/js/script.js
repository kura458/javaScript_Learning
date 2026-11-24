
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");

const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelFormBtn = document.getElementById("cancel-form-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");

const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const searchInput = document.getElementById("search-input");
const filterSelect = document.getElementById("filter-select");

const totalTasksDisplay = document.getElementById("total-tasks");
const completedTasksDisplay = document.getElementById("completed-tasks");
const remainingTasksDisplay = document.getElementById("remaining-tasks");
const emptyMessage = document.getElementById("empty-message");
const currentDateDisplay = document.getElementById("current-date");
const formHeading = document.getElementById("form-heading");

let taskData = [];

try {
  const savedData = JSON.parse(localStorage.getItem("data"));
  taskData = Array.isArray(savedData) ? savedData : [];
} catch {
  taskData = [];
}

let currentTask = {};

// Generate a safe ID for HTML elements.
const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
};

// Display today's date.
currentDateDisplay.textContent = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
}).format(new Date());

// Save tasks to local storage.
const saveTasks = () => {
  localStorage.setItem("data", JSON.stringify(taskData));
};

// Update task statistics.
const updateStatistics = () => {
  const completed = taskData.filter((task) => task.completed).length;
  const total = taskData.length;

  totalTasksDisplay.textContent = total;
  completedTasksDisplay.textContent = completed;
  remainingTasksDisplay.textContent = total - completed;
};

// Create a task element safely without inserting user input as HTML.
const createTaskElement = (task) => {
  const taskElement = document.createElement("article");
  taskElement.className = `task ${task.completed ? "completed" : ""}`;
  taskElement.id = task.id;

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";

  const title = document.createElement("p");
  title.className = "task-title";
  title.textContent = task.title;

  const description = document.createElement("p");
  description.className = "task-description";
  description.textContent = task.description || "No description provided.";

  const date = document.createElement("p");
  date.className = "task-date";
  date.textContent = task.date
    ? `Due: ${task.date}`
    : "No due date";

  taskInfo.append(title, description, date);

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.dataset.action = "complete";
  completeButton.textContent = task.completed ? "Undo" : "Complete";
  completeButton.setAttribute(
    "aria-label",
    task.completed ? "Mark task as active" : "Mark task as completed"
  );

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.dataset.action = "delete";
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";

  actions.append(completeButton, editButton, deleteButton);
  taskElement.append(taskInfo, actions);

  return taskElement;
};

// Display tasks according to the search and filter settings.
const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  const searchTerm = searchInput.value.trim().toLowerCase();
  const filterValue = filterSelect.value;

  const filteredTasks = taskData.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm) ||
      (task.description || "").toLowerCase().includes(searchTerm);

    const matchesFilter =
      filterValue === "all" ||
      (filterValue === "completed" && task.completed) ||
      (filterValue === "active" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  filteredTasks.forEach((task) => {
    tasksContainer.appendChild(createTaskElement(task));
  });

  emptyMessage.classList.toggle("hidden", filteredTasks.length > 0);

  if (taskData.length === 0) {
    emptyMessage.textContent = "No tasks yet. Add your first task to get started!";
  } else if (filteredTasks.length === 0) {
    emptyMessage.textContent = "No matching tasks found.";
  }

  updateStatistics();
};

// Open the task form.
const openTaskForm = () => {
  taskForm.classList.remove("hidden");
  titleInput.focus();
};

// Close and reset the task form.
const reset = () => {
  taskForm.reset();

  currentTask = {};

  addOrUpdateTaskBtn.textContent = "Add Task";
  formHeading.textContent = "Create a Task";

  taskForm.classList.add("hidden");
};

// Add or update a task.
const addOrUpdateTask = () => {
  const title = titleInput.value.trim();

  if (!title) {
    alert("Please provide a title.");
    titleInput.focus();
    return;
  }

  const taskObj = {
    id: currentTask.id || `${removeSpecialChars(title.toLowerCase().split(" ").join("-"))}-${Date.now()}`,
    title,
    date: dateInput.value,
    description: descriptionInput.value.trim(),
    completed: currentTask.completed || false
  };

  const dataArrIndex = taskData.findIndex(
    (item) => item.id === currentTask.id
  );

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  saveTasks();
  updateTaskContainer();
  reset();
};

// Edit an existing task.
const editTask = (taskId) => {
  const task = taskData.find((item) => item.id === taskId);

  if (!task) return;

  currentTask = task;

  titleInput.value = task.title;
  dateInput.value = task.date;
  descriptionInput.value = task.description;

  addOrUpdateTaskBtn.textContent = "Update Task";
  formHeading.textContent = "Edit Task";

  openTaskForm();
};

// Delete a task.
const deleteTask = (taskId) => {
  const confirmed = confirm("Are you sure you want to delete this task?");

  if (!confirmed) return;

  taskData = taskData.filter((task) => task.id !== taskId);

  saveTasks();
  updateTaskContainer();
};

// Mark a task as complete or active.
const toggleTaskComplete = (taskId) => {
  const task = taskData.find((item) => item.id === taskId);

  if (!task) return;

  task.completed = !task.completed;

  saveTasks();
  updateTaskContainer();
};

// Handle task button clicks using event delegation.
tasksContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");

  if (!button) return;

  const taskElement = button.closest(".task");

  if (!taskElement) return;

  const taskId = taskElement.id;
  const action = button.dataset.action;

  if (action === "edit") {
    editTask(taskId);
  } else if (action === "delete") {
    deleteTask(taskId);
  } else if (action === "complete") {
    toggleTaskComplete(taskId);
  }
});

// Open form button.
openTaskFormBtn.addEventListener("click", openTaskForm);

// Close form button.
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues =
    titleInput.value ||
    dateInput.value ||
    descriptionInput.value;

  const formInputValuesUpdated =
    titleInput.value !== (currentTask.title || "") ||
    dateInput.value !== (currentTask.date || "") ||
    descriptionInput.value !== (currentTask.description || "");

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

// Cancel form without saving.
cancelFormBtn.addEventListener("click", () => {
  reset();
});

// Cancel discard confirmation.
cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});

// Discard changes.
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

// Submit task form.
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addOrUpdateTask();
});

// Search tasks.
searchInput.addEventListener("input", updateTaskContainer);

// Filter tasks.
filterSelect.addEventListener("change", updateTaskContainer);

// Initial rendering.
updateTaskContainer();

let taskLibrary = [];

class Library {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  }

  static getTaskValues(taskName, taskDescription, dueDate) {
    const taskTitle = taskName.value;
    const taskDescriptionValue = taskDescription.value;
    const taskDate = dueDate.value;
    return new Library(taskTitle, taskDescriptionValue, taskDate);
  }

  static addTask(newTask,taskLibrary) {
    taskLibrary.push(newTask);
  }
}

function completeEventListener(taskLibrary,complete, displayTasks) {
  complete.addEventListener('click', () => {
    displayTasks.remove();
    const taskIndex = taskLibrary.findIndex((task) => task.title === displayTasks.querySelector('.taskDisplayTitle').textContent);
    if (taskIndex !== -1) {
      taskLibrary.splice(taskIndex, 1);
    }
    console.table(taskLibrary);
  });
}

function displayTasks(taskLibrary) {
  const displayTasksContainer = document.createElement('div');
  displayTasksContainer.classList.add('displayTaskContainer');
  taskLibrary.forEach((task) => {
    const displayTasks = document.createElement('div');
    displayTasks.classList.add('displayTasks');
    displayTasksContainer.appendChild(displayTasks);

    const firstRow = document.createElement('div');
    firstRow.classList.add('firstRow');

    const complete = document.createElement('button');
    complete.classList.add('complete');
    complete.textContent = 'o';

    completeEventListener(taskLibrary,complete, displayTasks);

    const taskDisplayTitle = document.createElement('div');
    taskDisplayTitle.classList.add('taskDisplayTitle');
    taskDisplayTitle.textContent = task.title;

    const taskDisplayDescription = document.createElement('div');
    taskDisplayDescription.classList.add('taskDisplayDescription');
    taskDisplayDescription.textContent = task.description;

    const taskDisplayDate = document.createElement('div');
    taskDisplayDate.classList.add('taskDisplayDate');
    taskDisplayDate.textContent = task.date;

    firstRow.appendChild(complete);
    firstRow.appendChild(taskDisplayTitle);

    displayTasks.appendChild(firstRow);
    displayTasks.appendChild(taskDisplayDescription);
    displayTasks.appendChild(taskDisplayDate);
  });
  return displayTasksContainer;
}

function displayTasksDueToday(taskLibrary){
  const displayTasksContainer = document.createElement('div');
  displayTasksContainer.classList.add('displayTaskContainer');
  const date = new Date();
  let currentDay= String(date.getDate()).padStart(2, '0');
  let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentYear}-${currentMonth}-${currentDay}`
  taskLibrary.forEach((task) => {
    if(task.date == currentDate){
        const displayTasks = document.createElement('div');
        displayTasks.classList.add('displayTasks');
        displayTasksContainer.appendChild(displayTasks);

        const firstRow = document.createElement('div');
        firstRow.classList.add('firstRow');

        const complete = document.createElement('button');
        complete.classList.add('complete');
        complete.textContent = 'o';

        completeEventListener(complete, displayTasks);

        const taskDisplayTitle = document.createElement('div');
        taskDisplayTitle.classList.add('taskDisplayTitle');
        taskDisplayTitle.textContent = task.title;

        const taskDisplayDescription = document.createElement('div');
        taskDisplayDescription.classList.add('taskDisplayDescription');
        taskDisplayDescription.textContent = task.description;

        const taskDisplayDate = document.createElement('div');
        taskDisplayDate.classList.add('taskDisplayDate');
        taskDisplayDate.textContent = task.date;

        firstRow.appendChild(complete);
        firstRow.appendChild(taskDisplayTitle);

        displayTasks.appendChild(firstRow);
        displayTasks.appendChild(taskDisplayDescription);
        displayTasks.appendChild(taskDisplayDate);
    }
  });
  return displayTasksContainer;
}



function displayTasksUpcoming(taskLibrary){
    const displayTasksContainer = document.createElement('div');
    displayTasksContainer.classList.add('displayTaskContainer');
    const date = new Date();
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    taskLibrary.forEach((task) => {
        console.log(task.date.substr(5,2))
        console.log(currentMonth)
      if(task.date.substr(5,2) == currentMonth){
          const displayTasks = document.createElement('div');
          displayTasks.classList.add('displayTasks');
          displayTasksContainer.appendChild(displayTasks);
  
          const firstRow = document.createElement('div');
          firstRow.classList.add('firstRow');
  
          const complete = document.createElement('button');
          complete.classList.add('complete');
          complete.textContent = 'o';
  
          completeEventListener(complete, displayTasks);
  
          const taskDisplayTitle = document.createElement('div');
          taskDisplayTitle.classList.add('taskDisplayTitle');
          taskDisplayTitle.textContent = task.title;
  
          const taskDisplayDescription = document.createElement('div');
          taskDisplayDescription.classList.add('taskDisplayDescription');
          taskDisplayDescription.textContent = task.description;
  
          const taskDisplayDate = document.createElement('div');
          taskDisplayDate.classList.add('taskDisplayDate');
          taskDisplayDate.textContent = task.date;
  
          firstRow.appendChild(complete);
          firstRow.appendChild(taskDisplayTitle);
  
          displayTasks.appendChild(firstRow);
          displayTasks.appendChild(taskDisplayDescription);
          displayTasks.appendChild(taskDisplayDate);
      }
    });
    return displayTasksContainer;
  }



function cancelEventListener(button, form) {
  button.addEventListener('click', () => {
    form.remove();
  });
}

function taskListener(taskLibrary,addTaskBox, lower) {
  addTaskBox.addEventListener('click', () => {
    const form = document.createElement('form');
    form.classList.add('form');

    const input = document.createElement('div');
    input.classList.add('input');
    form.appendChild(input);

    const submit = document.createElement('div');
    submit.classList.add('submit');
    form.appendChild(submit);

    const taskName = document.createElement('input');
    taskName.classList.add('taskName');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('name', 'taskName');
    taskName.setAttribute('placeholder', 'Task name');
    taskName.required = true;

    const taskDescription = document.createElement('input');
    taskDescription.classList.add('taskDescription');
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('name', 'taskDescription');
    taskDescription.setAttribute('placeholder', 'Description');
    taskDescription.required = true;

    const dueDate = document.createElement('input');
    dueDate.classList.add('dueDate');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('name', 'dueDate');
    dueDate.required = true;

    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.textContent = 'Cancel';

    cancelEventListener(cancel, form);

    const add = document.createElement('input');
    add.classList.add('add');
    add.setAttribute('type', 'image');
    add.setAttribute('src', '../dist/imgs/check.png');
    add.setAttribute('alt', 'Add');

    input.append(taskName);
    input.append(taskDescription);
    input.append(dueDate);

    submit.append(cancel);
    submit.append(add);

    lower.insertBefore(form, addTaskBox);
    formSubmission(form,taskName,taskDescription,dueDate)
  });

  function formSubmission(form,taskName,taskDescription,dueDate){
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = Library.getTaskValues(taskName, taskDescription, dueDate);
    Library.addTask(newTask,taskLibrary);

    // Clear form
    form.remove();
    console.log('here')

    // Add task to screen
    const taskDisplayContainer = displayTasks(taskLibrary);
    lower.prepend(taskDisplayContainer.children[taskDisplayContainer.children.length - 1]);
  });
}
}

export { taskListener, displayTasks, displayTasksDueToday, displayTasksUpcoming, Library, taskLibrary, cancelEventListener };
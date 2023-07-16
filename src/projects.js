import { cancelEventListener, Library, displayTasks }from "./nav/task";
import { projectTasks, Project, deleteContent } from "./page";


let projectLibrary = []

function loadProjectContent(pannelProject,content){
    const pannelProjectTitle = pannelProject.querySelector('.pannelProjectTitle')

    const projectContainer = document.createElement('div')
    projectContainer.classList.add('projectContainer')
    content.appendChild(projectContainer)

    // Project Upper
    const projectUpper = document.createElement('div')
    projectUpper.classList.add('projectUpper')
    projectContainer.appendChild(projectUpper)

    const projectContainerTitle = document.createElement('p')
    projectContainerTitle.classList.add('projectContainerTitle')
    projectContainerTitle.textContent = pannelProjectTitle.textContent
    projectUpper.appendChild(projectContainerTitle)

    //Project Lower
    const projectLower = document.createElement('div')
    projectLower.classList.add('projectLower')
    projectContainer.appendChild(projectLower)

    const addTaskBox = document.createElement('button')
    addTaskBox.classList.add('addTaskBox')
    projectLower.appendChild(addTaskBox)


    const plusIcon = document.createElement('span') 
    plusIcon.classList.add("plusIcon")
    plusIcon.innerHTML = "<img src ='../dist/imgs/plus.png'>"
    const addTaskText = document.createElement('span')
    addTaskText.classList.add("addTaskText")
    addTaskText.textContent = "Add Task"

    addTaskBox.appendChild(plusIcon)
    addTaskBox.appendChild(addTaskText)

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
  
      projectLower.insertBefore(form, addTaskBox);
      formSubmission(form,taskName,taskDescription,dueDate)
    });
  
    function formSubmission(form,taskName,taskDescription,dueDate){
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const newTask = Library.getTaskValues(taskName, taskDescription, dueDate);

      Library.addTask(newTask,projectTasks[projectTasks.length - 1].tasks);
  
      // Clear form
      form.remove();
  
      // Add task to screen
      const taskDisplayContainer = displayTasks(projectTasks[projectTasks.length - 1].tasks);
      projectLower.prepend(taskDisplayContainer.children[taskDisplayContainer.children.length - 1]);
    });
  }
    let index = projectTasks.indexOf(projectContainerTitle.textContent)

  //index finder
  for(let i = 0; i < projectTasks.length; i++){
    if(projectTasks[i].title === projectContainerTitle.textContent){
      index = i;
    }
  }
    //Add project tasks to screen

    deleteContent(content)
    if(projectTasks[index].tasks.length > 0){
      const projectTaskContainer = displayTasks(projectTasks[index].tasks)
      projectLower.prepend(projectTaskContainer)
    }

    return projectContainer

}

export {loadProjectContent, projectLibrary}
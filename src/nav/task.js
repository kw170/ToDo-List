let taskLibrary = [];
function task(title, description,date){
    this.title = title
    this.description = description
    this.date = date
}

function getTaskValues(title,description,date){
    const taskTitle = title.value;
    const taskDescription = description.value;
    const taskDate = date.value;
    return new task(taskTitle, taskDescription, taskDate)
}

function addTask(newTask){
    taskLibrary.push(newTask)
}

function displayTasks(taskLibrary){
    const displayTasksContainer = document.createElement('div')
    displayTasksContainer.classList.add('displayTaskContainer')
    taskLibrary.forEach(task =>{
        const displayTasks = document.createElement('div')
        displayTasks.classList.add("displayTasks")
        displayTasksContainer.appendChild(displayTasks)

        const firstRow = document.createElement('div')
        firstRow.classList.add('firstRow')
        
        const complete = document.createElement('button')
        complete.classList.add('complete')
        complete.textContent = "o"

        const taskDisplayTitle = document.createElement('div')
        taskDisplayTitle.classList.add("taskDisplayTitle")
        taskDisplayTitle.textContent = task.title

        const taskDisplayDescription = document.createElement('div')
        taskDisplayDescription.classList.add('taskDisplayDescription')
        taskDisplayDescription.textContent = task.description

        const taskDisplayDate = document.createElement('div')
        taskDisplayDate.classList.add('taskDisplayDate')
        taskDisplayDate.textContent = task.date

        firstRow.appendChild(complete)
        firstRow.appendChild(taskDisplayTitle)

        displayTasks.appendChild(firstRow)
        displayTasks.appendChild(taskDisplayDescription)
        displayTasks.appendChild(taskDisplayDate)
    })
    return displayTasksContainer
}


function taskListener(addTaskBox, lower){
    addTaskBox.addEventListener('click',()=>{
        const form = document.createElement('form')
        form.classList.add("form")

        const input = document.createElement('div')
        input.classList.add("input")
        form.appendChild(input)

        const submit = document.createElement('div')
        submit.classList.add("submit")
        form.appendChild(submit)

        const taskName = document.createElement('input')
        taskName.classList.add('taskName')
        taskName.setAttribute("type", "text")
        taskName.setAttribute("name", taskName)
        taskName.setAttribute("placeholder", "Task name")
        taskName.required = true

        const taskDescription = document.createElement('input')
        taskDescription.classList.add('taskDescription')
        taskDescription.setAttribute("type", "text")
        taskDescription.setAttribute("name", taskDescription)
        taskDescription.setAttribute("placeholder", "Description")
        taskDescription.required = true

        const dueDate = document.createElement('input')
        dueDate.classList.add('dueDate')
        dueDate.setAttribute("type", "date")
        dueDate.setAttribute("name", dueDate)
        dueDate.required = true

        const add = document.createElement("input");
        add.classList.add("add");
        add.setAttribute("type", "image");
        add.setAttribute("src", "../imgs/check.png");
        add.setAttribute("alt", "Add");

        input.append(taskName)
        input.append(taskDescription)
        input.append(dueDate)
        submit.append(add)

        lower.insertBefore(form,addTaskBox)
        form.addEventListener('submit', (event) =>{
        event.preventDefault()
        addTask(getTaskValues(taskName, taskDescription, dueDate))
        console.table(taskLibrary)
        //clear form
        form.remove()

        //add task to screen
        const taskDisplayContainer = displayTasks(taskLibrary)
        lower.prepend(taskDisplayContainer.children[taskDisplayContainer.children.length - 1])
         })
    })

}



export default taskListener;
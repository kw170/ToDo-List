
function createTodayUpper(){
    const date = new Date().toUTCString().slice(5, 16);

    const todayUpper = document.createElement('div')
    todayUpper.classList.add('todayUpper')

    const todayTitle = document.createElement('div')
    todayTitle.classList.add('todayTitle')
    todayTitle.textContent = "Today"

    const dateTitle = document.createElement('div')
    dateTitle.classList.add('dateTitle')
    dateTitle.textContent = date
    
    todayUpper.appendChild(todayTitle)
    todayUpper.appendChild(dateTitle)

    return todayUpper
}

function createTodayLower(){
    const todayLower = document.createElement('div')
    todayLower.classList.add('inboxLower')

    
    const addTaskBox = document.createElement('button')
    addTaskBox.classList.add('addTaskBox')
    todayLower.appendChild(addTaskBox)

    const plusIcon = document.createElement('span') 
    plusIcon.classList.add("plusIcon")
    plusIcon.innerHTML = "<img src ='../imgs/plus.png'>"
    const addTaskText = document.createElement('span')
    addTaskText.classList.add("addTaskText")
    addTaskText.textContent = "Add Task"

    addTaskBox.appendChild(plusIcon)
    addTaskBox.appendChild(addTaskText)

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


        todayLower.prepend(form)
    })

    return todayLower
}

function loadToday(){
    const today = document.createElement('div')
    today.classList.add('today')

    const todayUpper = createTodayUpper()
    const todayLower = createTodayLower()

    today.appendChild(todayUpper)
    today.appendChild(todayLower)

    return today
}
export default loadToday;
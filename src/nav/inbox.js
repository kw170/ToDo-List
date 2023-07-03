function createInboxUpper(){
    const inboxUpper = document.createElement('div')
    inboxUpper.classList.add('inboxUpper')
    
    const inboxTitle = document.createElement('p')
    inboxTitle.classList.add('inboxTitle')
    inboxTitle.textContent = "Inbox"
    inboxUpper.appendChild(inboxTitle)

    const sort = document.createElement('button')
    sort.classList.add('sort')
    sort.textContent = "Sort"
    inboxUpper.appendChild(sort)

    return inboxUpper
}

function createInboxLower(){
    const inboxLower = document.createElement('div')
    inboxLower.classList.add('inboxLower')

    
    const addTaskBox = document.createElement('button')
    addTaskBox.classList.add('addTaskBox')
    inboxLower.appendChild(addTaskBox)


    const plusIcon = document.createElement('span') 
    plusIcon.classList.add("plusIcon")
    plusIcon.innerHTML = "<img src ='../imgs/plus.png'>"
    const addTaskText = document.createElement('span')
    addTaskText.classList.add("addTaskText")
    addTaskText.textContent = "Add Task"

    addTaskBox.appendChild(plusIcon)
    addTaskBox.appendChild(addTaskText)

    // Event listener
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


        inboxLower.prepend(form)
    })
    return inboxLower
}




function loadInbox(){
    const inboxUpper = createInboxUpper()
    const inboxLower = createInboxLower()
    const inbox = document.createElement('div')
    inbox.classList.add("inbox")
    inbox.appendChild(inboxUpper)
    inbox.appendChild(inboxLower)

    return inbox

}
export default loadInbox;
import {taskListener} from "./task"
import { taskLibrary } from "./task"
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
    plusIcon.innerHTML = "<img src ='../dist/imgs/plus.png'>"
    const addTaskText = document.createElement('span')
    addTaskText.classList.add("addTaskText")
    addTaskText.textContent = "Add Task"

    addTaskBox.appendChild(plusIcon)
    addTaskBox.appendChild(addTaskText)

    // Event listener
    taskListener(taskLibrary,addTaskBox,inboxLower)
    return inboxLower
}



function loadInbox(){
    const inboxUpper = createInboxUpper()
    const inboxLower = createInboxLower()
    const inbox = document.createElement('div')
    inbox.classList.add("inboxContainer")
    inbox.appendChild(inboxUpper)
    inbox.appendChild(inboxLower)

    return inbox

}
export {loadInbox};
import taskListener from "./task";
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

    taskListener(addTaskBox, todayLower)

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
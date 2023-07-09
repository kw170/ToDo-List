import {taskListener} from "./task";
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
    return todayLower
}

function loadToday(){
    const today = document.createElement('div')
    today.classList.add('todayContainer')

    const todayUpper = createTodayUpper()
    const todayLower = createTodayLower()

    today.appendChild(todayUpper)
    today.appendChild(todayLower)

    return today
}
export {loadToday};
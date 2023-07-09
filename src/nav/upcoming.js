function createUpcomingUpper(){
    const upcomingUpper = document.createElement('div')
    upcomingUpper.classList.add('upcomingUpper')

    const date = new Date().toUTCString().slice(7, 16);
    const dateTitle = document.createElement('div')
    dateTitle.classList.add('dateTitle')
    dateTitle.classList.add('upcomingTitle')
    dateTitle.textContent = date
    upcomingUpper.appendChild(dateTitle)

    return upcomingUpper
}

function createUpcomingLower(){
    const upcomingLower = document.createElement('div')
    upcomingLower.classList.add('upcomingLower')

    return upcomingLower
}

function loadUpcoming(){
    const upcomingContent = document.createElement('div')
    upcomingContent.classList.add('upcomingContainer')

    const upcomingUpper = createUpcomingUpper()
    const upcomingLower = createUpcomingLower()

    upcomingContent.appendChild(upcomingUpper)
    upcomingContent.appendChild(upcomingLower)

    return upcomingContent
}


export {loadUpcoming};
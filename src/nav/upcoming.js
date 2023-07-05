
function createUpcomingUpper(){
    const upcomingUpper = document.createElement('div')
    upcomingUpper.classList.add('upcomingUpper')

    const date = new Date().toUTCString().slice(7, 16);
    const dateTitle = document.createElement('div')
    dateTitle.classList.add('dateTitle')
    dateTitle.textContent = date
    upcomingUpper.appendChild(dateTitle)

    return upcomingUpper
}
function loadUpcoming(){
    const upcomingContent = document.createElement('div')
    upcomingContent.classList.add('upcomingContainer')

    const upcomingUpper = createUpcomingUpper()

    upcomingContent.appendChild(upcomingUpper)

    return upcomingContent
}

export default loadUpcoming;
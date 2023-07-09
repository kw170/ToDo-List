import { loadInbox } from "./nav/inbox";
import { displayTasks, displayTasksDueToday, displayTasksUpcoming } from "./nav/task";
import { taskLibrary } from "./nav/task";
import { loadToday } from "./nav/today";
import { loadUpcoming } from "./nav/upcoming";

const container = document.querySelector(".container");

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const left = document.createElement("div");
  left.classList.add("left");
  header.appendChild(left);
  
  const right = document.createElement("div");
  right.classList.add("right");
  header.appendChild(right);

  const home = document.createElement('button');
  home.classList.add("home")
  home.innerHTML ="<img src='/../imgs/home.png'/>"
  left.appendChild(home);

  const search = document.createElement('input')
  search.classList.add("search")
  left.appendChild(search)

  const profile = document.createElement("button")
  profile.classList.add("profile")
  profile.textContent = "Profile"
  right.appendChild(profile)

}

function createSideBar(content) {
  const sideBar = document.createElement("div");
  sideBar.classList.add("sideBar");

  const nav = document.createElement("div");
  nav.classList.add("nav")

  const inbox = document.createElement("button");
  inbox.classList.add("inbox");

  const inboxImg = document.createElement('img')
  inboxImg.src = "../imgs/inbox.png"
  inbox.appendChild(inboxImg)

  const inboxText = document.createElement('p')
  inboxText.textContent = "Inbox";
  inboxText.classList.add("inboxText")
  inbox.appendChild(inboxText)


  const today = document.createElement("button");
  today.classList.add("today");

  const todayImg = document.createElement('img')
  todayImg.src = "../imgs/today.png"
  todayImg.classList.add('todayImg')
  today.appendChild(todayImg)

  const todayText = document.createElement('p')
  today.classList.add('todayText')
  todayText.textContent = "Today";
  today.appendChild(todayText)

  const upcoming = document.createElement("button");
  upcoming.classList.add("upcoming");

  const upcomingImg = document.createElement('img')
  upcoming.classList.add('upcomingImg')
  upcomingImg.src = "../imgs/upcoming.png"
  upcoming.appendChild(upcomingImg)

  const upcomingText = document.createElement('p')
  upcomingText.classList.add("upcomingText")
  upcomingText.textContent = "Upcoming";
  upcoming.appendChild(upcomingText)



  sideBar.appendChild(nav);
  nav.appendChild(inbox);
  nav.appendChild(today);
  nav.appendChild(upcoming);

  //Add event listeners to nav bar elements
  Array.from(nav.children).forEach(element => {
    element.addEventListener("click", (e) => {
      const text = element.innerText;
  
      if (text === "Inbox") {
        deleteContent(content)
        const inboxContent = loadInbox();
        content.appendChild(inboxContent)

        const inboxLower = inboxContent.children[1]
        if (taskLibrary.length > 0) {
          const displayTasksContainer = displayTasks(taskLibrary);
          inboxLower.prepend(displayTasksContainer)
        }

      } else if (text === "Today") {
          deleteContent(content)
          const todayContent = loadToday();
          content.appendChild(todayContent)

        const inboxLower = todayContent.children[1]
        if (taskLibrary.length > 0) {
          const displayTasksContainer = displayTasksDueToday(taskLibrary);
          inboxLower.prepend(displayTasksContainer)
        }

      } else if (text === "Upcoming") {
          deleteContent(content)
          const upcomingContainer = loadUpcoming();

          content.appendChild(upcomingContainer)
          const upcomingLower = upcomingContainer.children[1]
          if (taskLibrary.length > 0) {
            const displayTasksContainer = displayTasksUpcoming(taskLibrary);
            upcomingLower.prepend(displayTasksContainer)
          }
      }
    })
  })

  const projects = document.createElement('div')
  projects.classList.add("projects")
  
  const projectTitle = document.createElement("p")
  projectTitle.classList.add("projectTitle")
  projectTitle.textContent = "Projects"

  sideBar.appendChild(projects)
  projects.appendChild(projectTitle)

  return sideBar; // Return the created sideBar element
}

function deleteContent(content){
  if(content.hasChildNodes()){
    content.removeChild(content.children[0])
  }
}

function createContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  return content; // Return the created content element
}

function createBottom(content) {
  const bottom = document.createElement("div");
  bottom.classList.add("bottom");

  const sideBar = createSideBar(content); // Assign the created sideBar element to a variable
  const contentElement = createContent(); // Assign the created content element to a variable
  contentElement.classList.add("steve")
  bottom.appendChild(sideBar);
  bottom.appendChild(contentElement);
  container.appendChild(bottom);


  contentElement.appendChild(content)
}


function loadPage() {
  window.addEventListener("load", () => {
    createHeader();
    const content = createContent();
    content.classList.add("steph");
    createBottom(content);

    const inboxContent = loadInbox();
    content.appendChild(inboxContent);
  });
}

export {loadPage};
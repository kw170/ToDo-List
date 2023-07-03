import loadInbox from "./nav/inbox";
import loadToday from "./nav/today";
import loadUpcoming from "./nav/upcoming";

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

  const plus = document.createElement("button")
  plus.classList.add("plus")
  plus.textContent = "Plus"
  right.appendChild(plus)

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
  inbox.textContent = "Inbox";

  const today = document.createElement("button");
  today.classList.add("today");
  today.textContent = "Today";

  const upcoming = document.createElement("button");
  upcoming.classList.add("upcoming");
  upcoming.textContent = "Upcoming";

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
      } else if (text === "Today") {
        // loadToday();
      } else if (text === "Upcoming") {
        // loadUpcoming();
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
  createHeader();
  const content = createContent();
  content.classList.add("steph")
  createBottom(content);
}

export default loadPage;
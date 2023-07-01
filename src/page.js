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
  home.classList.add("Home")
  home.textContent = "Home";
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

function createSideBar() {
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

  const projects = document.createElement('div')
  projects.classList.add("projects")
  
  const projectTitle = document.createElement("p")
  projectTitle.classList.add("projectTitle")
  projectTitle.textContent = "Projects"

  sideBar.appendChild(projects)
  projects.appendChild(projectTitle)


  return sideBar; // Return the created sideBar element
}

function createContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  return content; // Return the created content element
}

function createBottom() {
  const bottom = document.createElement("div");
  bottom.classList.add("bottom");

  const sideBar = createSideBar(); // Assign the created sideBar element to a variable
  const content = createContent(); // Assign the created content element to a variable

  bottom.appendChild(sideBar);
  bottom.appendChild(content);
  container.appendChild(bottom);
}

function loadPage() {
  createHeader();
  createBottom();
  console.log(47);
}

export default loadPage;
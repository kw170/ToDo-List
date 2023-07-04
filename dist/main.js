/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\n\n(0,_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/nav/inbox.js":
/*!**************************!*\
  !*** ./src/nav/inbox.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/nav/task.js\");\n\nfunction createInboxUpper(){\n    const inboxUpper = document.createElement('div')\n    inboxUpper.classList.add('inboxUpper')\n    \n    const inboxTitle = document.createElement('p')\n    inboxTitle.classList.add('inboxTitle')\n    inboxTitle.textContent = \"Inbox\"\n    inboxUpper.appendChild(inboxTitle)\n\n    const sort = document.createElement('button')\n    sort.classList.add('sort')\n    sort.textContent = \"Sort\"\n    inboxUpper.appendChild(sort)\n\n    return inboxUpper\n}\n\nfunction createInboxLower(){\n    const inboxLower = document.createElement('div')\n    inboxLower.classList.add('inboxLower')\n\n    \n    const addTaskBox = document.createElement('button')\n    addTaskBox.classList.add('addTaskBox')\n    inboxLower.appendChild(addTaskBox)\n\n\n    const plusIcon = document.createElement('span') \n    plusIcon.classList.add(\"plusIcon\")\n    plusIcon.innerHTML = \"<img src ='../imgs/plus.png'>\"\n    const addTaskText = document.createElement('span')\n    addTaskText.classList.add(\"addTaskText\")\n    addTaskText.textContent = \"Add Task\"\n\n    addTaskBox.appendChild(plusIcon)\n    addTaskBox.appendChild(addTaskText)\n\n    // Event listener\n    ;(0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(addTaskBox,inboxLower)\n    return inboxLower\n}\n\n\n\n\nfunction loadInbox(){\n    const inboxUpper = createInboxUpper()\n    const inboxLower = createInboxLower()\n    const inbox = document.createElement('div')\n    inbox.classList.add(\"inbox\")\n    inbox.appendChild(inboxUpper)\n    inbox.appendChild(inboxLower)\n\n    return inbox\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInbox);\n\n//# sourceURL=webpack://todo-list/./src/nav/inbox.js?");

/***/ }),

/***/ "./src/nav/task.js":
/*!*************************!*\
  !*** ./src/nav/task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet taskLibrary = [];\nfunction task(title, description,date){\n    this.title = title\n    this.description = description\n    this.date = date\n}\n\nfunction getTaskValues(title,description,date){\n    const taskTitle = title.value;\n    const taskDescription = description.value;\n    const taskDate = date.value;\n    return new task(taskTitle, taskDescription, taskDate)\n}\n\nfunction addTask(newTask){\n    taskLibrary.push(newTask)\n}\n\nfunction completeEventListener(complete, displayTasks, taskLibrary){\n    complete.addEventListener('click', ()=>{\n        displayTasks.remove()\n        taskLibrary.splice(taskLibrary.indexOf(complete), 1)\n        console.table(taskLibrary)\n    })\n}\n\nfunction displayTasks(taskLibrary){\n    const displayTasksContainer = document.createElement('div')\n    displayTasksContainer.classList.add('displayTaskContainer')\n    taskLibrary.forEach(task =>{\n        const displayTasks = document.createElement('div')\n        displayTasks.classList.add(\"displayTasks\")\n        displayTasksContainer.appendChild(displayTasks)\n\n        const firstRow = document.createElement('div')\n        firstRow.classList.add('firstRow')\n        \n        const complete = document.createElement('button')\n        complete.classList.add('complete')\n        complete.textContent = \"o\"\n\n        completeEventListener(complete,displayTasks,taskLibrary)\n\n        const taskDisplayTitle = document.createElement('div')\n        taskDisplayTitle.classList.add(\"taskDisplayTitle\")\n        taskDisplayTitle.textContent = task.title\n\n        const taskDisplayDescription = document.createElement('div')\n        taskDisplayDescription.classList.add('taskDisplayDescription')\n        taskDisplayDescription.textContent = task.description\n\n        const taskDisplayDate = document.createElement('div')\n        taskDisplayDate.classList.add('taskDisplayDate')\n        taskDisplayDate.textContent = task.date\n\n        firstRow.appendChild(complete)\n        firstRow.appendChild(taskDisplayTitle)\n\n        displayTasks.appendChild(firstRow)\n        displayTasks.appendChild(taskDisplayDescription)\n        displayTasks.appendChild(taskDisplayDate)\n    })\n    return displayTasksContainer\n}\nfunction cancelEventListener(button, form){\n    button.addEventListener('click', ()=>{\n        form.remove()\n    })\n}\n\n\nfunction taskListener(addTaskBox, lower){\n    addTaskBox.addEventListener('click',()=>{\n        const form = document.createElement('form')\n        form.classList.add(\"form\")\n\n        const input = document.createElement('div')\n        input.classList.add(\"input\")\n        form.appendChild(input)\n\n        const submit = document.createElement('div')\n        submit.classList.add(\"submit\")\n        form.appendChild(submit)\n\n        const taskName = document.createElement('input')\n        taskName.classList.add('taskName')\n        taskName.setAttribute(\"type\", \"text\")\n        taskName.setAttribute(\"name\", taskName)\n        taskName.setAttribute(\"placeholder\", \"Task name\")\n        taskName.required = true\n\n        const taskDescription = document.createElement('input')\n        taskDescription.classList.add('taskDescription')\n        taskDescription.setAttribute(\"type\", \"text\")\n        taskDescription.setAttribute(\"name\", taskDescription)\n        taskDescription.setAttribute(\"placeholder\", \"Description\")\n        taskDescription.required = true\n\n        const dueDate = document.createElement('input')\n        dueDate.classList.add('dueDate')\n        dueDate.setAttribute(\"type\", \"date\")\n        dueDate.setAttribute(\"name\", dueDate)\n        dueDate.required = true\n\n        const cancel = document.createElement('button')\n        cancel.classList.add(\"cancel\")\n        cancel.textContent = \"Cancel\"\n\n        cancelEventListener(cancel, form)\n\n        const add = document.createElement(\"input\");\n        add.classList.add(\"add\");\n        add.setAttribute(\"type\", \"image\");\n        add.setAttribute(\"src\", \"../imgs/check.png\");\n        add.setAttribute(\"alt\", \"Add\");\n\n        input.append(taskName)\n        input.append(taskDescription)\n        input.append(dueDate)\n\n        submit.append(cancel)\n        submit.append(add)\n\n        lower.insertBefore(form,addTaskBox)\n        form.addEventListener('submit', (event) =>{\n        event.preventDefault()\n        addTask(getTaskValues(taskName, taskDescription, dueDate))\n        console.table(taskLibrary)\n        //clear form\n        form.remove()\n\n        //add task to screen\n        const taskDisplayContainer = displayTasks(taskLibrary)\n        lower.prepend(taskDisplayContainer.children[taskDisplayContainer.children.length - 1])\n         })\n    })\n\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskListener);\n\n//# sourceURL=webpack://todo-list/./src/nav/task.js?");

/***/ }),

/***/ "./src/nav/today.js":
/*!**************************!*\
  !*** ./src/nav/today.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/nav/task.js\");\n\nfunction createTodayUpper(){\n    const date = new Date().toUTCString().slice(5, 16);\n\n    const todayUpper = document.createElement('div')\n    todayUpper.classList.add('todayUpper')\n\n    const todayTitle = document.createElement('div')\n    todayTitle.classList.add('todayTitle')\n    todayTitle.textContent = \"Today\"\n\n    const dateTitle = document.createElement('div')\n    dateTitle.classList.add('dateTitle')\n    dateTitle.textContent = date\n    \n    todayUpper.appendChild(todayTitle)\n    todayUpper.appendChild(dateTitle)\n\n    return todayUpper\n}\n\nfunction createTodayLower(){\n    const todayLower = document.createElement('div')\n    todayLower.classList.add('inboxLower')\n\n    \n    const addTaskBox = document.createElement('button')\n    addTaskBox.classList.add('addTaskBox')\n    todayLower.appendChild(addTaskBox)\n\n    const plusIcon = document.createElement('span') \n    plusIcon.classList.add(\"plusIcon\")\n    plusIcon.innerHTML = \"<img src ='../imgs/plus.png'>\"\n    const addTaskText = document.createElement('span')\n    addTaskText.classList.add(\"addTaskText\")\n    addTaskText.textContent = \"Add Task\"\n\n    addTaskBox.appendChild(plusIcon)\n    addTaskBox.appendChild(addTaskText)\n\n    ;(0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(addTaskBox, todayLower)\n\n    return todayLower\n}\n\nfunction loadToday(){\n    const today = document.createElement('div')\n    today.classList.add('today')\n\n    const todayUpper = createTodayUpper()\n    const todayLower = createTodayLower()\n\n    today.appendChild(todayUpper)\n    today.appendChild(todayLower)\n\n    return today\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadToday);\n\n//# sourceURL=webpack://todo-list/./src/nav/today.js?");

/***/ }),

/***/ "./src/nav/upcoming.js":
/*!*****************************!*\
  !*** ./src/nav/upcoming.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createUpcomingUpper(){\n    const upcomingUpper = document.createElement('div')\n    upcomingUpper.classList.add('upcomingUpper')\n\n    const date = new Date().toUTCString().slice(7, 16);\n    const dateTitle = document.createElement('div')\n    dateTitle.classList.add('dateTitle')\n    dateTitle.textContent = date\n    upcomingUpper.appendChild(dateTitle)\n\n    return upcomingUpper\n}\nfunction loadUpcoming(){\n    const upcomingContent = document.createElement('div')\n    upcomingContent.classList.add('upcomingContent')\n\n    const upcomingUpper = createUpcomingUpper()\n\n    upcomingContent.appendChild(upcomingUpper)\n\n    return upcomingContent\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadUpcoming);\n\n//# sourceURL=webpack://todo-list/./src/nav/upcoming.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav_inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/inbox */ \"./src/nav/inbox.js\");\n/* harmony import */ var _nav_today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/today */ \"./src/nav/today.js\");\n/* harmony import */ var _nav_upcoming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/upcoming */ \"./src/nav/upcoming.js\");\n\n\n\n\nconst container = document.querySelector(\".container\");\n\nfunction createHeader() {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\");\n  container.appendChild(header);\n\n  const left = document.createElement(\"div\");\n  left.classList.add(\"left\");\n  header.appendChild(left);\n  \n  const right = document.createElement(\"div\");\n  right.classList.add(\"right\");\n  header.appendChild(right);\n\n  const home = document.createElement('button');\n  home.classList.add(\"home\")\n  home.innerHTML =\"<img src='/../imgs/home.png'/>\"\n  left.appendChild(home);\n\n  const search = document.createElement('input')\n  search.classList.add(\"search\")\n  left.appendChild(search)\n\n  const plus = document.createElement(\"button\")\n  plus.classList.add(\"plus\")\n  plus.textContent = \"Plus\"\n  right.appendChild(plus)\n\n  const profile = document.createElement(\"button\")\n  profile.classList.add(\"profile\")\n  profile.textContent = \"Profile\"\n  right.appendChild(profile)\n\n}\n\nfunction createSideBar(content) {\n  const sideBar = document.createElement(\"div\");\n  sideBar.classList.add(\"sideBar\");\n\n  const nav = document.createElement(\"div\");\n  nav.classList.add(\"nav\")\n\n  const inbox = document.createElement(\"button\");\n  inbox.classList.add(\"inbox\");\n  inbox.textContent = \"Inbox\";\n\n  const today = document.createElement(\"button\");\n  today.classList.add(\"today\");\n  today.textContent = \"Today\";\n\n  const upcoming = document.createElement(\"button\");\n  upcoming.classList.add(\"upcoming\");\n  upcoming.textContent = \"Upcoming\";\n\n  sideBar.appendChild(nav);\n  nav.appendChild(inbox);\n  nav.appendChild(today);\n  nav.appendChild(upcoming);\n\n  //Add event listeners to nav bar elements\n  Array.from(nav.children).forEach(element => {\n    element.addEventListener(\"click\", (e) => {\n      const text = element.innerText;\n  \n      if (text === \"Inbox\") {\n        deleteContent(content)\n        const inboxContent = (0,_nav_inbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        content.appendChild(inboxContent)\n      } else if (text === \"Today\") {\n        deleteContent(content)\n        const todayContent = (0,_nav_today__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        content.appendChild(todayContent)\n      } else if (text === \"Upcoming\") {\n        deleteContent(content)\n        const upcomingContent = (0,_nav_upcoming__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        content.appendChild(upcomingContent)\n      }\n    })\n  })\n\n  const projects = document.createElement('div')\n  projects.classList.add(\"projects\")\n  \n  const projectTitle = document.createElement(\"p\")\n  projectTitle.classList.add(\"projectTitle\")\n  projectTitle.textContent = \"Projects\"\n\n  sideBar.appendChild(projects)\n  projects.appendChild(projectTitle)\n\n\n  return sideBar; // Return the created sideBar element\n}\n\nfunction deleteContent(content){\n  if(content.hasChildNodes()){\n    content.removeChild(content.children[0])\n  }\n}\n\nfunction createContent() {\n  const content = document.createElement(\"div\");\n  content.classList.add(\"content\");\n  return content; // Return the created content element\n}\n\nfunction createBottom(content) {\n  const bottom = document.createElement(\"div\");\n  bottom.classList.add(\"bottom\");\n\n  const sideBar = createSideBar(content); // Assign the created sideBar element to a variable\n  const contentElement = createContent(); // Assign the created content element to a variable\n  contentElement.classList.add(\"steve\")\n  bottom.appendChild(sideBar);\n  bottom.appendChild(contentElement);\n  container.appendChild(bottom);\n\n\n  contentElement.appendChild(content)\n}\n\n\nfunction loadPage() {\n  createHeader();\n  const content = createContent();\n  content.classList.add(\"steph\")\n  createBottom(content);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://todo-list/./src/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
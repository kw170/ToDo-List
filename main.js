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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\nconsole.log(3)\n\n;(0,_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.querySelector(\".container\");\n\nfunction createHeader() {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\");\n  container.appendChild(header);\n\n  const left = document.createElement(\"div\");\n  left.classList.add(\"left\");\n  header.appendChild(left);\n  \n  const right = document.createElement(\"div\");\n  right.classList.add(\"right\");\n  header.appendChild(right);\n\n  const home = document.createElement('button');\n  home.classList.add(\"Home\")\n  home.textContent = \"Home\";\n  left.appendChild(home);\n\n  const search = document.createElement('input')\n  search.classList.add(\"search\")\n  left.appendChild(search)\n\n  const plus = document.createElement(\"button\")\n  plus.classList.add(\"plus\")\n  plus.textContent = \"Plus\"\n  right.appendChild(plus)\n\n  const profile = document.createElement(\"button\")\n  profile.classList.add(\"profile\")\n  profile.textContent = \"Profile\"\n  right.appendChild(profile)\n\n}\n\nfunction createSideBar() {\n  const sideBar = document.createElement(\"div\");\n  sideBar.classList.add(\"sideBar\");\n\n  const nav = document.createElement(\"div\");\n  nav.classList.add(\"nav\")\n\n  const inbox = document.createElement(\"button\");\n  inbox.classList.add(\"inbox\");\n  inbox.textContent = \"Inbox\";\n\n  const today = document.createElement(\"button\");\n  today.classList.add(\"today\");\n  today.textContent = \"Today\";\n\n  const upcoming = document.createElement(\"button\");\n  upcoming.classList.add(\"upcoming\");\n  upcoming.textContent = \"Upcoming\";\n\n  sideBar.appendChild(nav);\n  nav.appendChild(inbox);\n  nav.appendChild(today);\n  nav.appendChild(upcoming);\n\n  const projects = document.createElement('div')\n  projects.classList.add(\"projects\")\n  \n  const projectTitle = document.createElement(\"p\")\n  projectTitle.classList.add(\"projectTitle\")\n  projectTitle.textContent = \"Projects\"\n\n  sideBar.appendChild(projects)\n  projects.appendChild(projectTitle)\n\n\n  return sideBar; // Return the created sideBar element\n}\n\nfunction createContent() {\n  const content = document.createElement(\"div\");\n  content.classList.add(\"content\");\n  return content; // Return the created content element\n}\n\nfunction createBottom() {\n  const bottom = document.createElement(\"div\");\n  bottom.classList.add(\"bottom\");\n\n  const sideBar = createSideBar(); // Assign the created sideBar element to a variable\n  const content = createContent(); // Assign the created content element to a variable\n\n  bottom.appendChild(sideBar);\n  bottom.appendChild(content);\n  container.appendChild(bottom);\n}\n\nfunction loadPage() {\n  createHeader();\n  createBottom();\n  console.log(47);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://todo-list/./src/page.js?");

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
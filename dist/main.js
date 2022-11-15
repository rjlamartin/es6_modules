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

/***/ "./src/Car.js":
/*!********************!*\
  !*** ./src/Car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car{\r\n    constructor(id, make, model, year){\r\n        this.id = id;\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n}\r\n\r\n//export default Car;\n\n//# sourceURL=webpack://es6_modules/./src/Car.js?");

/***/ }),

/***/ "./src/Wishist.js":
/*!************************!*\
  !*** ./src/Wishist.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _Car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car.js */ \"./src/Car.js\");\n\r\n\r\nclass Wishlist{\r\n\r\n    //list = [];\r\n    //nextId = 0;\r\n    constructor(){\r\n        this.list = [];\r\n        this.nextId = 0;\r\n    }\r\n\r\n    add(make, model, year){\r\n        //increment before assignment\r\n        //2 assignments happening\r\n        //this,nextId = this.nextId + 1;\r\n        //the parameter getting passed into the Car constructor = this.nextId;\r\n        \r\n        //new Car(++this.nextId, make, model, year); -->\r\n        this.list.push(new _Car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year));\r\n        //car.id values in this.list => [1, 2, 3, 4, 5, ...]\r\n        //The indexes of those values=> [0, 1, 2, 3, 4, ...]\r\n    }\r\n\r\n    remove(carId){\r\n        //Remove an element from an array\r\n        //1. For in/of loop\r\n        //2. Splice\r\n        //3. Filter\r\n\r\n        ////Removes ALL cars with that id\r\n        //this.list = this.list.filter((car) => {\r\n           // return car.id != carId;\r\n        //});\r\n\r\n        //this.list.splice(carId - 1, 1);\r\n        //wouldn't work\r\n        //First, find the index, of the item that I want removed\r\n        //Removes the FIRST car that has that id\r\n        const index = this.list.findIndex((item) => {\r\n            return item.id == carId;\r\n        });\r\n        this.list.splice(index, 1);\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/Wishist.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wishist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wishist */ \"./src/Wishist.js\");\n\r\n\r\nconst submitForm = document.querySelector(\"#submitForm\");\r\n\r\nconst makeInput = document.querySelector(\"#makeInput\");\r\nconst modelInput = document.querySelector(\"#modelInput\");\r\nconst yearInput = document.querySelector(\"#yearInput\");\r\n\r\nconst pCarMake = document.querySelector(\"#car-make\");\r\nconst pCarModel = document.querySelector(\"#car-model\");\r\nconst pCarYear = document.querySelector(\"#car-year\");\r\n\r\nconst removeButton = document.querySelector(\".removeBtn\");\r\nconst unorderedList = document.querySelector(\"ul\");\r\n\r\nsubmitForm.addEventListener(\"submit\", addCar);\r\nremoveButton.addEventListener(\"click\", removeCar);\r\n\r\n\r\nconst wishlist = new _Wishist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nfunction showCarDetails(car){\r\n    pCarMake.textContent = car.make;\r\n    pCarModel.textContent = car.model;\r\n    pCarYear.textContent = car.year;\r\n    removeButton.disabled = false;\r\n    removeButton.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\nfunction updateDOMList(){\r\n    unorderedList.innerHTML = \"\";\r\n    wishlist.list.forEach((car) => {\r\n        const li = document.createElement(\"li\");\r\n        li.textContent = `${car.make} ${car.model}`;\r\n        //Wait for the user to select one of their cars\r\n        //from their wishlist\r\n        //Then show that car's details to the right\r\n        li.addEventListener(\"click\", () =>{\r\n            showCarDetails(car);\r\n        });\r\n        unorderedList.appendChild(li);\r\n    });\r\n}\r\n\r\nfunction addCar(event) {\r\n    event.preventDefault();\r\n    //1. Updating the state of the program\r\n    //This will receive the values from the form inputs\r\n    wishlist.add(makeInput.value, modelInput.value, yearInput.value);\r\n    //Updating the DOM to reflect that new state\r\n    updateDOMList();\r\n    makeInput.value = \"\";\r\n    modelInput.value = \"\";\r\n    yearInput.value = \"\";\r\n}\r\n\r\nfunction removeCar(){\r\n    //1. Updating the state \r\n    let carId = Number(removeButton.getAttribute(\"data-carId\"));\r\n    wishlist.remove(carId);\r\n    //2. Updating the DOM to reflect changes in state\r\n    updateDOMList();\r\n    pCarMake.textContent = \"\";\r\n    pCarModel.textContent = \"\";\r\n    pCarYear.textContent = \"\";\r\n    removeButton.disabled = true;\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

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
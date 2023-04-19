"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/algorithms";
exports.ids = ["pages/algorithms"];
exports.modules = {

/***/ "./src/pages/algorithms/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/algorithms/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Algos)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Algos() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Algorithms and data structures\"\n                }, void 0, false, {\n                    fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 7,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Algorithms and data structures\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Time complexity - amount of time taken by an algorithm to run, as a function of input size\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Space complexity - amount of memory taken by an algorithm to run, as a function of input size\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"By evaluating against the input size, the analysis is not only machine independent but the comprasion is also more appropriate.\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Big-O Notation describes the complexity of an alghoritm using algebraic terms.\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Time complexity\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Without loops: O(1) - Calculation not dependent on input size\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Loop: O(n) - Linear\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Double loops: O(n^2) - Quadratic (3n^2 + 5n + 11)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Tripple loops: O(n^3) - Cubic\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Input size reduces by half every iteration: O(logn) - Logarithmic\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Objects and arrays - Big-O\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            \"Objects\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Insert - O(1)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Remove - O(1)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Access - O(1) F.e: person.FirstName\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Search - O(n)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Object.values() - O(n)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Object.entries() - O(n)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            \"Arrays\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Insert/remove at end - O(1)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Insert/remove at beginning - O(n)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Access - O(1)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Search - O(n)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Push / pop - O(1)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Shift / unshift / concat / slice / splice - O(n)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"forEach / map / filter / reduce - O(n)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\"),\n                children: \"Go back home\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/algorithms/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWxnb3JpdGhtcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ0k7QUFFbEIsU0FBU0UsS0FBSyxHQUFHO0lBQy9CLHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOzswQkFDekIsOERBQUNKLGtEQUFJOzBCQUNKLDRFQUFDSyxPQUFLOzhCQUFDLGdDQUE4Qjs7Ozs7d0JBQVE7Ozs7O29CQUN2QzswQkFDUCw4REFBQ0MsSUFBRTswQkFBQyxnQ0FBOEI7Ozs7O29CQUFLOzBCQUN2Qyw4REFBQ0MsR0FBQzswQkFBQyw0RkFHSDs7Ozs7b0JBQUk7MEJBQ0osOERBQUNBLEdBQUM7MEJBQUMsK0ZBR0g7Ozs7O29CQUFJOzBCQUNKLDhEQUFDQSxHQUFDOzBCQUFDLGlJQUdIOzs7OztvQkFBSTswQkFDSiw4REFBQ0EsR0FBQzswQkFBQywySEFHSDs7Ozs7b0JBQUk7MEJBQ0osOERBQUNBLEdBQUM7MEJBQUMseUhBR0g7Ozs7O29CQUFJOzBCQUNKLDhEQUFDQSxHQUFDOzBCQUFDLGdGQUdIOzs7OztvQkFBSTswQkFFSiw4REFBQ0MsSUFBRTs7b0JBQUMsaUJBRUg7a0NBQUEsOERBQUNDLElBQUU7a0NBQUMsK0RBQTZEOzs7Ozs0QkFBSztrQ0FDdEUsOERBQUNBLElBQUU7a0NBQUMscUJBQW1COzs7Ozs0QkFBSztrQ0FDNUIsOERBQUNBLElBQUU7a0NBQUMsbURBQWlEOzs7Ozs0QkFBSztrQ0FDMUQsOERBQUNBLElBQUU7a0NBQUMsK0JBQTZCOzs7Ozs0QkFBSztrQ0FDdEMsOERBQUNBLElBQUU7a0NBQUMsbUVBRUo7Ozs7OzRCQUFLOzs7Ozs7b0JBQ0Q7MEJBRUw7O2tDQUNDLDhEQUFDRixHQUFDO2tDQUFDLDRCQUEwQjs7Ozs7NEJBQUk7a0NBQ2pDLDhEQUFDQyxJQUFFOzs0QkFBQyxTQUVIOzBDQUFBLDhEQUFDQyxJQUFFOzBDQUFDLGVBQWE7Ozs7O29DQUFLOzBDQUN0Qiw4REFBQ0EsSUFBRTswQ0FBQyxlQUFhOzs7OztvQ0FBSzswQ0FDdEIsOERBQUNBLElBQUU7MENBQUMscUNBQW1DOzs7OztvQ0FBSzswQ0FDNUMsOERBQUNBLElBQUU7MENBQUMsZUFBYTs7Ozs7b0NBQUs7MENBQ3RCLDhEQUFDQSxJQUFFOzBDQUFDLHdCQUFzQjs7Ozs7b0NBQUs7MENBQy9CLDhEQUFDQSxJQUFFOzBDQUFDLHlCQUF1Qjs7Ozs7b0NBQUs7Ozs7Ozs0QkFDNUI7a0NBQ0wsOERBQUNELElBQUU7OzRCQUFDLFFBRUg7MENBQUEsOERBQUNDLElBQUU7MENBQUMsNkJBQTJCOzs7OztvQ0FBSzswQ0FDcEMsOERBQUNBLElBQUU7MENBQUMsbUNBQWlDOzs7OztvQ0FBSzswQ0FDMUMsOERBQUNBLElBQUU7MENBQUMsZUFBYTs7Ozs7b0NBQUs7MENBQ3RCLDhEQUFDQSxJQUFFOzBDQUFDLGVBQWE7Ozs7O29DQUFLOzBDQUN0Qiw4REFBQ0EsSUFBRTswQ0FBQyxtQkFBaUI7Ozs7O29DQUFLOzBDQUMxQiw4REFBQ0EsSUFBRTswQ0FBQyxrREFBZ0Q7Ozs7O29DQUFLOzBDQUN6RCw4REFBQ0EsSUFBRTswQ0FBQyx3Q0FBc0M7Ozs7O29DQUFLOzs7Ozs7NEJBQzNDOzs0QkFDSDswQkFFSCw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFLElBQU1WLHVEQUFXLENBQUMsR0FBRyxDQUFDOzBCQUFFLGNBQVk7Ozs7O29CQUFTOzs7Ozs7WUFDekQsQ0FDTDtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXJ6YWV2Ly4vc3JjL3BhZ2VzL2FsZ29yaXRobXMvaW5kZXgudHN4P2MyOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGdvcygpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5BbGdvcml0aG1zIGFuZCBkYXRhIHN0cnVjdHVyZXM8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PGgxPkFsZ29yaXRobXMgYW5kIGRhdGEgc3RydWN0dXJlczwvaDE+XG5cdFx0XHQ8cD5cblx0XHRcdFx0VGltZSBjb21wbGV4aXR5IC0gYW1vdW50IG9mIHRpbWUgdGFrZW4gYnkgYW4gYWxnb3JpdGhtIHRvIHJ1biwgYXMgYVxuXHRcdFx0XHRmdW5jdGlvbiBvZiBpbnB1dCBzaXplXG5cdFx0XHQ8L3A+XG5cdFx0XHQ8cD5cblx0XHRcdFx0U3BhY2UgY29tcGxleGl0eSAtIGFtb3VudCBvZiBtZW1vcnkgdGFrZW4gYnkgYW4gYWxnb3JpdGhtIHRvIHJ1biwgYXMgYVxuXHRcdFx0XHRmdW5jdGlvbiBvZiBpbnB1dCBzaXplXG5cdFx0XHQ8L3A+XG5cdFx0XHQ8cD5cblx0XHRcdFx0QnkgZXZhbHVhdGluZyBhZ2FpbnN0IHRoZSBpbnB1dCBzaXplLCB0aGUgYW5hbHlzaXMgaXMgbm90IG9ubHkgbWFjaGluZVxuXHRcdFx0XHRpbmRlcGVuZGVudCBidXQgdGhlIGNvbXByYXNpb24gaXMgYWxzbyBtb3JlIGFwcHJvcHJpYXRlLlxuXHRcdFx0PC9wPlxuXHRcdFx0PHA+XG5cdFx0XHRcdElmIHlvdXIgYXBwIG5lZWRzIHRvIGJlIHZlcnkgcXVpY2sgYW5kIGhhcyBwbGVudHkgb2YgbWVtb3J5IHRvIHdvcmtcblx0XHRcdFx0d2l0aCwgeW91IGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgc3BhY2UgY29tcGxleGl0eS5cblx0XHRcdDwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHRJZiB5b3UgaGF2ZSB2ZXJ5IGxpdHRsZSBtZW1vcnkgdG8gd29yayB3aXRoLCB5b3Ugc2hvdWxkIHBpY2sgYSBzb2x1dGlvblxuXHRcdFx0XHR0aGF0IGlzIHJlbGF0aXZlbHkgc2xvd2VyIGJ1dCBuZWVkcyBsZXNzIHNwYWNlLlxuXHRcdFx0PC9wPlxuXHRcdFx0PHA+XG5cdFx0XHRcdEJpZy1PIE5vdGF0aW9uIGRlc2NyaWJlcyB0aGUgY29tcGxleGl0eSBvZiBhbiBhbGdob3JpdG0gdXNpbmcgYWxnZWJyYWljXG5cdFx0XHRcdHRlcm1zLlxuXHRcdFx0PC9wPlxuXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdFRpbWUgY29tcGxleGl0eVxuXHRcdFx0XHQ8bGk+V2l0aG91dCBsb29wczogTygxKSAtIENhbGN1bGF0aW9uIG5vdCBkZXBlbmRlbnQgb24gaW5wdXQgc2l6ZTwvbGk+XG5cdFx0XHRcdDxsaT5Mb29wOiBPKG4pIC0gTGluZWFyPC9saT5cblx0XHRcdFx0PGxpPkRvdWJsZSBsb29wczogTyhuXjIpIC0gUXVhZHJhdGljICgzbl4yICsgNW4gKyAxMSk8L2xpPlxuXHRcdFx0XHQ8bGk+VHJpcHBsZSBsb29wczogTyhuXjMpIC0gQ3ViaWM8L2xpPlxuXHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0SW5wdXQgc2l6ZSByZWR1Y2VzIGJ5IGhhbGYgZXZlcnkgaXRlcmF0aW9uOiBPKGxvZ24pIC0gTG9nYXJpdGhtaWNcblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cblx0XHRcdDw+XG5cdFx0XHRcdDxwPk9iamVjdHMgYW5kIGFycmF5cyAtIEJpZy1PPC9wPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0T2JqZWN0c1xuXHRcdFx0XHRcdDxsaT5JbnNlcnQgLSBPKDEpPC9saT5cblx0XHRcdFx0XHQ8bGk+UmVtb3ZlIC0gTygxKTwvbGk+XG5cdFx0XHRcdFx0PGxpPkFjY2VzcyAtIE8oMSkgRi5lOiBwZXJzb24uRmlyc3ROYW1lPC9saT5cblx0XHRcdFx0XHQ8bGk+U2VhcmNoIC0gTyhuKTwvbGk+XG5cdFx0XHRcdFx0PGxpPk9iamVjdC52YWx1ZXMoKSAtIE8obik8L2xpPlxuXHRcdFx0XHRcdDxsaT5PYmplY3QuZW50cmllcygpIC0gTyhuKTwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRBcnJheXNcblx0XHRcdFx0XHQ8bGk+SW5zZXJ0L3JlbW92ZSBhdCBlbmQgLSBPKDEpPC9saT5cblx0XHRcdFx0XHQ8bGk+SW5zZXJ0L3JlbW92ZSBhdCBiZWdpbm5pbmcgLSBPKG4pPC9saT5cblx0XHRcdFx0XHQ8bGk+QWNjZXNzIC0gTygxKTwvbGk+XG5cdFx0XHRcdFx0PGxpPlNlYXJjaCAtIE8obik8L2xpPlxuXHRcdFx0XHRcdDxsaT5QdXNoIC8gcG9wIC0gTygxKTwvbGk+XG5cdFx0XHRcdFx0PGxpPlNoaWZ0IC8gdW5zaGlmdCAvIGNvbmNhdCAvIHNsaWNlIC8gc3BsaWNlIC0gTyhuKTwvbGk+XG5cdFx0XHRcdFx0PGxpPmZvckVhY2ggLyBtYXAgLyBmaWx0ZXIgLyByZWR1Y2UgLSBPKG4pPC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvPlxuXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PkdvIGJhY2sgaG9tZTwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSb3V0ZXIiLCJBbGdvcyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaDEiLCJwIiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/algorithms/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/algorithms/index.tsx"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/data-structure/linked-list",{

/***/ "./src/pages/data-structure/linked-list/index.tsx":
/*!********************************************************!*\
  !*** ./src/pages/data-structure/linked-list/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ListNode = function ListNode(head) {\n    \"use strict\";\n    (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ListNode);\n    this.head = head;\n    this.next = null;\n};\nvar LinkedList = /*#__PURE__*/ function() {\n    \"use strict\";\n    function LinkedList() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, LinkedList);\n        this.head = null;\n        this.size = 0;\n    }\n    var _proto = LinkedList.prototype;\n    _proto.isEmpty = function isEmpty() {\n        return this.size === 0;\n    };\n    _proto.getSize = function getSize() {\n        return this.size;\n    };\n    _proto.prepend = function prepend(value) {\n        var node = new ListNode(value);\n        if (this.isEmpty()) {\n            this.head = node;\n        } else {\n            node.next = this.head;\n            this.head = node;\n        }\n        this.size++;\n    };\n    _proto.print = function print() {\n        if (this.isEmpty()) {\n            console.log(\"List is empty\");\n        } else {\n            var current = this.head;\n            var listValues = \"\";\n            while(current){\n                console.log(current);\n                listValues += \"\".concat(current.head, \" \");\n                current = current.next;\n            }\n            console.log(listValues);\n        }\n    };\n    return LinkedList;\n}();\nvar list = new LinkedList();\nconsole.log(\"List is empty? \", list.isEmpty());\nconsole.log(\"List size -  \", list.getSize());\nlist.print();\nlist.prepend(10);\nlist.print();\nlist.prepend(20);\nlist.prepend(30);\nlist.print();\nconsole.log(list);\nfunction LinkedListImplementation() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"A LL is a linear data structure that includes a series of connected nodes\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaev1/src/pages/data-structure/linked-list/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Each node consists of a data value and a pointer that points to the next node\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaev1/src/pages/data-structure/linked-list/index.tsx\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaev1/src/pages/data-structure/linked-list/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 4\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Random access of elements is not feasible and accessing an element has linear time complexity\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaev1/src/pages/data-structure/linked-list/index.tsx\",\n                lineNumber: 81,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"The LL data structure supports three main operations:\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaev1/src/pages/data-structure/linked-list/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Insertion - to add an element at the beginning, end or at a given index in the list\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaev1/src/pages/data-structure/linked-list/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"deletion - to remove an item given its index or value search - to find an element given its value\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaev1/src/pages/data-structure/linked-list/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaev1/src/pages/data-structure/linked-list/index.tsx\",\n        lineNumber: 68,\n        columnNumber: 3\n    }, this);\n}\n_c = LinkedListImplementation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedListImplementation);\nvar _c;\n$RefreshReg$(_c, \"LinkedListImplementation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGF0YS1zdHJ1Y3R1cmUvbGlua2VkLWxpc3QvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBQSxZQUFjLEdBQWQsU0FBTUEsUUFBUSxDQUlEQyxJQUFPOzs0RkFKZEQsUUFBUTtJQUtaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJLENBQUM7SUFDakIsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBRWxCO0FBRUQsY0FBZ0IsaUJBNENiOzthQTVDR0MsVUFBVTtnR0FBVkEsVUFBVTtRQUtkLElBQUksQ0FBQ0YsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNHLElBQUksR0FBRyxDQUFDLENBQUM7O2lCQU5WRCxVQUFVO0lBU2ZFLE9BQUFBLE9BQU8sR0FBUEEsU0FBQUEsT0FBTyxHQUFHO1FBQ1QsT0FBTyxJQUFJLENBQUNELElBQUksS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVERSxPQUFBQSxPQUFPLEdBQVBBLFNBQUFBLE9BQU8sR0FBRztRQUNULE9BQU8sSUFBSSxDQUFDRixJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVERyxPQUFBQSxPQUFPLEdBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO1FBQ2QsSUFBTUMsSUFBSSxHQUFHLElBQUlULFFBQVEsQ0FBQ1EsS0FBSyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDSCxPQUFPLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUNKLElBQUksR0FBR1EsSUFBSSxDQUFDO1FBQ2xCLE9BQU87WUFDTkEsSUFBSSxDQUFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDRCxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDQSxJQUFJLEdBQUdRLElBQUksQ0FBQztRQUNsQixDQUFDO1FBQ0QsSUFBSSxDQUFDTCxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRE0sT0FBQUEsS0FBSyxHQUFMQSxTQUFBQSxLQUFLLEdBQUc7UUFDUCxJQUFJLElBQUksQ0FBQ0wsT0FBTyxFQUFFLEVBQUU7WUFDbkJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlCLE9BQU87WUFDTixJQUFJQyxPQUFPLEdBQUcsSUFBSSxDQUFDWixJQUFJO1lBQ3ZCLElBQUlhLFVBQVUsR0FBRyxFQUFFO1lBQ25CLE1BQU9ELE9BQU8sQ0FBRTtnQkFDZkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQkMsVUFBVSxJQUFJLEVBQUMsQ0FBZSxNQUFDLENBQWRELE9BQU8sQ0FBQ1osSUFBSSxFQUFDLEdBQUMsQ0FBQyxDQUFDO2dCQUNqQ1ksT0FBTyxHQUFHQSxPQUFPLENBQUNYLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0RTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxVQUFVLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0YsQ0FBQztXQXpDSVgsVUFBVTtDQTBDZjtBQUVELElBQU1ZLElBQUksR0FBRyxJQUFJWixVQUFVLEVBQUU7QUFDN0JRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFRyxJQUFJLENBQUNWLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDL0NNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRUcsSUFBSSxDQUFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQzdDUyxJQUFJLENBQUNMLEtBQUssRUFBRSxDQUFDO0FBQ2JLLElBQUksQ0FBQ1IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pCUSxJQUFJLENBQUNMLEtBQUssRUFBRSxDQUFDO0FBQ2JLLElBQUksQ0FBQ1IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pCUSxJQUFJLENBQUNSLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqQlEsSUFBSSxDQUFDTCxLQUFLLEVBQUUsQ0FBQztBQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUM7QUFFbEIsU0FBU0Msd0JBQXdCLEdBQUc7SUFDbkMscUJBQ0MsOERBQUNDLEtBQUc7OzBCQUNILDhEQUFDQyxHQUFDOzBCQUFDLDJFQUdIOzs7OztvQkFBSTswQkFDSiw4REFBQ0EsR0FBQzswQkFBQywrRUFHSDs7Ozs7b0JBQUk7MEJBQ0osOERBQUNBLEdBQUM7MEJBQUMsb0hBR0g7Ozs7O29CQUFJO1lBQUMsR0FBRzswQkFDUiw4REFBQ0EsR0FBQzswQkFBQywrRkFHSDs7Ozs7b0JBQUk7MEJBQ0osOERBQUNBLEdBQUM7MEJBQUMsdURBQXFEOzs7OztvQkFBSTswQkFDNUQsOERBQUNBLEdBQUM7MEJBQUMscUZBR0g7Ozs7O29CQUFJOzBCQUNKLDhEQUFDQSxHQUFDOzBCQUFDLG1HQUdIOzs7OztvQkFBSTs7Ozs7O1lBQ0MsQ0FDTDtBQUNILENBQUM7QUE5QlFGLEtBQUFBLHdCQUF3QjtBQWdDakMsK0RBQWVBLHdCQUF3QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXRhLXN0cnVjdHVyZS9saW5rZWQtbGlzdC9pbmRleC50c3g/MThiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMaXN0Tm9kZTxUPiB7XG5cdGhlYWQ6IFQ7XG5cdG5leHQ6IExpc3ROb2RlPFQ+IHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihoZWFkOiBUKSB7XG5cdFx0dGhpcy5oZWFkID0gaGVhZDtcblx0XHR0aGlzLm5leHQgPSBudWxsO1xuXHR9XG59XG5cbmNsYXNzIExpbmtlZExpc3Q8VD4ge1xuXHRoZWFkOiBMaXN0Tm9kZTxUPiB8IG51bGw7XG5cdHNpemU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmhlYWQgPSBudWxsO1xuXHRcdHRoaXMuc2l6ZSA9IDA7XG5cdH1cblxuXHRpc0VtcHR5KCkge1xuXHRcdHJldHVybiB0aGlzLnNpemUgPT09IDA7XG5cdH1cblxuXHRnZXRTaXplKCkge1xuXHRcdHJldHVybiB0aGlzLnNpemU7XG5cdH1cblxuXHRwcmVwZW5kKHZhbHVlKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBMaXN0Tm9kZSh2YWx1ZSk7XG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7XG5cdFx0XHR0aGlzLmhlYWQgPSBub2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLm5leHQgPSB0aGlzLmhlYWQ7XG5cdFx0XHR0aGlzLmhlYWQgPSBub2RlO1xuXHRcdH1cblx0XHR0aGlzLnNpemUrKztcblx0fVxuXG5cdHByaW50KCkge1xuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0xpc3QgaXMgZW1wdHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cdFx0XHRsZXQgbGlzdFZhbHVlcyA9ICcnO1xuXHRcdFx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coY3VycmVudCk7XG5cdFx0XHRcdGxpc3RWYWx1ZXMgKz0gYCR7Y3VycmVudC5oZWFkfSBgO1xuXHRcdFx0XHRjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2cobGlzdFZhbHVlcyk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGxpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xuY29uc29sZS5sb2coJ0xpc3QgaXMgZW1wdHk/ICcsIGxpc3QuaXNFbXB0eSgpKTtcbmNvbnNvbGUubG9nKCdMaXN0IHNpemUgLSAgJywgbGlzdC5nZXRTaXplKCkpO1xubGlzdC5wcmludCgpO1xubGlzdC5wcmVwZW5kKDEwKTtcbmxpc3QucHJpbnQoKTtcbmxpc3QucHJlcGVuZCgyMCk7XG5saXN0LnByZXBlbmQoMzApO1xubGlzdC5wcmludCgpO1xuY29uc29sZS5sb2cobGlzdCk7XG5cbmZ1bmN0aW9uIExpbmtlZExpc3RJbXBsZW1lbnRhdGlvbigpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PHA+XG5cdFx0XHRcdEEgTEwgaXMgYSBsaW5lYXIgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBpbmNsdWRlcyBhIHNlcmllcyBvZiBjb25uZWN0ZWRcblx0XHRcdFx0bm9kZXNcblx0XHRcdDwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHRFYWNoIG5vZGUgY29uc2lzdHMgb2YgYSBkYXRhIHZhbHVlIGFuZCBhIHBvaW50ZXIgdGhhdCBwb2ludHMgdG8gdGhlIG5leHRcblx0XHRcdFx0bm9kZVxuXHRcdFx0PC9wPlxuXHRcdFx0PHA+XG5cdFx0XHRcdFRoZSBsaXN0IGVsZW1lbnRzIGNhbiBiZSBlYXNpbHkgaW5zZXJ0ZWQgb3IgcmVtb3ZlZCB3aXRob3V0IHJlYWxsb2NhdGlvblxuXHRcdFx0XHRvciByZW9yZ2FuaXphdGlvbiBvZiB0aGUgZW50aXJlIHN0cnVjdHVyZVxuXHRcdFx0PC9wPnsnICd9XG5cdFx0XHQ8cD5cblx0XHRcdFx0UmFuZG9tIGFjY2VzcyBvZiBlbGVtZW50cyBpcyBub3QgZmVhc2libGUgYW5kIGFjY2Vzc2luZyBhbiBlbGVtZW50IGhhc1xuXHRcdFx0XHRsaW5lYXIgdGltZSBjb21wbGV4aXR5XG5cdFx0XHQ8L3A+XG5cdFx0XHQ8cD5UaGUgTEwgZGF0YSBzdHJ1Y3R1cmUgc3VwcG9ydHMgdGhyZWUgbWFpbiBvcGVyYXRpb25zOjwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHRJbnNlcnRpb24gLSB0byBhZGQgYW4gZWxlbWVudCBhdCB0aGUgYmVnaW5uaW5nLCBlbmQgb3IgYXQgYSBnaXZlbiBpbmRleFxuXHRcdFx0XHRpbiB0aGUgbGlzdFxuXHRcdFx0PC9wPlxuXHRcdFx0PHA+XG5cdFx0XHRcdGRlbGV0aW9uIC0gdG8gcmVtb3ZlIGFuIGl0ZW0gZ2l2ZW4gaXRzIGluZGV4IG9yIHZhbHVlIHNlYXJjaCAtIHRvIGZpbmRcblx0XHRcdFx0YW4gZWxlbWVudCBnaXZlbiBpdHMgdmFsdWVcblx0XHRcdDwvcD5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkTGlzdEltcGxlbWVudGF0aW9uO1xuIl0sIm5hbWVzIjpbIkxpc3ROb2RlIiwiaGVhZCIsIm5leHQiLCJMaW5rZWRMaXN0Iiwic2l6ZSIsImlzRW1wdHkiLCJnZXRTaXplIiwicHJlcGVuZCIsInZhbHVlIiwibm9kZSIsInByaW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJsaXN0VmFsdWVzIiwibGlzdCIsIkxpbmtlZExpc3RJbXBsZW1lbnRhdGlvbiIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/data-structure/linked-list/index.tsx\n"));

/***/ })

});
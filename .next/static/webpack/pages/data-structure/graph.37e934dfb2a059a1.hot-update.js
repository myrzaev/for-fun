"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/data-structure/graph",{

/***/ "./src/pages/data-structure/graph/index.tsx":
/*!**************************************************!*\
  !*** ./src/pages/data-structure/graph/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar graph = {};\ngraph.a = [\n    \"b\",\n    \"c\"\n];\ngraph.b = [\n    \"f\"\n];\ngraph.c = [\n    \"d\",\n    \"e\"\n];\ngraph.d = [\n    \"f\"\n];\ngraph.e = [\n    \"f\"\n];\ngraph.f = [\n    \"g\"\n];\nvar breadthSearch = function(graph, start, end) {\n    var queue = [];\n    queue.push(start);\n    while(queue.length > 0){\n        var current = queue.shift();\n        if (!graph[current]) {\n            graph[current] = [];\n        }\n        if (graph[current].includes(end)) {\n            return true;\n        } else {\n            queue = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(queue).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(graph[current]));\n        }\n    }\n    return false;\n};\nfunction GraphImplementation() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"GraphImplementation\"\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/data-structure/graph/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: breadthSearch(graph, \"a\", \"g\")\n            }, void 0, false, {\n                fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/data-structure/graph/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/myrzaev/Documents/Projects/Myrzaevs/src/pages/data-structure/graph/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, this);\n}\n_c = GraphImplementation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GraphImplementation);\nvar _c;\n$RefreshReg$(_c, \"GraphImplementation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGF0YS1zdHJ1Y3R1cmUvZ3JhcGgvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBQSxJQUFNQSxLQUFLLEdBQVEsRUFBRTtBQUNyQkEsS0FBSyxDQUFDQyxDQUFDLEdBQUc7SUFBQyxHQUFHO0lBQUUsR0FBRztDQUFDLENBQUM7QUFDckJELEtBQUssQ0FBQ0UsQ0FBQyxHQUFHO0lBQUMsR0FBRztDQUFDLENBQUM7QUFDaEJGLEtBQUssQ0FBQ0csQ0FBQyxHQUFHO0lBQUMsR0FBRztJQUFFLEdBQUc7Q0FBQyxDQUFDO0FBQ3JCSCxLQUFLLENBQUNJLENBQUMsR0FBRztJQUFDLEdBQUc7Q0FBQyxDQUFDO0FBQ2hCSixLQUFLLENBQUNLLENBQUMsR0FBRztJQUFDLEdBQUc7Q0FBQyxDQUFDO0FBQ2hCTCxLQUFLLENBQUNNLENBQUMsR0FBRztJQUFDLEdBQUc7Q0FBQyxDQUFDO0FBRWhCLElBQU1DLGFBQWEsR0FBRyxTQUFDUCxLQUFLLEVBQUVRLEtBQUssRUFBRUMsR0FBRyxFQUFLO0lBQzVDLElBQUlDLEtBQUssR0FBRyxFQUFFO0lBQ2RBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxLQUFLLENBQUMsQ0FBQztJQUNsQixNQUFPRSxLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDLENBQUU7UUFDeEIsSUFBTUMsT0FBTyxHQUFHSCxLQUFLLENBQUNJLEtBQUssRUFBRTtRQUM3QixJQUFJLENBQUNkLEtBQUssQ0FBQ2EsT0FBTyxDQUFDLEVBQUU7WUFDcEJiLEtBQUssQ0FBQ2EsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFDRCxJQUFJYixLQUFLLENBQUNhLE9BQU8sQ0FBQyxDQUFDRSxRQUFRLENBQUNOLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1FBQ2IsT0FBTztZQUNOQyxLQUFLLEdBQUcscUZBQUlBLEtBQUssQ0FBTEEsUUFBTyxxRkFBR1YsS0FBSyxDQUFDYSxPQUFPLENBQUMsQ0FBZGIsQ0FBZSxDQUFDO1FBQ3ZDLENBQUM7SUFDRixDQUFDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBU2dCLG1CQUFtQixHQUFHO0lBQzlCLHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOzswQkFDekIsOERBQUNDLElBQUU7MEJBQUMscUJBQW1COzs7OztvQkFBSzswQkFDNUIsOERBQUNGLEtBQUc7MEJBQUVWLGFBQWEsQ0FBQ1AsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Ozs7O29CQUFPOzs7Ozs7WUFDdEMsQ0FDTDtBQUNILENBQUM7QUFQUWdCLEtBQUFBLG1CQUFtQjtBQVM1QiwrREFBZUEsbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RhdGEtc3RydWN0dXJlL2dyYXBoL2luZGV4LnRzeD8zMTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdyYXBoOiBhbnkgPSB7fTtcbmdyYXBoLmEgPSBbJ2InLCAnYyddO1xuZ3JhcGguYiA9IFsnZiddO1xuZ3JhcGguYyA9IFsnZCcsICdlJ107XG5ncmFwaC5kID0gWydmJ107XG5ncmFwaC5lID0gWydmJ107XG5ncmFwaC5mID0gWydnJ107XG5cbmNvbnN0IGJyZWFkdGhTZWFyY2ggPSAoZ3JhcGgsIHN0YXJ0LCBlbmQpID0+IHtcblx0bGV0IHF1ZXVlID0gW107XG5cdHF1ZXVlLnB1c2goc3RhcnQpO1xuXHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdGlmICghZ3JhcGhbY3VycmVudF0pIHtcblx0XHRcdGdyYXBoW2N1cnJlbnRdID0gW107XG5cdFx0fVxuXHRcdGlmIChncmFwaFtjdXJyZW50XS5pbmNsdWRlcyhlbmQpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVldWUgPSBbLi4ucXVldWUsIC4uLmdyYXBoW2N1cnJlbnRdXTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gR3JhcGhJbXBsZW1lbnRhdGlvbigpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGgxPkdyYXBoSW1wbGVtZW50YXRpb248L2gxPlxuXHRcdFx0PGRpdj57YnJlYWR0aFNlYXJjaChncmFwaCwgJ2EnLCAnZycpfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaEltcGxlbWVudGF0aW9uO1xuIl0sIm5hbWVzIjpbImdyYXBoIiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwiYnJlYWR0aFNlYXJjaCIsInN0YXJ0IiwiZW5kIiwicXVldWUiLCJwdXNoIiwibGVuZ3RoIiwiY3VycmVudCIsInNoaWZ0IiwiaW5jbHVkZXMiLCJHcmFwaEltcGxlbWVudGF0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/data-structure/graph/index.tsx\n"));

/***/ })

});
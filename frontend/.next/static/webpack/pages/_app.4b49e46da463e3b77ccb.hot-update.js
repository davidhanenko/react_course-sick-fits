webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! downshift */ \"./node_modules/downshift/dist/downshift.esm.js\");\n/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/DropDown */ \"./components/styles/DropDown.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Learning/React/Advanced-React-master/sick-fits/frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Search() {\n  _s();\n\n  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_1__[\"useCombobox\"])({\n    items: [],\n    on: on\n  }),\n      getMenuProps = _useCombobox.getMenuProps,\n      getInputProps = _useCombobox.getInputProps,\n      getComboboxProps = _useCombobox.getComboboxProps;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_2__[\"SearchStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_2__[\"DropDown\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_2__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_2__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_2__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_2__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"ZKwuOux1SqYhJinrbgrSMfKGmEo=\", false, function () {\n  return [downshift__WEBPACK_IMPORTED_MODULE_1__[\"useCombobox\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VDb21ib2JveCIsIml0ZW1zIiwib24iLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLHFCQUMyQkMsNkRBQVcsQ0FDbkU7QUFDRUMsU0FBSyxFQUFDLEVBRFI7QUFFRUMsTUFBRSxFQUFGQTtBQUZGLEdBRG1FLENBRHRDO0FBQUEsTUFDdkJDLFlBRHVCLGdCQUN2QkEsWUFEdUI7QUFBQSxNQUNUQyxhQURTLGdCQUNUQSxhQURTO0FBQUEsTUFDTUMsZ0JBRE4sZ0JBQ01BLGdCQUROOztBQVEvQixzQkFDRSxxRUFBQyw2REFBRDtBQUFBLDRCQUNFO0FBQUEsNkJBQ0U7QUFBTyxZQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMseURBQUQ7QUFBQSw4QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBckJ1Qk4sTTtVQUNvQ0MscUQ7OztLQURwQ0QsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29tYm9ib3ggfSBmcm9tICdkb3duc2hpZnQnO1xuaW1wb3J0IHsgRHJvcERvd24sIERyb3BEb3duSXRlbSwgU2VhcmNoU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMvRHJvcERvd24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IHsgZ2V0TWVudVByb3BzLCBnZXRJbnB1dFByb3BzLCBnZXRDb21ib2JveFByb3BzIH0gPSB1c2VDb21ib2JveChcbiAgICB7XG4gICAgICBpdGVtczpbXSxcbiAgICAgIG9uXG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFNlYXJjaFN0eWxlcz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPERyb3BEb3duPlxuICAgICAgICA8RHJvcERvd25JdGVtPkhleTwvRHJvcERvd25JdGVtPlxuICAgICAgICA8RHJvcERvd25JdGVtPkhleTwvRHJvcERvd25JdGVtPlxuICAgICAgICA8RHJvcERvd25JdGVtPkhleTwvRHJvcERvd25JdGVtPlxuICAgICAgICA8RHJvcERvd25JdGVtPkhleTwvRHJvcERvd25JdGVtPlxuICAgICAgPC9Ecm9wRG93bj5cbiAgICA8L1NlYXJjaFN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

})
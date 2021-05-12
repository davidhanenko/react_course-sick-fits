webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downshift */ \"./node_modules/downshift/dist/downshift.esm.js\");\n/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/DropDown */ \"./components/styles/DropDown.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Learning/React/Advanced-React-master/sick-fits/frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction Search() {\n  _s();\n\n  reset;\n\n  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_2__[\"useCombobox\"])({\n    items: [],\n    onInputValueChange: function onInputValueChange() {\n      console.log('Input changed');\n    },\n    onSelectedItemChange: function onSelectedItemChange() {\n      console.log('Selected Item change');\n    }\n  }),\n      getMenuProps = _useCombobox.getMenuProps,\n      getInputProps = _useCombobox.getInputProps,\n      getComboboxProps = _useCombobox.getComboboxProps;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_3__[\"SearchStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", _objectSpread({}, getInputProps({\n        type: 'search',\n        placeholder: 'Search for a Item',\n        id: 'search',\n        className: 'loading'\n      })), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_3__[\"DropDown\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_3__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_3__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_3__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_3__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"ZKwuOux1SqYhJinrbgrSMfKGmEo=\", false, function () {\n  return [downshift__WEBPACK_IMPORTED_MODULE_2__[\"useCombobox\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJTZWFyY2giLCJyZXNldCIsInVzZUNvbWJvYm94IiwiaXRlbXMiLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBRS9CQyxPQUFLOztBQUYwQixxQkFJMkJDLDZEQUFXLENBQUM7QUFDcEVDLFNBQUssRUFBRSxFQUQ2RDtBQUVwRUMsc0JBRm9FLGdDQUUvQztBQUNuQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNELEtBSm1FO0FBS3BFQyx3QkFMb0Usa0NBSzdDO0FBQ3JCRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNEO0FBUG1FLEdBQUQsQ0FKdEM7QUFBQSxNQUl2QkUsWUFKdUIsZ0JBSXZCQSxZQUp1QjtBQUFBLE1BSVRDLGFBSlMsZ0JBSVRBLGFBSlM7QUFBQSxNQUlNQyxnQkFKTixnQkFJTUEsZ0JBSk47O0FBYy9CLHNCQUNFLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0UsNEdBQVNBLGdCQUFnQixFQUF6QjtBQUFBLDZCQUNFLGdHQUNNRCxhQUFhLENBQUM7QUFDaEJFLFlBQUksRUFBRSxRQURVO0FBRWhCQyxtQkFBVyxFQUFFLG1CQUZHO0FBR2hCQyxVQUFFLEVBQUUsUUFIWTtBQUloQkMsaUJBQVMsRUFBRTtBQUpLLE9BQUQsQ0FEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFLHFFQUFDLHlEQUFEO0FBQUEsOEJBQ0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0FsQ3VCZCxNO1VBSW9DRSxxRDs7O0tBSnBDRixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb21ib2JveCB9IGZyb20gJ2Rvd25zaGlmdCc7XG5pbXBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfSBmcm9tICcuL3N0eWxlcy9Ecm9wRG93bic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcblxuICByZXNldFxuXG4gIGNvbnN0IHsgZ2V0TWVudVByb3BzLCBnZXRJbnB1dFByb3BzLCBnZXRDb21ib2JveFByb3BzIH0gPSB1c2VDb21ib2JveCh7XG4gICAgaXRlbXM6IFtdLFxuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbnB1dCBjaGFuZ2VkJyk7XG4gICAgfSxcbiAgICBvblNlbGVjdGVkSXRlbUNoYW5nZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBJdGVtIGNoYW5nZScpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlYXJjaFN0eWxlcz5cbiAgICAgIDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcbiAgICAgICAgICAgIHR5cGU6ICdzZWFyY2gnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggZm9yIGEgSXRlbScsXG4gICAgICAgICAgICBpZDogJ3NlYXJjaCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsb2FkaW5nJyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPERyb3BEb3duPlxuICAgICAgICA8RHJvcERvd25JdGVtPkhleTwvRHJvcERvd25JdGVtPlxuICAgICAgICA8RHJvcERvd25JdGVtPkhleTwvRHJvcERvd25JdGVtPlxuICAgICAgICA8RHJvcERvd25JdGVtPkhleTwvRHJvcERvd25JdGVtPlxuICAgICAgICA8RHJvcERvd25JdGVtPkhleTwvRHJvcERvd25JdGVtPlxuICAgICAgPC9Ecm9wRG93bj5cbiAgICA8L1NlYXJjaFN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

})
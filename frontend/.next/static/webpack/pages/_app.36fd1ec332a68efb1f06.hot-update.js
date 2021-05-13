webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! downshift */ \"./node_modules/downshift/dist/downshift.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/DropDown */ \"./components/styles/DropDown.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Learning/React/Advanced-React-master/sick-fits/frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query SEARCH_PRODUCTS_QUERY(&searchTerm: String!) {\\n    search\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar SEARCH_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\nfunction Search() {\n  _s();\n\n  Object(downshift__WEBPACK_IMPORTED_MODULE_3__[\"resetIdCounter\"])(); // method from Downshift to handle SSR issues, like: ***Prop `aria-controls` did not match. Server: \"downshift-5-menu\" Client: \"downshift-1-menu\"***\n\n  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_3__[\"useCombobox\"])({\n    items: [],\n    onInputValueChange: function onInputValueChange() {\n      console.log('Input changed');\n    },\n    onSelectedItemChange: function onSelectedItemChange() {\n      console.log('Selected Item change');\n    }\n  }),\n      getMenuProps = _useCombobox.getMenuProps,\n      getInputProps = _useCombobox.getInputProps,\n      getComboboxProps = _useCombobox.getComboboxProps;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"SearchStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", _objectSpread({}, getInputProps({\n        type: 'search',\n        placeholder: 'Search for an Item',\n        id: 'search',\n        className: 'loading'\n      })), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"DropDown\"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"DropDownItem\"], {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"ZKwuOux1SqYhJinrbgrSMfKGmEo=\", false, function () {\n  return [downshift__WEBPACK_IMPORTED_MODULE_3__[\"useCombobox\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJTRUFSQ0hfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94IiwiaXRlbXMiLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLGtEQUFILG1CQUEzQjtBQU1lLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0JDLGtFQUFjLEdBRGlCLENBQ2I7O0FBRGEscUJBRzJCQyw2REFBVyxDQUFDO0FBQ3BFQyxTQUFLLEVBQUUsRUFENkQ7QUFFcEVDLHNCQUZvRSxnQ0FFL0M7QUFDbkJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDRCxLQUptRTtBQUtwRUMsd0JBTG9FLGtDQUs3QztBQUNyQkYsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDRDtBQVBtRSxHQUFELENBSHRDO0FBQUEsTUFHdkJFLFlBSHVCLGdCQUd2QkEsWUFIdUI7QUFBQSxNQUdUQyxhQUhTLGdCQUdUQSxhQUhTO0FBQUEsTUFHTUMsZ0JBSE4sZ0JBR01BLGdCQUhOOztBQWEvQixzQkFDRSxxRUFBQyw2REFBRDtBQUFBLDRCQUNFLDRHQUFTQSxnQkFBZ0IsRUFBekI7QUFBQSw2QkFDRSxnR0FDTUQsYUFBYSxDQUFDO0FBQ2hCRSxZQUFJLEVBQUUsUUFEVTtBQUVoQkMsbUJBQVcsRUFBRSxvQkFGRztBQUdoQkMsVUFBRSxFQUFFLFFBSFk7QUFJaEJDLGlCQUFTLEVBQUU7QUFKSyxPQUFELENBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRSxxRUFBQyx5REFBRCxrQ0FBY04sWUFBWSxFQUExQjtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBakN1QlIsTTtVQUdvQ0UscUQ7OztLQUhwQ0YsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSAnZG93bnNoaWZ0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgRHJvcERvd24sIERyb3BEb3duSXRlbSwgU2VhcmNoU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMvRHJvcERvd24nO1xuXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNFQVJDSF9QUk9EVUNUU19RVUVSWSgmc2VhcmNoVGVybTogU3RyaW5nISkge1xuICAgIHNlYXJjaFxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIHJlc2V0SWRDb3VudGVyKCk7IC8vIG1ldGhvZCBmcm9tIERvd25zaGlmdCB0byBoYW5kbGUgU1NSIGlzc3VlcywgbGlrZTogKioqUHJvcCBgYXJpYS1jb250cm9sc2AgZGlkIG5vdCBtYXRjaC4gU2VydmVyOiBcImRvd25zaGlmdC01LW1lbnVcIiBDbGllbnQ6IFwiZG93bnNoaWZ0LTEtbWVudVwiKioqXG5cbiAgY29uc3QgeyBnZXRNZW51UHJvcHMsIGdldElucHV0UHJvcHMsIGdldENvbWJvYm94UHJvcHMgfSA9IHVzZUNvbWJvYm94KHtcbiAgICBpdGVtczogW10sXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKCkge1xuICAgICAgY29uc29sZS5sb2coJ0lucHV0IGNoYW5nZWQnKTtcbiAgICB9LFxuICAgIG9uU2VsZWN0ZWRJdGVtQ2hhbmdlKCkge1xuICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIEl0ZW0gY2hhbmdlJyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoU3R5bGVzPlxuICAgICAgPGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xuICAgICAgICAgICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBmb3IgYW4gSXRlbScsXG4gICAgICAgICAgICBpZDogJ3NlYXJjaCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsb2FkaW5nJyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XG4gICAgICAgIDxEcm9wRG93bkl0ZW0+SGV5PC9Ecm9wRG93bkl0ZW0+XG4gICAgICAgIDxEcm9wRG93bkl0ZW0+SGV5PC9Ecm9wRG93bkl0ZW0+XG4gICAgICAgIDxEcm9wRG93bkl0ZW0+SGV5PC9Ecm9wRG93bkl0ZW0+XG4gICAgICAgIDxEcm9wRG93bkl0ZW0+SGV5PC9Ecm9wRG93bkl0ZW0+XG4gICAgICA8L0Ryb3BEb3duPlxuICAgIDwvU2VhcmNoU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

})
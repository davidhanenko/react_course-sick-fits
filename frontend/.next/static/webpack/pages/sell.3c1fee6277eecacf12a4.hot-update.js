webpackHotUpdate_N_E("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction useForm() {\n  _s();\n\n  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  // create a state object for uor inputs\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        type = _e$target.type,\n        name = _e$target.name,\n        value = _e$target.value; // change input for price in number type\n\n    if (type === 'number') {\n      value = parseInt(value);\n    } // for files input\n\n\n    if (type === 'file') {\n      value[0] = e.target.files;\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value)));\n  } // reset to default\n\n\n  function resetForm() {\n    setInputs(initial);\n  } // clear form\n\n\n  var blankState = Object.entries(inputs).map; // return the things we want to surface from this custom hook\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange\n  };\n}\n\n_s(useForm, \"0tjT+aoDVbAe0wsQZsq9AKLCE20=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiYmxhbmtTdGF0ZSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsR0FBK0I7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQzVDO0FBRDRDLGtCQUVoQkMsc0RBQVEsQ0FBQ0QsT0FBRCxDQUZRO0FBQUEsTUFFckNFLE1BRnFDO0FBQUEsTUFFN0JDLFNBRjZCOztBQUk1QyxXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUFBLG9CQUNLQSxDQUFDLENBQUNDLE1BRFA7QUFBQSxRQUNqQkMsSUFEaUIsYUFDakJBLElBRGlCO0FBQUEsUUFDWEMsSUFEVyxhQUNYQSxJQURXO0FBQUEsUUFDTEMsS0FESyxhQUNMQSxLQURLLEVBRXZCOztBQUNBLFFBQUlGLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCRSxXQUFLLEdBQUdDLFFBQVEsQ0FBQ0QsS0FBRCxDQUFoQjtBQUNELEtBTHNCLENBT3ZCOzs7QUFDQSxRQUFJRixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQkUsV0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXSixDQUFDLENBQUNDLE1BQUYsQ0FBU0ssS0FBcEI7QUFDRDs7QUFFRFIsYUFBUyxpQ0FFSkQsTUFGSSwwTUFHTk0sSUFITSxFQUdDQyxLQUhELEdBQVQ7QUFLRCxHQXJCMkMsQ0F1QjVDOzs7QUFDQSxXQUFTRyxTQUFULEdBQXFCO0FBQ25CVCxhQUFTLENBQUNILE9BQUQsQ0FBVDtBQUNELEdBMUIyQyxDQTRCNUM7OztBQUNBLE1BQU1hLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWViLE1BQWYsRUFBdUJjLEdBQTFDLENBN0I0QyxDQStCNUM7O0FBQ0EsU0FBTztBQUNMZCxVQUFNLEVBQU5BLE1BREs7QUFFTEUsZ0JBQVksRUFBWkE7QUFGSyxHQUFQO0FBSUQ7O0dBcEN1QkwsTyIsImZpbGUiOiIuL2xpYi91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XG4gIC8vIGNyZWF0ZSBhIHN0YXRlIG9iamVjdCBmb3IgdW9yIGlucHV0c1xuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBsZXQgeyB0eXBlLCBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgLy8gY2hhbmdlIGlucHV0IGZvciBwcmljZSBpbiBudW1iZXIgdHlwZVxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9yIGZpbGVzIGlucHV0XG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgdmFsdWVbMF0gPSBlLnRhcmdldC5maWxlcztcbiAgICB9XG5cbiAgICBzZXRJbnB1dHMoe1xuICAgICAgLy8gY29weSB0aGUgZXhpc3Rpbmcgc3RhdGVcbiAgICAgIC4uLmlucHV0cyxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvLyByZXNldCB0byBkZWZhdWx0XG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XG4gIH1cblxuICAvLyBjbGVhciBmb3JtXG4gIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcFxuXG4gIC8vIHJldHVybiB0aGUgdGhpbmdzIHdlIHdhbnQgdG8gc3VyZmFjZSBmcm9tIHRoaXMgY3VzdG9tIGhvb2tcbiAgcmV0dXJuIHtcbiAgICBpbnB1dHMsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ })

})
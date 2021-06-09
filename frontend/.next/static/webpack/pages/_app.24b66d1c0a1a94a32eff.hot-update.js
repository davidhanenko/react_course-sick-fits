webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Checkout\", function() { return Checkout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/SickButton */ \"./components/styles/SickButton.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Learning/React/Advanced-React-master/sick-fits/frontend/components/Checkout.js\";\n\n\n\n\nvar CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"Checkout__CheckoutFormStyles\",\n  componentId: \"sc-10mtoy5-0\"\n})([\"box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;\"]); // Stripes\n\n_c = CheckoutFormStyles;\nvar stripeLib = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__[\"loadStripe\"])(\"pk_test_51IySHQCPxSElAY1jAyhBhtVV1HkWsOIVizH9rROWSeH4WLZeHrC07Mm3XTm4swbMMWCTXLdcV9fbI9SuR00mKlky00TbqKjD9G\");\n\nfunction Checkout() {\n  function handleSubmit(e) {\n    // 1. Stop form from submiting & turn the loader on\n    e.preventDefault();\n    console.log('some work'); // 2. Start the page transition\n    // 3. Create the payment method via stripe(Token comes back here if successful)\n    // 4. Handle the token \n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"], {\n    stripe: stripeLib,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CheckoutFormStyles, {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__[\"CardElement\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: \"Check Out Now\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = Checkout;\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CheckoutFormStyles\");\n$RefreshReg$(_c2, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcz9hODMxIl0sIm5hbWVzIjpbIkNoZWNrb3V0Rm9ybVN0eWxlcyIsInN0eWxlZCIsImZvcm0iLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDhJQUF4QixDLENBU0E7O0tBVE1GLGtCO0FBVU4sSUFBTUcsU0FBUyxHQUFHQyxvRUFBVSxDQUFDQyw2R0FBRCxDQUE1Qjs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2xCLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCO0FBQ0FBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBSHVCLENBSXZCO0FBQ0E7QUFDQTtBQUNEOztBQUVELHNCQUNFLHFFQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFUixTQUFsQjtBQUFBLDJCQUNFLHFFQUFDLGtCQUFEO0FBQW9CLGNBQVEsRUFBRUksWUFBOUI7QUFBQSw4QkFDRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztNQWxCUUQsUTtBQW9CVCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hlY2tvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkRWxlbWVudCwgRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcyc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU2lja0J1dHRvbiBmcm9tICcuL3N0eWxlcy9TaWNrQnV0dG9uJztcblxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMXJlbTtcbmA7XG5cbi8vIFN0cmlwZXNcbmNvbnN0IHN0cmlwZUxpYiA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XG5cbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIC8vIDEuIFN0b3AgZm9ybSBmcm9tIHN1Ym1pdGluZyAmIHR1cm4gdGhlIGxvYWRlciBvblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnc29tZSB3b3JrJyk7XG4gICAgLy8gMi4gU3RhcnQgdGhlIHBhZ2UgdHJhbnNpdGlvblxuICAgIC8vIDMuIENyZWF0ZSB0aGUgcGF5bWVudCBtZXRob2QgdmlhIHN0cmlwZShUb2tlbiBjb21lcyBiYWNrIGhlcmUgaWYgc3VjY2Vzc2Z1bClcbiAgICAvLyA0LiBIYW5kbGUgdGhlIHRva2VuIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVMaWJ9PlxuICAgICAgPENoZWNrb3V0Rm9ybVN0eWxlcyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPENhcmRFbGVtZW50IC8+XG4gICAgICAgIDxTaWNrQnV0dG9uPkNoZWNrIE91dCBOb3c8L1NpY2tCdXR0b24+XG4gICAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cbiAgICA8L0VsZW1lbnRzPlxuICApO1xufVxuXG5leHBvcnQgeyBDaGVja291dCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Checkout.js\n");

/***/ })

})
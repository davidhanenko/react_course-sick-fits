webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Checkout\", function() { return Checkout; });\n/* harmony import */ var _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/SickButton */ \"./components/styles/SickButton.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Learning/React/Advanced-React-master/sick-fits/frontend/components/Checkout.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  mutation CREATE_ORDER_MUTATION($token: String!) {\\n    checkout(token: $token) {\\n      id\\n      charge\\n      total\\n      items {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].form.withConfig({\n  displayName: \"Checkout__CheckoutFormStyles\",\n  componentId: \"sc-10mtoy5-0\"\n})([\"box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;\"]);\n_c = CheckoutFormStyles;\nvar CREATE_ORDER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject()); // Stripes\n\nvar stripeLib = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_7__[\"loadStripe\"])(\"pk_test_51IySHQCPxSElAY1jAyhBhtVV1HkWsOIVizH9rROWSeH4WLZeHrC07Mm3XTm4swbMMWCTXLdcV9fbI9SuR00mKlky00TbqKjD9G\");\n\nfunction CheckoutForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"useElements\"])();\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(CREATE_ORDER_MUTATION),\n      _useMutation2 = Object(_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      checkout = _useMutation2[0],\n      graphQlError = _useMutation2[1].error;\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var _yield$stripe$createP, error, paymentMethod, order;\n\n      return _Volumes_Files_Learning_React_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // 1. Stop form from submiting & turn the loader on\n              e.preventDefault();\n              setLoading(true); // 2. Start the page transition\n\n              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.start(); // 3. Create the payment method via stripe(Token comes back here if successful)\n\n              _context.next = 5;\n              return stripe.createPaymentMethod({\n                type: 'card',\n                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"CardElement\"])\n              });\n\n            case 5:\n              _yield$stripe$createP = _context.sent;\n              error = _yield$stripe$createP.error;\n              paymentMethod = _yield$stripe$createP.paymentMethod;\n\n              if (!error) {\n                _context.next = 12;\n                break;\n              }\n\n              setError(error);\n              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();\n              return _context.abrupt(\"return\");\n\n            case 12:\n              _context.next = 14;\n              return checkout({\n                variables: {\n                  token: paymentMethod.id\n                }\n              });\n\n            case 14:\n              order = _context.sent;\n              console.log('Order');\n              console.log(); // 6. Change the page to view the order\n              // 7. Close the cart\n              // 8. Turn the loader off\n\n              setLoading(false);\n              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();\n\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(CheckoutFormStyles, {\n    onSubmit: handleSubmit,\n    children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n      style: {\n        fontSize: 12\n      },\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }, this), graphQlError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n      style: {\n        fontSize: 12\n      },\n      children: graphQlError.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 24\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"CardElement\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      children: \"Check Out Now\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CheckoutForm, \"IBX2jTTMT5LAcT5w6N80q4oUzk8=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"useElements\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"]];\n});\n\n_c2 = CheckoutForm;\n\nfunction Checkout() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"Elements\"], {\n    stripe: stripeLib,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(CheckoutForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 5\n  }, this);\n}\n\n_c3 = Checkout;\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CheckoutFormStyles\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n$RefreshReg$(_c3, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcz9hODMxIl0sIm5hbWVzIjpbIkNoZWNrb3V0Rm9ybVN0eWxlcyIsInN0eWxlZCIsImZvcm0iLCJDUkVBVEVfT1JERVJfTVVUQVRJT04iLCJncWwiLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0Rm9ybSIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsInVzZU11dGF0aW9uIiwiY2hlY2tvdXQiLCJncmFwaFFsRXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuUHJvZ3Jlc3MiLCJzdGFydCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsInBheW1lbnRNZXRob2QiLCJkb25lIiwidmFyaWFibGVzIiwidG9rZW4iLCJpZCIsIm9yZGVyIiwiY29uc29sZSIsImxvZyIsImZvbnRTaXplIiwibWVzc2FnZSIsIkNoZWNrb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQywwREFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDhJQUF4QjtLQUFNRixrQjtBQVNOLElBQU1HLHFCQUFxQixHQUFHQyxrREFBSCxtQkFBM0IsQyxDQWNBOztBQUNBLElBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQ0MsNkdBQUQsQ0FBNUI7O0FBRUEsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNJQyx1REFBUSxFQURaO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBQUEsbUJBRVFGLHVEQUFRLEVBRmhCO0FBQUEsTUFFZkcsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBR3RCLE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLDJFQUFXLEVBQTVCOztBQUpzQixxQkFLc0JDLGtFQUFXLENBQ3JEZixxQkFEcUQsQ0FMakM7QUFBQTtBQUFBLE1BS2ZnQixRQUxlO0FBQUEsTUFLSUMsWUFMSixvQkFLSFYsS0FMRzs7QUFBQSxXQVNQVyxZQVRPO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtZQVN0QixpQkFBNEJDLENBQTVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUNBQSxlQUFDLENBQUNDLGNBQUY7QUFFQVYsd0JBQVUsQ0FBQyxJQUFELENBQVYsQ0FKRixDQU1FOztBQUNBVyw4REFBUyxDQUFDQyxLQUFWLEdBUEYsQ0FTRTs7QUFURjtBQUFBLHFCQVV5Q1gsTUFBTSxDQUFDWSxtQkFBUCxDQUEyQjtBQUNoRUMsb0JBQUksRUFBRSxNQUQwRDtBQUVoRUMsb0JBQUksRUFBRVosUUFBUSxDQUFDYSxVQUFULENBQW9CQyxtRUFBcEI7QUFGMEQsZUFBM0IsQ0FWekM7O0FBQUE7QUFBQTtBQVVVcEIsbUJBVlYseUJBVVVBLEtBVlY7QUFVaUJxQiwyQkFWakIseUJBVWlCQSxhQVZqQjs7QUFBQSxtQkFnQk1yQixLQWhCTjtBQUFBO0FBQUE7QUFBQTs7QUFpQklDLHNCQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBYyw4REFBUyxDQUFDUSxJQUFWO0FBbEJKOztBQUFBO0FBQUE7QUFBQSxxQkFzQnNCYixRQUFRLENBQUM7QUFDM0JjLHlCQUFTLEVBQUU7QUFDVEMsdUJBQUssRUFBRUgsYUFBYSxDQUFDSTtBQURaO0FBRGdCLGVBQUQsQ0F0QjlCOztBQUFBO0FBc0JRQyxtQkF0QlI7QUEyQkZDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELHFCQUFPLENBQUNDLEdBQVIsR0E1QkUsQ0E2QkU7QUFDQTtBQUNBOztBQUNBekIsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQVcsOERBQVMsQ0FBQ1EsSUFBVjs7QUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FUc0I7QUFBQTtBQUFBOztBQTZDdEIsc0JBQ0UscUVBQUMsa0JBQUQ7QUFBb0IsWUFBUSxFQUFFWCxZQUE5QjtBQUFBLGVBQ0dYLEtBQUssaUJBQUk7QUFBRyxXQUFLLEVBQUU7QUFBRTZCLGdCQUFRLEVBQUU7QUFBWixPQUFWO0FBQUEsZ0JBQTZCN0IsS0FBSyxDQUFDOEI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURaLEVBRUdwQixZQUFZLGlCQUFJO0FBQUcsV0FBSyxFQUFFO0FBQUVtQixnQkFBUSxFQUFFO0FBQVosT0FBVjtBQUFBLGdCQUE2Qm5CLFlBQVksQ0FBQ29CO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGbkIsZUFHRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBckRRaEMsWTtVQUdRTyxpRSxFQUNFRSxtRSxFQUMyQkMsMEQ7OztNQUxyQ1YsWTs7QUF1RFQsU0FBU2lDLFFBQVQsR0FBb0I7QUFDbEIsc0JBQ0UscUVBQUMsZ0VBQUQ7QUFBVSxVQUFNLEVBQUVwQyxTQUFsQjtBQUFBLDJCQUNFLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztNQU5Rb0MsUTtBQVFUIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DaGVja291dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHtcbiAgQ2FyZEVsZW1lbnQsXG4gIEVsZW1lbnRzLFxuICB1c2VFbGVtZW50cyxcbiAgdXNlU3RyaXBlLFxufSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcyc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgblByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFNpY2tCdXR0b24gZnJvbSAnLi9zdHlsZXMvU2lja0J1dHRvbic7XG5cbmNvbnN0IENoZWNrb3V0Rm9ybVN0eWxlcyA9IHN0eWxlZC5mb3JtYFxuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDFyZW07XG5gO1xuXG5jb25zdCBDUkVBVEVfT1JERVJfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIENSRUFURV9PUkRFUl9NVVRBVElPTigkdG9rZW46IFN0cmluZyEpIHtcbiAgICBjaGVja291dCh0b2tlbjogJHRva2VuKSB7XG4gICAgICBpZFxuICAgICAgY2hhcmdlXG4gICAgICB0b3RhbFxuICAgICAgaXRlbXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG4vLyBTdHJpcGVzXG5jb25zdCBzdHJpcGVMaWIgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVkpO1xuXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcbiAgY29uc3QgW2NoZWNrb3V0LCB7IGVycm9yOiBncmFwaFFsRXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcbiAgICBDUkVBVEVfT1JERVJfTVVUQVRJT05cbiAgKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIC8vIDEuIFN0b3AgZm9ybSBmcm9tIHN1Ym1pdGluZyAmIHR1cm4gdGhlIGxvYWRlciBvblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAvLyAyLiBTdGFydCB0aGUgcGFnZSB0cmFuc2l0aW9uXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XG5cbiAgICAvLyAzLiBDcmVhdGUgdGhlIHBheW1lbnQgbWV0aG9kIHZpYSBzdHJpcGUoVG9rZW4gY29tZXMgYmFjayBoZXJlIGlmIHN1Y2Nlc3NmdWwpXG4gICAgY29uc3QgeyBlcnJvciwgcGF5bWVudE1ldGhvZCB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgICAgdHlwZTogJ2NhcmQnLFxuICAgICAgY2FyZDogZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCksXG4gICAgfSk7XG5cbiAgICAvLyA0LiBIYW5kbGUgYW55IGVycm9ycyBmcm9tIFN0cmlwZVxuICAgIGlmIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgblByb2dyZXNzLmRvbmUoKTtcbiAgICAgIHJldHVybjsgLy8gU3RvcCB0aGUgY2hlY2tvdXQgZnJvbSBoYXBwZW5pbmdcbiAgICB9XG4gICAgLy8gNS4gU2VuZCB0aGUgdG9rZW4gZnJvbSBzdGVwIDMgdG8gdXVyIGtleXN0b25lIHNlcnZlciwgdmlhIGEgY3VzdG9tIG11dGF0aW9uXG4gICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBjaGVja291dCh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgdG9rZW46IHBheW1lbnRNZXRob2QuaWQsXG4gICAgICB9LFxuICAgIH0pO1xuY29uc29sZS5sb2coJ09yZGVyJyk7XG5jb25zb2xlLmxvZygpO1xuICAgIC8vIDYuIENoYW5nZSB0aGUgcGFnZSB0byB2aWV3IHRoZSBvcmRlclxuICAgIC8vIDcuIENsb3NlIHRoZSBjYXJ0XG4gICAgLy8gOC4gVHVybiB0aGUgbG9hZGVyIG9mZlxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIG5Qcm9ncmVzcy5kb25lKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICB7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntlcnJvci5tZXNzYWdlfTwvcD59XG4gICAgICB7Z3JhcGhRbEVycm9yICYmIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT57Z3JhcGhRbEVycm9yLm1lc3NhZ2V9PC9wPn1cbiAgICAgIDxDYXJkRWxlbWVudCAvPlxuICAgICAgPFNpY2tCdXR0b24+Q2hlY2sgT3V0IE5vdzwvU2lja0J1dHRvbj5cbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlTGlifT5cbiAgICAgIDxDaGVja291dEZvcm0gLz5cbiAgICA8L0VsZW1lbnRzPlxuICApO1xufVxuXG5leHBvcnQgeyBDaGVja291dCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Checkout.js\n");

/***/ })

})
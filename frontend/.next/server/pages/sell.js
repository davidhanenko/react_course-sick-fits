module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/sell.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateProduct; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Learning/React/Advanced-React-master/sick-fits/frontend/components/CreateProduct.js\";\n\n\n\n\n\nconst CREATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`\n  mutation CREATE_PRODUCT_MUTATION(\n    # Which variables are getting passed in? And what types are they\n    $name: String!\n    $description: String!\n    $price: Int!\n    $image: Upload\n  ) {\n    createProduct(\n      data: {\n        name: $name\n        description: $description\n        price: $price\n        status: \"AVAILABLE\"\n        photo: { create: { image: $image, altText: $name } }\n      }\n    ) {\n      id\n      price\n      description\n      name\n    }\n  }\n`;\nfunction CreateProduct() {\n  const {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    name: 'Nice Shoes',\n    price: 3425,\n    description: 'This are the best shoes',\n    image: ''\n  });\n  const [createProduct, {\n    loading,\n    error,\n    data\n  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"])(CREATE_PRODUCT_MUTATION, {\n    variables: inputs\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onSubmit: async e => {\n      e.preventDefault(); // Submit the inputfields to the backend\n\n      await createProduct();\n      clearForm();\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"fieldset\", {\n      disabled: loading,\n      \"aria-busy\": loading,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"image\",\n        children: [\"Name\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          required: true,\n          type: \"file\",\n          name: \"image\",\n          id: \"image\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          id: \"name\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"number\",\n          name: \"price\",\n          id: \"price\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Description\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          name: \"description\",\n          id: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"+ Add Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanM/ZTA1MCJdLCJuYW1lcyI6WyJDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsIkNyZWF0ZVByb2R1Y3QiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJ1c2VGb3JtIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImNyZWF0ZVByb2R1Y3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsdUJBQXVCLEdBQUdDLGtEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F2QkE7QUF5QmUsU0FBU0MsYUFBVCxHQUF5QjtBQUN0QyxRQUFNO0FBQUVDLFVBQUY7QUFBVUMsZ0JBQVY7QUFBd0JDLGFBQXhCO0FBQW1DQztBQUFuQyxNQUFpREMsNERBQU8sQ0FBQztBQUM3REMsUUFBSSxFQUFFLFlBRHVEO0FBRTdEQyxTQUFLLEVBQUUsSUFGc0Q7QUFHN0RDLGVBQVcsRUFBRSx5QkFIZ0Q7QUFJN0RDLFNBQUssRUFBRTtBQUpzRCxHQUFELENBQTlEO0FBT0EsUUFBTSxDQUFDQyxhQUFELEVBQWdCO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsR0FBaEIsSUFBNENDLGtFQUFXLENBQzNEaEIsdUJBRDJELEVBRTNEO0FBQ0VpQixhQUFTLEVBQUVkO0FBRGIsR0FGMkQsQ0FBN0Q7QUFPQSxzQkFDRSxxRUFBQyxvREFBRDtBQUNFLFlBQVEsRUFBRSxNQUFPZSxDQUFQLElBQWE7QUFDckJBLE9BQUMsQ0FBQ0MsY0FBRixHQURxQixDQUVyQjs7QUFDQSxZQUFNUCxhQUFhLEVBQW5CO0FBQ0FOLGVBQVM7QUFDVixLQU5IO0FBQUEsNEJBUUUscUVBQUMscURBQUQ7QUFBYyxXQUFLLEVBQUVRO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVVFO0FBQVUsY0FBUSxFQUFFRCxPQUFwQjtBQUE2QixtQkFBV0EsT0FBeEM7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUEsd0NBRUU7QUFDRSxrQkFBUSxNQURWO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxjQUFJLEVBQUMsT0FIUDtBQUlFLFlBQUUsRUFBQyxPQUpMO0FBS0Usa0JBQVEsRUFBRVQ7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUU7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBLHdDQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLFlBQUUsRUFBQyxNQUhMO0FBSUUscUJBQVcsRUFBQyxNQUpkO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNLLElBTGhCO0FBTUUsa0JBQVEsRUFBRUo7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBd0JFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxZQUFFLEVBQUMsT0FITDtBQUlFLHFCQUFXLEVBQUMsT0FKZDtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDTSxLQUxoQjtBQU1FLGtCQUFRLEVBQUVMO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkYsZUFvQ0U7QUFBTyxlQUFPLEVBQUMsYUFBZjtBQUFBLCtDQUVFO0FBQ0UsY0FBSSxFQUFDLGFBRFA7QUFFRSxZQUFFLEVBQUMsYUFGTDtBQUdFLHFCQUFXLEVBQUMsYUFIZDtBQUlFLGVBQUssRUFBRUQsTUFBTSxDQUFDTyxXQUpoQjtBQUtFLGtCQUFRLEVBQUVOO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0YsZUF1REU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNFRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3JlYXRlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuXG5jb25zdCBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04oXG4gICAgIyBXaGljaCB2YXJpYWJsZXMgYXJlIGdldHRpbmcgcGFzc2VkIGluPyBBbmQgd2hhdCB0eXBlcyBhcmUgdGhleVxuICAgICRuYW1lOiBTdHJpbmchXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchXG4gICAgJHByaWNlOiBJbnQhXG4gICAgJGltYWdlOiBVcGxvYWRcbiAgKSB7XG4gICAgY3JlYXRlUHJvZHVjdChcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxuICAgICAgICBwcmljZTogJHByaWNlXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIlxuICAgICAgICBwaG90bzogeyBjcmVhdGU6IHsgaW1hZ2U6ICRpbWFnZSwgYWx0VGV4dDogJG5hbWUgfSB9XG4gICAgICB9XG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgcHJpY2VcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBuYW1lXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQcm9kdWN0KCkge1xuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0sIGNsZWFyRm9ybSB9ID0gdXNlRm9ybSh7XG4gICAgbmFtZTogJ05pY2UgU2hvZXMnLFxuICAgIHByaWNlOiAzNDI1LFxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBhcmUgdGhlIGJlc3Qgc2hvZXMnLFxuICAgIGltYWdlOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgW2NyZWF0ZVByb2R1Y3QsIHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfV0gPSB1c2VNdXRhdGlvbihcbiAgICBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTixcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IGlucHV0cyxcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gU3VibWl0IHRoZSBpbnB1dGZpZWxkcyB0byB0aGUgYmFja2VuZFxuICAgICAgICBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XG4gICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz5cblxuICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XG4gICAgICAgICAgTmFtZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICBpZD1cImltYWdlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICBOYW1lXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XG4gICAgICAgICAgUHJpY2VcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZXNldEZvcm19PlxuICAgICAgICBSZXNldCBGb3JtXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xlYXJGb3JtfT5cbiAgICAgICAgQ2xlYXIgRm9ybVxuICAgICAgPC9idXR0b24+ICovfVxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPisgQWRkIFByb2R1Y3Q8L2J1dHRvbj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CreateProduct.js\n");

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Volumes/Files/Learning/React/Advanced-React-master/sick-fits/frontend/components/ErrorMessage.js\";\n\n\n\nconst ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"ErrorMessage__ErrorStyles\",\n  componentId: \"sc-11u5fgj-0\"\n})([\"padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}\"]);\n\nconst DisplayError = ({\n  error\n}) => {\n  if (!error || !error.message) return null;\n\n  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {\n    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ErrorStyles, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        \"data-test\": \"graphql-error\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"Shoot!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, undefined), error.message.replace('GraphQL error: ', '')]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)\n    }, i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ErrorStyles, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      \"data-test\": \"graphql-error\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Shoot!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, undefined), error.message.replace('GraphQL error: ', '')]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, undefined);\n};\n\nDisplayError.defaultProps = {\n  error: {}\n};\nDisplayError.propTypes = {\n  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayError);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcz81NTQwIl0sIm5hbWVzIjpbIkVycm9yU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiRGlzcGxheUVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwibmV0d29ya0Vycm9yIiwicmVzdWx0IiwiZXJyb3JzIiwibGVuZ3RoIiwibWFwIiwiaSIsInJlcGxhY2UiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNLQUFqQjs7QUFlQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUNsQyxNQUFJLENBQUNBLEtBQUQsSUFBVSxDQUFDQSxLQUFLLENBQUNDLE9BQXJCLEVBQThCLE9BQU8sSUFBUDs7QUFDOUIsTUFDRUQsS0FBSyxDQUFDRSxZQUFOLElBQ0FGLEtBQUssQ0FBQ0UsWUFBTixDQUFtQkMsTUFEbkIsSUFFQUgsS0FBSyxDQUFDRSxZQUFOLENBQW1CQyxNQUFuQixDQUEwQkMsTUFBMUIsQ0FBaUNDLE1BSG5DLEVBSUU7QUFDQSxXQUFPTCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUExQixDQUFpQ0UsR0FBakMsQ0FBcUMsQ0FBQ04sS0FBRCxFQUFRTyxDQUFSLGtCQUMxQyxxRUFBQyxXQUFEO0FBQUEsNkJBQ0U7QUFBRyxxQkFBVSxlQUFiO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR1AsS0FBSyxDQUFDQyxPQUFOLENBQWNPLE9BQWQsQ0FBc0IsaUJBQXRCLEVBQXlDLEVBQXpDLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBa0JELENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREssQ0FBUDtBQVFEOztBQUNELHNCQUNFLHFFQUFDLFdBQUQ7QUFBQSwyQkFDRTtBQUFHLG1CQUFVLGVBQWI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHUCxLQUFLLENBQUNDLE9BQU4sQ0FBY08sT0FBZCxDQUFzQixpQkFBdEIsRUFBeUMsRUFBekMsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQXhCRDs7QUEwQkFULFlBQVksQ0FBQ1UsWUFBYixHQUE0QjtBQUMxQlQsT0FBSyxFQUFFO0FBRG1CLENBQTVCO0FBSUFELFlBQVksQ0FBQ1csU0FBYixHQUF5QjtBQUN2QlYsT0FBSyxFQUFFVyxpREFBUyxDQUFDQztBQURNLENBQXpCO0FBSWViLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEVycm9yU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbiAgc3Ryb25nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbmA7XG5cbmNvbnN0IERpc3BsYXlFcnJvciA9ICh7IGVycm9yIH0pID0+IHtcbiAgaWYgKCFlcnJvciB8fCAhZXJyb3IubWVzc2FnZSkgcmV0dXJuIG51bGw7XG4gIGlmIChcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IgJiZcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmXG4gICAgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubGVuZ3RoXG4gICkge1xuICAgIHJldHVybiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXG4gICAgICA8RXJyb3JTdHlsZXMga2V5PXtpfT5cbiAgICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxuICAgICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZSgnR3JhcGhRTCBlcnJvcjogJywgJycpfVxuICAgICAgICA8L3A+XG4gICAgICA8L0Vycm9yU3R5bGVzPlxuICAgICkpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEVycm9yU3R5bGVzPlxuICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxuICAgICAgICA8c3Ryb25nPlNob290ITwvc3Ryb25nPlxuICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICA8L3A+XG4gICAgPC9FcnJvclN0eWxlcz5cbiAgKTtcbn07XG5cbkRpc3BsYXlFcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiB7fSxcbn07XG5cbkRpc3BsYXlFcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUVycm9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ErrorMessage.js\n");

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])([\"from{background-position:0 0;}to{background-position:100% 100%;}\"]);\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({\n  displayName: \"Form\",\n  componentId: \"sc-1xszr8q-0\"\n})([\"box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:\", \" 0.5s linear infinite;}}\"], loading);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzPzliMzUiXSwibmFtZXMiOlsibG9hZGluZyIsImtleWZyYW1lcyIsIkZvcm0iLCJzdHlsZWQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsbUVBQUgsc0VBQWI7QUFZQSxNQUFNQyxJQUFJLEdBQUdDLHdEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsOHRCQXNEU0osT0F0RFQsQ0FBVjtBQTJEZUUsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGxvYWRpbmcgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICAvKiByb3RhdGU6IDA7ICovXG4gIH1cblxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xuICAgIC8qIHJvdGF0ZTogMzYwZGVnOyAqL1xuICB9XG5gO1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgaW5wdXQsXG4gIHRleHRhcmVhLFxuICBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIH1cbiAgfVxuICBidXR0b24sXG4gIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICB9XG4gIGZpZWxkc2V0IHtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAjZmYzMDE5IDAlLFxuICAgICAgICAjZTJiMDRhIDUwJSxcbiAgICAgICAgI2ZmMzAxOSAxMDAlXG4gICAgICApO1xuICAgIH1cbiAgICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/styles/Form.js\n");

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction useForm(initial = {}) {\n  // create a state object for uor inputs\n  const {\n    0: inputs,\n    1: setInputs\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initial);\n\n  function handleChange(e) {\n    let {\n      type,\n      name,\n      value\n    } = e.target; // change input for price in number type\n\n    if (type === 'number') {\n      value = parseInt(value);\n    } // for files input\n\n\n    if (type === 'file') {\n      [value] = e.target.files;\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {\n      [name]: value\n    }));\n  } // reset to default\n\n\n  function resetForm() {\n    setInputs(initial);\n  } // clear form\n\n\n  function clearForm() {\n    // set values in entries array to empty string, after create object from new entries(empty values)\n    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));\n    setInputs(blankState);\n  } // return the things we want to surface from this custom hook\n\n\n  return {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdXNlRm9ybS5qcz9mMGUyIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJpbml0aWFsIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInBhcnNlSW50IiwiZmlsZXMiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJibGFua1N0YXRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxPQUFPLEdBQUcsRUFBM0IsRUFBK0I7QUFDNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUNILE9BQUQsQ0FBcEM7O0FBRUEsV0FBU0ksWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkIsUUFBSTtBQUFFQyxVQUFGO0FBQVFDLFVBQVI7QUFBY0M7QUFBZCxRQUF3QkgsQ0FBQyxDQUFDSSxNQUE5QixDQUR1QixDQUV2Qjs7QUFDQSxRQUFJSCxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkUsV0FBSyxHQUFHRSxRQUFRLENBQUNGLEtBQUQsQ0FBaEI7QUFDRCxLQUxzQixDQU92Qjs7O0FBQ0EsUUFBSUYsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsT0FBQ0UsS0FBRCxJQUFVSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0UsS0FBbkI7QUFDRDs7QUFFRFQsYUFBUyxpQ0FFSkQsTUFGSTtBQUdQLE9BQUNNLElBQUQsR0FBUUM7QUFIRCxPQUFUO0FBS0QsR0FyQjJDLENBdUI1Qzs7O0FBQ0EsV0FBU0ksU0FBVCxHQUFxQjtBQUNuQlYsYUFBUyxDQUFDRixPQUFELENBQVQ7QUFDRCxHQTFCMkMsQ0E0QjVDOzs7QUFDQSxXQUFTYSxTQUFULEdBQXFCO0FBQ25CO0FBQ0EsVUFBTUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FDakJELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlaEIsTUFBZixFQUF1QmlCLEdBQXZCLENBQTJCLENBQUMsQ0FBQ0MsR0FBRCxFQUFNWCxLQUFOLENBQUQsS0FBa0IsQ0FBQ1csR0FBRCxFQUFNLEVBQU4sQ0FBN0MsQ0FEaUIsQ0FBbkI7QUFHQWpCLGFBQVMsQ0FBQ1ksVUFBRCxDQUFUO0FBQ0QsR0FuQzJDLENBcUM1Qzs7O0FBQ0EsU0FBTztBQUNMYixVQURLO0FBRUxHLGdCQUZLO0FBR0xRLGFBSEs7QUFJTEM7QUFKSyxHQUFQO0FBTUQiLCJmaWxlIjoiLi9saWIvdXNlRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xuICAvLyBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIHVvciBpbnB1dHNcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgbGV0IHsgdHlwZSwgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIC8vIGNoYW5nZSBpbnB1dCBmb3IgcHJpY2UgaW4gbnVtYmVyIHR5cGVcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIH1cblxuICAgIC8vIGZvciBmaWxlcyBpbnB1dFxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcbiAgICAgIFt2YWx1ZV0gPSBlLnRhcmdldC5maWxlcztcbiAgICB9XG5cbiAgICBzZXRJbnB1dHMoe1xuICAgICAgLy8gY29weSB0aGUgZXhpc3Rpbmcgc3RhdGVcbiAgICAgIC4uLmlucHV0cyxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvLyByZXNldCB0byBkZWZhdWx0XG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XG4gIH1cblxuICAvLyBjbGVhciBmb3JtXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgICAvLyBzZXQgdmFsdWVzIGluIGVudHJpZXMgYXJyYXkgdG8gZW1wdHkgc3RyaW5nLCBhZnRlciBjcmVhdGUgb2JqZWN0IGZyb20gbmV3IGVudHJpZXMoZW1wdHkgdmFsdWVzKVxuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXG4gICAgKTtcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XG4gIH1cblxuICAvLyByZXR1cm4gdGhlIHRoaW5ncyB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXG4gIHJldHVybiB7XG4gICAgaW5wdXRzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICByZXNldEZvcm0sXG4gICAgY2xlYXJGb3JtLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ }),

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SellPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateProduct */ \"./components/CreateProduct.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Learning/React/Advanced-React-master/sick-fits/frontend/pages/sell.js\";\n\nfunction SellPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWxsLmpzP2UxNDAiXSwibmFtZXMiOlsiU2VsbFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy9zZWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWF0ZVByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsbFBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDcmVhdGVQcm9kdWN0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sell.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });
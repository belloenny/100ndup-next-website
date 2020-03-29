module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mac/Documents/work/100ndup/website/components/Footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

const Footer = ({}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2690579366" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e3fdc9eb8df23ee99a8a3cb_Logo-1%20Copy.svg",
    alt: "",
    className: "jsx-2690579366",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("p", {
    className: "jsx-2690579366" + " " + "footer-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "2020 Ounjey,")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2690579366",
    __self: undefined
  }, ".footer.jsx-2690579366{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:40px;padding:37px 42px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#2b2c30;}.footer-text.jsx-2690579366{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZNEIsQUFHNkMsQUFrQlQsV0FDZixTQWxCeUIscUJBQ0Qsb0JBQ1AsMEVBQ0csZ0JBQ0Usa0JBQ08seUJBQ2Esc0NBQ2hCLHNCQUNRLG1IQUNMLHlCQUNFLDJCQUNMLHNCQUNILDZGQUNNLHlCQUM3QiIsImZpbGUiOiIvVXNlcnMvbWFjL0RvY3VtZW50cy93b3JrLzEwMG5kdXAvd2Vic2l0ZS9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoe30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTNmZGM5ZWI4ZGYyM2VlOTlhOGEzY2JfTG9nby0xJTIwQ29weS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLXRleHRcIj4yMDIwIE91bmpleSw8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzdweCA0MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/components/Footer.tsx */"));
};

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");
var _jsxFileName = "/Users/mac/Documents/work/100ndup/website/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];





const Layout = ({
  children,
  ref
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-2150274821",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Hundred and up | creative agency"), __jsx("link", {
    rel: "stylesheet",
    href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    className: "jsx-2150274821",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap",
    rel: "stylesheet",
    className: "jsx-2150274821",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("main", {
    ref: ref,
    className: "jsx-2150274821",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2150274821",
    __self: undefined
  }, "*{box-sizing:border-box;}body{background-color:transparent;font-family:\"Roboto\",sans-serif;color:#2b2c30;font-size:14px;line-height:20px;font-weight:400;margin:0;padding:0;}h1{margin-top:0px;margin-bottom:0px;font-size:38px;line-height:44px;font-weight:700;}a{-webkit-text-decoration:none;text-decoration:none;}ul{margin-top:0px;margin-bottom:0px;padding-left:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQitCLEFBRzJDLEFBR08sQUFZZCxBQVFNLEFBSU4sZUFYRyxBQVlBLE9BM0J0QixPQUdxQyxJQWFsQixBQVlFLGVBWEEsRUFNckIsQUFNQSxXQXpCa0IsSUFjRSxVQWJELE1BY25CLFNBYnFCLGlCQUNELGdCQUNQLFNBQ0MsVUFDZCIsImZpbGUiOiIvVXNlcnMvbWFjL0RvY3VtZW50cy93b3JrLzEwMG5kdXAvd2Vic2l0ZS9jb21wb25lbnRzL0xheW91dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiLi9OYXZiYXJcIlxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyXCJcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAgIHJlZj86IFJlYWN0LkxlZ2FjeVJlZjxIVE1MRWxlbWVudD4gXG59XG5cbmNvbnN0IExheW91dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4scmVmIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+SHVuZHJlZCBhbmQgdXAgfCBjcmVhdGl2ZSBhZ2VuY3k8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZWNvbGFzLmdpdGh1Yi5pby9ub3JtYWxpemUuY3NzLzguMC4xL25vcm1hbGl6ZS5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPE5hdmJhci8+XG4gICAgICAgICAgICA8bWFpbiByZWY9e3JlZn0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/components/Layout.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mac/Documents/work/100ndup/website/components/Navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



const Navbar = ({}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "jsx-1099112367" + " " + "_100-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e785d65bc626284c68cc724_Logo-1-2.svg",
    alt: "",
    className: "jsx-1099112367",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    initial: {
      y: -30,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    },
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-1099112367" + " " + "_100-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Our Work"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-1099112367" + " " + "_100-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "About Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-1099112367" + " " + "_100-btn w-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Contact us"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1099112367",
    __self: undefined
  }, "._100-brand.jsx-1099112367{position:fixed;left:0%;top:0%;right:auto;bottom:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100px;height:100px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background-color:#000;}._100-nav-link.jsx-1099112367{margin-left:94px;-webkit-transition:opacity 200ms ease;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;color:#2b2c30;font-size:20px;font-weight:300;-webkit-text-decoration:none;text-decoration:none;}._100-nav-link.jsx-1099112367:hover{-webkit-text-decoration:underline;text-decoration:underline;}._100-btn.jsx-1099112367{margin-left:122px;padding-right:37px;padding-bottom:10px;padding-top:10px;padding-left:38px;border:0.5px solid #000;border-radius:4px;background-color:transparent;-webkit-transition:color 500ms ease, background-color 200ms ease-in-out;-webkit-transition:color 500ms ease, background-color 200ms ease-in-out;transition:color 500ms ease, background-color 200ms ease-in-out;color:#2b2c30;font-size:20px;font-weight:300;}._100-btn.jsx-1099112367:hover{border-style:solid;background-color:#2b2c30;color:#fff;}@media screen and (max-width:991px){._100-btn.jsx-1099112367{margin-left:81px;}}@media screen and (max-width:767px){._100-nav-link.jsx-1099112367{margin-left:36px;font-size:17px;}._100-btn.jsx-1099112367{margin-left:36px;}}@media screen and (max-width:479px){._100-btn.jsx-1099112367{margin-left:0px;font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL2NvbXBvbmVudHMvTmF2YmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3dCLEFBR29DLEFBNkJFLEFBVVMsQUFHUixBQWtCQyxBQU1FLEFBS0EsQUFJQSxBQUtELGVBL0VaLENBZ0ZXLENBbkRtQixBQXFDdEMsQUFLbUIsQUFJbkIsQ0FqQ21CLENBa0JNLElBM0RsQixPQUNJLENBK0VYLENBVEEsS0E3Qm9CLElBeENSLEdBMERELFNBekRTLEVBMEJVLEFBZ0NsQyxFQWxCcUIsR0FMckIsYUFsQ3lCLENBd0NILGtCQUNNLEVBeENKLG9CQUNQLEVBd0NLLE9BaEJKLFdBaUJlLEdBaEJkLGVBQ0MsV0FpQnNCLEtBaEJqQixvQkExQlQsWUFDQyxhQUNlLEtBeUJoQyxpQkFpQjBDLE1BekNULDZCQUNDLDhCQUNKLDBCQUNKLDZDQXVDUixjQUNDLGVBQ0MsSUF4Q1EsWUF5QzVCLFlBeENtQywrQkFDVixxQkFDRSxtR0FDRSx5QkFDRSwyQkFDTCxzQkFDSCw2RkFDSixlQUNPLHNCQUMxQiIsImZpbGUiOiIvVXNlcnMvbWFjL0RvY3VtZW50cy93b3JrLzEwMG5kdXAvd2Vic2l0ZS9jb21wb25lbnRzL05hdmJhci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5leHBvcnQgY29uc3QgTmF2YmFyOiBSZWFjdC5GQyA9ICh7fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtYnJhbmRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTc4NWQ2NWJjNjI2Mjg0YzY4Y2M3MjRfTG9nby0xLTIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogLTMwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiZWFzZUluXCIgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIl8xMDAtbmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgT3VyIFdvcmtcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIl8xMDAtbmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJfMTAwLWJ0biB3LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCB1c1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5fMTAwLWJyYW5kIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLl8xMDAtbmF2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOTRweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5fMTAwLW5hdi1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5fMTAwLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjJweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzdweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM4cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciA1MDBtcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgNTAwbXMgZWFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLl8xMDAtYnRuOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogODFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgICAgICAuXzEwMC1uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/components/Navbar.tsx */"));
};

/***/ }),

/***/ "./hooks/intersectionObserver.ts":
/*!***************************************!*\
  !*** ./hooks/intersectionObserver.ts ***!
  \***************************************/
/*! exports provided: useIntersectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIntersectionObserver", function() { return useIntersectionObserver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px"
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!root) {
      console.warn(`No "root" specified for Intersection Observer.

useIntersectionObserver needs to be called with an initial configuration,
where you'd pass in a "root" value (a React Ref using the useRef hook)
to an element that contains a child that would intersect with it: a 
container that's aware of its children.

Please add a root option and try again.

More info: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer`);
      return;
    }

    const observer = new IntersectionObserver(onIntersect, {
      root: root.current,
      rootMargin,
      threshold
    });

    if (!target) {
      console.warn(`No target specified for Intersection Observer.

useIntersectionObserver needs to be called with an initial configuration,
where you'd pass in a "target" value (a React Ref using the useRef hook) that
represents an element that is contained inside a root element that will be
tracked.

Please add a target option and try again.

More info: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer`);
      return;
    }

    observer.observe(target.current); // Let's clean up after ourselves.

    return () => {
      observer.unobserve(target.current);
    };
  });
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_intersectionObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/intersectionObserver */ "./hooks/intersectionObserver.ts");
var _jsxFileName = "/Users/mac/Documents/work/100ndup/website/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];





const IndexPage = () => {
  const root = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
  const target = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
  const [isThingIntersecting, setThingIntersecting] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
  Object(_hooks_intersectionObserver__WEBPACK_IMPORTED_MODULE_4__["useIntersectionObserver"])({
    root,
    target,
    onIntersect: ([{
      isIntersecting
    }]) => {
      setThingIntersecting(isIntersecting);
      console.log(`is Intersecting: ${isThingIntersecting}`);
    }
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3401615244" + " " + "body-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3401615244" + " " + "_100-hero-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].h1, {
    initial: {
      opacity: 0,
      y: 1000,
      scale: 5
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeInOut"
      }
    },
    className: "_100-hero-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "100ndup."), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].p, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    className: "_100-link-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "We help companies gain a competitive advantage in a growing digital world.", __jsx("span", {
    className: "jsx-3401615244" + " " + "_100-light-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Check out our work below or learn more about"), __jsx("a", {
    className: "jsx-3401615244" + " " + "_100-link home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "What We do"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    initial: {
      opacity: 0
    },
    animate: isThingIntersecting && {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    },
    className: "_100-clients-section",
    ref: target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3401615244" + " " + "_100-client-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-3401615244" + " " + "_100-clients-section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Previous Clients"), __jsx("div", {
    className: "jsx-3401615244" + " " + "_100-client",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb94c71bd617648b5e7_connectcoffee.png",
    alt: "",
    className: "jsx-3401615244" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb70a930ffde8cb2d49_aftaeats.png",
    alt: "",
    className: "jsx-3401615244" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb80014e66a331e30f6_avant.png",
    alt: "",
    className: "jsx-3401615244" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb8bc62621bf28d169d_Elias.png",
    alt: "",
    className: "jsx-3401615244" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })))), __jsx("div", {
    className: "jsx-3401615244" + " " + "_100-projects-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3401615244" + " " + "_100-client-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-3401615244" + " " + "_100-clients-section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "What we Do", __jsx("br", {
    className: "jsx-3401615244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }), "\u200D"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "_100-projects-catgerories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3401615244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3401615244" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "Design."), __jsx("a", {
    href: "#",
    className: "jsx-3401615244" + " " + "_100-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "View Projects")), __jsx("div", {
    className: "jsx-3401615244" + " " + "div-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-3401615244" + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "We do everthing digital design. Web Design, UI design, User Experience Design"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "_100-projects-catgerories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3401615244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3401615244" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "Development."), __jsx("a", {
    href: "#",
    className: "jsx-3401615244" + " " + "_100-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "View Projects")), __jsx("div", {
    className: "jsx-3401615244" + " " + "div-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-3401615244" + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "We convert \xA0beautiful designs into an actual working product"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "_100-projects-catgerories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3401615244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3401615244" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "Photography."), __jsx("a", {
    href: "#",
    className: "jsx-3401615244" + " " + "_100-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, "View Projects")), __jsx("div", {
    className: "jsx-3401615244" + " " + "div-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-3401615244" + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "Photography and videography."))))), __jsx("div", {
    className: "jsx-3401615244" + " " + "_100-cta-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3401615244" + " " + "_100-client-container flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3401615244" + " " + "heading-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "Ready to talk?"), __jsx("a", {
    href: "#",
    className: "jsx-3401615244" + " " + "_100-btn final w-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, "Contact Us")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3401615244",
    __self: undefined
  }, ".body-3.jsx-3401615244{background-image:url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786cd31ede362d67bc8e31_LIGHT%201.png\");background-position:100% 0%;background-size:auto;background-repeat:no-repeat;}._100-container.jsx-3401615244{position:relative;margin-top:172px;}.cta-btn.jsx-3401615244{height:46px;padding:11px 32px;background-color:#eb564f;-webkit-transition:background-color 200ms ease-in-out;-webkit-transition:background-color 200ms ease-in-out;transition:background-color 200ms ease-in-out;font-size:20px;line-height:23px;font-weight:700;}.cta-btn.jsx-3401615244:hover{background-color:rgba(235,86,79,0.78);color:#fff;}.cta-btn.second.jsx-3401615244{width:207px;margin-top:65px;padding-right:40px;padding-left:40px;background-color:#fff;color:#2b2c30;}.cta-btn.second.jsx-3401615244:hover{background-color:#eb564f;color:#fff;}._100-nav.jsx-3401615244{position:absolute;left:0%;top:0%;right:0%;bottom:auto;clear:none;background-color:transparent;}.nav-link.jsx-3401615244{margin-right:36px;color:#fff;font-size:20px;line-height:23px;font-weight:300;}.nav-container.jsx-3401615244{max-width:1080px;}.nav-menu.jsx-3401615244{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img-container.jsx-3401615244{width:80%;height:447px;background-image:-webkit-gradient( linear, left top, left bottom, from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0.5)) ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e540b6e6acfcb7a5f1_photo-studio-with-white-wooden-framed-wall-mirror-134469.png\");background-image:linear-gradient( 180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5) ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e540b6e6acfcb7a5f1_photo-studio-with-white-wooden-framed-wall-mirror-134469.png\");background-position:0px 0px,100% 50%;background-size:auto,cover;}.img-container.right.jsx-3401615244{float:right;background-image:-webkit-gradient( linear, left top, left bottom, from(transparent), to(transparent) ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e6a790ac863be7fafb_person-holding-camera-with-lens-facing-towards-man-wearing-a-3206167.png\");background-image:linear-gradient( 180deg, transparent, transparent ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e6a790ac863be7fafb_person-holding-camera-with-lens-facing-towards-man-wearing-a-3206167.png\");}.cta-section.jsx-3401615244{position:absolute;left:auto;top:0%;right:0%;bottom:0%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.cta-section.left.jsx-3401615244{left:0%;top:0%;right:auto;bottom:0%;}.project-heading.jsx-3401615244{color:#fff;font-size:82px;line-height:87px;font-weight:900;}.footer-flex-container.jsx-3401615244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:40px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;text-align:left;}.footer-logo-link.jsx-3401615244{max-height:60px;min-width:60px;-webkit-box-flex:0;-webkit-flex:0 auto;-ms-flex:0 auto;-webkit-flex:0 auto;-ms-flex:0 auto;flex:0 auto;}.footer-image.jsx-3401615244{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:0% 50%;object-position:0% 50%;}.footer-2.jsx-3401615244{margin-top:265px;padding-top:60px;padding-bottom:40px;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;background-color:#fff;text-align:center;}.footer-heading.jsx-3401615244{margin-top:0px;margin-bottom:20px;color:#2b2c30;font-size:16px;line-height:1.5;}.text-field.jsx-3401615244{width:390px;height:60px;border:1px none #000;background-color:#2b2c30;background-image:url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e451aad8e9f314060377566_mail.svg\");background-position:95% 50%;background-size:auto;background-repeat:no-repeat;color:#fff;}.field-label.jsx-3401615244{font-size:16px;}.rest.jsx-3401615244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.body.jsx-3401615244{border-style:solid;border-width:1px;background-color:#fff;color:#2b2c30;}._100-btn.form.jsx-3401615244{border-style:solid;background-color:#2b2c30;color:#fff;}._100-btn.form.jsx-3401615244:hover{background-color:transparent;color:#2b2c30;}._100-btn.final.jsx-3401615244{margin-top:41px;margin-left:0px;}._100-client.jsx-3401615244{display:-ms-grid;display:grid;margin-top:92px;justify-items:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-auto-columns:1fr;grid-column-gap:16px;grid-row-gap:16px;-ms-grid-columns:1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr;-ms-grid-rows:auto;grid-template-rows:auto;}._100-client-img.jsx-3401615244{-webkit-filter:saturate(0%);-webkit-filter:saturate(0%);filter:saturate(0%);}.heading.jsx-3401615244{font-size:55px;font-weight:700;}._100-link.jsx-3401615244{display:block;margin-top:78px;color:#2b2c30;font-size:24px;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}._100-light-text.jsx-3401615244{font-weight:100;margin-left:10px;}.home.jsx-3401615244{margin-top:0;display:inline-block;margin-left:10px;cursor:\"pointer\";}.div-block.jsx-3401615244{font-size:24px;line-height:42.5px;font-weight:300;}.paragraph.jsx-3401615244{width:588px;margin-left:75px;}.footer.jsx-3401615244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:40px;padding:37px 42px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#2b2c30;}.footer-text.jsx-3401615244{color:#fff;}.body-2.jsx-3401615244{background-color:transparent;}._100-hero-section.jsx-3401615244{position:relative;max-width:1080px;margin-right:auto;margin-left:auto;padding-top:17%;}.heading-2.jsx-3401615244{font-size:270px;}._100-hero-text.jsx-3401615244{font-size:270px;line-height:293px;text-align:center;}.link-continuation.jsx-3401615244{position:absolute;left:305px;top:363px;right:0%;bottom:0%;font-size:30px;line-height:70.5px;font-weight:300;}._100-client-container.jsx-3401615244{height:100%;max-width:1080px;margin-right:auto;margin-left:auto;}._100-client-container.flex.jsx-3401615244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}._100-clients-section-title.jsx-3401615244{margin-top:0px;margin-bottom:0px;font-weight:300;}._100-projects-section.jsx-3401615244{margin-top:156px;padding-top:102px;padding-bottom:102px;background-color:#f2f2f2;}._100-cta-section.jsx-3401615244{height:492px;}.heading-3.jsx-3401615244{font-size:47px;font-weight:900;}.body-3.jsx-3401615244{background-image:url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786cd31ede362d67bc8e31_LIGHT%201.png\");background-position:100% 0%;background-size:auto;background-repeat:no-repeat;}._100-nav-link.jsx-3401615244{margin-left:94px;-webkit-transition:opacity 200ms ease;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;color:#2b2c30;font-size:20px;font-weight:300;-webkit-text-decoration:none;text-decoration:none;}._100-nav-link.jsx-3401615244:hover{-webkit-text-decoration:underline;text-decoration:underline;}._100-btn.jsx-3401615244{margin-left:122px;padding-right:37px;padding-bottom:10px;padding-top:10px;padding-left:38px;border:0.5px solid #000;border-radius:4px;background-color:transparent;-webkit-transition:color 500ms ease, background-color 200ms ease-in-out;-webkit-transition:color 500ms ease, background-color 200ms ease-in-out;transition:color 500ms ease, background-color 200ms ease-in-out;color:#2b2c30;font-size:20px;font-weight:300;}._100-btn.jsx-3401615244:hover{border-style:solid;background-color:#2b2c30;color:#fff;}@media screen and (max-width:991px){._100-container.jsx-3401615244{padding-right:28px;padding-left:28px;}._100-btn.jsx-3401615244{margin-left:81px;}.nav-container.jsx-3401615244{max-width:none;padding-right:28px;padding-left:28px;}.body-3.jsx-3401615244{background-image:none;}.cta-section.jsx-3401615244{right:7%;}.cta-section.left.jsx-3401615244{left:7%;}.project-heading.jsx-3401615244{font-size:71px;}.footer-flex-container.jsx-3401615244{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.nav.jsx-3401615244{width:87%;}.footer-2.jsx-3401615244{padding-right:20px;padding-left:20px;}.rest.jsx-3401615244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:91%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.heading.jsx-3401615244{font-size:50px;}._100-link.jsx-3401615244{font-size:20px;}.paragraph.jsx-3401615244{width:370px;margin-left:0px;font-size:20px;text-align:right;}._100-hero-section.jsx-3401615244{padding-right:31px;padding-left:31px;}._100-hero-text.jsx-3401615244{font-size:169px;}._100-client-container.jsx-3401615244{padding-right:22px;padding-left:30px;}.body-3.jsx-3401615244{background-image:none;}}@media screen and (max-width:767px){.footer-image.jsx-3401615244{-o-object-fit:contain;object-fit:contain;}.footer-2.jsx-3401615244{padding:40px 20px;}._100-nav-link.jsx-3401615244{margin-left:36px;font-size:17px;}._100-btn.jsx-3401615244{margin-left:36px;}.rest.jsx-3401615244{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}._100-btn.jsx-3401615244{margin-left:36px;}._100-client.jsx-3401615244{grid-row-gap:40px;-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr;}.paragraph.jsx-3401615244{margin-top:25px;margin-left:0px;font-size:20px;line-height:37px;text-align:left;}._100-hero-text.jsx-3401615244{font-size:120px;}._100-client-container.jsx-3401615244{padding-right:0px;padding-left:27px;}}@media screen and (max-width:479px){._100-container.jsx-3401615244{padding-right:0px;padding-left:0px;}.nav-container.jsx-3401615244{padding-right:7px;padding-left:7px;}.img-container.jsx-3401615244{width:100%;}.cta-section.jsx-3401615244{position:absolute;left:0%;top:auto;right:0%;bottom:-17%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}._100-btn.jsx-3401615244{margin-left:0px;font-size:16px;}.cta-section.left.jsx-3401615244{left:0%;top:auto;right:0%;bottom:-17%;}.project-heading.jsx-3401615244{font-size:51px;}.footer-flex-container.jsx-3401615244{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer-logo-link.jsx-3401615244{height:60px;}.nav.jsx-3401615244{width:100%;margin-top:100px;padding-right:0px;-webkit-justify-content:space-around;-ms-flex-pack:distribute;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;background-color:#f2f2f2;}.footer-2.jsx-3401615244{padding-right:20px;padding-left:20px;text-align:left;}.footer-heading.jsx-3401615244{margin-top:20px;}.text-field.jsx-3401615244{width:260px;}._100-client.jsx-3401615244{-ms-grid-columns:1fr;grid-template-columns:1fr;}.heading.jsx-3401615244{font-size:40px;}.paragraph.jsx-3401615244{width:auto;margin-top:40px;margin-left:0px;}._100-nav-link.jsx-3401615244{margin-left:0px;font-size:16px;}._100-hero-section.jsx-3401615244{margin-top:66%;}._100-hero-text.jsx-3401615244{font-size:60px;}._100-client-container.jsx-3401615244{padding-right:21px;padding-left:21px;}._100-clients-section-title.jsx-3401615244{text-align:center;}.heading-3.jsx-3401615244{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SmlCLEFBR2lKLEFBTXRHLEFBS04sQUFXNkIsQUFLN0IsQUFTYSxBQUtQLEFBVUEsQUFRRCxBQUlDLEFBaUJSLEFBcUJFLEFBa0JNLEFBeUJWLEFBT0csQUFPUyxBQWFKLEFBU0wsQUFTTSxBQVlGLEFBUUgsQUFZRyxBQUlLLEFBWUQsQUFPQSxBQU1VLEFBS2IsQUFLQyxBQWtCVyxBQUtiLEFBS0QsQUFTRSxBQUtILEFBT0UsQUFNSCxBQUtRLEFBa0JULEFBSWtCLEFBSVgsQUFTRixBQUlBLEFBTUUsQUFXTixBQU9RLEFBb0JMLEFBTUUsQUFPSixBQUlFLEFBS3lHLEFBTXZHLEFBVVMsQUFHUixBQWtCQyxBQU9JLEFBSUYsQUFJRixBQUtPLEFBSWIsQUFJRCxBQUlPLEFBSWUsQUFnQnBCLEFBSVMsQUFLQyxBQXFCTCxBQUlBLEFBSUgsQUFPTyxBQUtILEFBSUcsQUFLRyxBQU1BLEFBS0osQUFHRCxBQUlBLEFBR1csQUFnQlgsQUFJQyxBQU1GLEFBUUEsQUFJRSxBQU9BLEFBS0EsQUFLUCxBQUlPLEFBV0YsQUFLUixBQU9PLEFBSWEsQUFnQmhCLEFBSUQsQUFVUSxBQU1ILEFBSUosQUFJUyxBQUtOLEFBSUosQUFNSyxBQUtELEFBSUEsQUFJSSxBQUtELEFBSUEsUUF4bUJmLEFBMFZQLEFBbUxhLENBdkxiLENBdFphLEFBa2JiLENBM1dlLEFBNkJILEFBOEpoQixBQXVUSSxBQW1EcUIsQUFpQ0QsQ0FsdEJGLEFBZ0JGLEFBaUZxSixBQXFHekosQUEwR0ssQUE2REEsQUFnTEcsQUFnSnBCLEFBd0JBLENBbGFxQixBQWtIekIsQ0FoSW9CLENBL0lMLEFBd0RRLEFBb0J2QixBQThEb0IsQUEwQkcsQUE4RkQsQUFpQkYsQUF5RE8sQUFpQnZCLEFBa0RBLEFBSUEsQUFnSUEsQUFxREEsQUFlQSxBQUlBLENBamtCZSxBQW9GQyxBQTBDQyxBQTBEckIsQUFJc0IsQUE2TWxCLEFBd0RvQixBQVFwQixBQW9DbUIsQUFvRG5CLEFBdUJtQixDQXhxQnZCLEFBa0lxQixBQXVFSixBQXFKSyxBQXNCb0IsQUEwQ3RDLEFBa0htQixBQUluQixBQW1CQSxBQTREYSxDQXhwQkksQUFtQ1QsQUFVRyxBQVlTLEFBd0RWLEFBbU9PLEFBbUJOLEFBK0VRLEFBNEluQixBQThCNkIsQUFrQlAsQUFPRCxBQUtBLEFBU1QsQUF3R1osQUFJQSxDQTVnQmlCLEFBT1EsQUEwTkEsQUFPSCxBQWlEQSxBQXlDQSxBQVNBLEFBOElBLEFBMENBLENBbGxCRCxBQW1FQSxBQStGQSxBQStEQSxBQTRJSSxDQXlNSyxDQWxQOUIsQUEyRkEsQUFNdUIsQ0EzZWtJLEFBNkZuSSxDQTZCRCxDQTlLVixDQU1KLEFBd0dHLEFBTU8sQUFzZkosQUFpQkcsQ0ErREksQ0Fsc0JELEFBNEZaLEFBOEphLEFBbVJELEFBeUNlLEFBc0ZELEFBcUJYLENBem9CUCxBQXNNRCxBQWtFbEIsQUEwQkEsQUF3QmMsQUFXUSxDQTdXTyxBQXlQVCxBQTRCRixBQWlObUIsQ0F0VWQsQUFnSHZCLEFBeUlBLEFBb1BJLEFBMkVBLENBcGVKLEFBNFVJLEFBaUNtQixDQWxrQlYsQUErUGIsQUEwR29CLENBdE5JLEFBWU4sQUFxR0csQUFPRCxBQWtERSxBQXNISSxDQXZkMUIsQUFrSGEsQUFrT1MsQUErREcsQUFzT3JCLEFBS0EsQUFVYSxDQTFtQmpCLEFBOEdBLEFBMkYwQixBQTJZdEIsQ0E1TG9CLEFBeUJwQixBQWlEQSxBQXlDQSxBQVNBLEFBOElvQixBQTBDcEIsQ0EzdEJXLEFBMENVLEFBZ21CckIsQ0FqVFMsRUFoTlcsQUFtRUEsQUErRkEsQUErREEsQUE0SUksQUF3RHhCLENBeGhCWSxDQTZHSSxBQWtHcEIsQUErU3lCLEFBNkRhLEFBd0hsQyxDQTFxQmlCLEFBcUVQLEFBMkhDLEFBNkNJLEFBNktKLEFBaU1LLENBMWRHLEFBNkJNLENBbURKLEFBd2JvQixDQWpxQnZCLEFBNlZELEFBb1BJLEFBdUdyQixDQTFnQmUsQUFxS0wsQ0F6VmQsQUE4WEEsQ0F4T3dCLEFBMEl4QixDQVBxQixDQXlEckIsQUFzSEksQ0FuSWlCLEFBNFdqQixDQTNwQlcsQUE4RVMsQUFvRUksQ0FsTDhCLEFBeU8xRCxBQTBMa0MsQUFnQ2xDLENBckQ2QixBQXNQSSxDQW5OWixBQTJPaUIsQ0ExYnBCLEFBa0lDLEFBa08yQixDQWxoQnRCLEFBeUZ4QixBQXlJOEIsQUFnTkssQ0ExRG5DLEFBa0hJLENBcmZnQixBQTBHSCxBQW1FQSxBQStGQSxBQStEQSxBQTRJSSxFQWpVRCxDQXJCVSxBQW9NOUIsQUFvUHdCLENBamxCRSxBQWdCTyxFQXlOSixDQTBDN0IsRUFuSW9CLEFBc0NtRyxBQTBJbkcsRUE5R3BCLENBa0l1QixBQXNQbkIsQ0E1ZXFCLEFBbVVILEVBeEt0QixDQWhPQSxDQXlJbUMsQ0E5SGxCLEFBMklqQixDQW1hSSxDQXBOSixBQXNQbUMsRUE2Q0YsR0FoaEJqQixBQWdMaEIsQUFxSitCLENBcmRiLEFBMm9CZ0IsR0FsZlAsRUFnRkksQUEyR1gsQUE2RVEsRUFqWjVCLENBOEV3QixDQXVka0IsS0FwakIxQyxPQW9WQSxBQStSOEIsQUE2Q08sQ0FsckJhLEFBbUx6QixBQW9URSxJQTVUM0IsQUFrZjhCLEVBN2lCYixDQW1VSyxHQXhMSSxBQTJCUCxDQXBTYSxBQXlhQSxHQVFkLE9BL09TLEFBbVpXLEFBK0RYLElBcGUzQixBQXNIQSxBQTRKaUMsQ0FqU1YsQUFtRVIsQUErRkssQUErRFksQUE0SWQsRUE1RkMsSUF4S0ksSUFxUWUsQ0ExU1QsRUFwT0osQUF5YUEsR0F0R0gsQ0ErR0YsQ0FoWGMsQ0ErRkwsU0FpT0ksQUFpRVMsS0FoQmpCLENBbGJPLEFBbVVILEFBc0dHLEVBck1VLElBMFNMLEdBMUJOLENBblZXLElBL0ZULEVBaUpELElBdEZBLEVBNmlCQSxDQXhTRSxFQTlEUSxHQW5VMUMsQUF5YUEsSUEyRTJDLEdBMEJSLEtBbGdCaEIsQUF3Tk8sR0FsS0ssQ0FpSk4sRUF1ZGMsRUE3aUJOLEFBb0NQLENBaVIxQixJQWhEOEIsQ0FnUjFCLENBcm9CaUIsT0F3TmEsQUEwU0gsQUErS0UsQ0ExWFAsQUErUU8sRUEvWEQsQUFvRE4sQ0EyTGdCLENBa0RkLEdBbGJELEFBK0ZPLEFBOEJSLEVBbExOLEtBZ0hjLEFBNmlCTCxFQXhTSCxNQTlEUSxBQTJNUCxFQXZRRixBQTZPVSxBQXlNL0IsQ0FockJKLEFBcWtCOEMsSUFuWnhCLENBN0hDLEFBaUpSLEtBdWRnQixNQXRkL0IsR0F2RjhCLENBMklSLENBM0ptSixDQW1GekssTUF2RzZKLFVBZ0x4SCxBQTBVUCxPQXJkSixlQXNkWSxNQXJFTCxHQTdJTCxFQXhIYyxHQXZNYixlQWlLN0IsRUE0UzhDLEVBN0lYLElBbE9mLEVBN0ZXLEtBaWJHLEtBMU9YLEFBZ2FVLEdBdldKLENBbEs3QixDQWdTa0IsU0FuVVUsQ0FxUUgsRUEvVEMsRUF1TUUsQUF1TFQsQ0E4RVcsQ0EzQk0sSUFzTEQsR0F2V0osTUErSFgsRUEvRE8sRUFyUVEsQ0ExRFosR0E0Y2UsQ0FyUXRDLE1BME8rQixDQWxEL0IsRUF3TzhCLEdBdldKLFdBK1FNLEdBcGRQLEdBdVhHLEVBc0xELEdBdldKLGFBck1JLEFBb2RZLCtCQUNWLFdBaGhCN0IsR0ErVDZCLE9Ba05FLEVBMWUvQixHQXBCMEMsVUF5YlIsR0E1SUgsT0F3UzNCLEVBdExBLENBakx5QixhQTRNTyxDQXpiSixHQTZTTixFQXJRRSxNQXNNNUIsY0FnRXVCLEVBN1N2QixBQXliK0IsRUFqWkkscUJBa1pQLFVBalpILE9Bb2RyQixjQW5kdUIscUNBb1EzQiw2QkE2SUksMkNBaFpKIiwiZmlsZSI6Ii9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbk9ic2VydmVyIH0gZnJvbSBcIi4uL2hvb2tzL2ludGVyc2VjdGlvbk9ic2VydmVyXCJcblxuXG5jb25zdCBJbmRleFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBSZWFjdC51c2VSZWYoKVxuICAgIGNvbnN0IHRhcmdldCA9IFJlYWN0LnVzZVJlZigpXG4gICAgY29uc3QgW2lzVGhpbmdJbnRlcnNlY3RpbmcsIHNldFRoaW5nSW50ZXJzZWN0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gICAgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoe1xuICAgICAgICByb290LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIG9uSW50ZXJzZWN0OiAoW3sgaXNJbnRlcnNlY3RpbmcgfV0pID0+IHtcbiAgICAgICAgICAgIHNldFRoaW5nSW50ZXJzZWN0aW5nKGlzSW50ZXJzZWN0aW5nKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYGlzIEludGVyc2VjdGluZzogJHtpc1RoaW5nSW50ZXJzZWN0aW5nfWApXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCByZWY9e3Jvb3R9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5LTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtaGVyby1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAwMCwgc2NhbGU6IDUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC45LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIl8xMDAtaGVyby10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwbmR1cC5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uaDE+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNCB9IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJfMTAwLWxpbmstc2VjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIGhlbHAgY29tcGFuaWVzIGdhaW4gYSBjb21wZXRpdGl2ZSBhZHZhbnRhZ2UgaW4gYVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jvd2luZyBkaWdpdGFsIHdvcmxkLlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXzEwMC1saWdodC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgb3V0IG91ciB3b3JrIGJlbG93IG9yIGxlYXJuIG1vcmUgYWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIl8xMDAtbGluayBob21lXCI+V2hhdCBXZSBkbzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RoaW5nSW50ZXJzZWN0aW5nICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNSwgZWFzZTogXCJlYXNlSW5cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnRzLXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICByZWY9e3RhcmdldH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnRzLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aW91cyBDbGllbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfMTAwLWNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU3ODZlYjk0YzcxYmQ2MTc2NDhiNWU3X2Nvbm5lY3Rjb2ZmZWUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnQtaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU3ODZlYjcwYTkzMGZmZGU4Y2IyZDQ5X2FmdGFlYXRzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50LWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNzg2ZWI4MDAxNGU2NmEzMzFlMzBmNl9hdmFudC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJfMTAwLWNsaWVudC1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTc4NmViOGJjNjI2MjFiZjI4ZDE2OWRfRWxpYXMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnQtaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtcHJvamVjdHMtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50cy1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCB3ZSBEb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPuKAjVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIl8xMDAtcHJvamVjdHMtY2F0Z2Vyb3JpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkRlc2lnbi48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIl8xMDAtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBQcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBkbyBldmVydGhpbmcgZGlnaXRhbCBkZXNpZ24uIFdlYiBEZXNpZ24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVSSBkZXNpZ24sIFVzZXIgRXhwZXJpZW5jZSBEZXNpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiXzEwMC1wcm9qZWN0cy1jYXRnZXJvcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+RGV2ZWxvcG1lbnQuPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJfMTAwLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgUHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgY29udmVydCDCoGJlYXV0aWZ1bCBkZXNpZ25zIGludG8gYW4gYWN0dWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nIHByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiXzEwMC1wcm9qZWN0cy1jYXRnZXJvcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+UGhvdG9ncmFwaHkuPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJfMTAwLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgUHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9ncmFwaHkgYW5kIHZpZGVvZ3JhcGh5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1jdGEtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50LWNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy0zXCI+UmVhZHkgdG8gdGFsaz88L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJfMTAwLWJ0biBmaW5hbCB3LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuYm9keS0zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNzg2Y2QzMWVkZTM2MmQ2N2JjOGUzMV9MSUdIVCUyMDEucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3MnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN0YS1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTFweCAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViNTY0ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3RhLWJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgODYsIDc5LCAwLjc4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN0YS1idG4uc2Vjb25kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN0YS1idG4uc2Vjb25kOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjU2NGY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLW5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmF2LW1lbnUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0N3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCBib3R0b20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20ocmdiYSgwLCAwLCAwLCAwLjUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8ocmdiYSgwLCAwLCAwLCAwLjUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKFwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU0NTI5ZTU0MGI2ZTZhY2ZjYjdhNWYxX3Bob3RvLXN0dWRpby13aXRoLXdoaXRlLXdvb2Rlbi1mcmFtZWQtd2FsbC1taXJyb3ItMTM0NDY5LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKFwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU0NTI5ZTU0MGI2ZTZhY2ZjYjdhNWYxX3Bob3RvLXN0dWRpby13aXRoLXdoaXRlLXdvb2Rlbi1mcmFtZWQtd2FsbC1taXJyb3ItMTM0NDY5LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHgsIDEwMCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvLCBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbWctY29udGFpbmVyLnJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tKHRyYW5zcGFyZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8odHJhbnNwYXJlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwoXCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTQ1MjllNmE3OTBhYzg2M2JlN2ZhZmJfcGVyc29uLWhvbGRpbmctY2FtZXJhLXdpdGgtbGVucy1mYWNpbmctdG93YXJkcy1tYW4td2VhcmluZy1hLTMyMDYxNjcucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxODBkZWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKFwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU0NTI5ZTZhNzkwYWM4NjNiZTdmYWZiX3BlcnNvbi1ob2xkaW5nLWNhbWVyYS13aXRoLWxlbnMtZmFjaW5nLXRvd2FyZHMtbWFuLXdlYXJpbmctYS0zMjA2MTY3LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbi5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDgycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWZsZXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1sb2dvLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXg6IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtby1vYmplY3QtcG9zaXRpb246IDAlIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI2NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LWZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IG5vbmUgIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTQ1MWFhZDhlOWYzMTQwNjAzNzc1NjZfbWFpbC5zdmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5yZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuLmZvcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0bi5mb3JtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1idG4uZmluYWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZ3JpZC1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1ncmlkLXJvd3M6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQtaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBzYXR1cmF0ZSgwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHNhdHVyYXRlKDAlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1saWdodC10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5ob21lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZGl2LWJsb2NrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0Mi41cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBhcmFncmFwaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTg4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzdweCA0MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYm9keS0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtaGVyby1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNyU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaGVhZGluZy0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjcwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1oZXJvLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saW5rLWNvbnRpbnVhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMzYzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDcwLjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQtY29udGFpbmVyLmZsZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnRzLXNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLXByb2plY3RzLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTU2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY3RhLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nLTMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0N3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5ib2R5LTMge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU3ODZjZDMxZWRlMzYyZDY3YmM4ZTMxX0xJR0hUJTIwMS5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtbmF2LWxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDUwMG1zIGVhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDUwMG1zIGVhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJvZHktMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN0YS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNyU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbi5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2plY3QtaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWZsZXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NyU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmFncmFwaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1oZXJvLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1oZXJvLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTY5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWNsaWVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keS0zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWdyaWQtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJhZ3JhcGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtaGVyby10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTclO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbi5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTE3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2plY3QtaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWZsZXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItbG9nby1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0LWZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWNsaWVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWdyaWQtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyYWdyYXBoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLW5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtaGVyby1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2NiU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWhlcm8tdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50cy1zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nLTMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl19 */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Documents/work/100ndup/website/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
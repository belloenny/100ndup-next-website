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
var _jsxFileName = "/Users/mac/Documents/work/100ndup/website/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




const Layout = ({
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-926057123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Hundred and up | creative agency"), __jsx("link", {
    rel: "stylesheet",
    href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    className: "jsx-926057123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto&display=swap",
    rel: "stylesheet",
    className: "jsx-926057123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("main", {
    className: "jsx-926057123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "926057123",
    __self: undefined
  }, "*{box-sizing:border-box;}body{font-family:'Roboto',sans-serif;}main{max-width:960px;margin:0px auto;overflow:hidden;}h1{font-size:47px !important;font-weight:900 !important;line-height:70px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQitCLEFBRzJDLEFBR1csQUFJakIsQUFLVSxnQkFKVixNQVBwQixJQVkrQixNQVIvQixBQUlvQixnQkFDcEIsS0FJcUIsaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxOYXZiYXIvPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkh1bmRyZWQgYW5kIHVwIHwgY3JlYXRpdmUgYWdlbmN5PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbmVjb2xhcy5naXRodWIuaW8vbm9ybWFsaXplLmNzcy84LjAuMS9ub3JtYWxpemUuY3NzXCIvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDdweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/components/Layout.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mac/Documents/work/100ndup/website/components/Navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Navbar = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-358786986" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e451aadd5d7212ede31d0c6_Logo-1.svg",
    width: "51",
    alt: "",
    className: "jsx-358786986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("nav", {
    role: "navigation",
    className: "jsx-358786986" + " " + "nav-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-358786986" + " " + "nav-link ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Home"), __jsx("a", {
    href: "#",
    className: "jsx-358786986" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "About"), __jsx("a", {
    href: "#",
    className: "jsx-358786986" + " " + "cta-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Contact Us")), __jsx("div", {
    className: "jsx-358786986" + " " + "nav-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "358786986",
    __self: undefined
  }, "nav.jsx-358786986{color:'';}.nav-container.jsx-358786986{max-width:1080px;margin:0 auto;}.nav-button.jsx-358786986{position:relative;float:right;padding:18px;font-size:24px;display:none;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.nav-menu.jsx-358786986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;float:right;}.nav-link.jsx-358786986{margin-right:36px;color:#fff;font-size:20px;line-height:23px;font-weight:300;position:relative;display:inline-block;vertical-align:top;-webkit-text-decoration:none;text-decoration:none;color:#222222;padding:20px;text-align:left;margin-left:auto;margin-right:auto;}.cta-btn.jsx-358786986{height:46px;padding:11px 32px;background-color:#eb564f;-webkit-transition:background-color 200ms ease-in-out;-webkit-transition:background-color 200ms ease-in-out;transition:background-color 200ms ease-in-out;font-size:20px;line-height:23px;font-weight:700;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;border-radius:0;color:white;border:0;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL2NvbXBvbmVudHMvTmF2YmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmlCLEFBSW9CLEFBRXNCLEFBSUMsQUFjRSxBQWlCRixBQWdCTixTQXJEaEIsR0FzRHNCLEtBbkRKLENBSUYsQUErQkQsRUFqQlUsU0FrQk4sQ0EvQkYsQUErQ1ksQ0FuRDdCLFVBa0J3QixFQWJMLENBK0JFLFdBZ0JxQyxHQTlDekMsR0FhQSxBQWtCRyxVQTlCRCxNQStCRyxTQTlCd0IsU0ErQnJCLGNBY3lCLE9BYjNCLFlBL0JlLE9BV0osQUFxQlQsMkJBL0JJLEdBV0ksb0JBcUJmLEVBL0JRLE9BV0ssS0FxQmQsVUEvQlEsQUEwQ04sR0FWQyxTQXJCTyxHQWdDTixJQVZBLEVBaENBLFdBMkNELEdBaENHLENBc0JELFlBV0csTUFWekIsNENBV21CLE1BakNVLEVBWDdCLE9BNkNvQixnQkFqQ1csQUFrQ2YsWUFDSCxTQUNZLE1BbkNDLGVBb0MxQixPQW5DdUIsNkZBQ0Qsa0JBQ04sWUFDaEIiLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd29yay8xMDBuZHVwL3dlYnNpdGUvY29tcG9uZW50cy9OYXZiYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmNvbnN0IE5hdmJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTQ1MWFhZGQ1ZDcyMTJlZGUzMWQwYzZfTG9nby0xLnN2Z1wiIHdpZHRoPVwiNTFcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgPG5hdiByb2xlPVwibmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cIm5hdi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImN0YS1idG5cIj5Db250YWN0IFVzPC9hPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWJ1dHRvblwiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5hdi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmF2LW1lbnUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jdGEtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMzJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjU2NGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl19 */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/components/Navbar.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

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
var _jsxFileName = "/Users/mac/Documents/work/100ndup/website/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


const API_URL = 'https://hndup-api-cms.herokuapp.com/graphql';

const IndexPage = ({
  data
}) => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2879550695" + " " + "hero-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2879550695" + " " + "container w-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2879550695" + " " + "text-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-2879550695" + " " + "body-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "100ndup"), __jsx("h1", {
    className: "jsx-2879550695" + " " + "heading1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("strong", {
    className: "jsx-2879550695",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Gain a competitive advantage", __jsx("br", {
    className: "jsx-2879550695",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), "in a connected digital world"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2879550695",
    __self: undefined
  }, ".body-text.jsx-2879550695{color:#2b2c30;font-size:24px;line-height:28px;font-weight:300;}.heading1.jsx-2879550695{color:#2b2c30;font-size:47px;line-height:70px;font-weight:900;}.hero-section.jsx-2879550695{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.container.jsx-2879550695{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:-237px;}.image.jsx-2879550695{position:absolute;left:auto;top:-48%;right:0%;bottom:0%;z-index:-1;}.text-side.jsx-2879550695{width:1020px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2lCLEFBR3VDLEFBTUEsQUFNTSxBQWdCRixBQVNBLEFBU0wsYUFDakIsQ0E5Q21CLEFBTUEsSUFzQkssQUFTVixFQXpCVyxRQTBCWixDQXJDUSxBQU1BLFFBZ0NSLENBVlksR0FoQkQsS0FYSixBQU1BLEFBZ0NOLFVBQ0MsR0FYUyxFQWhCUCxDQVhqQixBQU1BLEtBaUNBLFlBWGlCLHdEQWhCQSxhQUNpQixLQWdCWixrQkFDdEIsT0FoQmlDLDZCQUNGLDJCQUNKLHVCQUNKLHFFQUNNLHlCQUNFLDJCQUNMLHNCQUNILDZGQUN2QiIsImZpbGUiOiIvVXNlcnMvbWFjL0RvY3VtZW50cy93b3JrLzEwMG5kdXAvd2Vic2l0ZS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9obmR1cC1hcGktY21zLmhlcm9rdWFwcC5jb20vZ3JhcGhxbCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBkYXRhOiBhbnlcbn1cblxuY29uc3QgSW5kZXhQYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBkYXRhIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB3LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+MTAwbmR1cDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhaW4gYSBjb21wZXRpdGl2ZSBhZHZhbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIGEgY29ubmVjdGVkIGRpZ2l0YWwgd29ybGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU0NTJlNTMyNzczNjA0Y2EzY2UxZmE4X1JlY3RhbmdsZSUyMENvcHklMjA5LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ0OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDQ3OXB4KSAxMDB2dywgNDQ3Ljk5NjMwNzM3MzA0NjlweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuYm9keS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVyby1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjM3cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTQ4JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LXNpZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG4vLyBJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgIGNvbnN0IHJlcyAgPSBhd2FpdCBheGlvcy5wb3N0KEFQSV9VUkwse1xuLy8gICAgICAgICBxdWVyeTogYCAgICAgIFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICByZXN0YXVyYW50cyB7XG4vLyAgICAgICAgICAgICAgIE5hbWVcbi8vICAgICAgICAgICAgICAgY2F0ZWdvcmllc3tcbi8vICAgICAgICAgICAgICAgICBpZFxuLy8gICAgICAgICAgICAgICAgIG5hbWVcbi8vICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICBwaWN0dXJlIHtcbi8vICAgICAgICAgICAgICAgICB1cmxcbi8vICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgfVxuLy8gICAgIGAsXG4vLyAgICAgfSx7IGhlYWRlcnM6IHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgIH19KVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZGF0YTogcmVzLmRhdGEuZGF0YS5yZXN0YXVyYW50c1xuLy8gICAgIH1cbi8vIH1cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZSJdfQ== */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/pages/index.tsx */"));
}; // IndexPage.getInitialProps = async () => {
//     const res  = await axios.post(API_URL,{
//         query: `      
//         {
//             restaurants {
//               Name
//               categories{
//                 id
//                 name
//               }
//               picture {
//                 url
//               }
//               Description
//             }
//          }
//     `,
//     },{ headers: {
//         'Content-Type': 'application/json'
//     }})
//     return {
//         data: res.data.data.restaurants
//     }
// }


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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
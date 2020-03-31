webpackHotUpdate("static/development/pages/projects/[pid].js",{

/***/ "./pages/projects/[pid].tsx":
/*!**********************************!*\
  !*** ./pages/projects/[pid].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-images */ "./node_modules/react-images/dist/react-images.es.js");
/* harmony import */ var _components_lazyImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/lazyImage */ "./components/lazyImage.tsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "/Users/mac/Documents/work/100ndup/website/pages/projects/[pid].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ProjectPage = function ProjectPage(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      currentImage = _React$useState2[0],
      setCurrentImage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__["useState"](false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      viewerIsOpen = _React$useState4[0],
      setViewerIsOpen = _React$useState4[1];

  var openLightbox = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function (index) {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  var closeLightbox = function closeLightbox() {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    console.log(props.projects);
  });
  var photos = props.photos;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3564203654" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3564203654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3564203654" + " " + "photo-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, photos.map(function (photo, index) {
    return __jsx(_components_lazyImage__WEBPACK_IMPORTED_MODULE_7__["LazyImage"], {
      src: photo.url,
      alt: photo.name,
      key: index,
      onclick: openLightbox.bind(null, index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    });
  }))), __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["ModalGateway"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, viewerIsOpen ? __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    onClose: closeLightbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentIndex: currentImage,
    views: photos && photos.map(function (x) {
      return _objectSpread({}, x);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3564203654",
    __self: this
  }, ".container.jsx-3564203654{margin:200px auto 0 auto;max-width:1080px;}.container.jsx-3564203654 h1.jsx-3564203654{text-align:center;font-size:55px;margin-bottom:50px;}.photo-grid.jsx-3564203654{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL3Byb2plY3RzL1twaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRXdCLEFBRzhDLEFBSVAsQUFLTCxhQUNKLEtBTE0sSUFNNEMsR0FWMUMsUUFLRSxTQUp2QixVQUtBLDJCQUtBIiwiZmlsZSI6Ii9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL3Byb2plY3RzL1twaWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgQ2Fyb3VzZWwsIHsgTW9kYWwsIE1vZGFsR2F0ZXdheSB9IGZyb20gXCJyZWFjdC1pbWFnZXNcIlxuaW1wb3J0IHsgTGF6eUltYWdlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF6eUltYWdlXCJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCJcbmltcG9ydCB7IHJlYWRTeW5jIH0gZnJvbSBcImZzXCJcblxuaW50ZXJmYWNlIFBob3RvIHtcbiAgICBpZDogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgdXJsOiBzdHJpbmdcbn1cbmludGVyZmFjZSBQcm9qZWN0IHtcbiAgICBpZDogbnVtYmVyXG4gICAgVGl0bGU6IHN0cmluZ1xuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZ1xuICAgIHVwZGF0ZWRfYXQ6IHN0cmluZ1xuICAgIHBob3RvczogQXJyYXk8UGhvdG8+XG59XG5cblxuY29uc3QgUHJvamVjdFBhZ2UgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApXG4gICAgY29uc3QgW3ZpZXdlcklzT3Blbiwgc2V0Vmlld2VySXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IG9wZW5MaWdodGJveCA9IFJlYWN0LnVzZUNhbGxiYWNrKGluZGV4ID0+IHtcbiAgICAgICAgc2V0Q3VycmVudEltYWdlKGluZGV4KVxuICAgICAgICBzZXRWaWV3ZXJJc09wZW4odHJ1ZSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGNsb3NlTGlnaHRib3ggPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRJbWFnZSgwKVxuICAgICAgICBzZXRWaWV3ZXJJc09wZW4oZmFsc2UpXG4gICAgfVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnByb2plY3RzKVxuICAgIH0pXG4gICAgY29uc3QgcGhvdG9zOiBQaG90b1tdID0gcHJvcHMucGhvdG9zXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPjwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90by1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9zLm1hcCgocGhvdG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwaG90by51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwaG90by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz17b3BlbkxpZ2h0Ym94LmJpbmQobnVsbCwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxNb2RhbEdhdGV3YXk+XG4gICAgICAgICAgICAgICAge3ZpZXdlcklzT3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsIG9uQ2xvc2U9e2Nsb3NlTGlnaHRib3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4PXtjdXJyZW50SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9zICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b3MubWFwKHggPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvTW9kYWxHYXRld2F5PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjAwcHggYXV0byAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5waG90by1ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuUHJvamVjdFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL21vcm5pbmctc2hvcmUtMzE3OTkuaGVyb2t1YXBwLmNvbS9wcm9qZWN0cy8ke2NvbnRleHQucXVlcnkucGlkfWBcbiAgICApXG4gICAgY29uc3QgcHJvamVjdHMgID0gZGF0YS5qc29uKClcbiAgICByZXR1cm4gcHJvamVjdHNcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/pages/projects/[pid].tsx */"));
};

ProjectPage.getInitialProps = function _callee(context) {
  var data, projects;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("https://morning-shore-31799.herokuapp.com/projects/".concat(context.query.pid)));

        case 2:
          data = _context.sent;
          projects = data.json();
          return _context.abrupt("return", projects);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectPage);

/***/ })

})
//# sourceMappingURL=[pid].js.88f84a627eadcc801876.hot-update.js.map
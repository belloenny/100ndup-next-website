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
  var newPhotos = photos.map(function (photo) {
    return {
      id: photo.id,
      name: photo.name,
      source: photo.url
    };
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3042062639" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3042062639",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, props.Title), __jsx("div", {
    className: "jsx-3042062639" + " " + "photo-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, newPhotos.map(function (photo, index) {
    return __jsx(_components_lazyImage__WEBPACK_IMPORTED_MODULE_7__["LazyImage"], {
      src: photo.source,
      alt: photo.name,
      key: index,
      onclick: openLightbox.bind(null, index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    });
  }))), __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["ModalGateway"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, viewerIsOpen ? __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    onClose: closeLightbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentIndex: currentImage,
    views: newPhotos && newPhotos.map(function (x) {
      return _objectSpread({}, x);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3042062639",
    __self: this
  }, ".container.jsx-3042062639{margin:200px auto 0 auto;max-width:1080px;}.container.jsx-3042062639 h1.jsx-3042062639{text-align:center;font-size:55px;margin-bottom:50px;}.photo-grid.jsx-3042062639{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));}@media screen and (max-width:767px){.container.jsx-3042062639{padding:0px 20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL3Byb2plY3RzL1twaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RXdCLEFBRzhDLEFBSVAsQUFLTCxBQU1RLGFBTFosSUFNVCxDQVhlLElBTTRDLEdBVjFDLFFBS0UsU0FKdkIsVUFLQSwyQkFLQSIsImZpbGUiOiIvVXNlcnMvbWFjL0RvY3VtZW50cy93b3JrLzEwMG5kdXAvd2Vic2l0ZS9wYWdlcy9wcm9qZWN0cy9bcGlkXS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IENhcm91c2VsLCB7IE1vZGFsLCBNb2RhbEdhdGV3YXkgfSBmcm9tIFwicmVhY3QtaW1hZ2VzXCJcbmltcG9ydCB7IExhenlJbWFnZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xhenlJbWFnZVwiXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiXG5cbmludGVyZmFjZSBQaG90byB7XG4gICAgaWQ6IG51bWJlclxuICAgIG5hbWU6IHN0cmluZ1xuICAgIHVybDogc3RyaW5nXG59XG5pbnRlcmZhY2UgUHJvamVjdCB7XG4gICAgaWQ6IG51bWJlclxuICAgIFRpdGxlOiBzdHJpbmdcbiAgICBjcmVhdGVkX2F0OiBzdHJpbmdcbiAgICB1cGRhdGVkX2F0OiBzdHJpbmdcbiAgICBwaG90b3M6IEFycmF5PFBob3RvPlxufVxuXG5jb25zdCBQcm9qZWN0UGFnZSA9IHByb3BzID0+IHtcbiAgICBjb25zdCBbY3VycmVudEltYWdlLCBzZXRDdXJyZW50SW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoMClcbiAgICBjb25zdCBbdmlld2VySXNPcGVuLCBzZXRWaWV3ZXJJc09wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3Qgb3BlbkxpZ2h0Ym94ID0gUmVhY3QudXNlQ2FsbGJhY2soaW5kZXggPT4ge1xuICAgICAgICBzZXRDdXJyZW50SW1hZ2UoaW5kZXgpXG4gICAgICAgIHNldFZpZXdlcklzT3Blbih0cnVlKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgY2xvc2VMaWdodGJveCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudEltYWdlKDApXG4gICAgICAgIHNldFZpZXdlcklzT3BlbihmYWxzZSlcbiAgICB9XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMucHJvamVjdHMpXG4gICAgfSlcbiAgICBjb25zdCBwaG90b3M6IFBob3RvW10gPSBwcm9wcy5waG90b3NcbiAgICBjb25zdCBuZXdQaG90b3MgPSBwaG90b3MubWFwKHBob3RvID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBwaG90by5pZCxcbiAgICAgICAgICAgIG5hbWU6IHBob3RvLm5hbWUsXG4gICAgICAgICAgICBzb3VyY2U6IHBob3RvLnVybFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3Byb3BzLlRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90by1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuZXdQaG90b3MubWFwKChwaG90bywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bob3RvLnNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bob3RvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPXtvcGVuTGlnaHRib3guYmluZChudWxsLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPE1vZGFsR2F0ZXdheT5cbiAgICAgICAgICAgICAgICB7dmlld2VySXNPcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17Y2xvc2VMaWdodGJveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg9e2N1cnJlbnRJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3cz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bob3RvcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQaG90b3MubWFwKHggPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvTW9kYWxHYXRld2F5PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjAwcHggYXV0byAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5waG90by1ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsgXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuUHJvamVjdFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9tb3JuaW5nLXNob3JlLTMxNzk5Lmhlcm9rdWFwcC5jb20vcHJvamVjdHMvJHtjb250ZXh0LnF1ZXJ5LnBpZH1gXG4gICAgKVxuICAgIGNvbnN0IHByb2plY3RzID0gZGF0YS5qc29uKClcbiAgICByZXR1cm4gcHJvamVjdHNcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/pages/projects/[pid].tsx */"));
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
//# sourceMappingURL=[pid].js.9d7a61c78a0be16d6c23.hot-update.js.map
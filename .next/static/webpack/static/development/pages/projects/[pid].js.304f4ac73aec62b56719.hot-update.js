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
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3564203654" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3564203654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3564203654" + " " + "photo-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
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
        lineNumber: 52
      },
      __self: this
    });
  }))), __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["ModalGateway"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, viewerIsOpen ? __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    onClose: closeLightbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentIndex: currentImage,
    views: newPhotos && newPhotos.map(function (x) {
      return _objectSpread({}, x);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3564203654",
    __self: this
  }, ".container.jsx-3564203654{margin:200px auto 0 auto;max-width:1080px;}.container.jsx-3564203654 h1.jsx-3564203654{text-align:center;font-size:55px;margin-bottom:50px;}.photo-grid.jsx-3564203654{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL3Byb2plY3RzL1twaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RXdCLEFBRzhDLEFBSVAsQUFLTCxhQUNKLEtBTE0sSUFNNEMsR0FWMUMsUUFLRSxTQUp2QixVQUtBLDJCQUtBIiwiZmlsZSI6Ii9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL3Byb2plY3RzL1twaWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgQ2Fyb3VzZWwsIHsgTW9kYWwsIE1vZGFsR2F0ZXdheSB9IGZyb20gXCJyZWFjdC1pbWFnZXNcIlxuaW1wb3J0IHsgTGF6eUltYWdlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF6eUltYWdlXCJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCJcbmltcG9ydCB7IHJlYWRTeW5jIH0gZnJvbSBcImZzXCJcblxuaW50ZXJmYWNlIFBob3RvIHtcbiAgICBpZDogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgdXJsOiBzdHJpbmdcbn1cbmludGVyZmFjZSBQcm9qZWN0IHtcbiAgICBpZDogbnVtYmVyXG4gICAgVGl0bGU6IHN0cmluZ1xuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZ1xuICAgIHVwZGF0ZWRfYXQ6IHN0cmluZ1xuICAgIHBob3RvczogQXJyYXk8UGhvdG8+XG59XG5cbmNvbnN0IFByb2plY3RQYWdlID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50SW1hZ2UsIHNldEN1cnJlbnRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFt2aWV3ZXJJc09wZW4sIHNldFZpZXdlcklzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBvcGVuTGlnaHRib3ggPSBSZWFjdC51c2VDYWxsYmFjayhpbmRleCA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRJbWFnZShpbmRleClcbiAgICAgICAgc2V0Vmlld2VySXNPcGVuKHRydWUpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBjbG9zZUxpZ2h0Ym94ID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50SW1hZ2UoMClcbiAgICAgICAgc2V0Vmlld2VySXNPcGVuKGZhbHNlKVxuICAgIH1cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5wcm9qZWN0cylcbiAgICB9KVxuICAgIGNvbnN0IHBob3RvczogUGhvdG9bXSA9IHByb3BzLnBob3Rvc1xuICAgIGNvbnN0IG5ld1Bob3RvcyA9IHBob3Rvcy5tYXAocGhvdG8gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHBob3RvLmlkLFxuICAgICAgICAgICAgbmFtZTogcGhvdG8ubmFtZSxcbiAgICAgICAgICAgIHNvdXJjZTogcGhvdG8udXJsXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMT48L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICB7bmV3UGhvdG9zLm1hcCgocGhvdG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwaG90by5zb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwaG90by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz17b3BlbkxpZ2h0Ym94LmJpbmQobnVsbCwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxNb2RhbEdhdGV3YXk+XG4gICAgICAgICAgICAgICAge3ZpZXdlcklzT3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsIG9uQ2xvc2U9e2Nsb3NlTGlnaHRib3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4PXtjdXJyZW50SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQaG90b3MgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGhvdG9zLm1hcCh4ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi54XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L01vZGFsR2F0ZXdheT5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwMHB4IGF1dG8gMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciBoMSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucGhvdG8tZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cblByb2plY3RQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vbW9ybmluZy1zaG9yZS0zMTc5OS5oZXJva3VhcHAuY29tL3Byb2plY3RzLyR7Y29udGV4dC5xdWVyeS5waWR9YFxuICAgIClcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRhdGEuanNvbigpXG4gICAgcmV0dXJuIHByb2plY3RzXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQYWdlXG4iXX0= */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/pages/projects/[pid].tsx */"));
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
//# sourceMappingURL=[pid].js.304f4ac73aec62b56719.hot-update.js.map
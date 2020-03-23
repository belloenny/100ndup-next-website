webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _hooks_intersectionObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/intersectionObserver */ "./hooks/intersectionObserver.ts");

var _jsxFileName = "/Users/mac/Documents/work/100ndup/website/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];





var IndexPage = function IndexPage() {
  var root = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();
  var target = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isThingIntersecting = _React$useState2[0],
      setThingIntersecting = _React$useState2[1];

  Object(_hooks_intersectionObserver__WEBPACK_IMPORTED_MODULE_5__["useIntersectionObserver"])({
    root: root,
    target: target,
    onIntersect: function onIntersect(_ref) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
          isIntersecting = _ref2[0].isIntersecting;

      return setThingIntersecting(isIntersecting);
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    console.log("isIntersecting: ".concat(isThingIntersecting));
  }, [isThingIntersecting]);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    ref: root,
    className: "jsx-3722594762",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e785d65bc626284c68cc724_Logo-1-2.svg",
    alt: "",
    className: "jsx-3722594762",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
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
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3722594762" + " " + "_100-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Our Work"), __jsx("a", {
    href: "#",
    className: "jsx-3722594762" + " " + "_100-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "About Us"), __jsx("a", {
    href: "#",
    className: "jsx-3722594762" + " " + "_100-btn w-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Contact us")), __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-hero-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].h1, {
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
      lineNumber: 52
    },
    __self: this
  }, "100ndup."), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].p, {
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
      lineNumber: 67
    },
    __self: this
  }, "We help companies gain a competitive advantage in a growing digital world.", __jsx("span", {
    className: "jsx-3722594762" + " " + "_100-light-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Check out our work below or learn more about"), __jsx("a", {
    className: "jsx-3722594762" + " " + "_100-link home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "What We do"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    initial: {
      opacity: 0
    },
    animate: isThingIntersecting ? {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeIn"
      }
    } : {
      opacity: 0
    },
    className: "_100-clients-section",
    ref: target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-client-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3722594762" + " " + "_100-clients-section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Previous Clients"), __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-client",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb94c71bd617648b5e7_connectcoffee.png",
    alt: "",
    className: "jsx-3722594762" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb70a930ffde8cb2d49_aftaeats.png",
    alt: "",
    className: "jsx-3722594762" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb80014e66a331e30f6_avant.png",
    alt: "",
    className: "jsx-3722594762" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb8bc62621bf28d169d_Elias.png",
    alt: "",
    className: "jsx-3722594762" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-projects-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-client-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3722594762" + " " + "_100-clients-section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "What we Do", __jsx("br", {
    className: "jsx-3722594762",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), "\u200D"), __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-projects-catgerories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3722594762",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3722594762" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Design."), __jsx("a", {
    href: "#",
    className: "jsx-3722594762" + " " + "_100-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "View Projects")), __jsx("div", {
    className: "jsx-3722594762" + " " + "div-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3722594762" + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "We do everthing digital design. Web Design, UI design, User Experience Design"))), __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-projects-catgerories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3722594762",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3722594762" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Development."), __jsx("a", {
    href: "#",
    className: "jsx-3722594762" + " " + "_100-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "View Projects")), __jsx("div", {
    className: "jsx-3722594762" + " " + "div-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3722594762" + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "We convert \xA0beautiful designs into an actual working product"))), __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-projects-catgerories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3722594762",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3722594762" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Photography."), __jsx("a", {
    href: "#",
    className: "jsx-3722594762" + " " + "_100-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "View Projects")), __jsx("div", {
    className: "jsx-3722594762" + " " + "div-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3722594762" + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Photography and videography."))))), __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-cta-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3722594762" + " " + "_100-client-container flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3722594762" + " " + "heading-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Ready to talk?"), __jsx("a", {
    href: "#",
    className: "jsx-3722594762" + " " + "_100-btn final w-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Contact Us"))), __jsx("div", {
    className: "jsx-3722594762" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e3fdc9eb8df23ee99a8a3cb_Logo-1%20Copy.svg",
    alt: "",
    className: "jsx-3722594762",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-3722594762" + " " + "footer-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "2020 Ounjey,"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3722594762",
    __self: this
  }, "._100-container.jsx-3722594762{position:relative;margin-top:172px;}.cta-btn.jsx-3722594762{height:46px;padding:11px 32px;background-color:#eb564f;-webkit-transition:background-color 200ms ease-in-out;-webkit-transition:background-color 200ms ease-in-out;transition:background-color 200ms ease-in-out;font-size:20px;line-height:23px;font-weight:700;}.cta-btn.jsx-3722594762:hover{background-color:rgba(235,86,79,0.78);color:#fff;}.cta-btn.second.jsx-3722594762{width:207px;margin-top:65px;padding-right:40px;padding-left:40px;background-color:#fff;color:#2b2c30;}.cta-btn.second.jsx-3722594762:hover{background-color:#eb564f;color:#fff;}._100-nav.jsx-3722594762{position:absolute;left:0%;top:0%;right:0%;bottom:auto;clear:none;background-color:transparent;}.nav-link.jsx-3722594762{margin-right:36px;color:#fff;font-size:20px;line-height:23px;font-weight:300;}.nav-container.jsx-3722594762{max-width:1080px;}.nav-menu.jsx-3722594762{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img-container.jsx-3722594762{width:80%;height:447px;background-image:-webkit-gradient( linear, left top, left bottom, from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0.5)) ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e540b6e6acfcb7a5f1_photo-studio-with-white-wooden-framed-wall-mirror-134469.png\");background-image:linear-gradient( 180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5) ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e540b6e6acfcb7a5f1_photo-studio-with-white-wooden-framed-wall-mirror-134469.png\");background-position:0px 0px,100% 50%;background-size:auto,cover;}.img-container.right.jsx-3722594762{float:right;background-image:-webkit-gradient( linear, left top, left bottom, from(transparent), to(transparent) ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e6a790ac863be7fafb_person-holding-camera-with-lens-facing-towards-man-wearing-a-3206167.png\");background-image:linear-gradient( 180deg, transparent, transparent ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e6a790ac863be7fafb_person-holding-camera-with-lens-facing-towards-man-wearing-a-3206167.png\");}.cta-section.jsx-3722594762{position:absolute;left:auto;top:0%;right:0%;bottom:0%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.cta-section.left.jsx-3722594762{left:0%;top:0%;right:auto;bottom:0%;}.project-heading.jsx-3722594762{color:#fff;font-size:82px;line-height:87px;font-weight:900;}.footer-flex-container.jsx-3722594762{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:40px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;text-align:left;}.footer-logo-link.jsx-3722594762{max-height:60px;min-width:60px;-webkit-box-flex:0;-webkit-flex:0 auto;-ms-flex:0 auto;-webkit-flex:0 auto;-ms-flex:0 auto;flex:0 auto;}.footer-image.jsx-3722594762{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:0% 50%;object-position:0% 50%;}.nav.jsx-3722594762{position:absolute;left:auto;top:0%;right:0%;bottom:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;height:100px;margin-bottom:10px;padding-right:40px;padding-left:0px;float:right;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#2b2c30;font-size:16px;font-weight:400;-webkit-text-decoration:none;text-decoration:none;}.nav.jsx-3722594762:hover{-webkit-text-decoration:none;text-decoration:none;}.footer-2.jsx-3722594762{margin-top:265px;padding-top:60px;padding-bottom:40px;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;background-color:#fff;text-align:center;}.footer-heading.jsx-3722594762{margin-top:0px;margin-bottom:20px;color:#2b2c30;font-size:16px;line-height:1.5;}.text-field.jsx-3722594762{width:390px;height:60px;border:1px none #000;background-color:#2b2c30;background-image:url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e451aad8e9f314060377566_mail.svg\");background-position:95% 50%;background-size:auto;background-repeat:no-repeat;color:#fff;}.field-label.jsx-3722594762{font-size:16px;}.rest.jsx-3722594762{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.body.jsx-3722594762{border-style:solid;border-width:1px;background-color:#fff;color:#2b2c30;}._100-btn.jsx-3722594762{margin-left:122px;padding-right:37px;padding-bottom:10px;padding-top:10px;padding-left:38px;border:0.5px solid #000;border-radius:4px;background-color:transparent;-webkit-transition:color 500ms ease, background-color 200ms ease-in-out;-webkit-transition:color 500ms ease, background-color 200ms ease-in-out;transition:color 500ms ease, background-color 200ms ease-in-out;color:#2b2c30;font-size:20px;font-weight:300;}._100-btn.jsx-3722594762:hover{border-style:solid;background-color:#2b2c30;color:#fff;}._100-btn.form.jsx-3722594762{border-style:solid;background-color:#2b2c30;color:#fff;}._100-btn.form.jsx-3722594762:hover{background-color:transparent;color:#2b2c30;}._100-btn.final.jsx-3722594762{margin-top:41px;margin-left:0px;}._100-client.jsx-3722594762{display:-ms-grid;display:grid;margin-top:92px;justify-items:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-auto-columns:1fr;grid-column-gap:16px;grid-row-gap:16px;-ms-grid-columns:1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr;-ms-grid-rows:auto;grid-template-rows:auto;}._100-client-img.jsx-3722594762{-webkit-filter:saturate(0%);-webkit-filter:saturate(0%);filter:saturate(0%);}._100-projects-catgerories.jsx-3722594762{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:161px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.heading.jsx-3722594762{font-size:55px;font-weight:700;}._100-link.jsx-3722594762{display:block;margin-top:78px;color:#2b2c30;font-size:24px;-webkit-text-decoration:underline;text-decoration:underline;}._100-light-text.jsx-3722594762{font-weight:100;margin-left:10px;}.home.jsx-3722594762{margin-top:0;display:inline-block;margin-left:10px;cursor:\"pointer\";}.div-block.jsx-3722594762{font-size:24px;line-height:42.5px;font-weight:300;}.paragraph.jsx-3722594762{width:588px;margin-left:75px;}.footer.jsx-3722594762{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:40px;padding:37px 42px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#2b2c30;}.footer-text.jsx-3722594762{color:#fff;}.body-2.jsx-3722594762{background-color:transparent;}._100-brand.jsx-3722594762{position:fixed;left:0%;top:0%;right:auto;bottom:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100px;height:100px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000;}._100-nav-link.jsx-3722594762{margin-left:94px;-webkit-transition:opacity 200ms ease;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;color:#2b2c30;font-size:20px;font-weight:300;-webkit-text-decoration:none;text-decoration:none;}._100-nav-link.jsx-3722594762:hover{-webkit-text-decoration:underline;text-decoration:underline;}._100-hero-section.jsx-3722594762{position:relative;max-width:1080px;margin-top:17%;margin-right:auto;margin-left:auto;}.heading-2.jsx-3722594762{font-size:270px;}._100-hero-text.jsx-3722594762{font-size:270px;line-height:293px;text-align:center;}.link-continuation.jsx-3722594762{position:absolute;left:305px;top:363px;right:0%;bottom:0%;font-size:30px;line-height:70.5px;font-weight:300;}._100-client-container.jsx-3722594762{height:100%;max-width:1080px;margin-right:auto;margin-left:auto;}._100-client-container.flex.jsx-3722594762{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}._100-clients-section-title.jsx-3722594762{margin-top:0px;margin-bottom:0px;font-weight:300;}._100-projects-section.jsx-3722594762{margin-top:156px;padding-top:102px;padding-bottom:102px;background-color:#f2f2f2;}._100-cta-section.jsx-3722594762{height:492px;}.heading-3.jsx-3722594762{font-size:47px;font-weight:900;}.body-3.jsx-3722594762{background-image:url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786cd31ede362d67bc8e31_LIGHT%201.png\");background-position:100% 0%;background-size:auto;background-repeat:no-repeat;}@media screen and (max-width:991px){._100-container.jsx-3722594762{padding-right:28px;padding-left:28px;}.nav-container.jsx-3722594762{max-width:none;padding-right:28px;padding-left:28px;}.cta-section.jsx-3722594762{right:7%;}.cta-section.left.jsx-3722594762{left:7%;}.project-heading.jsx-3722594762{font-size:71px;}.footer-flex-container.jsx-3722594762{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.nav.jsx-3722594762{width:87%;}.footer-2.jsx-3722594762{padding-right:20px;padding-left:20px;}.rest.jsx-3722594762{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:91%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}._100-btn.jsx-3722594762{margin-left:81px;}.heading.jsx-3722594762{font-size:50px;}._100-link.jsx-3722594762{font-size:20px;}.paragraph.jsx-3722594762{width:370px;margin-left:0px;font-size:20px;text-align:right;}._100-hero-section.jsx-3722594762{padding-right:31px;padding-left:31px;}._100-hero-text.jsx-3722594762{font-size:169px;}._100-client-container.jsx-3722594762{padding-right:22px;padding-left:30px;}.body-3.jsx-3722594762{background-image:none;}}@media screen and (max-width:767px){.footer-image.jsx-3722594762{-o-object-fit:contain;object-fit:contain;}.footer-2.jsx-3722594762{padding:40px 20px;}.rest.jsx-3722594762{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}._100-btn.jsx-3722594762{margin-left:36px;}._100-client.jsx-3722594762{grid-row-gap:40px;-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr;}._100-projects-catgerories.jsx-3722594762{padding-left:83px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.paragraph.jsx-3722594762{margin-top:25px;margin-left:0px;font-size:20px;line-height:37px;text-align:left;}._100-nav-link.jsx-3722594762{margin-left:36px;font-size:17px;}._100-hero-text.jsx-3722594762{font-size:120px;}._100-client-container.jsx-3722594762{padding-right:0px;padding-left:27px;}}@media screen and (max-width:479px){._100-container.jsx-3722594762{padding-right:0px;padding-left:0px;}.nav-container.jsx-3722594762{padding-right:7px;padding-left:7px;}.img-container.jsx-3722594762{width:100%;}.cta-section.jsx-3722594762{position:absolute;left:0%;top:auto;right:0%;bottom:-17%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.cta-section.left.jsx-3722594762{left:0%;top:auto;right:0%;bottom:-17%;}.project-heading.jsx-3722594762{font-size:51px;}.footer-flex-container.jsx-3722594762{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer-logo-link.jsx-3722594762{height:60px;}.nav.jsx-3722594762{width:100%;margin-top:100px;padding-right:0px;-webkit-justify-content:space-around;-ms-flex-pack:distribute;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;background-color:#f2f2f2;}.footer-2.jsx-3722594762{padding-right:20px;padding-left:20px;text-align:left;}.footer-heading.jsx-3722594762{margin-top:20px;}.text-field.jsx-3722594762{width:260px;}._100-btn.jsx-3722594762{margin-left:0px;font-size:16px;}._100-client.jsx-3722594762{-ms-grid-columns:1fr;grid-template-columns:1fr;}._100-projects-catgerories.jsx-3722594762{padding-left:0px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.heading.jsx-3722594762{font-size:40px;}.paragraph.jsx-3722594762{width:auto;margin-top:40px;margin-left:0px;}._100-nav-link.jsx-3722594762{margin-left:0px;font-size:16px;}._100-hero-section.jsx-3722594762{margin-top:66%;}._100-hero-text.jsx-3722594762{font-size:60px;}._100-client-container.jsx-3722594762{padding-right:21px;padding-left:21px;}._100-clients-section-title.jsx-3722594762{text-align:center;}.heading-3.jsx-3722594762{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwTGlCLEFBRzJDLEFBS04sQUFXNkIsQUFLN0IsQUFTYSxBQUtQLEFBVUEsQUFRRCxBQUlDLEFBaUJSLEFBcUJFLEFBa0JNLEFBeUJWLEFBT0csQUFPUyxBQWFKLEFBU0wsQUFTTyxBQThCRyxBQUlKLEFBWUYsQUFRSCxBQVlHLEFBSUssQUFZRCxBQU9ELEFBa0JDLEFBTUEsQUFNVSxBQUtiLEFBS0MsQUFrQlcsQUFLUixBQVlMLEFBS0QsQUFPRSxBQUtILEFBT0UsQUFNSCxBQUtRLEFBa0JULEFBSWtCLEFBSWQsQUE0QkUsQUFVUyxBQUlSLEFBUUYsQUFJQSxBQU1FLEFBV04sQUFPUSxBQW9CTCxBQU1FLEFBT0osQUFJRSxBQUt5RyxBQVFqRyxBQUtKLEFBTU4sQUFJRCxBQUlPLEFBSWUsQUFnQnBCLEFBSVMsQUFLQyxBQXFCSCxBQUlGLEFBSUEsQUFJSCxBQU9PLEFBS0gsQUFJRyxBQUtHLEFBTUEsQUFLSixBQUlVLEFBZ0JYLEFBSUMsQUFNQSxBQWFGLEFBUUMsQUFLRCxBQUlFLEFBT0EsQUFLQSxBQUtQLEFBSU8sQUFZVixBQU9PLEFBSWEsQUFnQmhCLEFBSUQsQUFVUSxBQU1ILEFBSUosQUFJSSxBQUtLLEFBS0osQUFTRixBQUlKLEFBTUssQUFLRCxBQUlBLEFBSUksQUFLRCxBQUlBLFFBcnNCZixBQTZaUCxBQStMYSxDQW5NYixDQXpkYSxBQXFmYixDQTlhZSxBQTZCSCxBQWtPaEIsQUFzVUksQUErQ3FCLEFBK0NELENBL3lCRixBQWdCRixBQWlGcUosQUF1SXpKLEFBNElLLEFBc0dBLEFBMElHLEFBd0pwQixBQXdCQSxDQTdhcUIsQUEySnpCLENBdktvQixDQXJOTCxBQTBGUSxBQW9CdkIsQUFrR29CLEFBd0JHLEFBcUNYLEFBa0dVLEFBaUJGLEFBa0JPLEFBY3ZCLEFBc0RBLEFBSUEsQUF3SUEsQUFtRUEsQUFlQSxBQUlBLENBOXBCZSxBQThJQyxBQW9EQyxBQW1HckIsQUFJc0IsQUF1S2xCLEFBK0RvQixBQWFwQixBQW9GQSxBQVFtQixBQTZCQSxDQXJ3QnZCLEFBb0txQixBQStGSixBQTRIeUIsQUE0RXBCLEFBNkZsQixBQWdFQSxBQStCbUIsQUEyQ04sQUFnRW1CLENBdnlCZixBQW1DVCxBQVVHLEFBWVMsQUF3RFYsQUFzRUEsQUF5RlMsQUFrTEYsQUFrQk4sQUFxTFgsQUF3QjZCLEFBTUcsQUE4QlYsQUFPRCxBQUtBLEFBU1QsQUFrSFosQUFJQSxDQXZrQmlCLEFBeUJRLEFBTUEsQUFnUEgsQUEyQ0EsQUE2Q0EsQUFTQSxBQXNKQSxBQXdEQSxDQS9xQkQsQUFxR0EsQUFrRkEsQUErQ0EsQUF3R0EsQUFrR0ksQ0EwTkssQ0FwSzlCLEFBTXVCLENBbGpCa0ksQUE2Rm5JLEFBME9mLENBM0tjLENBaE5WLENBTUosQUF3R0csQUFNTyxBQXlrQkosQUFhRyxDQTZFSSxDQS94QkQsQUE0RlosQUFzRUEsQUFrSmEsQUFnU0QsQUFtQ2UsQUFvR0QsQUFxQlgsQ0F4dEJQLEFBZ1FELEFBNEVsQixBQTBCQSxBQWlFYyxBQVdRLENBMWRPLEFBbVRULEFBd0NGLEFBeURILEFBcUpzQixDQXpZZCxBQXNMdkIsQUFnTEEsQUFrUkksQUE2QkEsQ0F2Z0JKLEFBaVl1QixBQVFuQixDQXhwQlMsQUFtVWIsQUFtSm9CLENBalNJLEFBWU4sQUF1SUcsQUFPRCxBQTJGRSxBQStFSSxDQTdoQjFCLEFBa0hhLEFBc0VBLEFBMFFNLEFBOERNLEFBNE1yQixBQUtBLEFBVWEsQ0E3ckJqQixBQThHQSxBQTZIMEIsQUE0YnRCLENBcmJvQixBQXdRcEIsQUEyQ0EsQUE2Q0EsQUFTQSxBQXNKb0IsQUF3RHBCLENBeHpCVyxBQTBDVSxBQStxQnJCLENBblJTLEVBN1RXLEFBcUdBLEFBa0ZBLEFBK0NBLEFBNEJSLEFBNEVRLEFBa0dJLEFBNER4QixDQS9sQlksQ0E2R0ksQUE0SnBCLEFBNFR5QixBQXVEYSxBQW9KbEMsQ0F2d0JpQixBQXFFUCxBQXNFRSxBQXlHRCxBQU1BLEFBeURJLEFBMlhDLENBN2lCRyxBQStETSxBQXlqQlEsQ0E5ZVosQUE4V1ksQUErRlEsQ0FodkJ2QixBQTBjRCxBQXFOSSxBQTZHckIsQ0E1akJlLEFBZ1BMLENBdGNkLEFBMmVBLENBclZ3QixBQThDeEIsQUFnS0EsQUErRXNCLENBdEZELENBa0dyQixBQStFSSxDQW5Jb0IsQUFxWHBCLENBMXVCVyxBQThFUyxBQXNHSSxDQXBOOEIsQUE2UjFELEFBTUEsQUEySWtDLENBMVBWLEFBdVVLLEFBNE5JLENBNWNaLEFBZ2VpQixDQXZlcEIsQUE2TUMsQUFzTDJCLENBbmxCdEIsQUF5RnhCLEFBK004QixBQTZNSyxDQWxIbkMsQUE4S0ksQ0E1akJnQixBQTBHSCxBQXFHQSxBQWtGQSxBQStDQSxBQXdHQSxBQWtHSSxFQWxXRCxDQXZEVSxBQWlUOUIsQUFxTndCLENBL3BCRSxBQWdCTyxFQW1SSixDQW9EN0IsQUFzRnFCLEVBN1JELEFBd0VtRyxFQTRCdkgsQ0FpSnlCLEFBNERGLEFBME1uQixDQTdpQnFCLEFBNkpILEFBc2hCZ0IsQ0FoSUEsQ0E3ZWIsQUErSXpCLENBMVJBLENBMkttQyxDQWhLbEIsQUE2S2pCLENBK2NJLENBckxKLEFBNE5tQyxFQXlDRixFQWxVakMsQ0E3UmdCLEFBd1llLENBeGhCYixBQTB0QmdCLEdBamtCUCxFQWtHQyxBQXdDRyxBQThKWCxFQWpicEIsQUFxWHdCLENBdlNBLENBd2hCa0IsQ0FsZGxCLElBbkt4QixHQWd4QmtDLENBaElBLEdBL01sQyxBQXFROEIsQUF5Q08sQ0Fqd0JhLEFBcU56QixBQXFWRSxJQS9YM0IsQUFpa0I4QixDQXJWYixDQXZTQSxDQTZKSyxDQXZGTCxFQStIUyxBQXVDMUIsQ0E0S2dDLEdBMUZkLE9BeE5TLEFBa2JXLEFBaUZYLEFBMEVHLENBaElBLEdBamdCOUIsQUE0R2lDLENBM0hWLEFBcUdSLEFBa0ZNLEFBK0NELEFBd0dZLEFBa0dkLEVBcEpDLElBekhJLElBOFFlLENBM1VULEVBZ1JKLEdBL0lILENBL0NPLEFBcUdULENBM1hjLENBK0ZMLFNBNEhhLEFBa05ULEtBakRSLENBdERJLEFBK0lHLEVBaFJVLElBMlVMLEVBelBLLENBK05YLENBdFpXLElBL0ZULEVBbUxELEdBK0toQixDQXZTZ0IsRUFzRWxCLEFBc2pCa0IsQ0ExUUUsRUF2R1EsR0ErSTFDLEdBbEhpQixDQWpPQSxBQW9YMEIsR0EwQlIsSUE4Ti9CLENBbnlCZSxBQTBQTyxBQXlhTSxHQTdtQkQsQ0FtTE4sQUFnTE8sQ0FqT1QsQ0FvSkcsQUFpYWEsRUE1bkJOLEFBb0NQLENBNFIxQixJQWtEOEIsQ0FzUDFCLENBeHRCaUIsT0EwUGEsQUEyVUgsQUEyTEUsQ0FyWVAsQUE0UU8sQ0EvY1YsQUEyZWdCLENBMWJQLEFBNEVOLENBckNnQixDQTJSZCxDQS9OTSxFQXRSUCxBQStGTyxBQWdFUixFQXBOTixBQXdaYSxLQXhTQyxBQTRuQkwsRUExUUgsSUExU0wsRUFtTWEsQUEwTVAsRUFoUkYsQUFzUFUsQUFxTi9CLENBL3ZCSixBQXNvQjhDLElBbGJ4QixDQS9KQyxBQW1MUixFQTBiYyxHQTBFRSxFQXBqQmYsQ0FnT2tCLEdBL0tsQyxHQXpIOEIsQ0FxTVIsQ0FyTm1KLENBcUh6SyxFQTVCeUIsSUE3R29JLEFBdWxCOUgsVUE3V00sQUFpVlAsS0E5T0EsRUF4U0osQUF5RVcsZUE4Y0MsTUFuRUwsR0EzS1AsQUF3RUUsRUEzS2MsR0FqUWIsSUFxSVAsV0E4RHRCLEVBNlU4QyxFQW5HWCxFQXhKbkMsQ0EvSTZCLENBeENULEVBN0ZXLEtBb2ZHLEtBblBYLEFBcWJVLEdBbFhKLENBdE83QixDQTBIa0IsU0E3SlUsQ0FrWEgsRUE1YUMsRUF3TlAsQUF5Q1MsQ0E4UUUsQ0EzQk0sSUFrTUQsR0FsWEosQUF3UzNCLE1BblpnQixFQW9OTyxFQWxYUSxBQXdTUCxDQWxXTCxHQStnQmUsQ0E5UXRDLE1BbVArQixDQTNSL0IsRUE2ZDhCLEdBbFhKLE9BK0JTLElBNk9ILEdBcmhCUCxHQTBiRyxFQWtNRCxHQWxYSixPQWpNTSxNQXhFRixBQXFoQlksR0E3T2QsZ0JBL05NLEtBZ09KLE9BNk9FLFdBamxCN0IsR0E0YTZCLENBdlNILE1BNmNLLEVBM2lCL0IsR0FwQjBDLFVBNGZSLENBellYLEVBdVNRLE9BMFEzQixFQWxNQSxDQWhMeUIsYUEyTU8sQ0E1ZkosR0EwWk4sRUFsWEUsTUEwUTVCLGNBeUd1QixFQTFadkIsQUE0ZitCLEVBcGRJLEFBd1NOLHFCQTZLRCxJQTVLRyxNQXhTTixPQXlFUCxBQTRjZCxjQXBoQnVCLEFBeUVSLEFBK05PLGVBOU5OLE9BK05HLFNBOU5FLE1Bc1N6Qiw2QkFtR0ksZUF4WUosNEJBM0VBLE1BeVMwQixzQkFDMUIiLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd29yay8xMDBuZHVwL3dlYnNpdGUvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vaG9va3MvaW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIlxuXG5jb25zdCBJbmRleFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBSZWFjdC51c2VSZWYoKVxuICAgIGNvbnN0IHRhcmdldCA9IFJlYWN0LnVzZVJlZigpXG4gICAgY29uc3QgW2lzVGhpbmdJbnRlcnNlY3RpbmcsIHNldFRoaW5nSW50ZXJzZWN0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gICAgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoe1xuICAgICAgICByb290LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIG9uSW50ZXJzZWN0OiAoW3sgaXNJbnRlcnNlY3RpbmcgfV0pID0+XG4gICAgICAgICAgICBzZXRUaGluZ0ludGVyc2VjdGluZyhpc0ludGVyc2VjdGluZylcbiAgICB9KVxuXG4gICAgUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgaXNJbnRlcnNlY3Rpbmc6ICR7aXNUaGluZ0ludGVyc2VjdGluZ31gKVxuICAgIH0sIFtpc1RoaW5nSW50ZXJzZWN0aW5nXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IHJlZj17cm9vdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfMTAwLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNzg1ZDY1YmM2MjYyODRjNjhjYzcyNF9Mb2dvLTEtMi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC0zMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNSwgZWFzZTogXCJlYXNlSW5cIiB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIl8xMDAtbmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE91ciBXb3JrXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJfMTAwLW5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXzEwMC1idG4gdy1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgdXNcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtaGVyby1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAwMCwgc2NhbGU6IDUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC45LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIl8xMDAtaGVyby10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwbmR1cC5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uaDE+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNCB9IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJfMTAwLWxpbmstc2VjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIGhlbHAgY29tcGFuaWVzIGdhaW4gYSBjb21wZXRpdGl2ZSBhZHZhbnRhZ2UgaW4gYVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jvd2luZyBkaWdpdGFsIHdvcmxkLlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXzEwMC1saWdodC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgb3V0IG91ciB3b3JrIGJlbG93IG9yIGxlYXJuIG1vcmUgYWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIl8xMDAtbGluayBob21lXCI+V2hhdCBXZSBkbzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RoaW5nSW50ZXJzZWN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAyLCBlYXNlOiBcImVhc2VJblwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHsgb3BhY2l0eTogMCB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnRzLXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICByZWY9e3RhcmdldH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnRzLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aW91cyBDbGllbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfMTAwLWNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU3ODZlYjk0YzcxYmQ2MTc2NDhiNWU3X2Nvbm5lY3Rjb2ZmZWUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnQtaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU3ODZlYjcwYTkzMGZmZGU4Y2IyZDQ5X2FmdGFlYXRzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50LWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNzg2ZWI4MDAxNGU2NmEzMzFlMzBmNl9hdmFudC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJfMTAwLWNsaWVudC1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTc4NmViOGJjNjI2MjFiZjI4ZDE2OWRfRWxpYXMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnQtaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtcHJvamVjdHMtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50cy1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCB3ZSBEb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPuKAjVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1wcm9qZWN0cy1jYXRnZXJvcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+RGVzaWduLjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXzEwMC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGRvIGV2ZXJ0aGluZyBkaWdpdGFsIGRlc2lnbi4gV2ViIERlc2lnbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJIGRlc2lnbiwgVXNlciBFeHBlcmllbmNlIERlc2lnblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1wcm9qZWN0cy1jYXRnZXJvcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+RGV2ZWxvcG1lbnQuPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJfMTAwLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgUHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgY29udmVydCDCoGJlYXV0aWZ1bCBkZXNpZ25zIGludG8gYW4gYWN0dWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nIHByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtcHJvamVjdHMtY2F0Z2Vyb3JpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlBob3RvZ3JhcGh5LjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXzEwMC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBob3RvZ3JhcGh5IGFuZCB2aWRlb2dyYXBoeS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1jdGEtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50LWNvbnRhaW5lciBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy0zXCI+UmVhZHkgdG8gdGFsaz88L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJfMTAwLWJ0biBmaW5hbCB3LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWUzZmRjOWViOGRmMjNlZTk5YThhM2NiX0xvZ28tMSUyMENvcHkuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci10ZXh0XCI+MjAyMCBPdW5qZXksPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNzJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdGEtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMzJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjU2NGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN0YS1idG46aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDg2LCA3OSwgMC43OCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdGEtYnRuLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdGEtYnRuLnNlY29uZDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI1NjRmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdi1tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tKHJnYmEoMCwgMCwgMCwgMC41KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvKHJnYmEoMCwgMCwgMCwgMC41KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybChcImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNDUyOWU1NDBiNmU2YWNmY2I3YTVmMV9waG90by1zdHVkaW8td2l0aC13aGl0ZS13b29kZW4tZnJhbWVkLXdhbGwtbWlycm9yLTEzNDQ2OS5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE4MGRlZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybChcImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNDUyOWU1NDBiNmU2YWNmY2I3YTVmMV9waG90by1zdHVkaW8td2l0aC13aGl0ZS13b29kZW4tZnJhbWVkLXdhbGwtbWlycm9yLTEzNDQ2OS5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4LCAxMDAlIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bywgY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lci5yaWdodCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IGJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSh0cmFuc3BhcmVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvKHRyYW5zcGFyZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKFwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU0NTI5ZTZhNzkwYWM4NjNiZTdmYWZiX3BlcnNvbi1ob2xkaW5nLWNhbWVyYS13aXRoLWxlbnMtZmFjaW5nLXRvd2FyZHMtbWFuLXdlYXJpbmctYS0zMjA2MTY3LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybChcImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNDUyOWU2YTc5MGFjODYzYmU3ZmFmYl9wZXJzb24taG9sZGluZy1jYW1lcmEtd2l0aC1sZW5zLWZhY2luZy10b3dhcmRzLW1hbi13ZWFyaW5nLWEtMzIwNjE2Ny5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3RhLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3RhLXNlY3Rpb24ubGVmdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDg3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1mbGV4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItbG9nby1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4OiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleDogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tb2JqZWN0LXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDAlIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmF2OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudGV4dC1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBub25lICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU0NTFhYWQ4ZTlmMzE0MDYwMzc3NTY2X21haWwuc3ZnXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5maWVsZC1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucmVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTIycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciA1MDBtcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciA1MDBtcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1idG46aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0bi5mb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1idG4uZm9ybTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuLmZpbmFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1ncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDkycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWdyaWQtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZ3JpZC1yb3dzOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50LWltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1wcm9qZWN0cy1jYXRnZXJvcmllcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtbGlnaHQtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaG9tZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmRpdi1ibG9jayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDIuNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wYXJhZ3JhcGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU4OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDM3cHggNDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJvZHktMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWJyYW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLW5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1uYXYtbGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWhlcm8tc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmctMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI3MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtaGVyby10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjkzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGluay1jb250aW51YXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMzA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDM2M3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3MC41cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50LWNvbnRhaW5lci5mbGV4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50cy1zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1wcm9qZWN0cy1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWN0YS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDkycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaGVhZGluZy0zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYm9keS0zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNzg2Y2QzMWVkZTM2MmQ2N2JjOGUzMV9MSUdIVCUyMDEucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN0YS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNyU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbi5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2plY3QtaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWZsZXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NyU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDgxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmFncmFwaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1oZXJvLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1oZXJvLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTY5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWNsaWVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keS0zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWdyaWQtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLXByb2plY3RzLWNhdGdlcm9yaWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDgzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJhZ3JhcGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtbmF2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtaGVyby10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTclO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN0YS1zZWN0aW9uLmxlZnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTclO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItZmxleC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1sb2dvLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLTIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZ3JpZC1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLXByb2plY3RzLWNhdGdlcm9yaWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyYWdyYXBoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLW5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtaGVyby1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2NiU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWhlcm8tdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50cy1zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nLTMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl19 */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.8e6b78ef8378a6a8b165.hot-update.js.map
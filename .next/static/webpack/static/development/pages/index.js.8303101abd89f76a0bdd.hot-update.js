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

      setThingIntersecting(isIntersecting);
      console.log("is Intersecting: ".concat(isThingIntersecting));
    }
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3259732332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3259732332" + " " + "_100-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e785d65bc626284c68cc724_Logo-1-2.svg",
    alt: "",
    className: "jsx-3259732332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3259732332" + " " + "_100-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Our Work"), __jsx("a", {
    href: "#",
    className: "jsx-3259732332" + " " + "_100-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "About Us"), __jsx("a", {
    href: "#",
    className: "jsx-3259732332" + " " + "_100-btn w-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Contact us")), __jsx("div", {
    className: "jsx-3259732332" + " " + "_100-hero-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
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
      lineNumber: 50
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
      lineNumber: 65
    },
    __self: this
  }, "We help companies gain a competitive advantage in a growing digital world.", __jsx("span", {
    className: "jsx-3259732332" + " " + "_100-light-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Check out our work below or learn more about"), __jsx("a", {
    className: "jsx-3259732332" + " " + "_100-link home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "What We do"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
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
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3259732332" + " " + "_100-client-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3259732332" + " " + "_100-clients-section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Previous Clients"), __jsx("div", {
    className: "jsx-3259732332" + " " + "_100-client",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb94c71bd617648b5e7_connectcoffee.png",
    alt: "",
    className: "jsx-3259732332" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb70a930ffde8cb2d49_aftaeats.png",
    alt: "",
    className: "jsx-3259732332" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb80014e66a331e30f6_avant.png",
    alt: "",
    className: "jsx-3259732332" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb8bc62621bf28d169d_Elias.png",
    alt: "",
    className: "jsx-3259732332" + " " + "_100-client-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })))), __jsx("div", {
    ref: target,
    className: "jsx-3259732332" + " " + "_100-projects-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3259732332" + " " + "_100-client-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3259732332" + " " + "_100-clients-section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "What we Do", __jsx("br", {
    className: "jsx-3259732332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), "\u200D"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    initial: {
      opacity: 0,
      y: 3
    },
    animate: isThingIntersecting ? {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    } : {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    className: "_100-projects-catgerories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3259732332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3259732332" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Design."), __jsx("a", {
    href: "#",
    className: "jsx-3259732332" + " " + "_100-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "View Projects")), __jsx("div", {
    className: "jsx-3259732332" + " " + "div-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3259732332" + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "We do everthing digital design. Web Design, UI design, User Experience Design"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    initial: {
      opacity: 0,
      y: 3
    },
    animate: isThingIntersecting ? {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    } : {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    className: "_100-projects-catgerories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3259732332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3259732332" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Development."), __jsx("a", {
    href: "#",
    className: "jsx-3259732332" + " " + "_100-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "View Projects")), __jsx("div", {
    className: "jsx-3259732332" + " " + "div-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3259732332" + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "We convert \xA0beautiful designs into an actual working product"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    initial: {
      opacity: 0,
      y: 3
    },
    animate: isThingIntersecting ? {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    } : {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    className: "_100-projects-catgerories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3259732332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3259732332" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Photography."), __jsx("a", {
    href: "#",
    className: "jsx-3259732332" + " " + "_100-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "View Projects")), __jsx("div", {
    className: "jsx-3259732332" + " " + "div-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3259732332" + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Photography and videography."))))), __jsx("div", {
    className: "jsx-3259732332" + " " + "_100-cta-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3259732332" + " " + "_100-client-container flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3259732332" + " " + "heading-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Ready to talk?"), __jsx("a", {
    href: "#",
    className: "jsx-3259732332" + " " + "_100-btn final w-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Contact Us"))), __jsx("div", {
    className: "jsx-3259732332" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("img", {
    src: "https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e3fdc9eb8df23ee99a8a3cb_Logo-1%20Copy.svg",
    alt: "",
    className: "jsx-3259732332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-3259732332" + " " + "footer-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "2020 Ounjey,"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3259732332",
    __self: this
  }, "._100-container.jsx-3259732332{position:relative;margin-top:172px;}.cta-btn.jsx-3259732332{height:46px;padding:11px 32px;background-color:#eb564f;-webkit-transition:background-color 200ms ease-in-out;-webkit-transition:background-color 200ms ease-in-out;transition:background-color 200ms ease-in-out;font-size:20px;line-height:23px;font-weight:700;}.cta-btn.jsx-3259732332:hover{background-color:rgba(235,86,79,0.78);color:#fff;}.cta-btn.second.jsx-3259732332{width:207px;margin-top:65px;padding-right:40px;padding-left:40px;background-color:#fff;color:#2b2c30;}.cta-btn.second.jsx-3259732332:hover{background-color:#eb564f;color:#fff;}._100-nav.jsx-3259732332{position:absolute;left:0%;top:0%;right:0%;bottom:auto;clear:none;background-color:transparent;}.nav-link.jsx-3259732332{margin-right:36px;color:#fff;font-size:20px;line-height:23px;font-weight:300;}.nav-container.jsx-3259732332{max-width:1080px;}.nav-menu.jsx-3259732332{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img-container.jsx-3259732332{width:80%;height:447px;background-image:-webkit-gradient( linear, left top, left bottom, from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0.5)) ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e540b6e6acfcb7a5f1_photo-studio-with-white-wooden-framed-wall-mirror-134469.png\");background-image:linear-gradient( 180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5) ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e540b6e6acfcb7a5f1_photo-studio-with-white-wooden-framed-wall-mirror-134469.png\");background-position:0px 0px,100% 50%;background-size:auto,cover;}.img-container.right.jsx-3259732332{float:right;background-image:-webkit-gradient( linear, left top, left bottom, from(transparent), to(transparent) ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e6a790ac863be7fafb_person-holding-camera-with-lens-facing-towards-man-wearing-a-3206167.png\");background-image:linear-gradient( 180deg, transparent, transparent ), url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e6a790ac863be7fafb_person-holding-camera-with-lens-facing-towards-man-wearing-a-3206167.png\");}.cta-section.jsx-3259732332{position:absolute;left:auto;top:0%;right:0%;bottom:0%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.cta-section.left.jsx-3259732332{left:0%;top:0%;right:auto;bottom:0%;}.project-heading.jsx-3259732332{color:#fff;font-size:82px;line-height:87px;font-weight:900;}.footer-flex-container.jsx-3259732332{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:40px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;text-align:left;}.footer-logo-link.jsx-3259732332{max-height:60px;min-width:60px;-webkit-box-flex:0;-webkit-flex:0 auto;-ms-flex:0 auto;-webkit-flex:0 auto;-ms-flex:0 auto;flex:0 auto;}.footer-image.jsx-3259732332{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:0% 50%;object-position:0% 50%;}.nav.jsx-3259732332{position:absolute;left:auto;top:0%;right:0%;bottom:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:80%;height:100px;margin-bottom:10px;padding-right:40px;padding-left:0px;float:right;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#2b2c30;font-size:16px;font-weight:400;-webkit-text-decoration:none;text-decoration:none;}.nav.jsx-3259732332:hover{-webkit-text-decoration:none;text-decoration:none;}.footer-2.jsx-3259732332{margin-top:265px;padding-top:60px;padding-bottom:40px;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;background-color:#fff;text-align:center;}.footer-heading.jsx-3259732332{margin-top:0px;margin-bottom:20px;color:#2b2c30;font-size:16px;line-height:1.5;}.text-field.jsx-3259732332{width:390px;height:60px;border:1px none #000;background-color:#2b2c30;background-image:url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e451aad8e9f314060377566_mail.svg\");background-position:95% 50%;background-size:auto;background-repeat:no-repeat;color:#fff;}.field-label.jsx-3259732332{font-size:16px;}.rest.jsx-3259732332{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.body.jsx-3259732332{border-style:solid;border-width:1px;background-color:#fff;color:#2b2c30;}._100-btn.jsx-3259732332{margin-left:122px;padding-right:37px;padding-bottom:10px;padding-top:10px;padding-left:38px;border:0.5px solid #000;border-radius:4px;background-color:transparent;-webkit-transition:color 500ms ease, background-color 200ms ease-in-out;-webkit-transition:color 500ms ease, background-color 200ms ease-in-out;transition:color 500ms ease, background-color 200ms ease-in-out;color:#2b2c30;font-size:20px;font-weight:300;}._100-btn.jsx-3259732332:hover{border-style:solid;background-color:#2b2c30;color:#fff;}._100-btn.form.jsx-3259732332{border-style:solid;background-color:#2b2c30;color:#fff;}._100-btn.form.jsx-3259732332:hover{background-color:transparent;color:#2b2c30;}._100-btn.final.jsx-3259732332{margin-top:41px;margin-left:0px;}._100-client.jsx-3259732332{display:-ms-grid;display:grid;margin-top:92px;justify-items:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-auto-columns:1fr;grid-column-gap:16px;grid-row-gap:16px;-ms-grid-columns:1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr;-ms-grid-rows:auto;grid-template-rows:auto;}._100-client-img.jsx-3259732332{-webkit-filter:saturate(0%);-webkit-filter:saturate(0%);filter:saturate(0%);}.heading.jsx-3259732332{font-size:55px;font-weight:700;}._100-link.jsx-3259732332{display:block;margin-top:78px;color:#2b2c30;font-size:24px;-webkit-text-decoration:underline;text-decoration:underline;}._100-light-text.jsx-3259732332{font-weight:100;margin-left:10px;}.home.jsx-3259732332{margin-top:0;display:inline-block;margin-left:10px;cursor:\"pointer\";}.div-block.jsx-3259732332{font-size:24px;line-height:42.5px;font-weight:300;}.paragraph.jsx-3259732332{width:588px;margin-left:75px;}.footer.jsx-3259732332{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:40px;padding:37px 42px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#2b2c30;}.footer-text.jsx-3259732332{color:#fff;}.body-2.jsx-3259732332{background-color:transparent;}._100-brand.jsx-3259732332{position:fixed;left:0%;top:0%;right:auto;bottom:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100px;height:100px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000;}._100-nav-link.jsx-3259732332{margin-left:94px;-webkit-transition:opacity 200ms ease;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;color:#2b2c30;font-size:20px;font-weight:300;-webkit-text-decoration:none;text-decoration:none;}._100-nav-link.jsx-3259732332:hover{-webkit-text-decoration:underline;text-decoration:underline;}._100-hero-section.jsx-3259732332{position:relative;max-width:1080px;margin-top:17%;margin-right:auto;margin-left:auto;}.heading-2.jsx-3259732332{font-size:270px;}._100-hero-text.jsx-3259732332{font-size:270px;line-height:293px;text-align:center;}.link-continuation.jsx-3259732332{position:absolute;left:305px;top:363px;right:0%;bottom:0%;font-size:30px;line-height:70.5px;font-weight:300;}._100-client-container.jsx-3259732332{height:100%;max-width:1080px;margin-right:auto;margin-left:auto;}._100-client-container.flex.jsx-3259732332{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}._100-clients-section-title.jsx-3259732332{margin-top:0px;margin-bottom:0px;font-weight:300;}._100-projects-section.jsx-3259732332{margin-top:156px;padding-top:102px;padding-bottom:102px;background-color:#f2f2f2;}._100-cta-section.jsx-3259732332{height:492px;}.heading-3.jsx-3259732332{font-size:47px;font-weight:900;}.body-3.jsx-3259732332{background-image:url(\"https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786cd31ede362d67bc8e31_LIGHT%201.png\");background-position:100% 0%;background-size:auto;background-repeat:no-repeat;}@media screen and (max-width:991px){._100-container.jsx-3259732332{padding-right:28px;padding-left:28px;}.nav-container.jsx-3259732332{max-width:none;padding-right:28px;padding-left:28px;}.cta-section.jsx-3259732332{right:7%;}.cta-section.left.jsx-3259732332{left:7%;}.project-heading.jsx-3259732332{font-size:71px;}.footer-flex-container.jsx-3259732332{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.nav.jsx-3259732332{width:87%;}.footer-2.jsx-3259732332{padding-right:20px;padding-left:20px;}.rest.jsx-3259732332{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:91%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}._100-btn.jsx-3259732332{margin-left:81px;}.heading.jsx-3259732332{font-size:50px;}._100-link.jsx-3259732332{font-size:20px;}.paragraph.jsx-3259732332{width:370px;margin-left:0px;font-size:20px;text-align:right;}._100-hero-section.jsx-3259732332{padding-right:31px;padding-left:31px;}._100-hero-text.jsx-3259732332{font-size:169px;}._100-client-container.jsx-3259732332{padding-right:22px;padding-left:30px;}.body-3.jsx-3259732332{background-image:none;}}@media screen and (max-width:767px){.footer-image.jsx-3259732332{-o-object-fit:contain;object-fit:contain;}.footer-2.jsx-3259732332{padding:40px 20px;}.rest.jsx-3259732332{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}._100-btn.jsx-3259732332{margin-left:36px;}._100-client.jsx-3259732332{grid-row-gap:40px;-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr;}.paragraph.jsx-3259732332{margin-top:25px;margin-left:0px;font-size:20px;line-height:37px;text-align:left;}._100-nav-link.jsx-3259732332{margin-left:36px;font-size:17px;}._100-hero-text.jsx-3259732332{font-size:120px;}._100-client-container.jsx-3259732332{padding-right:0px;padding-left:27px;}}@media screen and (max-width:479px){._100-container.jsx-3259732332{padding-right:0px;padding-left:0px;}.nav-container.jsx-3259732332{padding-right:7px;padding-left:7px;}.img-container.jsx-3259732332{width:100%;}.cta-section.jsx-3259732332{position:absolute;left:0%;top:auto;right:0%;bottom:-17%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.cta-section.left.jsx-3259732332{left:0%;top:auto;right:0%;bottom:-17%;}.project-heading.jsx-3259732332{font-size:51px;}.footer-flex-container.jsx-3259732332{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer-logo-link.jsx-3259732332{height:60px;}.nav.jsx-3259732332{width:100%;margin-top:100px;padding-right:0px;-webkit-justify-content:space-around;-ms-flex-pack:distribute;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;background-color:#f2f2f2;}.footer-2.jsx-3259732332{padding-right:20px;padding-left:20px;text-align:left;}.footer-heading.jsx-3259732332{margin-top:20px;}.text-field.jsx-3259732332{width:260px;}._100-btn.jsx-3259732332{margin-left:0px;font-size:16px;}._100-client.jsx-3259732332{-ms-grid-columns:1fr;grid-template-columns:1fr;}.heading.jsx-3259732332{font-size:40px;}.paragraph.jsx-3259732332{width:auto;margin-top:40px;margin-left:0px;}._100-nav-link.jsx-3259732332{margin-left:0px;font-size:16px;}._100-hero-section.jsx-3259732332{margin-top:66%;}._100-hero-text.jsx-3259732332{font-size:60px;}._100-client-container.jsx-3259732332{padding-right:21px;padding-left:21px;}._100-clients-section-title.jsx-3259732332{text-align:center;}.heading-3.jsx-3259732332{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3UGlCLEFBRzJDLEFBS04sQUFXNkIsQUFLN0IsQUFTYSxBQUtQLEFBVUEsQUFRRCxBQUlDLEFBaUJSLEFBcUJFLEFBa0JNLEFBeUJWLEFBT0csQUFPUyxBQWFKLEFBU0wsQUFTTyxBQThCRyxBQUlKLEFBWUYsQUFRSCxBQVlHLEFBSUssQUFZRCxBQU9ELEFBa0JDLEFBTUEsQUFNVSxBQUtiLEFBS0MsQUFrQlcsQUFLYixBQUtELEFBT0UsQUFLSCxBQU9FLEFBTUgsQUFLUSxBQWtCVCxBQUlrQixBQUlkLEFBNEJFLEFBVVMsQUFJUixBQVFGLEFBSUEsQUFNRSxBQVdOLEFBT1EsQUFvQkwsQUFNRSxBQU9KLEFBSUUsQUFLeUcsQUFRakcsQUFLSixBQU1OLEFBSUQsQUFJTyxBQUllLEFBZ0JwQixBQUlTLEFBS0MsQUFxQkgsQUFJRixBQUlBLEFBSUgsQUFPTyxBQUtILEFBSUcsQUFLRyxBQU1BLEFBS0osQUFJVSxBQWdCWCxBQUlDLEFBTUYsQUFRQyxBQUtELEFBSUUsQUFPQSxBQUtBLEFBS1AsQUFJTyxBQVlWLEFBT08sQUFJYSxBQWdCaEIsQUFJRCxBQVVRLEFBTUgsQUFJSixBQUlJLEFBS0ssQUFLTixBQUlKLEFBTUssQUFLRCxBQUlBLEFBSUksQUFLRCxBQUlBLFFBbnFCZixBQWlaUCxBQWtMYSxDQXRMYixDQTdjYSxBQXllYixDQWxhZSxBQTZCSCxBQXNOaEIsQUF5VEksQUErQ3FCLEFBc0NELENBN3dCRixBQWdCRixBQWlGcUosQUF1SXpKLEFBZ0lLLEFBc0dBLEFBMElHLEFBMklwQixBQXdCQSxDQWhhcUIsQUEySnpCLENBdktvQixDQXpNTCxBQTBGUSxBQW9CdkIsQUFzRm9CLEFBd0JHLEFBcUNYLEFBa0dVLEFBaUJGLEFBa0JPLEFBY3ZCLEFBc0RBLEFBSUEsQUEySEEsQUEwREEsQUFlQSxBQUlBLENBNW5CZSxBQThJQyxBQXdDQyxBQW1HckIsQUFJc0IsQUF1S2xCLEFBa0RvQixBQWFwQixBQW9GQSxBQVFtQixBQW9CQSxDQW51QnZCLEFBb0txQixBQStGSixBQWdIeUIsQUE0RXBCLEFBNkZsQixBQWdFQSxBQWtCbUIsQUEyQ04sQ0E5c0JJLEFBbUNULEFBVUcsQUFZUyxBQXdEVixBQXNFQSxBQXlGUyxBQXNLRixBQWtCTixBQXFMWCxBQXdCNkIsQUF1QlAsQUFPRCxBQUtBLEFBU1QsQUF5R1osQUFJQSxDQXJpQmlCLEFBeUJRLEFBTUEsQUFvT0gsQUEyQ0EsQUE2Q0EsQUFTQSxBQXlJQSxBQStDQSxDQTdvQkQsQUFxR0EsQUFxSEEsQUF3R0EsQUFrR0ksQ0E2TUssQ0F2SjlCLEFBTXVCLENBdGlCa0ksQUE2Rm5JLEFBOE5mLENBL0pjLENBaE5WLENBTUosQUF3R0csQUFNTyxBQWdqQkosQUFhRyxDQW9FSSxDQTd2QkQsQUE0RlosQUFzRUEsQUFrSmEsQUFvUkQsQUFtQ2UsQUF1RkQsQUFxQlgsQ0EvckJQLEFBZ1FELEFBZ0VsQixBQTBCQSxBQWlFYyxBQVdRLENBOWNPLEFBbVRULEFBNEJGLEFBeURILEFBcUpzQixDQTdYZCxBQTBLdkIsQUFnTEEsQUFxUUksQUFvQkEsQ0FyZUosQUF3V3VCLEFBUW5CLENBL25CUyxBQXVUYixBQW1Kb0IsQ0FyUkksQUFZTixBQTJIRyxBQU9ELEFBMkZFLEFBK0VJLENBamhCMUIsQUFrSGEsQUFzRUEsQUE4UE0sQUE4RE0sQUErTHJCLEFBS0EsQUFVYSxDQXBxQmpCLEFBOEdBLEFBNkgwQixBQW1hdEIsQ0E1Wm9CLEFBNFBwQixBQTJDQSxBQTZDQSxBQVNBLEFBeUlvQixBQStDcEIsQ0F0eEJXLEFBMENVLEFBc3BCckIsQ0F0UVMsRUFqVFcsQUFxR0EsQUFxSEEsQUE0QlIsQUE0RVEsQUFrR0ksQUE0RHhCLENBbmxCWSxDQTZHSSxBQTRKcEIsQUFnVHlCLEFBdURhLEFBOEhsQyxDQXJ1QmlCLEFBcUVQLEFBc0VFLEFBeUdELEFBTUEsQUE2Q0ksQUE4V0MsQ0FwaEJHLEFBK0RNLENBMkVKLEFBb2JvQixDQXZ0QnZCLEFBOGJELEFBd01JLEFBNkdyQixDQW5pQmUsQUFvT0wsQ0ExYmQsQUErZEEsQ0F6VXdCLEFBOEN4QixBQW9KQSxBQStFc0IsQ0F0RkQsQ0FrR3JCLEFBK0VJLENBbklvQixBQXdXcEIsQ0FqdEJXLEFBOEVTLEFBc0dJLENBcE44QixBQTZSMUQsQUFNQSxBQStIa0MsQ0E5T1YsQUEyVEssQUErTUksQ0FuYlosQUF1Y2lCLENBOWNwQixBQWlNQyxBQXNMMkIsQ0F2a0J0QixBQXlGeEIsQUFtTThCLEFBNk1LLENBbEhuQyxBQThLSSxDQWhqQmdCLEFBMEdILEFBcUdBLEFBcUhBLEFBd0dBLEFBa0dJLEVBdFZELENBdkRVLEFBcVM5QixBQXdNd0IsQ0F0b0JFLEFBZ0JPLEVBbVJKLENBd0M3QixBQXNGcUIsRUFqUkQsQUF3RW1HLEVBNEJ2SCxDQXFJeUIsQUE0REYsQUEwTW5CLENBamlCcUIsQUE2SkgsRUF2RkcsQUErSXpCLENBMVJBLENBMkttQyxDQWhLbEIsQUE2S2pCLENBc2JJLENBeEtKLEFBK01tQyxFQXlDRixFQXJUakMsQ0FqUmdCLEFBNFhlLENBNWdCYixBQWlzQmdCLEdBeGlCUCxFQWtHQyxBQXdDRyxBQWtKWCxFQXJhcEIsQUF5V3dCLENBM1JBLENBNGdCa0IsQ0F0Y2xCLElBbkt4QixPQXFiQSxBQXdQOEIsQUF5Q08sQ0F4dUJhLEFBcU56QixBQXlVRSxJQW5YM0IsQUF3aUI4QixDQXhVYixDQTNSQSxDQTZKSyxDQXZGTCxFQStIUyxBQTJCMUIsQ0E0S2dDLEdBMUZkLE9BNU1TLEFBc2FXLEFBb0VYLElBOWhCM0IsQUE0R2lDLENBM0hWLEFBcUdSLEFBcUhLLEFBd0dZLEFBa0dkLEVBcEpDLElBN0dJLElBa1FlLENBL1RULEVBb1FKLEdBL0lILENBc0RGLENBL1djLENBK0ZMLFNBNEhhLEFBc01ULEtBakRSLENBdERJLEFBK0lHLEVBcFFVLElBK1RMLEdBMUJOLENBMVlXLElBL0ZULEVBbUxELEdBbUtoQixDQTNSZ0IsRUFzRWxCLEFBNmhCa0IsQ0E3UEUsRUF2R1EsR0ErSTFDLEdBbEhpQixDQXJOQSxBQXdXMEIsR0EwQlIsS0F6akJoQixBQTBQTyxHQXBNSyxDQW1MTixBQW9LTyxDQXJOVCxDQTRoQmdCLEVBbm1CTixBQW9DUCxDQWdSMUIsSUFrRDhCLENBeU8xQixDQS9yQmlCLE9BMFBhLEFBK1RILEFBOEtFLENBeFhQLEFBNFFPLENBbmNWLENBaURTLEFBNEVOLENBckNnQixDQStRZCxHQXplRCxBQStGTyxBQWdFUixFQXBOTixBQTRZYSxLQTVSQyxBQW1tQkwsRUE3UEgsSUE5UkwsRUF1TGEsQUEwTVAsRUFwUUYsQUEwT1UsQUF3TS9CLENBdHVCSixBQTBuQjhDLElBdGF4QixDQS9KQyxBQW1MUixLQTJlZ0IsRUEzaEJmLENBb05rQixHQW5LbEMsR0F6SDhCLENBcU1SLENBck5tSixDQXFIekssRUE1QnlCLElBN0dvSSxVQTBPeEgsQUFxVVAsS0E5T0EsRUE1UkosQUF5RVcsZUFrY0MsTUFuRUwsR0EzS1AsQUF3RUUsRUEvSmMsR0FqUWIsSUFxSVAsV0E4RHRCLEVBaVU4QyxFQW5HWCxHQTNSTixDQXhDVCxFQTdGVyxLQXdlRyxLQXZPWCxBQTRaVSxHQXJXSixDQTFON0IsQ0EwSGtCLFNBN0pVLENBc1dILEVBaGFDLEVBd05QLEFBeUNTLENBa1FFLENBM0JNLElBcUxELEdBcldKLE1BL0ZYLEVBd01PLEVBdFdRLEFBNFJQLENBdFZMLEdBbWdCZSxDQWxRdEMsTUF1TytCLENBL1EvQixFQW9jOEIsR0FyV0osT0ErQlMsSUE2T0gsR0F6Z0JQLEdBOGFHLEVBcUxELEdBcldKLE9BckxNLE1BeEVGLEFBeWdCWSxHQTdPZCxnQkFuTk0sS0FvTkosT0E2T0UsV0Fya0I3QixHQWdhNkIsQ0EzUkgsTUFpY0ssRUEvaEIvQixHQXBCMEMsVUFnZlIsQ0E3WFgsRUEyUlEsT0E2UDNCLEVBckxBLENBaEx5QixhQTJNTyxDQWhmSixHQThZTixFQXRXRSxNQThQNUIsY0F5R3VCLEVBOVl2QixBQWdmK0IsRUF4Y0ksQUE0Uk4scUJBNktELElBNUtHLE1BNVJOLE9BeUVQLEFBZ2NkLGNBeGdCdUIsQUF5RVIsQUFtTk8sZUFsTk4sT0FtTkcsU0FsTkUsTUEwUnpCLDZCQW1HSSxlQTVYSiw0QkEzRUEsTUE2UjBCLHNCQUMxQiIsImZpbGUiOiIvVXNlcnMvbWFjL0RvY3VtZW50cy93b3JrLzEwMG5kdXAvd2Vic2l0ZS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciB9IGZyb20gXCIuLi9ob29rcy9pbnRlcnNlY3Rpb25PYnNlcnZlclwiXG5cbmNvbnN0IEluZGV4UGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IFJlYWN0LnVzZVJlZigpXG4gICAgY29uc3QgdGFyZ2V0ID0gUmVhY3QudXNlUmVmKClcbiAgICBjb25zdCBbaXNUaGluZ0ludGVyc2VjdGluZywgc2V0VGhpbmdJbnRlcnNlY3RpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcih7XG4gICAgICAgIHJvb3QsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgb25JbnRlcnNlY3Q6IChbeyBpc0ludGVyc2VjdGluZyB9XSkgPT4ge1xuICAgICAgICAgICAgc2V0VGhpbmdJbnRlcnNlY3RpbmcoaXNJbnRlcnNlY3RpbmcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgaXMgSW50ZXJzZWN0aW5nOiAke2lzVGhpbmdJbnRlcnNlY3Rpbmd9YClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0IHJlZj17cm9vdH0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTc4NWQ2NWJjNjI2Mjg0YzY4Y2M3MjRfTG9nby0xLTIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAtMzAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiZWFzZUluXCIgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJfMTAwLW5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBPdXIgV29ya1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXzEwMC1uYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIl8xMDAtYnRuIHctYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IHVzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfMTAwLWhlcm8tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmgxXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwMDAsIHNjYWxlOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJfMTAwLWhlcm8tdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMG5kdXAuXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmgxPlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjQgfSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzEwMC1saW5rLXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBoZWxwIGNvbXBhbmllcyBnYWluIGEgY29tcGV0aXRpdmUgYWR2YW50YWdlIGluIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3dpbmcgZGlnaXRhbCB3b3JsZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIl8xMDAtbGlnaHQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIG91dCBvdXIgd29yayBiZWxvdyBvciBsZWFybiBtb3JlIGFib3V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJfMTAwLWxpbmsgaG9tZVwiPldoYXQgV2UgZG88L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNUaGluZ0ludGVyc2VjdGluZyAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiZWFzZUluXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50cy1zZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0YXJnZXR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50cy1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXMgQ2xpZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNzg2ZWI5NGM3MWJkNjE3NjQ4YjVlN19jb25uZWN0Y29mZmVlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50LWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNzg2ZWI3MGE5MzBmZmRlOGNiMmQ0OV9hZnRhZWF0cy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJfMTAwLWNsaWVudC1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTc4NmViODAwMTRlNjZhMzMxZTMwZjZfYXZhbnQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnQtaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU3ODZlYjhiYzYyNjIxYmYyOGQxNjlkX0VsaWFzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIl8xMDAtY2xpZW50LWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfMTAwLXByb2plY3RzLXNlY3Rpb25cIiByZWY9e3RhcmdldH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnRzLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0IHdlIERvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+4oCNXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUaGluZ0ludGVyc2VjdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJlYXNlT3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJfMTAwLXByb2plY3RzLWNhdGdlcm9yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkRlc2lnbi48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIl8xMDAtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBQcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBkbyBldmVydGhpbmcgZGlnaXRhbCBkZXNpZ24uIFdlYiBEZXNpZ24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVSSBkZXNpZ24sIFVzZXIgRXhwZXJpZW5jZSBEZXNpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUaGluZ0ludGVyc2VjdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJlYXNlT3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJfMTAwLXByb2plY3RzLWNhdGdlcm9yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkRldmVsb3BtZW50LjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXzEwMC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGNvbnZlcnQgwqBiZWF1dGlmdWwgZGVzaWducyBpbnRvIGFuIGFjdHVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2luZyBwcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVGhpbmdJbnRlcnNlY3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiZWFzZU91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzEwMC1wcm9qZWN0cy1jYXRnZXJvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5QaG90b2dyYXBoeS48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIl8xMDAtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBQcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG90b2dyYXBoeSBhbmQgdmlkZW9ncmFwaHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfMTAwLWN0YS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXzEwMC1jbGllbnQtY29udGFpbmVyIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nLTNcIj5SZWFkeSB0byB0YWxrPzwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIl8xMDAtYnRuIGZpbmFsIHctYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTNmZGM5ZWI4ZGYyM2VlOTlhOGEzY2JfTG9nby0xJTIwQ29weS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLXRleHRcIj4yMDIwIE91bmpleSw8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3MnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN0YS1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTFweCAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViNTY0ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY3RhLWJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgODYsIDc5LCAwLjc4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN0YS1idG4uc2Vjb25kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN0YS1idG4uc2Vjb25kOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjU2NGY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLW5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmF2LW1lbnUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0N3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCBib3R0b20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20ocmdiYSgwLCAwLCAwLCAwLjUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8ocmdiYSgwLCAwLCAwLCAwLjUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKFwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU0NTI5ZTU0MGI2ZTZhY2ZjYjdhNWYxX3Bob3RvLXN0dWRpby13aXRoLXdoaXRlLXdvb2Rlbi1mcmFtZWQtd2FsbC1taXJyb3ItMTM0NDY5LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKFwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU0NTI5ZTU0MGI2ZTZhY2ZjYjdhNWYxX3Bob3RvLXN0dWRpby13aXRoLXdoaXRlLXdvb2Rlbi1mcmFtZWQtd2FsbC1taXJyb3ItMTM0NDY5LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHgsIDEwMCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvLCBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbWctY29udGFpbmVyLnJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tKHRyYW5zcGFyZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8odHJhbnNwYXJlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwoXCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTQ1MjllNmE3OTBhYzg2M2JlN2ZhZmJfcGVyc29uLWhvbGRpbmctY2FtZXJhLXdpdGgtbGVucy1mYWNpbmctdG93YXJkcy1tYW4td2VhcmluZy1hLTMyMDYxNjcucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxODBkZWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKFwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZTNmZDJiNDI4OTg2MTc1NzkxNGM5ZDkvNWU0NTI5ZTZhNzkwYWM4NjNiZTdmYWZiX3BlcnNvbi1ob2xkaW5nLWNhbWVyYS13aXRoLWxlbnMtZmFjaW5nLXRvd2FyZHMtbWFuLXdlYXJpbmctYS0zMjA2MTY3LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbi5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDgycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWZsZXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1sb2dvLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXg6IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtby1vYmplY3QtcG9zaXRpb246IDAlIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uYXY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI2NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LWZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IG5vbmUgIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVlM2ZkMmI0Mjg5ODYxNzU3OTE0YzlkOS81ZTQ1MWFhZDhlOWYzMTQwNjAzNzc1NjZfbWFpbC5zdmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5yZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDUwMG1zIGVhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDUwMG1zIGVhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuLmZvcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0bi5mb3JtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyYjJjMzA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1idG4uZmluYWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZ3JpZC1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1ncmlkLXJvd3M6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQtaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBzYXR1cmF0ZSgwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHNhdHVyYXRlKDAlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtbGlnaHQtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaG9tZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmRpdi1ibG9jayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDIuNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wYXJhZ3JhcGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU4OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDM3cHggNDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYzMwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJvZHktMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWJyYW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLW5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJiMmMzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1uYXYtbGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWhlcm8tc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmctMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI3MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtaGVyby10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjkzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGluay1jb250aW51YXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMzA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDM2M3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3MC41cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50LWNvbnRhaW5lci5mbGV4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50cy1zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuXzEwMC1wcm9qZWN0cy1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5fMTAwLWN0YS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDkycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaGVhZGluZy0zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYm9keS0zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWUzZmQyYjQyODk4NjE3NTc5MTRjOWQ5LzVlNzg2Y2QzMWVkZTM2MmQ2N2JjOGUzMV9MSUdIVCUyMDEucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN0YS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNyU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbi5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2plY3QtaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWZsZXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NyU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDgxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmFncmFwaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1oZXJvLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1oZXJvLXRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTY5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWNsaWVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keS0zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWdyaWQtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJhZ3JhcGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtbmF2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtaGVyby10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdGEtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTclO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN0YS1zZWN0aW9uLmxlZnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTclO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItZmxleC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1sb2dvLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLTIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXItaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtY2xpZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZ3JpZC1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJhZ3JhcGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtbmF2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1oZXJvLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDY2JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLl8xMDAtaGVyby10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5fMTAwLWNsaWVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuXzEwMC1jbGllbnRzLXNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmctMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXX0= */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.8303101abd89f76a0bdd.hot-update.js.map
webpackHotUpdate("static/development/pages/projects/[pid].js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/a11y-focus-store/index.js":
/*!************************************************!*\
  !*** ./node_modules/a11y-focus-store/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var storedFocusElement;

exports.storeFocus = function() {
  storedFocusElement = document.activeElement;
};

exports.clearStoredFocus = function() {
  storedFocusElement = null;
};

exports.restoreFocus = function() {
  if (!storedFocusElement) return;
  try { storedFocusElement.focus(); } catch (err) {}
  storedFocusElement = null;
};


/***/ }),

/***/ "./node_modules/animation-bus/lib/animation-bus.js":
/*!*********************************************************!*\
  !*** ./node_modules/animation-bus/lib/animation-bus.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polylinearScale = __webpack_require__(/*! ./polylinear-scale */ "./node_modules/animation-bus/lib/polylinear-scale.js");

var _polylinearScale2 = _interopRequireDefault(_polylinearScale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var transformUnits = {
  perspective: 'px',
  rotate: 'deg',
  rotateX: 'deg',
  rotateY: 'deg',
  rotateZ: 'deg',
  scale: '',
  scaleX: '',
  scaleY: '',
  scaleZ: '',
  skew: 'deg',
  skewX: 'deg',
  skewY: 'deg',
  translateX: 'px',
  translateY: 'px',
  translateZ: 'px'
};
var transformKeys = Object.keys(transformUnits);

var AnimationBus = function () {
  function AnimationBus(_ref) {
    var animations = _ref.animations,
        element = _ref.element,
        origin = _ref.origin;

    _classCallCheck(this, AnimationBus);

    this.animations = animations;
    this.element = element;
    this.origin = origin;
  }

  _createClass(AnimationBus, [{
    key: 'getStyles',
    value: function getStyles() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

      var origin = this.origin(element);
      var transformValues = [];
      var styles = {};

      this.animations.forEach(function (animation) {
        var prop = animation.prop;
        var unit = animation.unit || transformUnits[prop] || '';
        var value = (0, _polylinearScale2.default)(animation.stops)(origin);

        if (transformKeys.indexOf(prop) > -1) {
          transformValues.push(prop + '(' + value + unit + ')');
        } else {
          styles[prop] = '' + value + unit;
        }
      });

      if (transformValues.length) {
        styles.transform = transformValues.join(' ');
      }

      return styles;
    }
  }, {
    key: 'applyStyles',
    value: function applyStyles() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

      var styles = this.getStyles(element);
      Object.keys(styles).forEach(function (key) {
        return element.style[key] = styles[key];
      });
    }
  }]);

  return AnimationBus;
}();

exports.default = AnimationBus;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/animation-bus/lib/piecewise.js":
/*!*****************************************************!*\
  !*** ./node_modules/animation-bus/lib/piecewise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = piecewise;
function piecewise(xs, ys) {
  return function (x) {
    // out of bounds
    if (x <= xs[0]) {
      return ys[0];
    } else if (x >= xs[xs.length - 1]) {
      return ys[xs.length - 1];
    }

    // bisect
    var lo = 0;
    var hi = xs.length - 1;

    while (hi - lo > 1) {
      var mid = lo + hi >> 1;
      if (x < xs[mid]) {
        hi = mid;
      } else {
        lo = mid;
      }
    }

    // project
    return ys[lo] + (ys[hi] - ys[lo]) / (xs[hi] - xs[lo]) * (x - xs[lo]);
  };
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/animation-bus/lib/polylinear-scale.js":
/*!************************************************************!*\
  !*** ./node_modules/animation-bus/lib/polylinear-scale.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = polylinearScale;

var _piecewise = __webpack_require__(/*! ./piecewise */ "./node_modules/animation-bus/lib/piecewise.js");

var _piecewise2 = _interopRequireDefault(_piecewise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function polylinearScale(stops) {
  var xs = [];
  var ys_r = [];
  var ys_g = [];
  var ys_b = [];

  stops.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        domain = _ref2[0],
        range = _ref2[1];

    xs.push(domain);
    if (isNaN(range)) {
      ys_r.push(parseInt(range.substr(1, 2), 16));
      ys_g.push(parseInt(range.substr(3, 2), 16));
      ys_b.push(parseInt(range.substr(5, 2), 16));
    } else {
      ys_r.push(range);
    }
  });

  var pw_r = (0, _piecewise2.default)(xs, ys_r);

  if (ys_g.length && ys_b.length) {
    var _ret = function () {
      var pw_g = (0, _piecewise2.default)(xs, ys_g);
      var pw_b = (0, _piecewise2.default)(xs, ys_b);
      return {
        v: function v(x) {
          return 'rgb(' + Math.round(pw_r(x)) + ', ' + Math.round(pw_g(x)) + ', ' + Math.round(pw_b(x)) + ')';
        }
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  } else {
    return function (x) {
      return pw_r(x);
    };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/fscreen/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/fscreen/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var key = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5
};

var webkit = ['webkitFullscreenEnabled', 'webkitFullscreenElement', 'webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitfullscreenchange', 'webkitfullscreenerror'];

var moz = ['mozFullScreenEnabled', 'mozFullScreenElement', 'mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozfullscreenerror'];

var ms = ['msFullscreenEnabled', 'msFullscreenElement', 'msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'MSFullscreenError'];

// so it doesn't throw if no window or document
var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};

var vendor = 'fullscreenEnabled' in document && Object.keys(key) || webkit[0] in document && webkit || moz[0] in document && moz || ms[0] in document && ms || [];

exports.default = {
  requestFullscreen: function requestFullscreen(element) {
    return element[vendor[key.requestFullscreen]]();
  },
  requestFullscreenFunction: function requestFullscreenFunction(element) {
    return element[vendor[key.requestFullscreen]];
  },
  get exitFullscreen() {
    return document[vendor[key.exitFullscreen]].bind(document);
  },
  addEventListener: function addEventListener(type, handler, options) {
    return document.addEventListener(vendor[key[type]], handler, options);
  },
  removeEventListener: function removeEventListener(type, handler, options) {
    return document.removeEventListener(vendor[key[type]], handler, options);
  },
  get fullscreenEnabled() {
    return Boolean(document[vendor[key.fullscreenEnabled]]);
  },
  set fullscreenEnabled(val) {},
  get fullscreenElement() {
    return document[vendor[key.fullscreenElement]];
  },
  set fullscreenElement(val) {},
  get onfullscreenchange() {
    return document[('on' + vendor[key.fullscreenchange]).toLowerCase()];
  },
  set onfullscreenchange(handler) {
    return document[('on' + vendor[key.fullscreenchange]).toLowerCase()] = handler;
  },
  get onfullscreenerror() {
    return document[('on' + vendor[key.fullscreenerror]).toLowerCase()];
  },
  set onfullscreenerror(handler) {
    return document[('on' + vendor[key.fullscreenerror]).toLowerCase()] = handler;
  }
};

/***/ }),

/***/ "./node_modules/get-prefix/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/get-prefix/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getPrefix;

function getPrefix(prop) {
  if (typeof document === 'undefined') return prop;

  var styles = document.createElement('p').style;
  var vendors = ['ms', 'O', 'Moz', 'Webkit'];

  if (styles[prop] === '') return prop;

  prop = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = vendors.length; i--;) {
    if (styles[vendors[i] + prop] === '') {
      return vendors[i] + prop;
    }
  }
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glam/lib/CSSPropertyOperations/CSSProperty.js":
/*!********************************************************************!*\
  !*** ./node_modules/glam/lib/CSSPropertyOperations/CSSProperty.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true

  /**
   * @param {string} prefix vendor-specific prefix, eg: Webkit
   * @param {string} key style name, eg: transitionDuration
   * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
   * WebkitTransitionDuration
   */
};function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

exports.default = CSSProperty;

/***/ }),

/***/ "./node_modules/glam/lib/CSSPropertyOperations/dangerousStyleValue.js":
/*!****************************************************************************!*\
  !*** ./node_modules/glam/lib/CSSPropertyOperations/dangerousStyleValue.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSProperty = __webpack_require__(/*! ./CSSProperty */ "./node_modules/glam/lib/CSSPropertyOperations/CSSProperty.js");

var _CSSProperty2 = _interopRequireDefault(_CSSProperty);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/glam/node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */

var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (true) {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
           true ? (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : undefined;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

exports.default = dangerousStyleValue;

/***/ }),

/***/ "./node_modules/glam/lib/CSSPropertyOperations/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/glam/lib/CSSPropertyOperations/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStyleName = undefined;
exports.createMarkupForStyles = createMarkupForStyles;

var _camelizeStyleName = __webpack_require__(/*! fbjs/lib/camelizeStyleName */ "./node_modules/glam/node_modules/fbjs/lib/camelizeStyleName.js");

var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

var _dangerousStyleValue = __webpack_require__(/*! ./dangerousStyleValue */ "./node_modules/glam/lib/CSSPropertyOperations/dangerousStyleValue.js");

var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);

var _hyphenateStyleName = __webpack_require__(/*! fbjs/lib/hyphenateStyleName */ "./node_modules/glam/node_modules/fbjs/lib/hyphenateStyleName.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _memoizeStringOnly = __webpack_require__(/*! fbjs/lib/memoizeStringOnly */ "./node_modules/glam/node_modules/fbjs/lib/memoizeStringOnly.js");

var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/glam/node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
                                                                                                                   * Copyright 2013-present, Facebook, Inc.
                                                                                                                   * All rights reserved.
                                                                                                                   *
                                                                                                                   * This source code is licensed under the BSD-style license found in the
                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                   *
                                                                                                                   * @providesModule CSSPropertyOperations
                                                                                                                   */

if (true) {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;

  var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
     true ? (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) : undefined;
  };

  var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
     true ? (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : undefined;
  };

  var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
     true ? (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
  };

  var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
     true ? (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : undefined;
  };

  var checkRenderMessage = function checkRenderMessage(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  };

  /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */
  var warnValidStyle = function warnValidStyle(name, value, component) {
    //eslint-disable-line no-var
    var owner = void 0;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number' && isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);
    }
  };
}

/**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */

function createMarkupForStyles(styles, component) {
  var serialized = '';
  for (var styleName in styles) {
    var isCustomProp = styleName.indexOf('--') === 0;
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    if (styleName === 'label') {
      continue;
    }
    var styleValue = styles[styleName];
    if ( true && !isCustomProp) {
      warnValidStyle(styleName, styleValue, component);
    }
    if (styleValue != null) {
      if (isCustomProp) {
        serialized += styleName + ':' + styleValue + ';';
      } else {
        serialized += processStyleName(styleName) + ':';
        serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
      }
    }
  }
  return serialized || null;
}

/***/ }),

/***/ "./node_modules/glam/lib/Glam.js":
/*!***************************************!*\
  !*** ./node_modules/glam/lib/Glam.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sheet = __webpack_require__(/*! ./sheet */ "./node_modules/glam/lib/sheet.js");

var _sheet2 = _interopRequireDefault(_sheet);

var _generate = __webpack_require__(/*! ./generate */ "./node_modules/glam/lib/generate.js");

var _generate2 = _interopRequireDefault(_generate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isBrowser = typeof window !== 'undefined';


var cache = new WeakMap();

var Glam = function () {
  function Glam() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Glam);

    this.props = props;
    if (isBrowser) {
      var doc = this.props.document;
      var cached = cache.get(doc);
      if (cached) {
        return cached;
      }
      cache.set(doc, this);
      this.sheet = new _sheet2.default({ document: doc });
    }

    this.inserted = {};
    this.tagged = {};
  }

  _createClass(Glam, [{
    key: 'hydrate',
    value: function hydrate(ids) {
      var _this = this;

      ids.forEach(function (id) {
        return _this.inserted[id] = true;
      });
    }
  }, {
    key: 'tag',
    value: function tag(id) {
      this.tagged[id] = true;
    }
  }, {
    key: 'isTagged',
    value: function isTagged(id) {
      return this.tagged[id];
    }
  }, {
    key: 'insert',
    value: function insert(ast) {
      var _this2 = this;

      if (!this.inserted[ast.className]) {
        var _rules = (0, _generate2.default)(ast);
        if (isBrowser) {
          _rules.forEach(function (rule) {
            return _this2.sheet.insert(rule);
          });
        }
        this.inserted[ast.className] = true; // on server, add rules instead
      }
    }
  }]);

  return Glam;
}();

exports.default = Glam;

/***/ }),

/***/ "./node_modules/glam/lib/flatten.js":
/*!******************************************!*\
  !*** ./node_modules/glam/lib/flatten.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flatten;
function flatten(inArr) {
  var arr = [];
  for (var i = 0; i < inArr.length; i++) {
    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
  }
  return arr;
}

/***/ }),

/***/ "./node_modules/glam/lib/generate.js":
/*!*******************************************!*\
  !*** ./node_modules/glam/lib/generate.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simulations = simulations;
exports.default = generate;

var _CSSPropertyOperations = __webpack_require__(/*! ./CSSPropertyOperations */ "./node_modules/glam/lib/CSSPropertyOperations/index.js");

var _plugins = __webpack_require__(/*! ./plugins */ "./node_modules/glam/lib/plugins.js");

var isBrowser = typeof window !== 'undefined';
// import type { AST } from './types';


// a flag to enable simulation meta tags on dom nodes
// defaults to true in dev mode. recommend *not* to
// toggle often.
var canSimulate = "development" !== 'production';

// we use these flags for issuing warnings when simulate is called
// in prod / in incorrect order
var warned1 = false,
    warned2 = false;

// toggles simulation activity. shouldn't be needed in most cases
function simulations() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  canSimulate = !!bool;
}

// takes a string, converts to lowercase, strips out nonalphanumeric.
function simple(str) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return str.toLowerCase().replace(/[^a-z0-9]/g, replace);
}

// from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  if (selector.indexOf(',') === -1) {
    return [selector];
  }

  var indices = [],
      res = [],
      inParen = 0,
      o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
    /*eslint-enable no-cond-assign*/
    switch (o[0]) {
      case '(':
        inParen++;
        break;
      case ')':
        inParen--;
        break;
      case ',':
        if (inParen) break;
        indices.push(o.index);
    }
  }
  for (o = indices.length; o--;) {
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res;
}

function selector(id) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!id && path) {
    return path.replace(/\&/g, '');
  }
  if (id && !path) return '.' + id;

  var x = splitSelector(path).map(function (x) {
    return x.indexOf('&') >= 0 ? x.replace(/\&/gm, '.' + id) // todo - make sure each sub selector has an &
    : '.' + id + x;
  }).join(',');

  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
    x += ',.' + id + '[data-simulate-' + simple(path) + ']';
  }
  return x;
}

function toCSS(node) {
  var result = (0, _plugins.prefixes)((0, _plugins.fallbacks)((0, _plugins.contentWrap)(node)));
  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
}

function toCSSArray(id, parsed) {
  var css = [];

  // plugins here
  var plain = parsed.plain,
      selects = parsed.selects,
      medias = parsed.medias,
      supports = parsed.supports;
  // todo - :host?

  if (plain) {
    css.push(toCSS({ style: plain, selector: selector(id) }));
  }
  if (selects) {
    Object.keys(selects).forEach(function (key) {
      return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
    });
  }
  if (medias) {
    Object.keys(medias).forEach(function (key) {
      return css.push(key + '{' + toCSSArray(id, medias[key]).join('') + '}');
    });
  }
  if (supports) {
    Object.keys(supports).forEach(function (key) {
      return css.push(key + '{' + toCSSArray(id, supports[key]).join('') + '}');
    });
  }
  return css;
}

// todo - if server side, then cache on classname
function generate(_ref) {
  var className = _ref.className,
      parsed = _ref.parsed;

  return toCSSArray(className, parsed);
}

/***/ }),

/***/ "./node_modules/glam/lib/hash.js":
/*!***************************************!*\
  !*** ./node_modules/glam/lib/hash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hashify;

// murmurhash2 via https://gist.github.com/raycmorgan/588423

function hashify(obj) {
  var str = JSON.stringify(obj);
  var toRet = doHash(str, str.length).toString(36);
  // if(obj.label && (obj.label.length > 0) && isDev){
  //   return simple(obj.label.join('.'), '-') + '-' + toRet
  // }
  return toRet;
}

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

/***/ }),

/***/ "./node_modules/glam/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/glam/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = glam;
exports.hydrate = hydrate;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _Glam = __webpack_require__(/*! ./Glam */ "./node_modules/glam/lib/Glam.js");

var _Glam2 = _interopRequireDefault(_Glam);

var _parse = __webpack_require__(/*! ./parse */ "./node_modules/glam/lib/parse.js");

var _parse2 = _interopRequireDefault(_parse);

var _generate = __webpack_require__(/*! ./generate */ "./node_modules/glam/lib/generate.js");

var _generate2 = _interopRequireDefault(_generate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isBrowser = typeof window !== 'undefined';

var isHydrating = false;

var nullClass = (0, _parse2.default)({}).className;

// @theme
var Styled = function (_React$Component) {
  _inherits(Styled, _React$Component);

  function Styled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Styled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Styled.__proto__ || Object.getPrototypeOf(Styled)).call.apply(_ref, [this].concat(args))), _this), _this.glam = _this.context.glam || new _Glam2.default(isBrowser ? { document: document } : undefined), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Styled, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        glam: this.glam
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.flush) {
        this.flush();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var css = this.props.css;

      // check parse cache
      // else

      var ast = (0, _parse2.default)(css);

      var cls = ast.className === nullClass ? '' : ast.className;

      var element = this.props.render(cls);

      if (!isBrowser || isBrowser && isHydrating) {
        if (this.glam.isTagged(ast.className)) {
          return element;
        }
        this.glam.tag(ast.className);

        this.flush = function () {
          return _this2.glam.insert(ast);
        }; // you already have this content via `$([data-glam='${cls}'])`
        var generated = (0, _generate2.default)(ast).join('');

        return generated ? _react.Children.toArray([_react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: generated } }), element]) : element;
      }
      this.glam.insert(ast);
      return element;
    }
  }]);

  return Styled;
}(_react2.default.Component);

Styled.displayName = 'css';
Styled.contextTypes = {
  glam: _propTypes2.default.object
};
Styled.childContextTypes = {
  glam: _propTypes2.default.object
};
function glam(Type, props) {
  for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    children[_key2 - 2] = arguments[_key2];
  }

  var _ref2 = props || {},
      css = _ref2.css,
      className = _ref2.className,
      rest = _objectWithoutProperties(_ref2, ['css', 'className']);
  // clean css ?


  if (css) {
    return _react2.default.createElement(Styled, {
      css: css,
      render: function render(cls) {
        var applyClass = className ? cls ? className + ' ' + cls : className : cls;
        return _react.createElement.apply(undefined, [Type, applyClass ? _extends({}, rest, { className: applyClass }) : rest].concat(children));
      }
    });
  } else {
    return _react.createElement.apply(undefined, [Type, props].concat(children));
  }
}

function hydrate(element, dom, callback) {
  isHydrating = true;
  (0, _reactDom.hydrate)(element, dom, function () {
    isHydrating = false;
    callback && callback();
  });
}

/***/ }),

/***/ "./node_modules/glam/lib/parse.js":
/*!****************************************!*\
  !*** ./node_modules/glam/lib/parse.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssLabels = cssLabels;
exports.default = parse;

var _flatten = __webpack_require__(/*! ./flatten */ "./node_modules/glam/lib/flatten.js");

var _flatten2 = _interopRequireDefault(_flatten);

var _hash = __webpack_require__(/*! ./hash */ "./node_modules/glam/lib/hash.js");

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**** labels ****/
// toggle for debug labels.
// *shouldn't* have to mess with this manually


// import clean from './clean';
var hasLabels = "development" !== 'production';

function cssLabels(bool) {
  hasLabels = !!bool;
}

var prefixedPseudoSelectors = {
  '::placeholder': ['::-webkit-input-placeholder', '::-moz-placeholder', '::-ms-input-placeholder'],
  ':fullscreen': [':-webkit-full-screen', ':-moz-full-screen', ':-ms-fullscreen']
};

function isSelector(key) {
  var possibles = [':', '.', '[', '>', ' '],
      found = false,
      ch = key.charAt(0);
  for (var i = 0; i < possibles.length; i++) {
    if (ch === possibles[i]) {
      found = true;
      break;
    }
  }
  return found || key.indexOf('&') >= 0;
}
// from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  if (selector.indexOf(',') === -1) {
    return [selector];
  }

  var indices = [],
      res = [],
      inParen = 0,
      o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
    /*eslint-enable no-cond-assign*/
    switch (o[0]) {
      case '(':
        inParen++;
        break;
      case ')':
        inParen--;
        break;
      case ',':
        if (inParen) break;
        indices.push(o.index);
    }
  }
  for (o = indices.length; o--;) {
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res;
}

function joinSelectors(a, b) {
  var as = splitSelector(a).map(function (a) {
    return !(a.indexOf('&') >= 0) ? '&' + a : a;
  });
  var bs = splitSelector(b).map(function (b) {
    return !(b.indexOf('&') >= 0) ? '&' + b : b;
  });

  return bs.reduce(function (arr, b) {
    return arr.concat(as.map(function (a) {
      return b.replace(/\&/g, a);
    }));
  }, []).join(',');
}

function joinMediaQueries(a, b) {
  return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
}

function isMediaQuery(key) {
  return key.indexOf('@media') === 0;
}

function isSupports(key) {
  return key.indexOf('@supports') === 0;
}

function joinSupports(a, b) {
  return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
}

// mutable! modifies dest.
function construct(dest, _ref) {
  var _ref$selector = _ref.selector,
      selector = _ref$selector === undefined ? '' : _ref$selector,
      _ref$mq = _ref.mq,
      mq = _ref$mq === undefined ? '' : _ref$mq,
      _ref$supp = _ref.supp,
      supp = _ref$supp === undefined ? '' : _ref$supp,
      _ref$inputs = _ref.inputs,
      inputs = _ref$inputs === undefined ? {} : _ref$inputs;

  var inputArray = !Array.isArray(inputs) ? [inputs] : (0, _flatten2.default)(inputs);

  inputArray.filter(function (x) {
    return !!x;
  }).forEach(function (input) {
    var src = input;

    Object.keys(src || {}).forEach(function (key) {
      if (isSelector(key)) {
        // todo - regex test the string to look for prefixedpseudos
        if (prefixedPseudoSelectors[key]) {
          prefixedPseudoSelectors[key].forEach(function (p) {
            return construct(dest, {
              selector: joinSelectors(selector, p),
              mq: mq,
              supp: supp,
              inputs: src[key]
            });
          });
        }
        construct(dest, {
          selector: joinSelectors(selector, key),
          mq: mq,
          supp: supp,
          inputs: src[key]
        });
      } else if (isMediaQuery(key)) {
        construct(dest, {
          selector: selector,
          mq: joinMediaQueries(mq, key),
          supp: supp,
          inputs: src[key]
        });
      } else if (isSupports(key)) {
        construct(dest, {
          selector: selector,
          mq: mq,
          supp: joinSupports(supp, key),
          inputs: src[key]
        });
      } else {
        var _dest = dest;
        if (supp) {
          _dest[supp] = _dest[supp] || {};
          _dest = _dest[supp];
        }
        if (mq) {
          _dest[mq] = _dest[mq] || {};
          _dest = _dest[mq];
        }
        if (selector) {
          _dest[selector] = _dest[selector] || {};
          _dest = _dest[selector];
        }

        if (key === 'label') {
          if (hasLabels) {
            // concat at root of object
            dest.label = dest.label.concat(src.label);
          }
        } else {
          _dest[key] = src[key];
        }
      }
    });
  });

  return dest;
}

function groupByType(style) {
  // we can be sure it's not infinitely nested here
  var plain = void 0,
      selects = void 0,
      medias = void 0,
      supports = void 0;
  Object.keys(style).forEach(function (key) {
    if (key.indexOf('&') >= 0) {
      selects = selects || {};
      selects[key] = style[key];
    } else if (key.indexOf('@media') === 0) {
      medias = medias || {};
      medias[key] = groupByType(style[key]);
    } else if (key.indexOf('@supports') === 0) {
      supports = supports || {};
      supports[key] = groupByType(style[key]);
    } else if (key === 'label') {
      if (style.label.length > 0) {
        plain = plain || {};
        plain.label = hasLabels ? style.label.join('.') : '';
      }
    } else {
      plain = plain || {};
      plain[key] = style[key];
    }
  });
  return { plain: plain, selects: selects, medias: medias, supports: supports };
}

function parse(css) {
  var parsed = groupByType(construct({ label: [] }, { inputs: css }));
  var className = 'css-' + (0, _hash2.default)(parsed);
  return { className: className, parsed: parsed };
}

/***/ }),

/***/ "./node_modules/glam/lib/plugins.js":
/*!******************************************!*\
  !*** ./node_modules/glam/lib/plugins.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// parser plugins
// render plugins

exports.fallbacks = fallbacks;
exports.contentWrap = contentWrap;
exports.prefixes = prefixes;

var _CSSPropertyOperations = __webpack_require__(/*! ./CSSPropertyOperations */ "./node_modules/glam/lib/CSSPropertyOperations/index.js");

var _prefix = __webpack_require__(/*! ./prefix */ "./node_modules/glam/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fallbacks(node) {
  var hasArray = Object.keys(node.style).map(function (x) {
    return Array.isArray(node.style[x]);
  }).indexOf(true) >= 0;
  if (hasArray) {
    var style = node.style;

    var flattened = Object.keys(style).reduce(function (o, key) {
      o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
      return o;
    }, {});
    // todo -
    // flatten arrays which haven't been flattened yet
    return _extends({}, node, { style: flattened });
  }
  return node;
}

var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit'];

function contentWrap(node) {
  if (node.style.content) {
    var cont = node.style.content;
    if (contentValues.indexOf(cont) >= 0) {
      return node;
    }
    if (/^(attr|calc|counters?|url)\(/.test(cont)) {
      return node;
    }
    if (cont.charAt(0) === cont.charAt(cont.length - 1) && (cont.charAt(0) === '"' || cont.charAt(0) === "'")) {
      return node;
    }
    return _extends({}, node, { style: _extends({}, node.style, { content: '"' + cont + '"' }) });
  }
  return node;
}

function prefixes(node) {
  return _extends({}, node, { style: (0, _prefix2.default)(_extends({}, node.style)) });
}

/***/ }),

/***/ "./node_modules/glam/lib/prefix.js":
/*!*****************************************!*\
  !*** ./node_modules/glam/lib/prefix.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixer;

var _staticData = __webpack_require__(/*! inline-style-prefixer/static/staticData */ "./node_modules/inline-style-prefixer/static/staticData.js");

var _staticData2 = _interopRequireDefault(_staticData);

var _prefixProperty = __webpack_require__(/*! inline-style-prefixer/utils/prefixProperty */ "./node_modules/inline-style-prefixer/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! inline-style-prefixer/utils/prefixValue */ "./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _cursor = __webpack_require__(/*! inline-style-prefixer/static/plugins/cursor */ "./node_modules/inline-style-prefixer/static/plugins/cursor.js");

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__(/*! inline-style-prefixer/static/plugins/crossFade */ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js");

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__(/*! inline-style-prefixer/static/plugins/filter */ "./node_modules/inline-style-prefixer/static/plugins/filter.js");

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__(/*! inline-style-prefixer/static/plugins/flex */ "./node_modules/inline-style-prefixer/static/plugins/flex.js");

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__(/*! inline-style-prefixer/static/plugins/gradient */ "./node_modules/inline-style-prefixer/static/plugins/gradient.js");

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__(/*! inline-style-prefixer/static/plugins/imageSet */ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js");

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__(/*! inline-style-prefixer/static/plugins/position */ "./node_modules/inline-style-prefixer/static/plugins/position.js");

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__(/*! inline-style-prefixer/static/plugins/sizing */ "./node_modules/inline-style-prefixer/static/plugins/sizing.js");

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__(/*! inline-style-prefixer/static/plugins/transition */ "./node_modules/inline-style-prefixer/static/plugins/transition.js");

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];
// custom facade for inline-style-prefixer

var prefixMap = _staticData2.default.prefixMap;

function prefixer(style) {
  for (var property in style) {
    var value = style[property];

    var processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

    // only modify the value if it was touched
    // by any plugin to prevent unnecessary mutations
    if (processedValue) {
      style[property] = processedValue;
    }

    (0, _prefixProperty2.default)(prefixMap, property, style);
  }
  return style;
}

/***/ }),

/***/ "./node_modules/glam/lib/sheet.js":
/*!****************************************!*\
  !*** ./node_modules/glam/lib/sheet.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function last(arr) {
  return arr[arr.length - 1];
}
// import assign from 'object-assign'
/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet


*/

// const doc = global.document;

var isBrowser = typeof window !== 'undefined';

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
  return false;
}();

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        document = _ref.document,
        _ref$speedy = _ref.speedy,
        speedy = _ref$speedy === undefined ?  false && false : _ref$speedy,
        _ref$maxLength = _ref.maxLength,
        maxLength = _ref$maxLength === undefined ? oldIE ? 4000 : 65000 : _ref$maxLength;

    _classCallCheck(this, StyleSheet);

    this.document = document;
    this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
    // this.sheet = undefined;
    this.tags = [];
    this.maxLength = maxLength;
    this.ctr = 0;
    this.inject();
  }

  _createClass(StyleSheet, [{
    key: 'makeStyleTag',
    value: function makeStyleTag() {
      var tag = this.document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-glamor', '');
      tag.appendChild(this.document.createTextNode(''));
      // todo - use a reference node
      (this.document.head || this.document.getElementsByTagName('head')[0]).appendChild(tag);
      return tag;
    }
  }, {
    key: 'sheetForTag',
    value: function sheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < this.document.styleSheets.length; i++) {
        if (this.document.styleSheets[i].ownerNode === tag) {
          return this.document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.sheetForTag(last(this.tags));
    }
  }, {
    key: 'inject',
    value: function inject() {
      if (this.injected) {
        throw new Error('already injected');
      }
      this.tags[0] = this.makeStyleTag();
      this.injected = true;
    }
  }, {
    key: '_insert',
    value: function _insert(rule) {
      // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
      try {
        var sheet = this.getSheet();
        sheet && sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          // might need beter dx for this
          console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
        }
      }
    }
  }, {
    key: 'insert',
    value: function insert(rule) {
      var sheet = this.getSheet();
      // this is the ultrafast version, works across browsers
      if (this.isSpeedy && sheet && sheet.insertRule) {
        this._insert(rule);
      } else {
        if (rule.indexOf('@import') !== -1) {
          var tag = last(this.tags);
          tag.insertBefore(this.document.createTextNode(rule), tag.firstChild);
        } else {
          last(this.tags).appendChild(this.document.createTextNode(rule));
        }
      }

      this.ctr++;
      if (this.ctr % this.maxLength === 0) {
        this.tags.push(this.makeStyleTag());
      }
    }
  }, {
    key: 'rules',
    value: function rules() {
      var _this = this;

      var arr = [];
      this.tags.forEach(function (tag) {
        return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(_this.sheetForTag(tag).cssRules))));
      });
      return arr;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

/***/ }),

/***/ "./node_modules/glam/node_modules/fbjs/lib/camelize.js":
/*!*************************************************************!*\
  !*** ./node_modules/glam/node_modules/fbjs/lib/camelize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),

/***/ "./node_modules/glam/node_modules/fbjs/lib/camelizeStyleName.js":
/*!**********************************************************************!*\
  !*** ./node_modules/glam/node_modules/fbjs/lib/camelizeStyleName.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var camelize = __webpack_require__(/*! ./camelize */ "./node_modules/glam/node_modules/fbjs/lib/camelize.js");

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),

/***/ "./node_modules/glam/node_modules/fbjs/lib/emptyFunction.js":
/*!******************************************************************!*\
  !*** ./node_modules/glam/node_modules/fbjs/lib/emptyFunction.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/glam/node_modules/fbjs/lib/hyphenate.js":
/*!**************************************************************!*\
  !*** ./node_modules/glam/node_modules/fbjs/lib/hyphenate.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),

/***/ "./node_modules/glam/node_modules/fbjs/lib/hyphenateStyleName.js":
/*!***********************************************************************!*\
  !*** ./node_modules/glam/node_modules/fbjs/lib/hyphenateStyleName.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(/*! ./hyphenate */ "./node_modules/glam/node_modules/fbjs/lib/hyphenate.js");

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),

/***/ "./node_modules/glam/node_modules/fbjs/lib/memoizeStringOnly.js":
/*!**********************************************************************!*\
  !*** ./node_modules/glam/node_modules/fbjs/lib/memoizeStringOnly.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),

/***/ "./node_modules/glam/node_modules/fbjs/lib/warning.js":
/*!************************************************************!*\
  !*** ./node_modules/glam/node_modules/fbjs/lib/warning.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/glam/node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/crossFade.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/cursor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/cursor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/filter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/filter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flex.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/gradient.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/imageSet.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/position.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/position.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/sizing.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/transition.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../../utils/capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/staticData.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/staticData.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

exports.default = {
  plugins: [],
  prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "writingMode": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/capitalizeString.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixProperty.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixValue.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/raf-schd/esm/index.js":
/*!********************************************!*\
  !*** ./node_modules/raf-schd/esm/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (function (fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return frameId;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(undefined, lastArgs);
    });

    return frameId;
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  var resultFn = wrapperFn;

  return resultFn;
});

/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-full-screen/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-full-screen/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fscreen = __webpack_require__(/*! fscreen */ "./node_modules/fscreen/lib/index.js");

var _fscreen2 = _interopRequireDefault(_fscreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullScreen = function (_Component) {
  _inherits(FullScreen, _Component);

  function FullScreen(props) {
    _classCallCheck(this, FullScreen);

    var _this = _possibleConstructorReturn(this, (FullScreen.__proto__ || Object.getPrototypeOf(FullScreen)).call(this, props));

    _this.detectFullScreen = _this.detectFullScreen.bind(_this);
    return _this;
  }

  _createClass(FullScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _fscreen2.default.addEventListener("fullscreenchange", this.detectFullScreen);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _fscreen2.default.removeEventListener("fullscreenchange", this.detectFullScreen);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleProps(this.props);
    }
  }, {
    key: "handleProps",
    value: function handleProps(props) {
      var enabled = _fscreen2.default.fullscreenElement === this.node;
      if (enabled && !props.enabled) {
        this.leaveFullScreen();
      } else if (!enabled && props.enabled) {
        this.enterFullScreen();
      }
    }
  }, {
    key: "detectFullScreen",
    value: function detectFullScreen() {
      if (this.props.onChange) {
        this.props.onChange(_fscreen2.default.fullscreenElement === this.node);
      }
    }
  }, {
    key: "enterFullScreen",
    value: function enterFullScreen() {
      if (_fscreen2.default.fullscreenEnabled) {
        _fscreen2.default.requestFullscreen(this.node);
      }
    }
  }, {
    key: "leaveFullScreen",
    value: function leaveFullScreen() {
      if (_fscreen2.default.fullscreenEnabled) {
        _fscreen2.default.exitFullscreen();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = ["fullscreen"];
      if (this.props.enabled) {
        className.push("fullscreen-enabled");
      }

      return _react2.default.createElement(
        "div",
        {
          className: className.join(" "),
          ref: function ref(node) {
            return _this2.node = node;
          },
          style: this.props.enabled ? { height: "100%", width: "100%" } : undefined
        },
        this.props.children
      );
    }
  }]);

  return FullScreen;
}(_react.Component);

FullScreen.propTypes = {
  children: _propTypes2.default.node.isRequired,
  enabled: _propTypes2.default.bool.isRequired,
  onChange: _propTypes2.default.func
};
FullScreen.defaultProps = {
  enabled: false
};
exports.default = FullScreen;

/***/ }),

/***/ "./node_modules/react-images/dist/react-images.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-images/dist/react-images.es.js ***!
  \***********************************************************/
/*! exports provided: ModalGateway, Modal, carouselComponents, modalComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalGateway", function() { return ModalGateway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselComponents", function() { return carouselComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalComponents", function() { return modalComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glam */ "./node_modules/glam/lib/index.js");
/* harmony import */ var glam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glam__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raf-schd */ "./node_modules/raf-schd/esm/index.js");
/* harmony import */ var react_view_pager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-view-pager */ "./node_modules/react-view-pager/lib/react-view-pager.js");
/* harmony import */ var react_view_pager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_view_pager__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-full-screen */ "./node_modules/react-full-screen/dist/index.js");
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_full_screen__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scrolllock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scrolllock */ "./node_modules/react-scrolllock/dist/index.js");
/* harmony import */ var react_scrolllock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scrolllock__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var a11y_focus_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! a11y-focus-store */ "./node_modules/a11y-focus-store/index.js");
/* harmony import */ var a11y_focus_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(a11y_focus_store__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_8__);










var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// @jsx glam
var Base = function Base(_ref) {
  var css = _ref.css,
      innerRef = _ref.innerRef,
      Tag = _ref.tag,
      props = objectWithoutProperties(_ref, ['css', 'innerRef', 'tag']);
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(Tag, _extends({
    ref: innerRef,
    css: _extends({
      boxSizing: 'border-box'
    }, css)
  }, props));
};


var Button = function Button(props) {
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(Base, _extends({ tag: 'button' }, props));
};
var Div = function Div(props) {
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(Base, _extends({ tag: 'div' }, props));
};
var Img = function Img(props) {
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(Base, _extends({ tag: 'img' }, props));
};
var Nav = function Nav(props) {
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(Base, _extends({ tag: 'nav' }, props));
};
var Span = function Span(props) {
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(Base, _extends({ tag: 'span' }, props));
};

// ==============================
// NO OP
// ==============================



// ==============================
// Class Name Prefixer
// ==============================

var CLASS_PREFIX = 'react-images';

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-images__comp react-images__comp-arg react-images__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-images__comp react-images__comp--some'
*/
function className(name, state) {
  var arr = Array.isArray(name) ? name : [name];

  // loop through state object, remove falsey values and combine with name
  if (state && typeof name === 'string') {
    for (var _key in state) {
      if (state.hasOwnProperty(_key) && state[_key]) {
        arr.push(name + '--' + _key);
      }
    }
  }

  // prefix everything and return a string
  return arr.map(function (cn) {
    return CLASS_PREFIX + '__' + cn;
  }).join(' ');
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouch() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// @jsx glam
var containerCSS = function containerCSS(_ref) {
  var isFullscreen = _ref.isFullscreen;
  return {
    backgroundColor: isFullscreen ? 'black' : null,
    display: 'flex ',
    flexDirection: 'column',
    height: '100%'
  };
};

var Container = function Container(props) {
  var children = props.children,
      getStyles = props.getStyles,
      isFullscreen = props.isFullscreen,
      isModal = props.isModal,
      innerProps = props.innerProps;

  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Div,
    _extends({
      css: getStyles('container', props),
      className: className('container', { isFullscreen: isFullscreen, isModal: isModal })
    }, innerProps),
    children
  );
};

var smallDevice = '@media (max-width: 769px)';

// @jsx glam
var footerCSS = function footerCSS(_ref) {
  var isModal = _ref.isModal,
      interactionIsIdle = _ref.interactionIsIdle;
  return defineProperty({
    alignItems: 'top',
    bottom: isModal ? 0 : null,
    color: isModal ? 'rgba(255, 255, 255, 0.9)' : '#666',
    display: 'flex ',
    flex: '0 0 auto',
    fontSize: 13,
    justifyContent: 'space-between',
    left: isModal ? 0 : null,
    opacity: interactionIsIdle && isModal ? 0 : 1,
    padding: isModal ? '30px 20px 20px' : '10px 0',
    position: isModal ? 'absolute' : null,
    right: isModal ? 0 : null,
    transform: isModal ? 'translateY(' + (interactionIsIdle ? 10 : 0) + 'px)' : null,
    transition: 'opacity 300ms, transform 300ms',
    zIndex: isModal ? 1 : null

  }, smallDevice, {
    padding: isModal ? '20px 15px 15px' : '5px 0'
  });
};

var Footer = function Footer(props) {
  var components = props.components,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFullscreen = props.isFullscreen,
      isModal = props.isModal;


  var style = isModal ? { background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.33))' } : null;

  var state = { isFullscreen: isFullscreen, isModal: isModal };
  var cn = {
    container: className('footer', state),
    caption: className('footer__caption', state),
    count: className('footer__count', state)
  };
  var css = {
    container: getStyles('footer', props),
    caption: getStyles('footerCaption', props),
    count: getStyles('footerCount', props)
  };
  var Caption = components.Caption,
      Count = components.Count;


  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Div,
    _extends({
      css: css.container,
      className: cn.container
      // TODO glam prefixer fails on gradients
      // https://github.com/threepointone/glam/issues/35
      , style: style
    }, innerProps),
    glam__WEBPACK_IMPORTED_MODULE_2___default()(Caption, props),
    glam__WEBPACK_IMPORTED_MODULE_2___default()(Count, props)
  );
};

// ==============================
// Inner Elements
// ==============================

var footerCaptionCSS = function footerCaptionCSS() {
  return {};
};

var FooterCaption = function FooterCaption(props) {
  var currentView = props.currentView,
      getStyles = props.getStyles,
      isFullscreen = props.isFullscreen,
      isModal = props.isModal;
  var caption = currentView.caption;

  var state = { isFullscreen: isFullscreen, isModal: isModal };

  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Span,
    {
      css: getStyles('footerCaption', props),
      className: className('footer__caption', state)
    },
    caption
  );
};

var footerCountCSS = function footerCountCSS() {
  return { flexShrink: 0, marginLeft: '1em' };
};

var FooterCount = function FooterCount(props) {
  var currentIndex = props.currentIndex,
      getStyles = props.getStyles,
      isFullscreen = props.isFullscreen,
      isModal = props.isModal,
      views = props.views;

  var state = { isFullscreen: isFullscreen, isModal: isModal };
  var activeView = currentIndex + 1;
  var totalViews = views.length;

  if (!activeView || !totalViews) return null;

  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Span,
    {
      css: getStyles('footerCount', props),
      className: className('footer__count', state)
    },
    activeView,
    ' of ',
    totalViews
  );
};

// @jsx glam
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ['size']);
  return glam__WEBPACK_IMPORTED_MODULE_2___default()('svg', _extends({
    role: 'presentation',
    viewBox: '0 0 24 24',
    css: {
      display: 'inline-block',
      fill: 'currentColor',
      height: size,
      stroke: 'currentColor',
      strokeWidth: 0,
      width: size
    }
  }, props));
};

var ChevronLeft = function ChevronLeft(_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === undefined ? 32 : _ref2$size,
      props = objectWithoutProperties(_ref2, ['size']);
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Svg,
    _extends({ size: size }, props),
    glam__WEBPACK_IMPORTED_MODULE_2___default()('path', { d: 'M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z' })
  );
};
var ChevronRight = function ChevronRight(_ref3) {
  var _ref3$size = _ref3.size,
      size = _ref3$size === undefined ? 32 : _ref3$size,
      props = objectWithoutProperties(_ref3, ['size']);
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Svg,
    _extends({ size: size }, props),
    glam__WEBPACK_IMPORTED_MODULE_2___default()('path', { d: 'M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z' })
  );
};
var Close = function Close(_ref4) {
  var _ref4$size = _ref4.size,
      size = _ref4$size === undefined ? 32 : _ref4$size,
      props = objectWithoutProperties(_ref4, ['size']);
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Svg,
    _extends({ size: size }, props),
    glam__WEBPACK_IMPORTED_MODULE_2___default()('path', { d: 'M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' })
  );
};
var FullscreenEnter = function FullscreenEnter(_ref5) {
  var _ref5$size = _ref5.size,
      size = _ref5$size === undefined ? 32 : _ref5$size,
      props = objectWithoutProperties(_ref5, ['size']);
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Svg,
    _extends({ size: size }, props),
    glam__WEBPACK_IMPORTED_MODULE_2___default()('path', { d: 'M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z' })
  );
};
var FullscreenExit = function FullscreenExit(_ref6) {
  var _ref6$size = _ref6.size,
      size = _ref6$size === undefined ? 32 : _ref6$size,
      props = objectWithoutProperties(_ref6, ['size']);
  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Svg,
    _extends({ size: size }, props),
    glam__WEBPACK_IMPORTED_MODULE_2___default()('path', { d: 'M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z' })
  );
};

// @jsx glam
var headerCSS = function headerCSS(_ref) {
  var interactionIsIdle = _ref.interactionIsIdle;
  return {
    alignItems: 'center',
    display: 'flex ',
    flex: '0 0 auto',
    justifyContent: 'space-between',
    opacity: interactionIsIdle ? 0 : 1,
    padding: 10,
    paddingBottom: 20,
    position: 'absolute',
    transform: 'translateY(' + (interactionIsIdle ? -10 : 0) + 'px)',
    transition: 'opacity 300ms, transform 300ms',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  };
};

var Header = function Header(props) {
  var components = props.components,
      getStyles = props.getStyles,
      getCloseLabel = props.getCloseLabel,
      getFullscreenLabel = props.getFullscreenLabel,
      innerProps = props.innerProps,
      isModal = props.isModal,
      modalProps = props.modalProps;


  if (!isModal) return null;

  var allowFullscreen = modalProps.allowFullscreen,
      isFullscreen = modalProps.isFullscreen,
      onClose = modalProps.onClose,
      toggleFullscreen = modalProps.toggleFullscreen;

  var FsIcon = isFullscreen ? FullscreenExit : FullscreenEnter;
  var CloseButton = components.CloseButton,
      FullscreenButton = components.FullscreenButton;

  var state = { isFullscreen: isFullscreen, isModal: isModal };

  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Div,
    _extends({
      css: getStyles('header', props),
      className: className('header', state)
      // TODO glam prefixer fails on gradients
      // https://github.com/threepointone/glam/issues/35
      , style: {
        background: 'linear-gradient(rgba(0,0,0,0.33), rgba(0,0,0,0))'
      }
    }, innerProps),
    glam__WEBPACK_IMPORTED_MODULE_2___default()('span', null),
    glam__WEBPACK_IMPORTED_MODULE_2___default()(
      'span',
      null,
      allowFullscreen ? glam__WEBPACK_IMPORTED_MODULE_2___default()(
        FullscreenButton,
        {
          getStyles: getStyles,
          innerProps: {
            onClick: toggleFullscreen,
            title: getFullscreenLabel(state)
          }
        },
        glam__WEBPACK_IMPORTED_MODULE_2___default()(FsIcon, { size: 32 })
      ) : null,
      glam__WEBPACK_IMPORTED_MODULE_2___default()(
        CloseButton,
        {
          getStyles: getStyles,
          innerProps: {
            onClick: onClose,
            title: getCloseLabel(state)
          }
        },
        glam__WEBPACK_IMPORTED_MODULE_2___default()(Close, { size: 32 })
      )
    )
  );
};

// ==============================
// Header Buttons
// ==============================

var headerButtonCSS = function headerButtonCSS() {
  return {
    alignItems: 'center',
    background: 0,
    border: 0,
    color: 'rgba(255, 255, 255, 0.75)',
    cursor: 'pointer',
    display: 'inline-flex ',
    height: 44,
    justifyContent: 'center',
    outline: 0,
    padding: 0,
    position: 'relative',
    width: 44,

    '&:hover': {
      color: 'white'
    }
  };
};

var headerFullscreenCSS = headerButtonCSS;
var HeaderFullscreen = function HeaderFullscreen(props) {
  var children = props.children,
      getStyles = props.getStyles,
      innerProps = props.innerProps;


  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Button,
    _extends({
      css: getStyles('headerFullscreen', props),
      className: className(['header_button', 'header_button--fullscreen']),
      type: 'button'
    }, innerProps),
    children
  );
};

var headerCloseCSS = headerButtonCSS;
var HeaderClose = function HeaderClose(props) {
  var children = props.children,
      getStyles = props.getStyles,
      innerProps = props.innerProps;


  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Button,
    _extends({
      css: getStyles('headerClose', props),
      className: className(['header_button', 'header_button--close']),
      type: 'button'
    }, innerProps),
    children
  );
};

// @jsx glam
// ==============================
// Navigation
// ==============================

var navigationCSS = function navigationCSS(_ref) {
  var interactionIsIdle = _ref.interactionIsIdle;
  return {
    display: 'flex ',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: interactionIsIdle ? 0 : 1,
    transition: 'opacity 300ms'
  };
};

var Navigation = function Navigation(props) {
  var children = props.children,
      getStyles = props.getStyles,
      isFullscreen = props.isFullscreen,
      isModal = props.isModal,
      showNavigationOnTouchDevice = props.showNavigationOnTouchDevice;

  return !isTouch() || isTouch() && showNavigationOnTouchDevice ? glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Nav,
    {
      css: getStyles('navigation', props),
      className: className('navigation', { isFullscreen: isFullscreen, isModal: isModal })
    },
    children
  ) : null;
};

// ==============================
// Nav Item
// ==============================

var BUTTON_SIZE = 50;

var navigationItemCSS = function navigationItemCSS(_ref2) {
  var _ref3;

  var align = _ref2.align;
  return _ref3 = {
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.2)',
    border: 0,
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    display: 'flex ',
    fontSize: 'inherit',
    height: BUTTON_SIZE,
    justifyContent: 'center',
    marginTop: -(BUTTON_SIZE / 2),
    outline: 0,
    position: 'absolute',
    top: '50%',
    transition: 'background-color 200ms',
    width: BUTTON_SIZE
  }, defineProperty(_ref3, align, 20), defineProperty(_ref3, '&:hover', {
    background: 'rgba(255, 255, 255, 0.3)'
  }), defineProperty(_ref3, '&:active', {
    background: 'rgba(255, 255, 255, 0.2)'
  }), _ref3;
};

var navigationPrevCSS = navigationItemCSS;
var NavigationPrev = function NavigationPrev(props) {
  var _props$children = props.children,
      children = _props$children === undefined ? glam__WEBPACK_IMPORTED_MODULE_2___default()(ChevronLeft, { size: 48 }) : _props$children,
      getStyles = props.getStyles,
      innerProps = props.innerProps;


  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Button,
    _extends({
      type: 'button',
      css: getStyles('navigationPrev', props)
    }, innerProps),
    children
  );
};

var navigationNextCSS = navigationItemCSS;
var NavigationNext = function NavigationNext(props) {
  var _props$children2 = props.children,
      children = _props$children2 === undefined ? glam__WEBPACK_IMPORTED_MODULE_2___default()(ChevronRight, { size: 48 }) : _props$children2,
      getStyles = props.getStyles,
      innerProps = props.innerProps;


  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Button,
    _extends({
      type: 'button',
      css: getStyles('navigationNext', props)
    }, innerProps),
    children
  );
};

// @jsx glam
// ==============================
// Blanket
// ==============================

var blanketCSS = function blanketCSS(_ref) {
  var isFullscreen = _ref.isFullscreen;
  return {
    backgroundColor: isFullscreen ? 'black' : 'rgba(0, 0, 0, 0.8)',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1199
  };
};

var Blanket = function Blanket(props) {
  var getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFullscreen = props.isFullscreen;

  return glam__WEBPACK_IMPORTED_MODULE_2___default()(Div, _extends({
    css: getStyles('blanket', props),
    className: className('blanket', { isFullscreen: isFullscreen })
  }, innerProps));
};

// ==============================
// Positioner
// ==============================

var positionerCSS = function positionerCSS() {
  return {
    alignItems: 'center',
    bottom: 0,
    display: 'flex ',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1200
  };
};

var Positioner = function Positioner(props) {
  var children = props.children,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFullscreen = props.isFullscreen;

  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Div,
    _extends({
      css: getStyles('positioner', props),
      className: className('positioner', { isFullscreen: isFullscreen })
    }, innerProps),
    children
  );
};

// ==============================
// Dialog
// ==============================

var dialogCSS = function dialogCSS() {
  return {
    width: '100%'
  };
};

var Dialog = function Dialog(props) {
  var children = props.children,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFullscreen = props.isFullscreen;

  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Div,
    _extends({
      css: getStyles('dialog', props),
      className: className('dialog', { isFullscreen: isFullscreen })
    }, innerProps),
    children
  );
};

function getSource(_ref) {
  var data = _ref.data,
      isFullscreen = _ref.isFullscreen;
  var _data$source = data.source,
      source = _data$source === undefined ? data.src : _data$source;

  if (typeof source === 'string') return source;

  return isFullscreen ? source.fullscreen : source.regular;
}

// @jsx glam
var viewCSS = function viewCSS() {
  return {
    lineHeight: 0,
    position: 'relative',
    textAlign: 'center'
  };
};

var View$1 = function View$$1(props) {
  var data = props.data,
      formatters = props.formatters,
      getStyles = props.getStyles,
      index = props.index,
      isFullscreen = props.isFullscreen,
      isModal = props.isModal;

  var innerProps = {
    alt: formatters.getAltText({ data: data, index: index }),
    src: getSource({ data: data, isFullscreen: isFullscreen })
  };

  return glam__WEBPACK_IMPORTED_MODULE_2___default()(
    Div,
    {
      css: getStyles('view', props),
      className: className('view', { isFullscreen: isFullscreen, isModal: isModal })
    },
    glam__WEBPACK_IMPORTED_MODULE_2___default()(Img, _extends({}, innerProps, {
      className: className('view-image', { isFullscreen: isFullscreen, isModal: isModal }),
      css: {
        height: 'auto',
        maxHeight: '100vh',
        maxWidth: '100vw',
        userSelect: 'none'
      }
    }))
  );
};

var carouselComponents = {
  Container: Container,
  Footer: Footer,
  FooterCaption: FooterCaption,
  FooterCount: FooterCount,
  Header: Header,
  HeaderClose: HeaderClose,
  HeaderFullscreen: HeaderFullscreen,
  Navigation: Navigation,
  NavigationPrev: NavigationPrev,
  NavigationNext: NavigationNext,
  View: View$1
};

var defaultCarouselComponents = function defaultCarouselComponents(providedComponents) {
  return _extends({}, carouselComponents, providedComponents);
};

// ==============================
// Modal
// ==============================

var modalComponents = {
  Blanket: Blanket,
  Positioner: Positioner,
  Dialog: Dialog
};

var defaultModalComponents = function defaultModalComponents(providedComponents) {
  return _extends({}, modalComponents, providedComponents);
};

// Carousel
// Modal
var defaultCarouselStyles = {
  container: containerCSS,
  footer: footerCSS,
  footerCaption: footerCaptionCSS,
  footerCount: footerCountCSS,
  header: headerCSS,
  headerClose: headerCloseCSS,
  headerFullscreen: headerFullscreenCSS,
  navigation: navigationCSS,
  navigationPrev: navigationPrevCSS,
  navigationNext: navigationNextCSS,
  view: viewCSS
};
var defaultModalStyles = {
  blanket: blanketCSS,
  dialog: dialogCSS,
  positioner: positionerCSS
};

// Merge Utility
// Allows consumers to extend a base Carousel or Modal with additional styles

var easing = 'cubic-bezier(0.23, 1, 0.32, 1)'; // easeOutQuint
var verticalOffset = 40;

// ==============================
// Fade
// ==============================

var Fade = function Fade(_ref) {
  var Tag = _ref.component,
      onEntered = _ref.onEntered,
      onExited = _ref.onExited,
      inProp = _ref.in,
      originalProps = _ref.innerProps,
      props = objectWithoutProperties(_ref, ['component', 'onEntered', 'onExited', 'in', 'innerProps']);

  var enter = 300;
  var exit = 500;
  var fadeStyle = {
    transition: 'opacity 200ms',
    opacity: 0
  };
  var fadeTransition = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0, transitionDuration: exit + 'ms' }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_transition_group__WEBPACK_IMPORTED_MODULE_8__["Transition"],
    {
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true,
      onEntered: onEntered,
      onExited: onExited,
      key: 'fade',
      'in': inProp,
      timeout: { enter: enter, exit: exit }
    },
    function (status) {
      var innerProps = _extends({}, originalProps, {
        style: _extends({}, fadeStyle, fadeTransition[status])
      });

      if (status === 'exited') return null;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({ innerProps: innerProps }, props));
    }
  );
};

var SlideUp = function SlideUp(_ref2) {
  var Tag = _ref2.component,
      onEntered = _ref2.onEntered,
      onExited = _ref2.onExited,
      inProp = _ref2.in,
      originalProps = _ref2.innerProps,
      props = objectWithoutProperties(_ref2, ['component', 'onEntered', 'onExited', 'in', 'innerProps']);

  var enter = 300;
  var exit = 500;
  var restingTransform = 'translate3d(0, 0, 0)';
  var slideStyle = {
    transition: 'transform ' + enter + 'ms ' + easing + ', opacity ' + enter + 'ms ' + easing,
    transform: restingTransform
  };
  var slideTransition = {
    entering: {
      opacity: 0,
      transform: 'translate3d(0, ' + verticalOffset + 'px, 0) scale(0.9)'
    },
    entered: {
      opacity: 1,
      transform: restingTransform
    },
    exiting: {
      opacity: 0,
      transform: 'translate3d(0, ' + verticalOffset + 'px, 0) scale(0.9)',
      transition: 'transform ' + exit + 'ms ' + easing + ', opacity ' + exit + 'ms ' + easing
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_transition_group__WEBPACK_IMPORTED_MODULE_8__["Transition"],
    {
      appear: true,
      'in': inProp,
      mountOnEnter: true,
      onEntered: onEntered,
      onExited: onExited,
      timeout: { enter: enter, exit: exit },
      unmountOnExit: true
    },
    function (status) {
      if (status === 'exited') return null;

      var innerProps = _extends({}, originalProps, {
        style: _extends({}, slideStyle, slideTransition[status])
      });

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({ innerProps: innerProps }, props));
    }
  );
};

// @jsx glam
var defaultProps$1 = {
  allowFullscreen: !isTouch(),
  closeOnBackdropClick: true,
  closeOnEsc: true,
  preventScroll: true,
  styles: {}
};

var Modal = function (_Component) {
  inherits(Modal, _Component);

  // TODO
  function Modal(props) {
    classCallCheck(this, Modal);

    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _initialiseProps$1.call(_this);

    _this.cacheComponents(props.components);

    _this.state = { isFullscreen: false };
    return _this;
  }

  createClass(Modal, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.components !== this.props.components) {
        this.cacheComponents(prevProps.components);
      }
    }

    // emulate `componentDidMount` & `componentWillUnmount`
    // called on complete of enter & exit transitions respectively

  }, {
    key: 'getCommonProps',
    value: function getCommonProps() {
      var isFullscreen = this.state.isFullscreen;


      return {
        getStyles: this.getStyles,
        isFullscreen: isFullscreen,
        modalProps: this.props
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _components = this.components,
          Blanket = _components.Blanket,
          Positioner = _components.Positioner,
          Dialog = _components.Dialog;
      var _props = this.props,
          allowFullscreen = _props.allowFullscreen,
          children = _props.children,
          preventScroll = _props.preventScroll;
      var isFullscreen = this.state.isFullscreen;

      var commonProps = this.commonProps = this.getCommonProps();

      // $FlowFixMe
      var transitionIn = this.props.in;

      // forward props to modal for use in internal components
      var modalProps = {
        allowFullscreen: allowFullscreen,
        isFullscreen: isFullscreen,
        onClose: this.handleClose,
        preventScroll: this.preventScroll,
        toggleFullscreen: this.toggleFullscreen
      };

      // augment user carousel with modal props
      // $FlowFixMe
      var carouselComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(children, {
        isModal: true,
        modalProps: modalProps
      });

      return glam__WEBPACK_IMPORTED_MODULE_2___default()(
        react_full_screen__WEBPACK_IMPORTED_MODULE_5___default.a,
        { enabled: isFullscreen, onChange: this.handleFullscreenChange },
        glam__WEBPACK_IMPORTED_MODULE_2___default()(Fade, _extends({}, commonProps, { component: Blanket, 'in': transitionIn })),
        glam__WEBPACK_IMPORTED_MODULE_2___default()(
          SlideUp,
          _extends({}, commonProps, {
            component: Positioner,
            'in': transitionIn,
            innerProps: {
              onClick: this.handleBackdropClick
            },
            onEntered: this.modalDidMount,
            onExited: this.modalWillUnmount
          }),
          glam__WEBPACK_IMPORTED_MODULE_2___default()(
            Dialog,
            commonProps,
            carouselComponent
          ),
          preventScroll && glam__WEBPACK_IMPORTED_MODULE_2___default()(react_scrolllock__WEBPACK_IMPORTED_MODULE_6___default.a, null)
        )
      );
    }
  }]);
  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Modal.defaultProps = defaultProps$1;

var _initialiseProps$1 = function _initialiseProps() {
  var _this2 = this;

  this.modalDidMount = function () {
    document.addEventListener('keyup', _this2.handleKeyUp);
    a11y_focus_store__WEBPACK_IMPORTED_MODULE_7___default.a.storeFocus();
  };

  this.modalWillUnmount = function () {
    document.removeEventListener('keyup', _this2.handleKeyUp);
    a11y_focus_store__WEBPACK_IMPORTED_MODULE_7___default.a.restoreFocus();
  };

  this.cacheComponents = function (comps) {
    _this2.components = defaultModalComponents(comps);
  };

  this.handleFullscreenChange = function (isFullscreen) {
    _this2.setState({ isFullscreen: isFullscreen });
  };

  this.handleKeyUp = function (event) {
    var _props2 = _this2.props,
        allowFullscreen = _props2.allowFullscreen,
        closeOnEsc = _props2.closeOnEsc;
    var isFullscreen = _this2.state.isFullscreen;

    var allowClose = event.key === 'Escape' && closeOnEsc && !isFullscreen;

    // toggle fullscreen
    if (allowFullscreen && event.key === 'f') {
      _this2.toggleFullscreen();
    }

    // close on escape when not fullscreen
    if (allowClose) _this2.handleClose(event);
  };

  this.handleBackdropClick = function (event) {
    if (!event.target.classList.contains(className('view')) || !_this2.props.closeOnBackdropClick) {
      return;
    }

    _this2.handleClose(event);
  };

  this.toggleFullscreen = function () {
    _this2.setState(function (state) {
      return { isFullscreen: !state.isFullscreen };
    });
  };

  this.handleClose = function (event) {
    var onClose = _this2.props.onClose;
    var isFullscreen = _this2.state.isFullscreen;

    // force exit fullscreen mode on close

    if (isFullscreen) {
      _this2.toggleFullscreen();
    }

    // call the consumer's onClose func
    onClose(event);
  };

  this.getStyles = function (key, props) {
    var base = defaultModalStyles[key](props);
    base.boxSizing = 'border-box';
    var custom = _this2.props.styles[key];
    return custom ? custom(base, props) : base;
  };
};

// ==============================
// Navigation
// ==============================

/* ARIA label for the next button */


// NOTE: props aren't used by default for some getters but consumers may need
// them, this needs to be reflected in the flow type.

/* eslint-disable no-unused-vars */

function getNextLabel(_ref) {
  var currentIndex = _ref.currentIndex,
      views = _ref.views;

  return 'Show slide ' + (currentIndex + 2) + ' of ' + views.length;
}

/* ARIA label for the previous button */
function getPrevLabel(_ref2) {
  var currentIndex = _ref2.currentIndex,
      views = _ref2.views;

  return 'Show slide ' + currentIndex + ' of ' + views.length;
}

/* HTML title for the next button */
function getNextTitle(props) {
  return 'Next (right arrow)';
}

/* HTML title for the previous button */
function getPrevTitle(props) {
  return 'Previous (left arrow)';
}

// ==============================
// Header
// ==============================

/* ARIA label for the close button */
function getCloseLabel(props) {
  return 'Close (esc)';
}
/* ARIA label for the fullscreen button */
function getFullscreenLabel(_ref3) {
  var isFullscreen = _ref3.isFullscreen;

  return isFullscreen ? 'Exit fullscreen (f)' : 'Enter fullscreen (f)';
}

// ==============================
// View
// ==============================

/* alt text for each image in the carousel */
function getAltText(_ref4) {
  var data = _ref4.data,
      index = _ref4.index;

  if (data.caption) return data.caption;

  return 'Image ' + (index + 1);
}

// ==============================
// Exports
// ==============================

var formatters = {
  getAltText: getAltText,
  getNextLabel: getNextLabel,
  getPrevLabel: getPrevLabel,
  getNextTitle: getNextTitle,
  getPrevTitle: getPrevTitle,
  getCloseLabel: getCloseLabel,
  getFullscreenLabel: getFullscreenLabel
};

// @jsx glam
var viewPagerStyles = { flex: '1 1 auto', position: 'relative' };
var frameStyles = { outline: 0 };

var defaultProps = {
  currentIndex: 0,
  formatters: formatters,
  hideControlsWhenIdle: 3000,
  showNavigationOnTouchDevice: false,
  styles: {},
  trackProps: {
    instant: !isTouch(),
    swipe: 'touch'
  }
};

var Carousel$1 = function (_Component) {
  inherits(Carousel, _Component);

  function Carousel(props) {
    classCallCheck(this, Carousel);

    var _this = possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _initialiseProps.call(_this);

    _this.cacheComponents(props.components);

    _this.state = {
      currentIndex: props.currentIndex,
      interactionIsIdle: isTouch()
    };
    return _this;
  } // TODO


  createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          hideControlsWhenIdle = _props.hideControlsWhenIdle,
          modalProps = _props.modalProps;

      var isModal = Boolean(modalProps);

      this.mounted = true;

      if (hideControlsWhenIdle && this.container) {
        this.container.addEventListener('mousedown', this.handleMouseActivity);
        this.container.addEventListener('mousemove', this.handleMouseActivity);
        this.container.addEventListener('touchmove', this.handleMouseActivity);
      }
      if (isModal) {
        this.focusViewFrame();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.components !== this.props.components) {
        this.cacheComponents(prevProps.components);
      }

      if (this.props.currentIndex !== prevProps.currentIndex) {
        this.setState({ currentIndex: this.props.currentIndex });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.props.hideControlsWhenIdle && this.container) {
        this.container.removeEventListener('mousedown', this.handleMouseActivity);
        this.container.removeEventListener('mousemove', this.handleMouseActivity);
        this.container.removeEventListener('touchmove', this.handleMouseActivity);
        this.handleMouseActivity.cancel();
      }
    }

    // ==============================
    // Refs
    // ==============================

    // ==============================
    // Utilities
    // ==============================

    // combine defaultProps with consumer props to maintain expected behaviour

    // combine defaultProps with consumer props to maintain expected behaviour


    // ==============================
    // Handlers
    // ==============================

    // ==============================
    // Renderers
    // ==============================

  }, {
    key: 'getCommonProps',
    value: function getCommonProps() {
      var _props2 = this.props,
          frameProps = _props2.frameProps,
          trackProps = _props2.trackProps,
          modalProps = _props2.modalProps,
          views = _props2.views,
          showNavigationOnTouchDevice = _props2.showNavigationOnTouchDevice;

      var isModal = Boolean(modalProps);
      var isFullscreen = Boolean(modalProps && modalProps.isFullscreen);
      var _state = this.state,
          currentIndex = _state.currentIndex,
          interactionIsIdle = _state.interactionIsIdle;

      var currentView = this.getViewData();

      return {
        carouselProps: this.props,
        currentIndex: currentIndex,
        currentView: currentView,
        formatters: this.props.formatters,
        frameProps: frameProps,
        getStyles: this.getStyles,
        showNavigationOnTouchDevice: showNavigationOnTouchDevice,
        isFullscreen: isFullscreen,
        isModal: isModal,
        modalProps: modalProps,
        interactionIsIdle: interactionIsIdle,
        trackProps: trackProps,
        views: views
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _components = this.components,
          Container = _components.Container,
          View$$1 = _components.View;
      var currentIndex = this.state.currentIndex;
      var _props3 = this.props,
          frameProps = _props3.frameProps,
          views = _props3.views;

      var commonProps = this.commonProps = this.getCommonProps();

      return glam__WEBPACK_IMPORTED_MODULE_2___default()(
        Container,
        _extends({}, commonProps, { innerProps: { innerRef: this.getContainer } }),
        this.renderHeader(),
        glam__WEBPACK_IMPORTED_MODULE_2___default()(
          react_view_pager__WEBPACK_IMPORTED_MODULE_4__["ViewPager"],
          {
            tag: 'main',
            style: viewPagerStyles,
            className: className('pager')
          },
          glam__WEBPACK_IMPORTED_MODULE_2___default()(
            react_view_pager__WEBPACK_IMPORTED_MODULE_4__["Frame"],
            _extends({}, frameProps, {
              ref: this.getFrame,
              className: className('frame'),
              style: frameStyles
            }),
            glam__WEBPACK_IMPORTED_MODULE_2___default()(
              react_view_pager__WEBPACK_IMPORTED_MODULE_4__["Track"],
              _extends({}, this.getTrackProps(this.props), {
                style: { display: 'flex', alignItems: 'center' },
                currentView: currentIndex,
                className: className('track'),
                onViewChange: this.handleViewChange,
                ref: this.getTrack
              }),
              views && views.map(function (data, index) {
                return glam__WEBPACK_IMPORTED_MODULE_2___default()(
                  react_view_pager__WEBPACK_IMPORTED_MODULE_4__["View"],
                  { className: className('view-wrapper'), key: index },
                  glam__WEBPACK_IMPORTED_MODULE_2___default()(View$$1, _extends({}, commonProps, { data: data, index: index }))
                );
              })
            )
          ),
          this.renderNavigation()
        ),
        this.renderFooter()
      );
    }
  }]);
  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Carousel$1.defaultProps = defaultProps;

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.mounted = false;

  this.cacheComponents = function (comps) {
    _this2.components = defaultCarouselComponents(comps);
  };

  this.getContainer = function (ref) {
    _this2.container = ref;
  };

  this.getFooter = function (ref) {
    _this2.footer = ref;
  };

  this.getFrame = function (ref) {
    _this2.frame = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(ref);
  };

  this.getHeader = function (ref) {
    _this2.header = ref;
  };

  this.getTrack = function (ref) {
    _this2.track = ref;
  };

  this.hasPreviousView = function () {
    var trackProps = _this2.props.trackProps;
    var currentIndex = _this2.state.currentIndex;


    return trackProps.infinite || currentIndex !== 0;
  };

  this.hasNextView = function () {
    var _props4 = _this2.props,
        trackProps = _props4.trackProps,
        views = _props4.views;
    var currentIndex = _this2.state.currentIndex;


    return trackProps.infinite || currentIndex !== views.length - 1;
  };

  this.getStyles = function (key, props) {
    var base = defaultCarouselStyles[key](props);
    base.boxSizing = 'border-box';
    var custom = _this2.props.styles[key];
    return custom ? custom(base, props) : base;
  };

  this.getTrackProps = function (props) {
    return _extends({}, defaultProps.trackProps, props.trackProps);
  };

  this.getFormatters = function () {
    return _extends({}, defaultProps.formatters, _this2.props.formatters);
  };

  this.getViewData = function () {
    var views = _this2.props.views;
    var currentIndex = _this2.state.currentIndex;


    return views[currentIndex];
  };

  this.focusViewFrame = function () {
    if (_this2.frame && document.activeElement !== _this2.frame) {
      _this2.frame.focus();
    }
  };

  this.prev = function (event) {
    event.stopPropagation();
    _this2.track.prev();
    _this2.focusViewFrame();
  };

  this.next = function (event) {
    event.stopPropagation();
    _this2.track.next();
    _this2.focusViewFrame();
  };

  this.handleMouseActivity = Object(raf_schd__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    clearTimeout(_this2.timer);

    if (_this2.state.interactionIsIdle) {
      _this2.setState({ interactionIsIdle: false });
    }

    _this2.timer = setTimeout(function () {
      if (_this2.mounted) {
        _this2.setState({ interactionIsIdle: true });
      }
    }, _this2.props.hideControlsWhenIdle);
  });

  this.handleViewChange = function (indicies) {
    var trackProps = _this2.props.trackProps;

    // simplify by enforcing number

    var currentIndex = indicies[0];

    _this2.setState({ currentIndex: currentIndex });

    // call the consumer's onViewChange fn
    if (trackProps && trackProps.onViewChange) {
      trackProps.onViewChange(currentIndex);
    }
  };

  this.renderNavigation = function () {
    var _getFormatters = _this2.getFormatters(),
        getNextLabel = _getFormatters.getNextLabel,
        getPrevLabel = _getFormatters.getPrevLabel,
        getNextTitle = _getFormatters.getNextTitle,
        getPrevTitle = _getFormatters.getPrevTitle;

    var _components2 = _this2.components,
        Navigation = _components2.Navigation,
        NavigationPrev = _components2.NavigationPrev,
        NavigationNext = _components2.NavigationNext;
    var commonProps = _this2.commonProps;


    var showPrev = _this2.hasPreviousView();
    var showNext = _this2.hasNextView();
    var showNav = (showPrev || showNext) && Navigation;

    return showNav ? glam__WEBPACK_IMPORTED_MODULE_2___default()(
      Navigation,
      commonProps,
      showPrev && glam__WEBPACK_IMPORTED_MODULE_2___default()(NavigationPrev, _extends({}, commonProps, {
        align: 'left',
        innerProps: {
          'aria-label': getPrevLabel(commonProps),
          onClick: _this2.prev,
          title: getPrevTitle(commonProps)
        }
      })),
      showNext && glam__WEBPACK_IMPORTED_MODULE_2___default()(NavigationNext, _extends({}, commonProps, {
        align: 'right',
        innerProps: {
          'aria-label': getNextLabel(commonProps),
          onClick: _this2.next,
          title: getNextTitle(commonProps)
        }
      }))
    ) : null;
  };

  this.renderFooter = function () {
    var _components3 = _this2.components,
        Footer = _components3.Footer,
        FooterCaption = _components3.FooterCaption,
        FooterCount = _components3.FooterCount;
    var commonProps = _this2.commonProps;


    return Footer ? glam__WEBPACK_IMPORTED_MODULE_2___default()(Footer, _extends({}, commonProps, {
      components: {
        Caption: FooterCaption,
        Count: FooterCount
      },
      innerProps: { innerRef: _this2.getFooter }
    })) : null;
  };

  this.renderHeader = function () {
    var _components4 = _this2.components,
        Header = _components4.Header,
        HeaderClose = _components4.HeaderClose,
        HeaderFullscreen = _components4.HeaderFullscreen;

    var _getFormatters2 = _this2.getFormatters(),
        getCloseLabel = _getFormatters2.getCloseLabel,
        getFullscreenLabel = _getFormatters2.getFullscreenLabel;

    var commonProps = _this2.commonProps;


    return Header ? glam__WEBPACK_IMPORTED_MODULE_2___default()(Header, _extends({}, commonProps, {
      getCloseLabel: getCloseLabel,
      getFullscreenLabel: getFullscreenLabel,
      components: {
        CloseButton: HeaderClose,
        FullscreenButton: HeaderFullscreen
      },
      data: _this2.getViewData(),
      innerProps: { innerRef: _this2.getHeader }
    })) : null;
  };
};

var FirstChild = function FirstChild(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children)[0] || null;
};

var ModalGateway = function (_Component) {
  inherits(ModalGateway, _Component);

  function ModalGateway() {
    classCallCheck(this, ModalGateway);
    return possibleConstructorReturn(this, (ModalGateway.__proto__ || Object.getPrototypeOf(ModalGateway)).apply(this, arguments));
  }

  createClass(ModalGateway, [{
    key: 'render',
    value: function render() {
      if (typeof window === 'undefined') return null;
      var _props = this.props,
          target = _props.target,
          children = _props.children;

      return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["TransitionGroup"], { component: FirstChild, children: children }), target);
    }
  }]);
  return ModalGateway;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ModalGateway.defaultProps = {
  target: typeof window !== 'undefined' ? document.body : null
};


/* harmony default export */ __webpack_exports__["default"] = (Carousel$1);


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-motion/lib/Motion.js":
/*!*************************************************!*\
  !*** ./node_modules/react-motion/lib/Motion.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(/*! ./mapToZero */ "./node_modules/react-motion/lib/mapToZero.js");

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(/*! ./stepper */ "./node_modules/react-motion/lib/stepper.js");

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(/*! ./shouldStopAnimation */ "./node_modules/react-motion/lib/shouldStopAnimation.js");

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

var Motion = (function (_React$Component) {
  _inherits(Motion, _React$Component);

  _createClass(Motion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
      children: _propTypes2['default'].func.isRequired,
      onRest: _propTypes2['default'].func
    },
    enumerable: true
  }]);

  function Motion(props) {
    var _this = this;

    _classCallCheck(this, Motion);

    _React$Component.call(this, props);
    this.wasAnimating = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyle = null;

    this.clearUnreadPropStyle = function (destStyle) {
      var dirty = false;
      var _state = _this.state;
      var currentStyle = _state.currentStyle;
      var currentVelocity = _state.currentVelocity;
      var lastIdealStyle = _state.lastIdealStyle;
      var lastIdealVelocity = _state.lastIdealVelocity;

      for (var key in destStyle) {
        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
          continue;
        }

        var styleValue = destStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            currentStyle = _extends({}, currentStyle);
            currentVelocity = _extends({}, currentVelocity);
            lastIdealStyle = _extends({}, lastIdealStyle);
            lastIdealVelocity = _extends({}, lastIdealVelocity);
          }

          currentStyle[key] = styleValue;
          currentVelocity[key] = 0;
          lastIdealStyle[key] = styleValue;
          lastIdealVelocity[key] = 0;
        }
      }

      if (dirty) {
        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // check if we need to animate in the first place
        var propsStyle = _this.props.style;
        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
          if (_this.wasAnimating && _this.props.onRest) {
            _this.props.onRest();
          }

          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.wasAnimating = false;
          _this.accumulatedTime = 0;
          return;
        }

        _this.wasAnimating = true;

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};
        var newCurrentStyle = {};
        var newCurrentVelocity = {};

        for (var key in propsStyle) {
          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
            continue;
          }

          var styleValue = propsStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
            for (var i = 0; i < framesToCatchUp; i++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyle: newCurrentStyle,
          currentVelocity: newCurrentVelocity,
          lastIdealStyle: newLastIdealStyle,
          lastIdealVelocity: newLastIdealVelocity
        });

        _this.unreadPropStyle = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  Motion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyle = _props.defaultStyle;
    var style = _props.style;

    var currentStyle = defaultStyle || _stripStyle2['default'](style);
    var currentVelocity = _mapToZero2['default'](currentStyle);
    return {
      currentStyle: currentStyle,
      currentVelocity: currentVelocity,
      lastIdealStyle: currentStyle,
      lastIdealVelocity: currentVelocity
    };
  };

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400

  Motion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  Motion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return Motion;
})(_react2['default'].Component);

exports['default'] = Motion;
module.exports = exports['default'];

// after checking for unreadPropStyle != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),

/***/ "./node_modules/react-motion/lib/StaggeredMotion.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-motion/lib/StaggeredMotion.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(/*! ./mapToZero */ "./node_modules/react-motion/lib/mapToZero.js");

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(/*! ./stepper */ "./node_modules/react-motion/lib/stepper.js");

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(/*! ./shouldStopAnimation */ "./node_modules/react-motion/lib/shouldStopAnimation.js");

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = (function (_React$Component) {
  _inherits(StaggeredMotion, _React$Component);

  _createClass(StaggeredMotion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
      styles: _propTypes2['default'].func.isRequired,
      children: _propTypes2['default'].func.isRequired
    },
    enumerable: true
  }]);

  function StaggeredMotion(props) {
    var _this = this;

    _classCallCheck(this, StaggeredMotion);

    _React$Component.call(this, props);
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _state = _this.state;
      var currentStyles = _state.currentStyles;
      var currentVelocities = _state.currentVelocities;
      var lastIdealStyles = _state.lastIdealStyles;
      var lastIdealVelocities = _state.lastIdealVelocities;

      var someDirty = false;
      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i];
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              someDirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
          }
        }
      }

      if (someDirty) {
        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        var destStyles = _this.props.styles(_this.state.lastIdealStyles);

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyles = [];
        var newLastIdealVelocities = [];
        var newCurrentStyles = [];
        var newCurrentVelocities = [];

        for (var i = 0; i < destStyles.length; i++) {
          var destStyle = destStyles[i];
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in destStyle) {
            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
              continue;
            }

            var styleValue = destStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  StaggeredMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;

    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
    var currentVelocities = currentStyles.map(function (currentStyle) {
      return _mapToZero2['default'](currentStyle);
    });
    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: currentStyles,
      lastIdealVelocities: currentVelocities
    };
  };

  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  StaggeredMotion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return StaggeredMotion;
})(_react2['default'].Component);

exports['default'] = StaggeredMotion;
module.exports = exports['default'];

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

// after checking for unreadPropStyles != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),

/***/ "./node_modules/react-motion/lib/TransitionMotion.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-motion/lib/TransitionMotion.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(/*! ./mapToZero */ "./node_modules/react-motion/lib/mapToZero.js");

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(/*! ./stepper */ "./node_modules/react-motion/lib/stepper.js");

var _stepper4 = _interopRequireDefault(_stepper3);

var _mergeDiff = __webpack_require__(/*! ./mergeDiff */ "./node_modules/react-motion/lib/mergeDiff.js");

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(/*! ./shouldStopAnimation */ "./node_modules/react-motion/lib/shouldStopAnimation.js");

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

// the children function & (potential) styles function asks as param an
// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
// {key: string, data?: any, style: PlainStyle}. However, the way we keep
// internal states doesn't contain such a data structure (check the state and
// TransitionMotionState). So when children function and others ask for such
// data we need to generate them on the fly by combining mergedPropsStyles and
// currentStyles/lastIdealStyles
function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
  // Copy the value to a `const` so that Flow understands that the const won't
  // change and will be non-nullable in the callback below.
  var cUnreadPropStyles = unreadPropStyles;
  if (cUnreadPropStyles == null) {
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i]
      };
    });
  }
  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
    for (var j = 0; j < cUnreadPropStyles.length; j++) {
      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
        return {
          key: cUnreadPropStyles[j].key,
          data: cUnreadPropStyles[j].data,
          style: plainStyles[i]
        };
      }
    }
    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
  });
}

function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
  if (mergedPropsStyles.length !== destStyles.length) {
    return false;
  }

  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (mergedPropsStyles[i].key !== destStyles[i].key) {
      return false;
    }
  }

  // we have the invariant that mergedPropsStyles and
  // currentStyles/currentVelocities/last* are synced in terms of cells, see
  // mergeAndSync comment for more info
  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
      return false;
    }
  }

  return true;
}

// core key merging logic

// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
// c}, previous current (interpolating) style is {a, b}
// **invariant**: current[i] corresponds to merged[i] in terms of key

// steps:
// turn merged style into {a?, b, c}
//    add c, value of c is destStyles.c
//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
// turn current (interpolating) style from {a, b} into {a?, b, c}
//    maybe remove a
//    certainly add c, value of c is willEnter(c)
// loop over merged and construct new current
// dest doesn't change, that's owner's
function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
    var leavingStyle = willLeave(oldMergedPropsStyle);
    if (leavingStyle == null) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
  });

  var newCurrentStyles = [];
  var newCurrentVelocities = [];
  var newLastIdealStyles = [];
  var newLastIdealVelocities = [];
  for (var i = 0; i < newMergedPropsStyles.length; i++) {
    var newMergedPropsStyleCell = newMergedPropsStyles[i];
    var foundOldIndex = null;
    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
        foundOldIndex = j;
        break;
      }
    }
    // TODO: key search code
    if (foundOldIndex == null) {
      var plainStyle = willEnter(newMergedPropsStyleCell);
      newCurrentStyles[i] = plainStyle;
      newLastIdealStyles[i] = plainStyle;

      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
      newCurrentVelocities[i] = velocity;
      newLastIdealVelocities[i] = velocity;
    } else {
      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
    }
  }

  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
}

var TransitionMotion = (function (_React$Component) {
  _inherits(TransitionMotion, _React$Component);

  _createClass(TransitionMotion, null, [{
    key: 'propTypes',
    value: {
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
      })),
      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
      }))]).isRequired,
      children: _propTypes2['default'].func.isRequired,
      willEnter: _propTypes2['default'].func,
      willLeave: _propTypes2['default'].func,
      didLeave: _propTypes2['default'].func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      },
      didLeave: function didLeave() {}
    },
    enumerable: true
  }]);

  function TransitionMotion(props) {
    var _this = this;

    _classCallCheck(this, TransitionMotion);

    _React$Component.call(this, props);
    this.unmounting = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var mergedPropsStyles = _mergeAndSync[0];
      var currentStyles = _mergeAndSync[1];
      var currentVelocities = _mergeAndSync[2];
      var lastIdealStyles = _mergeAndSync[3];
      var lastIdealVelocities = _mergeAndSync[4];

      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i].style;
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
              mergedPropsStyles[i] = {
                key: mergedPropsStyles[i].key,
                data: mergedPropsStyles[i].data,
                style: _extends({}, mergedPropsStyles[i].style)
              };
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
            mergedPropsStyles[i].style[key] = styleValue;
          }
        }
      }

      // unlike the other 2 components, we can't detect staleness and optionally
      // opt out of setState here. each style object's data might contain new
      // stuff we're not/cannot compare
      _this.setState({
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        mergedPropsStyles: mergedPropsStyles,
        lastIdealStyles: lastIdealStyles,
        lastIdealVelocities: lastIdealVelocities
      });
    };

    this.startAnimationIfNecessary = function () {
      if (_this.unmounting) {
        return;
      }

      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // https://github.com/chenglou/react-motion/pull/420
        // > if execution passes the conditional if (this.unmounting), then
        // executes async defaultRaf and after that component unmounts and after
        // that the callback of defaultRaf is called, then setState will be called
        // on unmounted component.
        if (_this.unmounting) {
          return;
        }

        var propStyles = _this.props.styles;
        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

        var newMergedPropsStyles = _mergeAndSync2[0];
        var newCurrentStyles = _mergeAndSync2[1];
        var newCurrentVelocities = _mergeAndSync2[2];
        var newLastIdealStyles = _mergeAndSync2[3];
        var newLastIdealVelocities = _mergeAndSync2[4];

        for (var i = 0; i < newMergedPropsStyles.length; i++) {
          var newMergedPropsStyle = newMergedPropsStyles[i].style;
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in newMergedPropsStyle) {
            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
              continue;
            }

            var styleValue = newMergedPropsStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = newLastIdealStyles[i][key];
              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities,
          mergedPropsStyles: newMergedPropsStyles
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  TransitionMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;
    var willEnter = _props.willEnter;
    var willLeave = _props.willLeave;
    var didLeave = _props.didLeave;

    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

    // this is special. for the first time around, we don't have a comparison
    // between last (no last) and current merged props. we'll compute last so:
    // say default is {a, b} and styles (dest style) is {b, c}, we'll
    // fabricate last as {a, b}
    var oldMergedPropsStyles = undefined;
    if (defaultStyles == null) {
      oldMergedPropsStyles = destStyles;
    } else {
      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
        // TODO: key search code
        for (var i = 0; i < destStyles.length; i++) {
          if (destStyles[i].key === defaultStyleCell.key) {
            return destStyles[i];
          }
        }
        return defaultStyleCell;
      });
    }
    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    });
    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    });

    var _mergeAndSync3 = mergeAndSync(
    // Because this is an old-style createReactClass component, Flow doesn't
    // understand that the willEnter and willLeave props have default values
    // and will always be present.
    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync3[0];
    var currentStyles = _mergeAndSync3[1];
    var currentVelocities = _mergeAndSync3[2];
    var lastIdealStyles = _mergeAndSync3[3];
    var lastIdealVelocities = _mergeAndSync3[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  };

  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)

  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    var styles = props.styles;
    if (typeof styles === 'function') {
      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
    } else {
      this.unreadPropStyles = styles;
    }

    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounting = true;
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  TransitionMotion.prototype.render = function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return TransitionMotion;
})(_react2['default'].Component);

exports['default'] = TransitionMotion;
module.exports = exports['default'];

// list of styles, each containing interpolating values. Part of what's passed
// to children function. Notice that this is
// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
// contains the key & data info (so that we only have a single source of truth
// for these, and to save space). Check the comment for `rehydrateStyles` to
// see how we regenerate the entirety of what's passed to children function

// the array that keeps track of currently rendered stuff! Including stuff
// that you've unmounted but that's still animating. This is where it lives

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

/***/ }),

/***/ "./node_modules/react-motion/lib/mapToZero.js":
/*!****************************************************!*\
  !*** ./node_modules/react-motion/lib/mapToZero.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// currently used to initiate the velocity style object to 0


exports.__esModule = true;
exports['default'] = mapToZero;

function mapToZero(obj) {
  var ret = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = 0;
    }
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/mergeDiff.js":
/*!****************************************************!*\
  !*** ./node_modules/react-motion/lib/mergeDiff.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// core keys merging algorithm. If previous render's keys are [a, b], and the
// next render's [c, b, d], what's the final merged keys and ordering?

// - c and a must both be before b
// - b before d
// - ordering between a and c ambiguous

// this reduces to merging two partially ordered lists (e.g. lists where not
// every item has a definite ordering, like comparing a and c above). For the
// ambiguous ordering we deterministically choose to place the next render's
// item after the previous'; so c after a

// this is called a topological sorting. Except the existing algorithms don't
// work well with js bc of the amount of allocation, and isn't optimized for our
// current use-case bc the runtime is linear in terms of edges (see wiki for
// meaning), which is huge when two lists have many common elements


exports.__esModule = true;
exports['default'] = mergeDiff;

function mergeDiff(prev, next, onRemove) {
  // bookkeeping for easier access of a key's index below. This is 2 allocations +
  // potentially triggering chrome hash map mode for objs (so it might be faster

  var prevKeyIndex = {};
  for (var i = 0; i < prev.length; i++) {
    prevKeyIndex[prev[i].key] = i;
  }
  var nextKeyIndex = {};
  for (var i = 0; i < next.length; i++) {
    nextKeyIndex[next[i].key] = i;
  }

  // first, an overly elaborate way of merging prev and next, eliminating
  // duplicates (in terms of keys). If there's dupe, keep the item in next).
  // This way of writing it saves allocations
  var ret = [];
  for (var i = 0; i < next.length; i++) {
    ret[i] = next[i];
  }
  for (var i = 0; i < prev.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
      // merge in keys that the user desires to kill
      var fill = onRemove(i, prev[i]);
      if (fill != null) {
        ret.push(fill);
      }
    }
  }

  // now all the items all present. Core sorting logic to have the right order
  return ret.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a.key];
    var nextOrderB = nextKeyIndex[b.key];
    var prevOrderA = prevKeyIndex[a.key];
    var prevOrderB = prevKeyIndex[b.key];

    if (nextOrderA != null && nextOrderB != null) {
      // both keys in next
      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
    } else if (prevOrderA != null && prevOrderB != null) {
      // both keys in prev
      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
    } else if (nextOrderA != null) {
      // key a in next, key b in prev

      // how to determine the order between a and b? We find a "pivot" (term
      // abuse), a key present in both prev and next, that is sandwiched between
      // a and b. In the context of our above example, if we're comparing a and
      // d, b's (the only) pivot
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
          return 1;
        }
      }
      // pluggable. default to: next bigger than prev
      return 1;
    }
    // prevOrderA, nextOrderB
    for (var i = 0; i < next.length; i++) {
      var pivot = next[i].key;
      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
        continue;
      }
      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
        return -1;
      }
    }
    // pluggable. default to: next bigger than prev
    return -1;
  });
}

module.exports = exports['default'];
// to loop through and find a key's index each time), but I no longer care

/***/ }),

/***/ "./node_modules/react-motion/lib/presets.js":
/*!**************************************************!*\
  !*** ./node_modules/react-motion/lib/presets.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-motion/lib/react-motion.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-motion/lib/react-motion.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _Motion = __webpack_require__(/*! ./Motion */ "./node_modules/react-motion/lib/Motion.js");

exports.Motion = _interopRequire(_Motion);

var _StaggeredMotion = __webpack_require__(/*! ./StaggeredMotion */ "./node_modules/react-motion/lib/StaggeredMotion.js");

exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

var _TransitionMotion = __webpack_require__(/*! ./TransitionMotion */ "./node_modules/react-motion/lib/TransitionMotion.js");

exports.TransitionMotion = _interopRequire(_TransitionMotion);

var _spring = __webpack_require__(/*! ./spring */ "./node_modules/react-motion/lib/spring.js");

exports.spring = _interopRequire(_spring);

var _presets = __webpack_require__(/*! ./presets */ "./node_modules/react-motion/lib/presets.js");

exports.presets = _interopRequire(_presets);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

exports.stripStyle = _interopRequire(_stripStyle);

// deprecated, dummy warning function

var _reorderKeys = __webpack_require__(/*! ./reorderKeys */ "./node_modules/react-motion/lib/reorderKeys.js");

exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),

/***/ "./node_modules/react-motion/lib/reorderKeys.js":
/*!******************************************************!*\
  !*** ./node_modules/react-motion/lib/reorderKeys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = reorderKeys;

var hasWarned = false;

function reorderKeys() {
  if (true) {
    if (!hasWarned) {
      hasWarned = true;
      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
    }
  }
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/shouldStopAnimation.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-motion/lib/shouldStopAnimation.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)


exports.__esModule = true;
exports['default'] = shouldStopAnimation;

function shouldStopAnimation(currentStyle, style, currentVelocity) {
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }

    if (currentVelocity[key] !== 0) {
      return false;
    }

    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentStyle[key] !== styleValue) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/spring.js":
/*!*************************************************!*\
  !*** ./node_modules/react-motion/lib/spring.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = spring;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _presets = __webpack_require__(/*! ./presets */ "./node_modules/react-motion/lib/presets.js");

var _presets2 = _interopRequireDefault(_presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/stepper.js":
/*!**************************************************!*\
  !*** ./node_modules/react-motion/lib/stepper.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the


exports.__esModule = true;
exports["default"] = stepper;

var reusedTuple = [0, 0];

function stepper(secondPerFrame, x, v, destX, k, b, precision) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}

module.exports = exports["default"];
// array reference around.

/***/ }),

/***/ "./node_modules/react-motion/lib/stripStyle.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-motion/lib/stripStyle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}



exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }
    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-node-resolver/lib/NodeResolver.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-node-resolver/lib/NodeResolver.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeResolver = function (_Component) {
  _inherits(NodeResolver, _Component);

  function NodeResolver() {
    _classCallCheck(this, NodeResolver);

    return _possibleConstructorReturn(this, (NodeResolver.__proto__ || Object.getPrototypeOf(NodeResolver)).apply(this, arguments));
  }

  _createClass(NodeResolver, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.innerRef((0, _reactDom.findDOMNode)(this));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.children !== this.props.children) {
        this.props.innerRef((0, _reactDom.findDOMNode)(this));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(_react.Component);

exports.default = NodeResolver;

/***/ }),

/***/ "./node_modules/react-node-resolver/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-node-resolver/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NodeResolver = __webpack_require__(/*! ./NodeResolver */ "./node_modules/react-node-resolver/lib/NodeResolver.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NodeResolver).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/ScrollLock.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/ScrollLock.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _TouchScrollable = __webpack_require__(/*! ./TouchScrollable */ "./node_modules/react-scrolllock/dist/TouchScrollable.js");

var _withLockSheet = __webpack_require__(/*! ./withLockSheet */ "./node_modules/react-scrolllock/dist/withLockSheet.js");

var _withLockSheet2 = _interopRequireDefault(_withLockSheet);

var _withTouchListeners = __webpack_require__(/*! ./withTouchListeners */ "./node_modules/react-scrolllock/dist/withTouchListeners.js");

var _withTouchListeners2 = _interopRequireDefault(_withTouchListeners);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scrolllock/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollLock = function (_PureComponent) {
  _inherits(ScrollLock, _PureComponent);

  function ScrollLock() {
    _classCallCheck(this, ScrollLock);

    return _possibleConstructorReturn(this, (ScrollLock.__proto__ || Object.getPrototypeOf(ScrollLock)).apply(this, arguments));
  }

  _createClass(ScrollLock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!_exenv.canUseDOM) return;
      this.initialHeight = window.innerHeight;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var offset = window.innerHeight - this.initialHeight;

      // adjust scroll if the window has been resized since the lock was engaged
      // e.g. mobile safari dynamic chrome heights
      if (offset) {
        window.scrollTo(0, window.pageYOffset + offset);
      }

      // reset the initial height in case this scroll lock is used again
      this.initialHeight = window.innerHeight;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children ? _react2.default.createElement(
        _TouchScrollable.TouchScrollable,
        null,
        children
      ) : null;
    }
  }]);

  return ScrollLock;
}(_react.PureComponent);

// attach the stylesheet and inject styles on [un]mount


var compose = (0, _utils.pipe)(_withTouchListeners2.default, _withLockSheet2.default);
var SheetLock = compose(ScrollLock);

// toggle the lock based on `isActive` prop
var LockToggle = function LockToggle(props) {
  return props.isActive ? _react2.default.createElement(SheetLock, props) : props.children;
};

LockToggle.defaultProps = {
  accountForScrollbars: true,
  children: null,
  isActive: true
};

exports.default = LockToggle;

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/TouchScrollable.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/TouchScrollable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchScrollable = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _reactNodeResolver = __webpack_require__(/*! react-node-resolver */ "./node_modules/react-node-resolver/lib/index.js");

var _reactNodeResolver2 = _interopRequireDefault(_reactNodeResolver);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scrolllock/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TouchScrollable = exports.TouchScrollable = function (_PureComponent) {
  _inherits(TouchScrollable, _PureComponent);

  function TouchScrollable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TouchScrollable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchScrollable.__proto__ || Object.getPrototypeOf(TouchScrollable)).call.apply(_ref, [this].concat(args))), _this), _this.getScrollableArea = function (ref) {
      _this.scrollableArea = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TouchScrollable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!_exenv.canUseEventListeners) return;

      this.scrollableArea.addEventListener('touchstart', _utils.preventInertiaScroll, _utils.listenerOptions);
      this.scrollableArea.addEventListener('touchmove', _utils.allowTouchMove, _utils.listenerOptions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!_exenv.canUseEventListeners) return;

      this.scrollableArea.removeEventListener('touchstart', _utils.preventInertiaScroll, _utils.listenerOptions);
      this.scrollableArea.removeEventListener('touchmove', _utils.allowTouchMove, _utils.listenerOptions);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNodeResolver2.default, _extends({ innerRef: this.getScrollableArea }, this.props));
    }
  }]);

  return TouchScrollable;
}(_react.PureComponent);

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollLock = __webpack_require__(/*! ./ScrollLock */ "./node_modules/react-scrolllock/dist/ScrollLock.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollLock).default;
  }
});

var _TouchScrollable = __webpack_require__(/*! ./TouchScrollable */ "./node_modules/react-scrolllock/dist/TouchScrollable.js");

Object.defineProperty(exports, 'TouchScrollable', {
  enumerable: true,
  get: function get() {
    return _TouchScrollable.TouchScrollable;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = exports.listenerOptions = undefined;
exports.preventTouchMove = preventTouchMove;
exports.allowTouchMove = allowTouchMove;
exports.preventInertiaScroll = preventInertiaScroll;
exports.isTouchDevice = isTouchDevice;
exports.camelToKebab = camelToKebab;
exports.parse = parse;
exports.getPadding = getPadding;
exports.getWindowHeight = getWindowHeight;
exports.getDocumentHeight = getDocumentHeight;
exports.makeStyleTag = makeStyleTag;
exports.injectStyles = injectStyles;
exports.insertStyleTag = insertStyleTag;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var listenerOptions = exports.listenerOptions = {
  capture: false,
  passive: false
};

// ==============================
// Touch Helpers
// ==============================

function preventTouchMove(e) {
  e.preventDefault();

  return false;
}

function allowTouchMove(e) {
  var target = e.currentTarget;

  if (target.scrollHeight > target.clientHeight) {
    e.stopPropagation();
    return true;
  }

  e.preventDefault();
  return false;
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  if (!_exenv.canUseDOM) return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

// ==============================
// Misc.
// ==============================

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function parse(val) {
  return isNaN(val) ? val : val + 'px';
}

// Take a list of functions and return a function that applies the list of
// functions from left to right

var pipeFns = function pipeFns(a, b) {
  return function () {
    return b(a.apply(undefined, arguments));
  };
};
var pipe = exports.pipe = function pipe() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(pipeFns);
};

// ==============================
// Document Helpers
// ==============================

function getPadding() {
  if (!_exenv.canUseDOM) return 0;

  var currentPadding = parseInt(document.body.paddingRight, 10) || 0;
  var clientWidth = document.body ? document.body.clientWidth : 0;
  var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

  return adjustedPadding;
}

function getWindowHeight() {
  var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (_exenv.canUseDOM) {
    return window.innerHeight * multiplier;
  }
}

function getDocumentHeight() {
  if (_exenv.canUseDOM) {
    return document.body.clientHeight;
  }
}

// ==============================
// Style Sheets
// ==============================

function makeStyleTag() {
  if (!_exenv.canUseDOM) return;

  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-react-scrolllock', '');

  return tag;
}
function injectStyles(tag, css) {
  if (!_exenv.canUseDOM) return;

  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  if (!_exenv.canUseDOM) return;

  var head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(tag);
}

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/withLockSheet.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/withLockSheet.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withLockSheet;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scrolllock/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withLockSheet(WrappedComponent) {
  return function (_PureComponent) {
    _inherits(SheetProvider, _PureComponent);

    function SheetProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SheetProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SheetProvider.__proto__ || Object.getPrototypeOf(SheetProvider)).call.apply(_ref, [this].concat(args))), _this), _this.addSheet = function () {
        var styles = _this.getStyles();

        var sheet = (0, _utils.makeStyleTag)();
        if (!sheet) return;

        (0, _utils.injectStyles)(sheet, styles);
        (0, _utils.insertStyleTag)(sheet);

        _this.sheet = sheet;
      }, _this.getStyles = function () {
        var accountForScrollbars = _this.props.accountForScrollbars;


        var height = (0, _utils.getDocumentHeight)();
        var paddingRight = accountForScrollbars ? (0, _utils.getPadding)() : null;
        var styles = 'body {\n        box-sizing: border-box !important;\n        overflow: hidden !important;\n        position: relative !important;\n        ' + (height ? 'height: ' + height + 'px !important;' : '') + '\n        ' + (paddingRight ? 'padding-right: ' + paddingRight + 'px !important;' : '') + '\n      }';

        return styles;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SheetProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.addSheet();
      }
    }, {
      key: 'removeSheet',
      value: function removeSheet() {
        if (!this.sheet) return;

        // $FlowFixMe
        this.sheet.parentNode.removeChild(this.sheet);
        this.sheet = null;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeSheet();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return SheetProvider;
  }(_react.PureComponent);
}

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/withTouchListeners.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/withTouchListeners.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withTouchListeners;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scrolllock/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Mobile Safari ignores { overflow: hidden } declaration on the body,
// so we have to prevent touchmove events via JS
function withTouchListeners(WrappedComponent) {
    return function (_PureComponent) {
        _inherits(TouchProvider, _PureComponent);

        function TouchProvider() {
            _classCallCheck(this, TouchProvider);

            return _possibleConstructorReturn(this, (TouchProvider.__proto__ || Object.getPrototypeOf(TouchProvider)).apply(this, arguments));
        }

        _createClass(TouchProvider, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                if (!_exenv.canUseDOM || !(0, _utils.isTouchDevice)()) return;

                document.addEventListener('touchmove', _utils.preventTouchMove, _utils.listenerOptions);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (!_exenv.canUseDOM || !(0, _utils.isTouchDevice)()) return;

                document.removeEventListener('touchmove', _utils.preventTouchMove, _utils.listenerOptions);
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(WrappedComponent, this.props);
            }
        }]);

        return TouchProvider;
    }(_react.PureComponent);
}

/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : undefined;
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : undefined;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : undefined;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ "./node_modules/react-view-pager/lib/AnimatedView.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-view-pager/lib/AnimatedView.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _animationBus = __webpack_require__(/*! animation-bus */ "./node_modules/animation-bus/lib/animation-bus.js");

var _animationBus2 = _interopRequireDefault(_animationBus);

var _Pager = __webpack_require__(/*! ./Pager */ "./node_modules/react-view-pager/lib/Pager.js");

var _Pager2 = _interopRequireDefault(_Pager);

var _specialAssign = __webpack_require__(/*! ./special-assign */ "./node_modules/react-view-pager/lib/special-assign.js");

var _specialAssign2 = _interopRequireDefault(_specialAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkedProps = {
  tag: _propTypes2.default.string,
  index: _propTypes2.default.number,
  animations: _propTypes2.default.array
};

var AnimatedView = function (_Component) {
  _inherits(AnimatedView, _Component);

  function AnimatedView() {
    _classCallCheck(this, AnimatedView);

    return _possibleConstructorReturn(this, (AnimatedView.__proto__ || Object.getPrototypeOf(AnimatedView)).apply(this, arguments));
  }

  _createClass(AnimatedView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var animations = this.props.animations;


      if (animations.length) {
        this._animationBus = new _animationBus2.default({
          animations: animations,
          origin: function origin(view) {
            return view.origin;
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          index = _props.index,
          restProps = _objectWithoutProperties(_props, ['tag', 'index']);

      var style = _extends({}, restProps.style);

      if (this._animationBus) {
        var view = this.context.view || this.context.pager.getView(index);
        if (view) {
          style = _extends({}, restProps.style, this._animationBus.getStyles(view));
        }
      }

      return (0, _react.createElement)(tag, (0, _specialAssign2.default)({ style: style }, this.props, checkedProps));
    }
  }]);

  return AnimatedView;
}(_react.Component);

AnimatedView.contextTypes = {
  pager: _propTypes2.default.instanceOf(_Pager2.default),
  view: _propTypes2.default.any
};
AnimatedView.propTypes = checkedProps;
AnimatedView.defaultProps = {
  tag: 'div',
  animations: []
};
exports.default = AnimatedView;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/Frame.js":
/*!****************************************************!*\
  !*** ./node_modules/react-view-pager/lib/Frame.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactMotion = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");

var _Pager = __webpack_require__(/*! ./Pager */ "./node_modules/react-view-pager/lib/Pager.js");

var _Pager2 = _interopRequireDefault(_Pager);

var _Swipe = __webpack_require__(/*! ./Swipe */ "./node_modules/react-view-pager/lib/Swipe.js");

var _Swipe2 = _interopRequireDefault(_Swipe);

var _Keyboard = __webpack_require__(/*! ./Keyboard */ "./node_modules/react-view-pager/lib/Keyboard.js");

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _specialAssign = __webpack_require__(/*! ./special-assign */ "./node_modules/react-view-pager/lib/special-assign.js");

var _specialAssign2 = _interopRequireDefault(_specialAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkedProps = {
  tag: _propTypes2.default.any,
  autoSize: _propTypes2.default.oneOf([true, false, 'width', 'height']),
  accessibility: _propTypes2.default.bool,
  springConfig: _propTypes2.default.objectOf(_propTypes2.default.number)
};

var Frame = function (_Component) {
  _inherits(Frame, _Component);

  function Frame(props) {
    _classCallCheck(this, Frame);

    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props));

    _this._setFrameSize = function () {
      var frameSize = _this.context.pager.getFrameSize({ fullSize: true });

      if (frameSize.width && frameSize.height) {
        _this.setState(frameSize, function () {
          // we need to unset the instant flag now that React Motion has dimensions to animate to
          if (_this.state.instant) {
            _this.setState({ instant: false });
          }
        });
      }
    };

    _this.state = {
      width: 0,
      height: 0,
      instant: true
    };
    _this._hydrate = false;
    return _this;
  }

  _createClass(Frame, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var pager = this.context.pager;
      var _props = this.props,
          autoSize = _props.autoSize,
          accessibility = _props.accessibility;


      pager.setOptions({ autoSize: autoSize, accessibility: accessibility });

      this._swipe = new _Swipe2.default(pager);
      this._keyboard = new _Keyboard2.default(pager);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var pager = this.context.pager;


      pager.addFrame((0, _reactDom.findDOMNode)(this));

      // set frame size initially and then based on certain pager events
      this._setFrameSize();
      pager.on('viewChange', this._setFrameSize);
      pager.on('hydrated', this._setFrameSize);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var autoSize = _ref.autoSize,
          accessibility = _ref.accessibility;

      // update any options that have changed
      if (this.props.autoSize !== autoSize || this.props.accessibility !== accessibility) {
        this.context.pager.setOptions({ autoSize: autoSize, accessibility: accessibility });
        this._hydrate = true;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(nextProps) {
      if (this._hydrate) {
        this.context.pager.hydrate();
        this._hydrate = false;
      }
    }
  }, {
    key: '_getFrameStyle',
    value: function _getFrameStyle() {
      var springConfig = this.props.springConfig;
      var _state = this.state,
          width = _state.width,
          height = _state.height,
          instant = _state.instant;

      return {
        maxWidth: instant ? width : (0, _reactMotion.spring)(width, springConfig),
        height: instant ? height : (0, _reactMotion.spring)(height, springConfig)
      };
    }
  }, {
    key: '_renderFrame',
    value: function _renderFrame(style) {
      var pager = this.context.pager;
      var _props2 = this.props,
          tag = _props2.tag,
          accessibility = _props2.accessibility;

      var props = (0, _specialAssign2.default)(_extends({}, this._swipe.getEvents(), this._keyboard.getEvents(), {
        tabIndex: accessibility ? 0 : null
      }), this.props, checkedProps);

      return (0, _react.createElement)(tag, _extends({}, props, {
        style: _extends({}, style, props.style)
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var autoSize = this.props.autoSize;
      var height = this.state.height;

      var style = {
        position: 'relative',
        overflow: 'hidden'
      };

      if (autoSize) {
        return _react2.default.createElement(
          _reactMotion.Motion,
          { style: this._getFrameStyle() },
          function (dimensions) {
            if ((autoSize === true || autoSize === 'width') && dimensions.maxWidth) {
              style.maxWidth = dimensions.maxWidth;
            }
            if ((autoSize === true || autoSize === 'height') && dimensions.height) {
              style.height = dimensions.height;
            }
            return _this2._renderFrame(style);
          }
        );
      } else {
        return this._renderFrame(style);
      }
    }
  }]);

  return Frame;
}(_react.Component);

Frame.contextTypes = {
  pager: _propTypes2.default.instanceOf(_Pager2.default)
};
Frame.propTypes = checkedProps;
Frame.defaultProps = {
  tag: 'div',
  autoSize: false,
  accessibility: true,
  springConfig: _reactMotion.presets.noWobble
};
exports.default = Frame;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/Keyboard.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-view-pager/lib/Keyboard.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-view-pager/lib/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyboard = function () {
  function Keyboard(pager) {
    var _this = this;

    _classCallCheck(this, Keyboard);

    this._handleKeyDown = function (e) {
      // handle respective key controls
      switch (e.key) {
        // move to the previous view
        case 'ArrowUp':
        case 'ArrowLeft':
          _this.pager.prev();
          return;

        // move to the next view
        case 'ArrowDown':
        case 'ArrowRight':
        case ' ':
          _this.pager.next();
          return;

        // move to first view
        case 'Home':
          _this.pager.setCurrentView({ index: 0 });
          return;

        // move to last view
        case 'End':
          _this.pager.setCurrentView({ index: _this.pager.views.length - 1 });
          return;
      }

      // 1 - 9 keys mapped to respective slide number
      var maxNumKey = (0, _utils.clamp)(_this.pager.views.length, 0, 9);

      for (var i = 1; i <= maxNumKey; i++) {
        if (+e.key === i) {
          _this.pager.setCurrentView({ index: i - 1 });
        }
      }
    };

    this.pager = pager;
  }

  _createClass(Keyboard, [{
    key: 'getEvents',
    value: function getEvents() {
      var keyboardEvents = {};

      if (this.pager.options.accessibility) {
        keyboardEvents.onKeyDown = this._handleKeyDown;
      }

      return keyboardEvents;
    }
  }]);

  return Keyboard;
}();

exports.default = Keyboard;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/Pager.js":
/*!****************************************************!*\
  !*** ./node_modules/react-view-pager/lib/Pager.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mitt = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

var _mitt2 = _interopRequireDefault(_mitt);

var _tabbable = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

var _animationBus = __webpack_require__(/*! animation-bus */ "./node_modules/animation-bus/lib/animation-bus.js");

var _animationBus2 = _interopRequireDefault(_animationBus);

var _resizeObserverPolyfill = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _PagerElement3 = __webpack_require__(/*! ./PagerElement */ "./node_modules/react-view-pager/lib/PagerElement.js");

var _PagerElement4 = _interopRequireDefault(_PagerElement3);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-view-pager/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TRANSFORM = __webpack_require__(/*! get-prefix */ "./node_modules/get-prefix/lib/index.js")('transform');
var isWindowDefined = typeof window !== 'undefined';

var Track = function (_PagerElement) {
  _inherits(Track, _PagerElement);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
  }

  _createClass(Track, [{
    key: 'getStyles',
    value: function getStyles(trackPosition) {
      var _pager$getPositionVal = this.pager.getPositionValue(trackPosition),
          x = _pager$getPositionVal.x,
          y = _pager$getPositionVal.y;

      var trackSize = this.pager.getTrackSize();
      var style = _defineProperty({}, TRANSFORM, 'translate3d(' + x + 'px, ' + y + 'px, 0)');

      if (trackSize) {
        var _pager$options = this.pager.options,
            axis = _pager$options.axis,
            viewsToShow = _pager$options.viewsToShow;

        var dimension = axis === 'x' ? 'width' : 'height';

        style[dimension] = viewsToShow === 'auto' ? trackSize : this.pager.views.length / viewsToShow * 100 + '%';
      }

      return style;
    }
  }]);

  return Track;
}(_PagerElement4.default);

var View = function (_PagerElement2) {
  _inherits(View, _PagerElement2);

  function View(_ref) {
    var index = _ref.index,
        restOptions = _objectWithoutProperties(_ref, ['index']);

    _classCallCheck(this, View);

    var _this2 = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, restOptions));

    _this2.index = index;
    _this2.inBounds = true;
    _this2.tabbableChildren = [];
    _this2.setCurrent(false);
    _this2.setVisible(false);
    _this2.setTarget();
    _this2.setOrigin();

    // TODO: look into getting rid of setTimeout
    // not sure the reason for needing setTimeout in order to get proper children,
    // might be due to something in React that we're not doing at the right time
    setTimeout(function () {
      _this2.tabbableChildren = (0, _tabbable2.default)(_this2.node);
      _this2.setTabbableChildren();
    });
    return _this2;
  }

  _createClass(View, [{
    key: 'setCurrent',
    value: function setCurrent(isCurrent) {
      this.isCurrent = isCurrent;
    }
  }, {
    key: 'setVisible',
    value: function setVisible(isVisible) {
      this.isVisible = isVisible;
      this.setTabbableChildren();
    }
  }, {
    key: 'setTabbableChildren',
    value: function setTabbableChildren() {
      // only allow tabbing in current slides
      for (var i = 0; i < this.tabbableChildren.length; i++) {
        this.tabbableChildren[i].tabIndex = this.isCurrent ? 0 : -1;
      }
    }
  }, {
    key: 'setTarget',
    value: function setTarget() {
      var _pager$options2 = this.pager.options,
          align = _pager$options2.align,
          viewsToShow = _pager$options2.viewsToShow;

      var target = this.pager.getStartCoords(this.index);

      if (align) {
        target += this.pager.getAlignOffset(this);
      }

      this.target = target;
    }
  }, {
    key: 'setOrigin',
    value: function setOrigin() {
      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pager.trackPosition;

      this.origin = this.target - trackPosition;
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var _pager$options3 = this.pager.options,
          axis = _pager$options3.axis,
          viewsToShow = _pager$options3.viewsToShow,
          infinite = _pager$options3.infinite;

      var style = {};

      // we need to position views inline when using the x axis
      if (axis === 'x') {
        style.display = 'inline-block';
        style.verticalAlign = 'top';
      }

      // set width or height on view when viewsToShow is not auto
      if (viewsToShow !== 'auto') {
        style[axis === 'x' ? 'width' : 'height'] = 100 / this.pager.views.length + '%';
      }

      // make sure view stays in frame when using infinite option
      if (infinite && !this.inBounds) {
        style.position = 'relative';
        style[axis === 'y' ? 'top' : 'left'] = this.getPosition();
      }

      // finally, apply any animations
      return _extends({}, style, this.pager.animationBus.getStyles(this));
    }
  }]);

  return View;
}(_PagerElement4.default);

var defaultOptions = {
  viewsToShow: 1,
  viewsToMove: 1,
  align: 0,
  contain: false,
  axis: 'x',
  autoSize: false,
  animations: [],
  infinite: false,
  instant: false,
  swipe: true,
  swipeThreshold: 0.5,
  flickTimeout: 300,
  accessibility: true
};

var Pager = function () {
  function Pager() {
    var _this3 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Pager);

    this.hydrate = function () {
      _this3.frame.setSize();
      _this3.track.setSize();
      _this3.views.forEach(function (view) {
        view.setSize();
        view.setTarget();
      });
      _this3.setPositionValue();
      _this3.setViewStyles();
      _this3.emit('hydrated');
    };

    var emitter = (0, _mitt2.default)();

    this.on = emitter.on;
    this.emit = emitter.emit;
    this.off = emitter.off;

    this.views = [];
    this.currentIndex = 0;
    this.currentView = null;
    this.currentTween = 0;
    this.trackPosition = 0;
    this.isSwiping = false;

    this.options = _extends({}, defaultOptions, options);

    this.animationBus = new _animationBus2.default({
      animations: this.options.animations,
      origin: function origin(view) {
        return view.origin;
      }
    });

    if (isWindowDefined) {
      this.resizeObserver = new _resizeObserverPolyfill2.default(function () {
        _this3.hydrate();
      });
    }
  }

  _createClass(Pager, [{
    key: 'setOptions',
    value: function setOptions(options) {
      var lastOptions = this.options;

      // spread new options over the old ones
      this.options = _extends({}, this.options, options);

      // merge animations into animation bus
      this.animationBus.animations = this.options.animations;

      // fire a viewChange event with the new indicies if viewsToShow has changed
      if (lastOptions.viewsToShow !== this.options.viewsToShow) {
        this.emit('viewChange', this.getCurrentIndicies());
      }
    }
  }, {
    key: 'addFrame',
    value: function addFrame(node) {
      this.frame = new _PagerElement4.default({
        node: node,
        pager: this
      });
    }
  }, {
    key: 'addTrack',
    value: function addTrack(node) {
      this.track = new Track({
        node: node,
        pager: this
      });
    }
  }, {
    key: 'addView',
    value: function addView(node) {
      var index = this.views.length;
      var view = new View({
        node: node,
        index: index,
        pager: this
      });

      // add view to collection
      this.views.push(view);

      // set this as the first view if there isn't one yet
      if (!this.currentView) {
        this.setCurrentView({
          index: index,
          suppressEvent: true
        });
      }

      // listen for width and height changes
      if (isWindowDefined) {
        this.resizeObserver.observe(node);
      }

      // fire an event
      this.emit('viewAdded');

      return view;
    }
  }, {
    key: 'removeView',
    value: function removeView(view) {
      // filter out view
      this.views = this.views.filter(function (_view) {
        return view !== _view;
      });

      // stop observing node
      if (isWindowDefined) {
        this.resizeObserver.disconnect(view.node);
      }

      // fire an event
      this.emit('viewRemoved');
    }
  }, {
    key: 'prev',
    value: function prev() {
      this.setCurrentView({ direction: -1 });
    }
  }, {
    key: 'next',
    value: function next() {
      this.setCurrentView({ direction: 1 });
    }
  }, {
    key: 'setCurrentView',
    value: function setCurrentView(_ref2) {
      var _ref2$direction = _ref2.direction,
          direction = _ref2$direction === undefined ? 0 : _ref2$direction,
          _ref2$index = _ref2.index,
          index = _ref2$index === undefined ? this.currentIndex : _ref2$index,
          _ref2$suppressEvent = _ref2.suppressEvent,
          suppressEvent = _ref2$suppressEvent === undefined ? false : _ref2$suppressEvent;
      var _options = this.options,
          viewsToMove = _options.viewsToMove,
          infinite = _options.infinite;

      var newIndex = index + direction * viewsToMove;

      var previousIndex = this.currentIndex;
      var currentIndex = infinite ? newIndex : (0, _utils.clamp)(newIndex, 0, this.views.length - 1);

      var previousView = this.getView(previousIndex);
      var currentView = this.getView(currentIndex);

      // set current index and view
      this.currentIndex = currentIndex;
      this.currentView = currentView;

      // swap current view flags
      previousView.setCurrent(false);
      currentView.setCurrent(true);

      var rangeStart = currentIndex;
      var rangeEnd = currentIndex + viewsToMove - 1;
      var viewRange = (0, _utils.range)(rangeStart, rangeEnd, this.views.length);

      // set flags for which views are currently showing
      this.views.forEach(function (view, index) {
        view.setVisible(index === currentIndex);
      });

      // set the track position to the new view
      this.setPositionValue();

      if (!suppressEvent) {
        this.emit('viewChange', this.getCurrentIndicies());
      }
    }
  }, {
    key: 'setPositionValue',
    value: function setPositionValue() {
      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentView ? this.currentView.target : 0;

      if (!this.isSwiping) {
        var _options2 = this.options,
            viewsToShow = _options2.viewsToShow,
            autoSize = _options2.autoSize,
            infinite = _options2.infinite,
            contain = _options2.contain;

        var trackSize = this.getTrackSize();

        if (infinite) {
          // we offset by a track multiplier so infinite animation can take advantage of
          // physics by animating to a large value, the final value provided in getTransformValue
          // will return the proper wrapped value
          trackPosition -= (Math.floor(this.currentIndex / this.views.length) || 0) * trackSize;
        }

        if (contain) {
          var trackEndOffset = viewsToShow === 'auto' && autoSize || viewsToShow <= 1 ? 0 : this.getFrameSize({ autoSize: false });
          trackPosition = (0, _utils.clamp)(trackPosition, trackEndOffset - trackSize, 0);
        }
      }

      this.trackPosition = trackPosition;
    }
  }, {
    key: 'setViewStyles',
    value: function setViewStyles() {
      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _options3 = this.options,
          infinite = _options3.infinite,
          align = _options3.align;

      var frameSize = this.getFrameSize();
      var trackSize = this.getTrackSize();
      var wrappedtrackPosition = (0, _utils.modulo)(trackPosition, -trackSize);

      this.views.reduce(function (lastPosition, view, index) {
        var viewSize = view.getSize();
        var nextPosition = lastPosition + viewSize;
        var position = lastPosition;

        if (nextPosition + viewSize * align < Math.abs(wrappedtrackPosition)) {
          // shift views around so they are always visible in frame
          if (infinite) {
            position += trackSize - lastPosition;
          }
          view.inBounds = false;
        } else {
          view.inBounds = true;
        }

        view.setPosition(position);
        view.setOrigin(trackPosition);

        return nextPosition;
      }, 0);
    }
  }, {
    key: 'getNumericViewsToShow',
    value: function getNumericViewsToShow() {
      return isNaN(this.options.viewsToShow) ? 1 : this.options.viewsToShow;
    }
  }, {
    key: 'getMaxDimensions',
    value: function getMaxDimensions(indices) {
      var _this4 = this;

      var axis = this.options.axis;

      var widths = [];
      var heights = [];

      indices.forEach(function (index) {
        var view = isNaN(index) ? index : _this4.getView(index);
        widths.push(view.getSize('width'));
        heights.push(view.getSize('height'));
      });

      return {
        width: axis === 'x' ? (0, _utils.sum)(widths) : (0, _utils.max)(widths),
        height: axis === 'y' ? (0, _utils.sum)(heights) : (0, _utils.max)(heights)
      };
    }
  }, {
    key: 'getCurrentIndicies',
    value: function getCurrentIndicies() {
      var _options4 = this.options,
          infinite = _options4.infinite,
          contain = _options4.contain;

      var currentViews = [];
      var viewsToShow = isNaN(this.options.viewsToShow) ? 1 : this.options.viewsToShow;
      var minIndex = this.currentIndex;
      var maxIndex = this.currentIndex + (viewsToShow - 1);

      if (contain) {
        // if containing, we need to clamp the start and end indexes so we only return what's in view
        minIndex = (0, _utils.clamp)(minIndex, 0, this.views.length - viewsToShow);
        maxIndex = (0, _utils.clamp)(maxIndex, 0, this.views.length - 1);
        for (var i = minIndex; i <= maxIndex; i++) {
          currentViews.push(i);
        }
      } else {
        for (var _i = minIndex; _i <= maxIndex; _i++) {
          currentViews.push(infinite ? (0, _utils.modulo)(_i, this.views.length) : (0, _utils.clamp)(_i, 0, this.views.length - 1));
        }
      }

      return currentViews;
    }
  }, {
    key: 'getFrameSize',
    value: function getFrameSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$autoSize = _ref3.autoSize,
          autoSize = _ref3$autoSize === undefined ? this.options.autoSize : _ref3$autoSize,
          _ref3$fullSize = _ref3.fullSize,
          fullSize = _ref3$fullSize === undefined ? false : _ref3$fullSize;

      var dimensions = {
        width: 0,
        height: 0
      };

      if (this.views.length) {
        if (autoSize) {
          var currentViews = this.getCurrentIndicies();
          dimensions = this.getMaxDimensions(currentViews);
        } else if (this.frame) {
          dimensions = {
            width: this.frame.getSize('width'),
            height: this.frame.getSize('height')
          };
        }
      }

      if (fullSize) {
        return dimensions;
      } else {
        return dimensions[this.options.axis === 'x' ? 'width' : 'height'];
      }
    }
  }, {
    key: 'getTrackSize',
    value: function getTrackSize() {
      var includeLastSlide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var lastIndex = includeLastSlide ? this.views.length : this.views.length - 1;
      var size = 0;
      this.views.slice(0, lastIndex).forEach(function (view) {
        size += view.getSize();
      });
      return size;
    }
  }, {
    key: 'getView',
    value: function getView(index) {
      return this.views[(0, _utils.modulo)(index, this.views.length)];
    }

    // where the view should start

  }, {
    key: 'getStartCoords',
    value: function getStartCoords(index) {
      var target = 0;
      this.views.slice(0, index).forEach(function (view) {
        target -= view.getSize();
      });
      return target;
    }

    // how much to offset the view defined by the align option

  }, {
    key: 'getAlignOffset',
    value: function getAlignOffset(view) {
      var frameSize = this.getFrameSize({ autoSize: false });
      var viewSize = view.getSize();
      return (frameSize - viewSize) * this.options.align;
    }
  }, {
    key: 'getPositionValue',
    value: function getPositionValue() {
      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.trackPosition;
      var _options5 = this.options,
          infinite = _options5.infinite,
          contain = _options5.contain;

      var position = { x: 0, y: 0

        // store the current animated value so we can reference it later
      };this.currentTween = trackPosition;

      // wrap the track position if this is an infinite track
      if (infinite) {
        var trackSize = this.getTrackSize();
        trackPosition = (0, _utils.modulo)(trackPosition, -trackSize) || 0;
      }

      // emit a "scroll" event so we can do things based on the progress of the track
      this.emit('scroll', {
        progress: trackPosition / this.getTrackSize(false),
        position: trackPosition
      });

      // set the proper transform axis based on our options
      position[this.options.axis] = trackPosition;

      return position;
    }
  }, {
    key: 'resetViewIndex',
    value: function resetViewIndex() {
      // reset back to a normal index
      this.setCurrentView({
        index: (0, _utils.modulo)(this.currentIndex, this.views.length),
        suppressEvent: true
      });
    }
  }]);

  return Pager;
}();

exports.default = Pager;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/PagerElement.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-view-pager/lib/PagerElement.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PagerElement = function () {
  function PagerElement(_ref) {
    var node = _ref.node,
        pager = _ref.pager,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, PagerElement);

    this.node = node;
    this.pager = pager;
    this.x = this.y = 0;
    this.setSize(width, height);
  }

  _createClass(PagerElement, [{
    key: 'setSize',
    value: function setSize(width, height) {
      this.width = width || this.node.offsetWidth;
      this.height = height || this.node.offsetHeight;
    }
  }, {
    key: 'setPosition',
    value: function setPosition(position) {
      this[this.pager.options.axis] = position;
    }
  }, {
    key: 'getSize',
    value: function getSize(dimension) {
      if (dimension === 'width' || dimension === 'height') {
        return this[dimension];
      } else {
        var axis = this.pager.options.axis;
        return this[axis === 'x' ? 'width' : 'height'];
      }
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {
      return this[this.pager.options.axis];
    }
  }]);

  return PagerElement;
}();

exports.default = PagerElement;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/Swipe.js":
/*!****************************************************!*\
  !*** ./node_modules/react-view-pager/lib/Swipe.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getTouchEvent(e) {
  return e.touches && e.touches[0] || e;
}

var Swipe = function () {
  function Swipe(pager) {
    var _this = this;

    _classCallCheck(this, Swipe);

    this._onSwipeStart = function (e) {
      var _getTouchEvent = getTouchEvent(e),
          pageX = _getTouchEvent.pageX,
          pageY = _getTouchEvent.pageY;

      // we're now swiping


      _this.pager.isSwiping = true;

      // store the initial starting coordinates
      _this._swipeStart = {
        x: pageX,
        y: pageY

        // reset swipeDiff
      };_this._swipeDiff = {
        x: 0,
        y: 0

        // determine if a flick or not
      };_this._isFlick = true;

      setTimeout(function () {
        _this._isFlick = false;
      }, _this.pager.options.flickTimeout);

      _this.pager.emit('swipeStart');
    };

    this._onSwipeMove = function (e) {
      // bail if we aren't swiping
      if (!_this.pager.isSwiping) return;

      var _pager$options = _this.pager.options,
          swipeThreshold = _pager$options.swipeThreshold,
          axis = _pager$options.axis;

      var _getTouchEvent2 = getTouchEvent(e),
          pageX = _getTouchEvent2.pageX,
          pageY = _getTouchEvent2.pageY;

      // grab the current position of the track before


      if (!_this._trackStart) {
        _this._trackStart = _this.pager.currentTween;
      }

      // determine how much we have moved
      _this._swipeDiff = {
        x: _this._swipeStart.x - pageX,
        y: _this._swipeStart.y - pageY
      };

      if (_this._isSwipe(swipeThreshold)) {
        e.preventDefault();
        e.stopPropagation();

        var swipeDiff = _this._swipeDiff[axis];
        var trackPosition = _this._trackStart - swipeDiff;

        _this.pager.setPositionValue(trackPosition);

        _this.pager.emit('swipeMove');
      }
    };

    this._onSwipeEnd = function () {
      var _pager$options2 = _this.pager.options,
          swipeThreshold = _pager$options2.swipeThreshold,
          viewsToMove = _pager$options2.viewsToMove,
          axis = _pager$options2.axis,
          infinite = _pager$options2.infinite;

      var threshold = _this._isFlick ? swipeThreshold : _this.pager.currentView.getSize() * viewsToMove * swipeThreshold;

      // we've stopped swiping
      _this.pager.isSwiping = false;

      // reset start track so we can grab it again on the next swipe
      _this._trackStart = false;

      // don't move anything if there hasn't been an attempted swipe
      if (_this._swipeDiff.x || _this._swipeDiff.y) {
        // determine if we've passed the defined threshold
        if (_this._isSwipe(threshold)) {
          if (_this._swipeDiff[axis] < 0) {
            _this.pager.prev();
          } else {
            _this.pager.next();
          }
        }
        // if we didn't, reset back to original view
        else {
            _this.pager.setPositionValue();
          }
      }

      _this.pager.emit('swipeEnd');
    };

    this._onSwipePast = function () {
      // perform a swipe end if we swiped past the component
      if (_this.pager.isSwiping) {
        _this._onSwipeEnd();
      }
    };

    this.pager = pager;
    this._trackStart = false;
    this._swipeStart = this._swipeDiff = {
      x: 0,
      y: 0
    };
  }

  _createClass(Swipe, [{
    key: '_isSwipe',
    value: function _isSwipe(threshold) {
      var _swipeDiff = this._swipeDiff,
          x = _swipeDiff.x,
          y = _swipeDiff.y;

      return this.pager.options.axis === 'x' ? Math.abs(x) > Math.max(threshold, Math.abs(y)) : Math.abs(x) < Math.max(threshold, Math.abs(y));
    }
  }, {
    key: 'getEvents',
    value: function getEvents() {
      var swipe = this.pager.options.swipe;

      var swipeEvents = {};

      if (swipe === true || swipe === 'mouse') {
        swipeEvents.onMouseDown = this._onSwipeStart;
        swipeEvents.onMouseMove = this._onSwipeMove;
        swipeEvents.onMouseUp = this._onSwipeEnd;
        swipeEvents.onMouseLeave = this._onSwipePast;
      }

      if (swipe === true || swipe === 'touch') {
        swipeEvents.onTouchStart = this._onSwipeStart;
        swipeEvents.onTouchMove = this._onSwipeMove;
        swipeEvents.onTouchEnd = this._onSwipeEnd;
      }

      return swipeEvents;
    }
  }]);

  return Swipe;
}();

exports.default = Swipe;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/Track.js":
/*!****************************************************!*\
  !*** ./node_modules/react-view-pager/lib/Track.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactMotion = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");

var _Pager = __webpack_require__(/*! ./Pager */ "./node_modules/react-view-pager/lib/Pager.js");

var _Pager2 = _interopRequireDefault(_Pager);

var _getIndex = __webpack_require__(/*! ./get-index */ "./node_modules/react-view-pager/lib/get-index.js");

var _getIndex2 = _interopRequireDefault(_getIndex);

var _specialAssign = __webpack_require__(/*! ./special-assign */ "./node_modules/react-view-pager/lib/special-assign.js");

var _specialAssign2 = _interopRequireDefault(_specialAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {
  return null;
};
var checkedProps = {
  tag: _propTypes2.default.any,
  currentView: _propTypes2.default.any,
  viewsToShow: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['auto'])]),
  viewsToMove: _propTypes2.default.number,
  align: _propTypes2.default.number,
  contain: _propTypes2.default.bool,
  axis: _propTypes2.default.oneOf(['x', 'y']),
  animations: _propTypes2.default.array,
  infinite: _propTypes2.default.bool,
  instant: _propTypes2.default.bool,
  swipe: _propTypes2.default.oneOf([true, false, 'mouse', 'touch']),
  swipeThreshold: _propTypes2.default.number,
  flickTimeout: _propTypes2.default.number,
  // rightToLeft: PropTypes.bool,
  // lazyLoad: PropTypes.bool,
  springConfig: _propTypes2.default.objectOf(_propTypes2.default.number),
  onSwipeStart: _propTypes2.default.func,
  onSwipeMove: _propTypes2.default.func,
  onSwipeEnd: _propTypes2.default.func,
  onScroll: _propTypes2.default.func,
  onViewChange: _propTypes2.default.func,
  onRest: _propTypes2.default.func
};
var isNotEqual = function isNotEqual(current, next) {
  return current.viewsToShow !== next.viewsToShow || current.viewsToMove !== next.viewsToMove || current.align !== next.align || current.axis !== next.axis || current.animations !== next.animations || current.infinite !== next.infinite || current.swipe !== next.swipe || current.swipeThreshold !== next.swipeThreshold || current.flickTimeout !== next.flickTimeout;
};

// Track scroller is an intermediate component that allows us to provide the
// React Motion value to onScroll and lets any user of onScroll use setState

var TrackScroller = function (_Component) {
  _inherits(TrackScroller, _Component);

  function TrackScroller() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TrackScroller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TrackScroller.__proto__ || Object.getPrototypeOf(TrackScroller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      x: 0,
      y: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TrackScroller, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var _this2 = this;

      var trackPosition = _ref2.trackPosition;
      var pager = this.context.pager;

      // update view styles with current position tween
      // this method can get called hundreds of times, let's make sure to optimize as much as we can

      pager.setViewStyles(trackPosition);

      // update onScroll callback, we use requestAnimationFrame to avoid bouncing
      // back from updates from onScroll while React Motion is trying to update it's own tree
      // https://github.com/chenglou/react-motion/issues/357#issuecomment-262393424
      if (this.props.trackPosition !== trackPosition) {
        requestAnimationFrame(function () {
          return _this2.props.onScroll(trackPosition / pager.getTrackSize(false) * -1, trackPosition);
        });
      }
    }
  }, {
    key: '_renderViews',
    value: function _renderViews() {
      // we need Children map in order for the infinite option to work
      // not actually sure why this is the case
      return _react.Children.map(this.props.children, function (child) {
        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var pager = this.context.pager;

      var _props = this.props,
          tag = _props.tag,
          trackPosition = _props.trackPosition,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'trackPosition', 'children']);

      var style = _extends({}, restProps.style);

      if (pager.track) {
        style = _extends({}, style, pager.track.getStyles(trackPosition));
      }

      return (0, _react.createElement)(tag, _extends({}, restProps, {
        style: style
      }), this._renderViews());
    }
  }]);

  return TrackScroller;
}(_react.Component);

TrackScroller.propTypes = checkedProps;
TrackScroller.contextTypes = {
  pager: _propTypes2.default.instanceOf(_Pager2.default)
};

var Track = function (_Component2) {
  _inherits(Track, _Component2);

  function Track() {
    var _ref3;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, Track);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref3 = Track.__proto__ || Object.getPrototypeOf(Track)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
      instant: false
    }, _this3._currentTween = 0, _this3._hydrate = false, _this3._handleOnRest = function () {
      if (_this3.props.infinite && !_this3.state.instant) {
        // reset back to a normal index
        _this3.context.pager.resetViewIndex();

        // set instant flag so we can prime track for next move
        _this3._setValueInstantly(true, true);
      }

      _this3.props.onRest();
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(Track, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.pager.setOptions(this.props);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      var pager = this.context.pager;

      // add track to pager

      pager.addTrack((0, _reactDom.findDOMNode)(this));

      // set initial view index and listen for any incoming view index changes
      this.scrollTo((0, _getIndex2.default)(this.props.currentView, this.props.children));

      // set values instantly on respective events
      pager.on('hydrated', function () {
        return _this4._setValueInstantly(true, true);
      });
      pager.on('swipeMove', function () {
        return _this4._setValueInstantly(true);
      });
      pager.on('swipeEnd', function () {
        return _this4._setValueInstantly(false);
      });

      // prop callbacks
      pager.on('swipeStart', this.props.onSwipeStart);
      pager.on('swipeMove', this.props.onSwipeMove);
      pager.on('swipeEnd', this.props.onSwipeEnd);
      pager.on('viewChange', this.props.onViewChange);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var currentView = nextProps.currentView,
          instant = nextProps.instant,
          children = nextProps.children;

      // update instant state from props

      if (this.props.instant !== instant) {
        this._setValueInstantly(instant);
      }

      // update state with new index if necessary
      if ((typeof currentView === 'undefined' ? 'undefined' : _typeof(currentView)) !== undefined && this.props.currentView !== currentView) {
        this.scrollTo((0, _getIndex2.default)(currentView, children));
      }

      // update any options that have changed
      if (isNotEqual(this.props, nextProps)) {
        this.context.pager.setOptions(nextProps);
        this._hydrate = true;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(nextProps) {
      if (this._hydrate) {
        this.context.pager.hydrate();
        this._hydrate = false;
      }
    }
  }, {
    key: 'prev',
    value: function prev() {
      this.context.pager.prev();
    }
  }, {
    key: 'next',
    value: function next() {
      this.context.pager.next();
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(index) {
      this.context.pager.setCurrentView({ index: index });
    }
  }, {
    key: '_setValueInstantly',
    value: function _setValueInstantly(instant, reset) {
      var _this5 = this;

      this.setState({ instant: instant }, function () {
        if (reset) {
          _this5.setState({ instant: false });
        }
      });
    }
  }, {
    key: '_getTrackStyle',
    value: function _getTrackStyle() {
      var trackPosition = this.context.pager.trackPosition;

      if (!this.state.instant) {
        trackPosition = (0, _reactMotion.spring)(trackPosition, this.props.springConfig);
      }
      return { trackPosition: trackPosition };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          tag = _props2.tag,
          onScroll = _props2.onScroll,
          restProps = _objectWithoutProperties(_props2, ['tag', 'onScroll']);

      return _react2.default.createElement(
        _reactMotion.Motion,
        {
          style: this._getTrackStyle(),
          onRest: this._handleOnRest
        },
        function (_ref4) {
          var trackPosition = _ref4.trackPosition;
          return (0, _react.createElement)(TrackScroller, (0, _specialAssign2.default)({ trackPosition: trackPosition, tag: tag, onScroll: onScroll }, restProps, checkedProps));
        }
      );
    }
  }]);

  return Track;
}(_react.Component);

Track.propTypes = checkedProps;
Track.defaultProps = {
  tag: 'div',
  currentView: 0,
  viewsToShow: 1,
  viewsToMove: 1,
  align: 0,
  contain: false,
  axis: 'x',
  infinite: false,
  instant: false,
  swipe: true,
  swipeThreshold: 0.5,
  flickTimeout: 300,
  springConfig: _reactMotion.presets.noWobble,
  onSwipeStart: noop,
  onSwipeMove: noop,
  onSwipeEnd: noop,
  onScroll: noop,
  onViewChange: noop,
  onRest: noop
};
Track.contextTypes = {
  pager: _propTypes2.default.instanceOf(_Pager2.default)
};
exports.default = Track;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/View.js":
/*!***************************************************!*\
  !*** ./node_modules/react-view-pager/lib/View.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _Pager = __webpack_require__(/*! ./Pager */ "./node_modules/react-view-pager/lib/Pager.js");

var _Pager2 = _interopRequireDefault(_Pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_Component) {
  _inherits(View, _Component);

  function View() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, View);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args))), _this), _this._viewAdded = false, _this._viewInstance = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(View, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        view: this._viewInstance
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._viewInstance = this.context.pager.addView((0, _reactDom.findDOMNode)(this));
      this._viewAdded = true;
      this.forceUpdate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.pager.removeView(this._viewInstance);
    }
  }, {
    key: 'render',
    value: function render() {
      var pager = this.context.pager;
      var _pager$options = pager.options,
          viewsToShow = _pager$options.viewsToShow,
          axis = _pager$options.axis;

      var _props = this.props,
          tag = _props.tag,
          trackSize = _props.trackSize,
          restProps = _objectWithoutProperties(_props, ['tag', 'trackSize']);

      var style = _extends({}, restProps.style);

      // hide view visually until it has been added to the pager
      // this should help avoid FOUC
      if (!this._viewAdded) {
        style.visibility = 'hidden';
        style.pointerEvents = 'none';
      }

      if (this._viewInstance) {
        style = _extends({}, style, this._viewInstance.getStyles());
      }

      return (0, _react.createElement)(tag, _extends({}, restProps, { style: style }));
    }
  }]);

  return View;
}(_react.Component);

View.contextTypes = {
  pager: _propTypes2.default.instanceOf(_Pager2.default)
};
View.childContextTypes = {
  view: _propTypes2.default.any
};
View.propTypes = {
  tag: _propTypes2.default.any
};
View.defaultProps = {
  tag: 'div'
};
exports.default = View;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/ViewPager.js":
/*!********************************************************!*\
  !*** ./node_modules/react-view-pager/lib/ViewPager.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pager = __webpack_require__(/*! ./Pager */ "./node_modules/react-view-pager/lib/Pager.js");

var _Pager2 = _interopRequireDefault(_Pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewPager = function (_Component) {
  _inherits(ViewPager, _Component);

  function ViewPager(props) {
    _classCallCheck(this, ViewPager);

    var _this = _possibleConstructorReturn(this, (ViewPager.__proto__ || Object.getPrototypeOf(ViewPager)).call(this, props));

    var pager = new _Pager2.default();
    var forceUpdate = function forceUpdate() {
      return _this.forceUpdate();
    };

    // re-render the whole tree to update components on certain events
    pager.on('viewChange', forceUpdate);
    pager.on('hydrated', forceUpdate);

    _this._pager = pager;
    return _this;
  }

  _createClass(ViewPager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        pager: this._pager
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // run a hydration on the next animation frame to obtain proper targets and positioning
      requestAnimationFrame(function () {
        _this2._pager.hydrate();
      });
    }
  }, {
    key: 'getInstance',
    value: function getInstance() {
      return this._pager;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          restProps = _objectWithoutProperties(_props, ['tag']);

      return (0, _react.createElement)(tag, restProps);
    }
  }]);

  return ViewPager;
}(_react.Component);

ViewPager.childContextTypes = {
  pager: _propTypes2.default.instanceOf(_Pager2.default)
};
ViewPager.propTypes = {
  tag: _propTypes2.default.string
};
ViewPager.defaultProps = {
  tag: 'div'
};
exports.default = ViewPager;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/get-index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-view-pager/lib/get-index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIndex;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function getIndex(key, children) {
  var index = null;

  _react.Children.forEach(children, function (child, _index) {
    if (child.key === key || _index === key) {
      index = _index;
      return;
    }
  });

  return index;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/react-view-pager.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-view-pager/lib/react-view-pager.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.AnimatedView = exports.View = exports.Track = exports.Frame = exports.ViewPager = undefined;

var _ViewPager2 = __webpack_require__(/*! ./ViewPager */ "./node_modules/react-view-pager/lib/ViewPager.js");

var _ViewPager3 = _interopRequireDefault(_ViewPager2);

var _Frame2 = __webpack_require__(/*! ./Frame */ "./node_modules/react-view-pager/lib/Frame.js");

var _Frame3 = _interopRequireDefault(_Frame2);

var _Track2 = __webpack_require__(/*! ./Track */ "./node_modules/react-view-pager/lib/Track.js");

var _Track3 = _interopRequireDefault(_Track2);

var _View2 = __webpack_require__(/*! ./View */ "./node_modules/react-view-pager/lib/View.js");

var _View3 = _interopRequireDefault(_View2);

var _AnimatedView2 = __webpack_require__(/*! ./AnimatedView */ "./node_modules/react-view-pager/lib/AnimatedView.js");

var _AnimatedView3 = _interopRequireDefault(_AnimatedView2);

var _utils2 = __webpack_require__(/*! ./utils */ "./node_modules/react-view-pager/lib/utils.js");

var _utils3 = _interopRequireDefault(_utils2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ViewPager = _ViewPager3.default;
exports.Frame = _Frame3.default;
exports.Track = _Track3.default;
exports.View = _View3.default;
exports.AnimatedView = _AnimatedView3.default;
exports.utils = _utils3.default;

/***/ }),

/***/ "./node_modules/react-view-pager/lib/special-assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-view-pager/lib/special-assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = specialAssign;
function specialAssign(a, b, reserved) {
  for (var x in b) {
    if (!b.hasOwnProperty(x) || reserved[x]) continue;
    a[x] = b[x];
  }
  return a;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-view-pager/lib/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/react-view-pager/lib/utils.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modulo = modulo;
exports.clamp = clamp;
exports.sum = sum;
exports.max = max;
exports.range = range;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modulo(val, max) {
  return (val % max + max) % max;
}

function clamp(val, min, max) {
  return Math.min(Math.max(min, val), max);
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function max(arr) {
  return Math.max.apply(null, arr);
}

function range(start, end, max) {
  return [].concat(_toConsumableArray(Array(1 + end - start))).map(function (val) {
    return max ? modulo(start + val, max) : start + val;
  });
}

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tabbable/index.js":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable(elementDocument);

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors.join(','));

  if (options.includeContainer) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    if (
      candidateSelectors.some(function(candidateSelector) {
        return matches.call(el, candidateSelector);
      })
    ) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate, elementDocument)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        index: i,
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
}

function createIsUnavailable(elementDocument) {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === elementDocument.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === elementDocument.documentElement) return false;

    var computedStyle = elementDocument.defaultView.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}


/***/ }),

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
  }, ".container.jsx-3564203654{margin:200px auto 0 auto;max-width:1080px;}.container.jsx-3564203654 h1.jsx-3564203654{text-align:center;font-size:55px;margin-bottom:50px;}.photo-grid.jsx-3564203654{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL3Byb2plY3RzL1twaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRXdCLEFBRzhDLEFBSVAsQUFLTCxhQUNKLEtBTE0sSUFNNEMsR0FWMUMsUUFLRSxTQUp2QixVQUtBLDJCQUtBIiwiZmlsZSI6Ii9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dvcmsvMTAwbmR1cC93ZWJzaXRlL3BhZ2VzL3Byb2plY3RzL1twaWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgQ2Fyb3VzZWwsIHsgTW9kYWwsIE1vZGFsR2F0ZXdheSB9IGZyb20gXCJyZWFjdC1pbWFnZXNcIlxuaW1wb3J0IHsgTGF6eUltYWdlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF6eUltYWdlXCJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCJcbmltcG9ydCB7IHJlYWRTeW5jIH0gZnJvbSBcImZzXCJcblxuaW50ZXJmYWNlIFBob3RvIHtcbiAgICBpZDogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgdXJsOiBzdHJpbmdcbn1cbmludGVyZmFjZSBQcm9qZWN0IHtcbiAgICBpZDogbnVtYmVyXG4gICAgVGl0bGU6IHN0cmluZ1xuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZ1xuICAgIHVwZGF0ZWRfYXQ6IHN0cmluZ1xuICAgIHBob3RvczogQXJyYXk8UGhvdG8+XG59XG5cblxuY29uc3QgUHJvamVjdFBhZ2UgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApXG4gICAgY29uc3QgW3ZpZXdlcklzT3Blbiwgc2V0Vmlld2VySXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IG9wZW5MaWdodGJveCA9IFJlYWN0LnVzZUNhbGxiYWNrKGluZGV4ID0+IHtcbiAgICAgICAgc2V0Q3VycmVudEltYWdlKGluZGV4KVxuICAgICAgICBzZXRWaWV3ZXJJc09wZW4odHJ1ZSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGNsb3NlTGlnaHRib3ggPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRJbWFnZSgwKVxuICAgICAgICBzZXRWaWV3ZXJJc09wZW4oZmFsc2UpXG4gICAgfVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnByb2plY3RzKVxuICAgIH0pXG4gICAgY29uc3QgcGhvdG9zID0gcHJvcHMucGhvdG9zXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPjwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90by1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9zLm1hcCgocGhvdG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwaG90by51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwaG90by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz17b3BlbkxpZ2h0Ym94LmJpbmQobnVsbCwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxNb2RhbEdhdGV3YXk+XG4gICAgICAgICAgICAgICAge3ZpZXdlcklzT3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsIG9uQ2xvc2U9e2Nsb3NlTGlnaHRib3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4PXtjdXJyZW50SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9zICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b3MubWFwKHggPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvTW9kYWxHYXRld2F5PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjAwcHggYXV0byAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5waG90by1ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuUHJvamVjdFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL21vcm5pbmctc2hvcmUtMzE3OTkuaGVyb2t1YXBwLmNvbS9wcm9qZWN0cy8ke2NvbnRleHQucXVlcnkucGlkfWBcbiAgICApXG4gICAgY29uc3QgcHJvamVjdHMgID0gZGF0YS5qc29uKClcbiAgICByZXR1cm4gcHJvamVjdHNcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/mac/Documents/work/100ndup/website/pages/projects/[pid].tsx */"));
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
//# sourceMappingURL=[pid].js.9a4848bbe3af5dddbe29.hot-update.js.map
"use strict";

exports.__esModule = true;
exports.cancelAnimationFrame = cancelAnimationFrame;
exports.getComparisonFunction = getComparisonFunction;
exports.hasCaptionProblem = hasCaptionProblem;
exports.isClassListSupported = isClassListSupported;
exports.isGetComputedStyleSupported = isGetComputedStyleSupported;
exports.isPassiveEventSupported = isPassiveEventSupported;
exports.isTextContentSupported = isTextContentSupported;
exports.isTouchSupported = isTouchSupported;
exports.requestAnimationFrame = requestAnimationFrame;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* eslint-disable no-restricted-globals */
/**
 * Polyfill for requestAnimationFrame.
 *
 * @param {Function} callback The function to call when it's time.
 * @returns {number}
 */
function requestAnimationFrame(callback) {
  return window.requestAnimationFrame(callback);
}

/**
 * @returns {boolean}
 */
function isClassListSupported() {
  return !!document.documentElement.classList;
}

/**
 * @returns {boolean}
 */
function isTextContentSupported() {
  return !!document.createTextNode('test').textContent;
}

/**
 * @returns {boolean}
 */
function isGetComputedStyleSupported() {
  return !!window.getComputedStyle;
}
/**
 * Polyfill for cancelAnimationFrame.
 *
 * @param {number} id The request Id, generated by `requestAnimationFrame`.
 */
function cancelAnimationFrame(id) {
  window.cancelAnimationFrame(id);
}

/**
 * @returns {boolean}
 */
function isTouchSupported() {
  return 'ontouchstart' in window;
}
var _hasCaptionProblem;

/**
 *
 */
function detectCaptionProblem() {
  var TABLE = document.createElement('TABLE');
  TABLE.style.borderSpacing = '0';
  TABLE.style.borderWidth = '0';
  TABLE.style.padding = '0';
  var TBODY = document.createElement('TBODY');
  TABLE.appendChild(TBODY);
  TBODY.appendChild(document.createElement('TR'));
  TBODY.firstChild.appendChild(document.createElement('TD'));
  TBODY.firstChild.firstChild.innerHTML = '<tr><td>t<br>t</td></tr>';
  var CAPTION = document.createElement('CAPTION');
  CAPTION.innerHTML = 'c<br>c<br>c<br>c';
  CAPTION.style.padding = '0';
  CAPTION.style.margin = '0';
  TABLE.insertBefore(CAPTION, TBODY);
  document.body.appendChild(TABLE);
  _hasCaptionProblem = TABLE.offsetHeight < 2 * TABLE.lastChild.offsetHeight; // boolean
  document.body.removeChild(TABLE);
}

/**
 * @returns {boolean}
 */
function hasCaptionProblem() {
  if (_hasCaptionProblem === void 0) {
    detectCaptionProblem();
  }
  return _hasCaptionProblem;
}
var comparisonFunction;

/**
 * Get string comparison function for sorting purposes. It supports multilingual string comparison base on Internationalization API.
 *
 * @param {string} [language] The language code used for phrases sorting.
 * @param {object} [options] Additional options for sort comparator.
 * @returns {*}
 */
function getComparisonFunction(language) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (comparisonFunction) {
    return comparisonFunction;
  }
  if ((typeof Intl === "undefined" ? "undefined" : _typeof(Intl)) === 'object') {
    comparisonFunction = new Intl.Collator(language, options).compare;
  } else if (typeof String.prototype.localeCompare === 'function') {
    comparisonFunction = function comparisonFunction(a, b) {
      return "".concat(a).localeCompare(b);
    };
  } else {
    comparisonFunction = function comparisonFunction(a, b) {
      if (a === b) {
        return 0;
      }
      return a > b ? -1 : 1;
    };
  }
  return comparisonFunction;
}
var passiveSupported;

/**
 * Checks if browser supports passive events.
 *
 * @returns {boolean}
 */
function isPassiveEventSupported() {
  if (passiveSupported !== void 0) {
    return passiveSupported;
  }
  try {
    var options = {
      get passive() {
        passiveSupported = true;
      }
    };

    // eslint-disable-next-line no-restricted-globals
    window.addEventListener('test', options, options);
    // eslint-disable-next-line no-restricted-globals
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}
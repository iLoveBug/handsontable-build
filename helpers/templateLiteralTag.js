"use strict";

exports.__esModule = true;
exports.toSingleLine = toSingleLine;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.trim.js");
var _array = require("../helpers/array");
/**
 * Tags a multiline string and return new one without line break characters and following spaces.
 *
 * @param {Array} strings Parts of the entire string without expressions.
 * @param {...string} expressions Expressions converted to strings, which are added to the entire string.
 * @returns {string}
 */
function toSingleLine(strings) {
  for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }
  var result = (0, _array.arrayReduce)(strings, function (previousValue, currentValue, index) {
    var valueWithoutWhiteSpaces = currentValue.replace(/\r?\n\s*/g, '');
    var expressionForIndex = expressions[index] ? expressions[index] : '';
    return previousValue + valueWithoutWhiteSpaces + expressionForIndex;
  }, '');
  return result.trim();
}
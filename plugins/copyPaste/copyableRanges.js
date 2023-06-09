"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.symbol.iterator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
exports.__esModule = true;
exports.CopyableRangesFactory = void 0;
exports.normalizeRanges = normalizeRanges;
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.weak-set.js");
var _array = require("../../helpers/array");
var _number = require("../../helpers/number");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _selectedRange = /*#__PURE__*/new WeakMap();
var _countRows = /*#__PURE__*/new WeakMap();
var _countColumns = /*#__PURE__*/new WeakMap();
var _rowsLimit = /*#__PURE__*/new WeakMap();
var _columnsLimit = /*#__PURE__*/new WeakMap();
var _countColumnHeaders = /*#__PURE__*/new WeakMap();
var _trimColumnsRange = /*#__PURE__*/new WeakSet();
var _trimRowsRange = /*#__PURE__*/new WeakSet();
/**
 * The utils class produces the selection ranges in the `{startRow, startCol, endRow, endCol}` format
 * based on the current table selection. The CopyPaste plugin consumes that ranges to generate
 * appropriate data ready to copy to the clipboard.
 *
 * @private
 */
var CopyableRangesFactory = /*#__PURE__*/function () {
  /**
   * @type {CellRange}
   */

  /**
   * @type {function(): number}
   */

  /**
   * @type {function(): number}
   */

  /**
   * @type {function(): number}
   */

  /**
   * @type {function(): number}
   */

  /**
   * @type {function(): number}
   */

  /* eslint-disable jsdoc/require-description-complete-sentence */
  /**
   * @param {{
   *   countRows: function(): number,
   *   countColumns: function(): number,
   *   rowsLimit: function(): number,
   *   columnsLimit: function(): number,
   *   countColumnHeaders: function(): number
   * }} dependencies The utils class dependencies.
   */
  function CopyableRangesFactory(_ref) {
    var countRows = _ref.countRows,
      countColumns = _ref.countColumns,
      rowsLimit = _ref.rowsLimit,
      columnsLimit = _ref.columnsLimit,
      countColumnHeaders = _ref.countColumnHeaders;
    _classCallCheck(this, CopyableRangesFactory);
    /**
     * Trimmed the rows range to the limit.
     *
     * @param {*} startRow The lowest row index in the range.
     * @param {*} endRow The highest row index in the range.
     * @returns {number} Returns trimmed row index if it exceeds the limit.
     */
    _classPrivateMethodInitSpec(this, _trimRowsRange);
    /**
     * Trimmed the columns range to the limit.
     *
     * @param {*} startColumn The lowest column index in the range.
     * @param {*} endColumn The highest column index in the range.
     * @returns {number} Returns trimmed column index if it exceeds the limit.
     */
    _classPrivateMethodInitSpec(this, _trimColumnsRange);
    _classPrivateFieldInitSpec(this, _selectedRange, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _countRows, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _countColumns, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _rowsLimit, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _columnsLimit, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _countColumnHeaders, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _countRows, countRows);
    _classPrivateFieldSet(this, _countColumns, countColumns);
    _classPrivateFieldSet(this, _rowsLimit, rowsLimit);
    _classPrivateFieldSet(this, _columnsLimit, columnsLimit);
    _classPrivateFieldSet(this, _countColumnHeaders, countColumnHeaders);
  }
  /* eslint-enable jsdoc/require-description-complete-sentence */

  /**
   * Sets the selection range to be processed.
   *
   * @param {CellRange} selectedRange The selection range represented by the CellRange class.
   */
  _createClass(CopyableRangesFactory, [{
    key: "setSelectedRange",
    value: function setSelectedRange(selectedRange) {
      _classPrivateFieldSet(this, _selectedRange, selectedRange);
    }

    /**
     * Returns a new coords object within the dataset range (cells) with `startRow`, `startCol`, `endRow`
     * and `endCol` keys.
     *
     * @returns {{startRow: number, startCol: number, endRow: number, endCol: number} | null}
     */
  }, {
    key: "getCellsRange",
    value: function getCellsRange() {
      if (_classPrivateFieldGet(this, _countRows).call(this) === 0 || _classPrivateFieldGet(this, _countColumns).call(this) === 0) {
        return null;
      }
      var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _selectedRange).getTopStartCorner(),
        startRow = _classPrivateFieldGet2.row,
        startCol = _classPrivateFieldGet2.col;
      var _classPrivateFieldGet3 = _classPrivateFieldGet(this, _selectedRange).getBottomEndCorner(),
        endRow = _classPrivateFieldGet3.row,
        endCol = _classPrivateFieldGet3.col;
      var finalEndRow = _classPrivateMethodGet(this, _trimRowsRange, _trimRowsRange2).call(this, startRow, endRow);
      var finalEndCol = _classPrivateMethodGet(this, _trimColumnsRange, _trimColumnsRange2).call(this, startCol, endCol);
      var isRangeTrimmed = endRow !== finalEndRow || endCol !== finalEndCol;
      return {
        isRangeTrimmed: isRangeTrimmed,
        startRow: startRow,
        startCol: startCol,
        endRow: finalEndRow,
        endCol: finalEndCol
      };
    }

    /**
     * Returns a new coords object within the most-bottom column headers range with `startRow`,
     * `startCol`, `endRow` and `endCol` keys.
     *
     * @returns {{startRow: number, startCol: number, endRow: number, endCol: number} | null}
     */
  }, {
    key: "getMostBottomColumnHeadersRange",
    value: function getMostBottomColumnHeadersRange() {
      if (_classPrivateFieldGet(this, _countColumns).call(this) === 0 || _classPrivateFieldGet(this, _countColumnHeaders).call(this) === 0) {
        return null;
      }
      var _classPrivateFieldGet4 = _classPrivateFieldGet(this, _selectedRange).getTopStartCorner(),
        startCol = _classPrivateFieldGet4.col;
      var _classPrivateFieldGet5 = _classPrivateFieldGet(this, _selectedRange).getBottomEndCorner(),
        endCol = _classPrivateFieldGet5.col;
      var finalEndCol = _classPrivateMethodGet(this, _trimColumnsRange, _trimColumnsRange2).call(this, startCol, endCol);
      var isRangeTrimmed = endCol !== finalEndCol;
      return {
        isRangeTrimmed: isRangeTrimmed,
        startRow: -1,
        startCol: startCol,
        endRow: -1,
        endCol: finalEndCol
      };
    }

    /**
     * Returns a new coords object within all column headers layers (including nested headers) range with
     * `startRow`, `startCol`, `endRow` and `endCol` keys.
     *
     * @returns {{startRow: number, startCol: number, endRow: number, endCol: number} | null}
     */
  }, {
    key: "getAllColumnHeadersRange",
    value: function getAllColumnHeadersRange() {
      if (_classPrivateFieldGet(this, _countColumns).call(this) === 0 || _classPrivateFieldGet(this, _countColumnHeaders).call(this) === 0) {
        return null;
      }
      var _classPrivateFieldGet6 = _classPrivateFieldGet(this, _selectedRange).getTopStartCorner(),
        startCol = _classPrivateFieldGet6.col;
      var _classPrivateFieldGet7 = _classPrivateFieldGet(this, _selectedRange).getBottomEndCorner(),
        endCol = _classPrivateFieldGet7.col;
      var finalEndCol = _classPrivateMethodGet(this, _trimColumnsRange, _trimColumnsRange2).call(this, startCol, endCol);
      var isRangeTrimmed = endCol !== finalEndCol;
      return {
        isRangeTrimmed: isRangeTrimmed,
        startRow: -_classPrivateFieldGet(this, _countColumnHeaders).call(this),
        startCol: startCol,
        endRow: -1,
        endCol: finalEndCol
      };
    }
  }]);
  return CopyableRangesFactory;
}();
/**
 * Returns an object with `rows` and `columns` keys. The arrays contains sorted indexes
 * generated according to the given `ranges` array.
 *
 * @param {Array<{startRow: number, startCol: number, endRow: number, endCol: number}>} ranges The range to process.
 * @returns {{rows: number[], columns: number[]}}
 */
exports.CopyableRangesFactory = CopyableRangesFactory;
function _trimColumnsRange2(startColumn, endColumn) {
  return Math.min(endColumn, Math.max(startColumn + _classPrivateFieldGet(this, _columnsLimit).call(this) - 1, startColumn));
}
function _trimRowsRange2(startRow, endRow) {
  return Math.min(endRow, Math.max(startRow + _classPrivateFieldGet(this, _rowsLimit).call(this) - 1, startRow));
}
function normalizeRanges(ranges) {
  var rows = [];
  var columns = [];
  (0, _array.arrayEach)(ranges, function (range) {
    var minRow = Math.min(range.startRow, range.endRow);
    var maxRow = Math.max(range.startRow, range.endRow);
    (0, _number.rangeEach)(minRow, maxRow, function (row) {
      if (rows.indexOf(row) === -1) {
        rows.push(row);
      }
    });
    var minColumn = Math.min(range.startCol, range.endCol);
    var maxColumn = Math.max(range.startCol, range.endCol);
    (0, _number.rangeEach)(minColumn, maxColumn, function (column) {
      if (columns.indexOf(column) === -1) {
        columns.push(column);
      }
    });
  });
  return {
    rows: rows,
    columns: columns
  };
}
"use strict";

require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.regexp.exec.js");
exports.__esModule = true;
exports.default = void 0;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
var _number = require("../../helpers/number");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @private
 */
var DataProvider = /*#__PURE__*/function () {
  function DataProvider(hotInstance) {
    _classCallCheck(this, DataProvider);
    /**
     * Handsontable instance.
     *
     * @type {Core}
     */
    this.hot = hotInstance;
    /**
     * Format type class options.
     *
     * @type {object}
     */
    this.options = {};
  }

  /**
   * Set options for data provider.
   *
   * @param {object} options Object with specified options.
   */
  _createClass(DataProvider, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }

    /**
     * Get table data based on provided settings to the class constructor.
     *
     * @returns {Array}
     */
  }, {
    key: "getData",
    value: function getData() {
      var _this = this;
      var _this$_getDataRange = this._getDataRange(),
        startRow = _this$_getDataRange.startRow,
        startCol = _this$_getDataRange.startCol,
        endRow = _this$_getDataRange.endRow,
        endCol = _this$_getDataRange.endCol;
      var options = this.options;
      var data = [];
      (0, _number.rangeEach)(startRow, endRow, function (rowIndex) {
        var row = [];
        if (!options.exportHiddenRows && _this._isHiddenRow(rowIndex)) {
          return;
        }
        (0, _number.rangeEach)(startCol, endCol, function (colIndex) {
          if (!options.exportHiddenColumns && _this._isHiddenColumn(colIndex)) {
            return;
          }
          row.push(_this.hot.getDataAtCell(rowIndex, colIndex));
        });
        data.push(row);
      });
      return data;
    }

    /**
     * Gets list of row headers.
     *
     * @returns {Array}
     */
  }, {
    key: "getRowHeaders",
    value: function getRowHeaders() {
      var _this2 = this;
      var headers = [];
      if (this.options.rowHeaders) {
        var _this$_getDataRange2 = this._getDataRange(),
          startRow = _this$_getDataRange2.startRow,
          endRow = _this$_getDataRange2.endRow;
        var rowHeaders = this.hot.getRowHeader();
        (0, _number.rangeEach)(startRow, endRow, function (row) {
          if (!_this2.options.exportHiddenRows && _this2._isHiddenRow(row)) {
            return;
          }
          headers.push(rowHeaders[row]);
        });
      }
      return headers;
    }

    /**
     * Gets list of columns headers.
     *
     * @returns {Array}
     */
  }, {
    key: "getColumnHeaders",
    value: function getColumnHeaders() {
      var _this3 = this;
      var headers = [];
      if (this.options.columnHeaders) {
        var _this$_getDataRange3 = this._getDataRange(),
          startCol = _this$_getDataRange3.startCol,
          endCol = _this$_getDataRange3.endCol;
        var colHeaders = this.hot.getColHeader();
        (0, _number.rangeEach)(startCol, endCol, function (column) {
          if (!_this3.options.exportHiddenColumns && _this3._isHiddenColumn(column)) {
            return;
          }
          headers.push(colHeaders[column]);
        });
      }
      return headers;
    }

    /**
     * Get data range object based on settings provided in the class constructor.
     *
     * @private
     * @returns {object} Returns object with keys `startRow`, `startCol`, `endRow` and `endCol`.
     */
  }, {
    key: "_getDataRange",
    value: function _getDataRange() {
      var cols = this.hot.countCols() - 1;
      var rows = this.hot.countRows() - 1;
      var _this$options$range = _slicedToArray(this.options.range, 4),
        _this$options$range$ = _this$options$range[0],
        startRow = _this$options$range$ === void 0 ? 0 : _this$options$range$,
        _this$options$range$2 = _this$options$range[1],
        startCol = _this$options$range$2 === void 0 ? 0 : _this$options$range$2,
        _this$options$range$3 = _this$options$range[2],
        endRow = _this$options$range$3 === void 0 ? rows : _this$options$range$3,
        _this$options$range$4 = _this$options$range[3],
        endCol = _this$options$range$4 === void 0 ? cols : _this$options$range$4;
      startRow = Math.max(startRow, 0);
      startCol = Math.max(startCol, 0);
      endRow = Math.min(endRow, rows);
      endCol = Math.min(endCol, cols);
      return {
        startRow: startRow,
        startCol: startCol,
        endRow: endRow,
        endCol: endCol
      };
    }

    /**
     * Check if row at specified row index is hidden.
     *
     * @private
     * @param {number} row Row index.
     * @returns {boolean}
     */
  }, {
    key: "_isHiddenRow",
    value: function _isHiddenRow(row) {
      return this.hot.rowIndexMapper.isHidden(this.hot.toPhysicalRow(row));
    }

    /**
     * Check if column at specified column index is hidden.
     *
     * @private
     * @param {number} column Visual column index.
     * @returns {boolean}
     */
  }, {
    key: "_isHiddenColumn",
    value: function _isHiddenColumn(column) {
      return this.hot.columnIndexMapper.isHidden(this.hot.toPhysicalColumn(column));
    }
  }]);
  return DataProvider;
}();
var _default = DataProvider;
exports.default = _default;
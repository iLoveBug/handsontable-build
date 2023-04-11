function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["row", "col"];
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.array.index-of.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import "core-js/modules/es.symbol.iterator.js";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
import { extend, isObject } from "../../../helpers/object.mjs";
import { arrayEach } from "../../../helpers/array.mjs";
import { normalizeSettings } from "./settingsNormalizer.mjs";
/**
 * List of properties which are configurable. That properties can be changed using public API.
 *
 * @type {string[]}
 */
export var HEADER_CONFIGURABLE_PROPS = ['label', 'collapsible'];

/**
 * The class manages and normalizes settings passed by the developer
 * into the nested headers plugin. The SourceSettings class is a
 * source of truth for tree builder (HeaderTree) module.
 *
 * @private
 * @class SourceSettings
 */
var _data = /*#__PURE__*/new WeakMap();
var _dataLength = /*#__PURE__*/new WeakMap();
var _columnsLimit = /*#__PURE__*/new WeakMap();
var SourceSettings = /*#__PURE__*/function () {
  function SourceSettings() {
    _classCallCheck(this, SourceSettings);
    /**
     * The normalized source data (normalized user-defined settings for nested headers).
     *
     * @private
     * @type {Array[]}
     */
    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: []
    });
    /**
     * The total length of the nested header layers.
     *
     * @private
     * @type {number}
     */
    _classPrivateFieldInitSpec(this, _dataLength, {
      writable: true,
      value: 0
    });
    /**
     * Columns count limit value trims source settings to that value. If columns
     * count limit intersects nested header, the header's colspan value is reduced
     * to keep the whole structure stable (trimmed precisely where the limit is set).
     *
     * @type {number}
     */
    _classPrivateFieldInitSpec(this, _columnsLimit, {
      writable: true,
      value: Infinity
    });
  }
  _createClass(SourceSettings, [{
    key: "setColumnsLimit",
    value:
    /**
     * Sets columns limit to the source settings will be trimmed. All headers which
     * overlap the column limit will be reduced to keep the structure solid.
     *
     * @param {number} columnsCount The number of columns to limit to.
     */
    function setColumnsLimit(columnsCount) {
      _classPrivateFieldSet(this, _columnsLimit, columnsCount);
    }

    /**
     * Sets a new nested header configuration.
     *
     * @param {Array[]} [nestedHeadersSettings=[]] The user-defined nested headers settings.
     */
  }, {
    key: "setData",
    value: function setData() {
      var nestedHeadersSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      _classPrivateFieldSet(this, _data, normalizeSettings(nestedHeadersSettings, _classPrivateFieldGet(this, _columnsLimit)));
      _classPrivateFieldSet(this, _dataLength, _classPrivateFieldGet(this, _data).length);
    }

    /**
     * Gets normalized source settings.
     *
     * @returns {Array[]}
     */
  }, {
    key: "getData",
    value: function getData() {
      return _classPrivateFieldGet(this, _data);
    }

    /**
     * Merges settings with current source settings.
     *
     * @param {object[]} additionalSettings An array of objects with `row`, `col` and additional
     *                                      properties to merge with current source settings.
     */
  }, {
    key: "mergeWith",
    value: function mergeWith(additionalSettings) {
      var _this = this;
      arrayEach(additionalSettings, function (_ref) {
        var row = _ref.row,
          col = _ref.col,
          rest = _objectWithoutProperties(_ref, _excluded);
        var headerSettings = _this.getHeaderSettings(row, col);
        if (headerSettings !== null) {
          extend(headerSettings, rest, HEADER_CONFIGURABLE_PROPS);
        }
      });
    }

    /**
     * Maps the current state with a callback. For each source settings the callback function
     * is called. If the function returns value that value is merged with the source settings.
     *
     * @param {Function} callback A function that is called for every header settings.
     *                            Each time the callback is called, the returned value extends
     *                            header settings.
     */
  }, {
    key: "map",
    value: function map(callback) {
      arrayEach(_classPrivateFieldGet(this, _data), function (header) {
        arrayEach(header, function (headerSettings) {
          var propsToExtend = callback(_objectSpread({}, headerSettings));
          if (isObject(propsToExtend)) {
            extend(headerSettings, propsToExtend, HEADER_CONFIGURABLE_PROPS);
          }
        });
      });
    }

    /**
     * Gets source column header settings for a specified header. The returned
     * object contains information about the header label, its colspan length,
     * or if it is hidden in the header renderers.
     *
     * @param {number} headerLevel Header level (0 = most distant to the table).
     * @param {number} columnIndex A visual column index.
     * @returns {object|null}
     */
  }, {
    key: "getHeaderSettings",
    value: function getHeaderSettings(headerLevel, columnIndex) {
      var _headersSettings$colu;
      if (headerLevel >= _classPrivateFieldGet(this, _dataLength) || headerLevel < 0) {
        return null;
      }
      var headersSettings = _classPrivateFieldGet(this, _data)[headerLevel];
      if (columnIndex >= headersSettings.length) {
        return null;
      }
      return (_headersSettings$colu = headersSettings[columnIndex]) !== null && _headersSettings$colu !== void 0 ? _headersSettings$colu : null;
    }

    /**
     * Gets source of column headers settings for specified headers. If the retrieved column
     * settings overlap the range "box" determined by "columnIndex" and "columnsLength"
     * the exception will be thrown.
     *
     * @param {number} headerLevel Header level (0 = most distant to the table).
     * @param {number} columnIndex A visual column index from which the settings will be extracted.
     * @param {number} [columnsLength=1] The number of columns involved in the extraction of settings.
     * @returns {object}
     */
  }, {
    key: "getHeadersSettings",
    value: function getHeadersSettings(headerLevel, columnIndex) {
      var columnsLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var headersSettingsChunks = [];
      if (headerLevel >= _classPrivateFieldGet(this, _dataLength) || headerLevel < 0) {
        return headersSettingsChunks;
      }
      var headersSettings = _classPrivateFieldGet(this, _data)[headerLevel];
      var currentLength = 0;
      for (var i = columnIndex; i < headersSettings.length; i++) {
        var headerSettings = headersSettings[i];
        if (headerSettings.isPlaceholder) {
          throw new Error('The first column settings cannot overlap the other header layers');
        }
        currentLength += headerSettings.colspan;
        headersSettingsChunks.push(headerSettings);
        if (headerSettings.colspan > 1) {
          i += headerSettings.colspan - 1;
        }

        // We met the current sum of the child colspans
        if (currentLength === columnsLength) {
          break;
        }
        // We exceeds the current sum of the child colspans, the last columns colspan overlaps the "columnsLength" length.
        if (currentLength > columnsLength) {
          throw new Error('The last column settings cannot overlap the other header layers');
        }
      }
      return headersSettingsChunks;
    }

    /**
     * Gets a total number of headers levels.
     *
     * @returns {number}
     */
  }, {
    key: "getLayersCount",
    value: function getLayersCount() {
      return _classPrivateFieldGet(this, _dataLength);
    }

    /**
     * Gets a total number of columns count.
     *
     * @returns {number}
     */
  }, {
    key: "getColumnsCount",
    value: function getColumnsCount() {
      return _classPrivateFieldGet(this, _dataLength) > 0 ? _classPrivateFieldGet(this, _data)[0].length : 0;
    }

    /**
     * Clears the data.
     */
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(this, _data, []);
      _classPrivateFieldSet(this, _dataLength, 0);
    }
  }]);
  return SourceSettings;
}();
export { SourceSettings as default };
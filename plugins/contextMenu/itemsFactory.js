"use strict";

require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
exports.__esModule = true;
exports.default = void 0;
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.array.index-of.js");
var _object = require("../../helpers/object");
var _array = require("../../helpers/array");
var _predefinedItems = require("./predefinedItems");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Predefined items class factory for menu items.
 *
 * @private
 * @class ItemsFactory
 */
var ItemsFactory = /*#__PURE__*/function () {
  function ItemsFactory(hotInstance) {
    var orderPattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, ItemsFactory);
    this.hot = hotInstance;
    this.predefinedItems = (0, _predefinedItems.predefinedItems)();
    this.defaultOrderPattern = orderPattern;
  }

  /**
   * Set predefined items.
   *
   * @param {Array} predefinedItemsCollection Array of predefined items.
   */
  _createClass(ItemsFactory, [{
    key: "setPredefinedItems",
    value: function setPredefinedItems(predefinedItemsCollection) {
      var _this = this;
      var items = {};
      this.defaultOrderPattern.length = 0;
      (0, _object.objectEach)(predefinedItemsCollection, function (value, key) {
        var menuItemKey = '';
        if (value.name === _predefinedItems.SEPARATOR) {
          items[_predefinedItems.SEPARATOR] = value;
          menuItemKey = _predefinedItems.SEPARATOR;

          // Menu item added as a property to array
        } else if (isNaN(parseInt(key, 10))) {
          value.key = value.key === void 0 ? key : value.key;
          items[key] = value;
          menuItemKey = value.key;
        } else {
          items[value.key] = value;
          menuItemKey = value.key;
        }
        _this.defaultOrderPattern.push(menuItemKey);
      });
      this.predefinedItems = items;
    }

    /**
     * Get all menu items based on pattern.
     *
     * @param {Array|object|boolean} pattern Pattern which you can define by displaying menu items order. If `true` default
     *                                       pattern will be used.
     * @returns {Array}
     */
  }, {
    key: "getItems",
    value: function getItems() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return _getItems(pattern, this.defaultOrderPattern, this.predefinedItems);
    }
  }]);
  return ItemsFactory;
}();
/**
 * @param {object[]} itemsPattern The user defined menu items collection.
 * @param {object[]} defaultPattern The menu default items collection.
 * @param {object} items Additional options.
 * @returns {object[]} Returns parsed and merged menu items collection ready to render.
 */
function _getItems() {
  var itemsPattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var defaultPattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var result = [];
  var pattern = itemsPattern;
  if (pattern && pattern.items) {
    pattern = pattern.items;
  } else if (!Array.isArray(pattern)) {
    pattern = defaultPattern;
  }
  if ((0, _object.isObject)(pattern)) {
    (0, _object.objectEach)(pattern, function (value, key) {
      var item = items[typeof value === 'string' ? value : key];
      if (!item) {
        item = value;
      }
      if ((0, _object.isObject)(value)) {
        (0, _object.extend)(item, value);
      } else if (typeof item === 'string') {
        item = {
          name: item
        };
      }
      if (item.key === void 0) {
        item.key = key;
      }
      result.push(item);
    });
  } else {
    (0, _array.arrayEach)(pattern, function (name, key) {
      var item = items[name];

      // Item deleted from settings `allowInsertRow: false` etc.
      if (!item && _predefinedItems.ITEMS.indexOf(name) >= 0) {
        return;
      }
      if (!item) {
        item = {
          name: name,
          key: "".concat(key)
        };
      }
      if ((0, _object.isObject)(name)) {
        (0, _object.extend)(item, name);
      }
      if (item.key === void 0) {
        item.key = key;
      }
      result.push(item);
    });
  }
  return result;
}
var _default = ItemsFactory;
exports.default = _default;
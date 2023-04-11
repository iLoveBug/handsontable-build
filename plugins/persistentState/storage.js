"use strict";

require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
exports.__esModule = true;
exports.default = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
var _array = require("../../helpers/array");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @private
 * @class Storage
 */
var Storage = /*#__PURE__*/function () {
  // eslint-disable-next-line no-restricted-globals
  function Storage(prefix) {
    var rootWindow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
    _classCallCheck(this, Storage);
    /**
     * Reference to proper window.
     *
     * @type {Window}
     */
    this.rootWindow = rootWindow;
    /**
     * Prefix for key (id element).
     *
     * @type {string}
     */
    this.prefix = prefix;

    /**
     * Saved keys.
     *
     * @type {Array}
     */
    this.savedKeys = [];
    this.loadSavedKeys();
  }

  /**
   * Save data to localStorage.
   *
   * @param {string} key Key string.
   * @param {Mixed} value Value to save.
   */
  _createClass(Storage, [{
    key: "saveValue",
    value: function saveValue(key, value) {
      this.rootWindow.localStorage.setItem("".concat(this.prefix, "_").concat(key), JSON.stringify(value));
      if (this.savedKeys.indexOf(key) === -1) {
        this.savedKeys.push(key);
        this.saveSavedKeys();
      }
    }

    /**
     * Load data from localStorage.
     *
     * @param {string} key Key string.
     * @param {object} defaultValue Object containing the loaded data.
     *
     * @returns {object|undefined}
     */
  }, {
    key: "loadValue",
    value: function loadValue(key, defaultValue) {
      var itemKey = typeof key === 'undefined' ? defaultValue : key;
      var value = this.rootWindow.localStorage.getItem("".concat(this.prefix, "_").concat(itemKey));
      return value === null ? void 0 : JSON.parse(value);
    }

    /**
     * Reset given data from localStorage.
     *
     * @param {string} key Key string.
     */
  }, {
    key: "reset",
    value: function reset(key) {
      this.rootWindow.localStorage.removeItem("".concat(this.prefix, "_").concat(key));
    }

    /**
     * Reset all data from localStorage.
     *
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      var _this = this;
      (0, _array.arrayEach)(this.savedKeys, function (value, index) {
        _this.rootWindow.localStorage.removeItem("".concat(_this.prefix, "_").concat(_this.savedKeys[index]));
      });
      this.clearSavedKeys();
    }

    /**
     * Load and save all keys from localStorage.
     *
     * @private
     */
  }, {
    key: "loadSavedKeys",
    value: function loadSavedKeys() {
      var keysJSON = this.rootWindow.localStorage.getItem("".concat(this.prefix, "__persistentStateKeys"));
      var keys = typeof keysJSON === 'string' ? JSON.parse(keysJSON) : void 0;
      this.savedKeys = keys || [];
    }

    /**
     * Save saved key in localStorage.
     *
     * @private
     */
  }, {
    key: "saveSavedKeys",
    value: function saveSavedKeys() {
      this.rootWindow.localStorage.setItem("".concat(this.prefix, "__persistentStateKeys"), JSON.stringify(this.savedKeys));
    }

    /**
     * Clear saved key from localStorage.
     *
     * @private
     */
  }, {
    key: "clearSavedKeys",
    value: function clearSavedKeys() {
      this.savedKeys.length = 0;
      this.saveSavedKeys();
    }
  }]);
  return Storage;
}();
var _default = Storage;
exports.default = _default;
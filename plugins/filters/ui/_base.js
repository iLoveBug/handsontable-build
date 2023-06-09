"use strict";

require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
exports.__esModule = true;
exports.default = void 0;
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
var _object = require("../../../helpers/object");
var _localHooks = _interopRequireDefault(require("../../../mixins/localHooks"));
var _eventManager = _interopRequireDefault(require("../../../eventManager"));
var _element = require("../../../helpers/dom/element");
var _array = require("../../../helpers/array");
var C = _interopRequireWildcard(require("../../../i18n/constants"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var STATE_BUILT = 'built';
var STATE_BUILDING = 'building';
var EVENTS_TO_REGISTER = ['click', 'input', 'keydown', 'keypress', 'keyup', 'focus', 'blur', 'change'];

/**
 * @private
 */
var BaseUI = /*#__PURE__*/function () {
  function BaseUI(hotInstance, options) {
    _classCallCheck(this, BaseUI);
    /**
     * Instance of Handsontable.
     *
     * @type {Core}
     */
    this.hot = hotInstance;
    /**
     * Instance of EventManager.
     *
     * @type {EventManager}
     */
    this.eventManager = new _eventManager.default(this);
    /**
     * List of element options.
     *
     * @type {object}
     */
    this.options = (0, _object.extend)(BaseUI.DEFAULTS, options);
    /**
     * Build root DOM element.
     *
     * @type {Element}
     * @private
     */
    this._element = this.hot.rootDocument.createElement(this.options.wrapIt ? 'div' : this.options.tagName);
    /**
     * Flag which determines build state of element.
     *
     * @type {string}
     */
    this.buildState = null;
  }

  /**
   * Set the element value.
   *
   * @param {*} value Set the component value.
   */
  _createClass(BaseUI, [{
    key: "setValue",
    value: function setValue(value) {
      this.options.value = value;
      this.update();
    }

    /**
     * Get the element value.
     *
     * @returns {*}
     */
  }, {
    key: "getValue",
    value: function getValue() {
      return this.options.value;
    }

    /**
     * Get element as a DOM object.
     *
     * @returns {Element}
     */
  }, {
    key: "element",
    get: function get() {
      if (this.buildState === STATE_BUILDING) {
        return this._element;
      }
      if (this.buildState === STATE_BUILT) {
        this.update();
        return this._element;
      }
      this.buildState = STATE_BUILDING;
      this.build();
      this.buildState = STATE_BUILT;
      return this._element;
    }

    /**
     * Check if element was built (built whole DOM structure).
     *
     * @returns {boolean}
     */
  }, {
    key: "isBuilt",
    value: function isBuilt() {
      return this.buildState === STATE_BUILT;
    }

    /**
     * Translate value if it is possible. It's checked if value belongs to namespace of translated phrases.
     *
     * @param {*} value Value which will may be translated.
     * @returns {*} Translated value if translation was possible, original value otherwise.
     */
  }, {
    key: "translateIfPossible",
    value: function translateIfPossible(value) {
      if (typeof value === 'string' && value.startsWith(C.FILTERS_NAMESPACE)) {
        return this.hot.getTranslatedPhrase(value);
      }
      return value;
    }

    /**
     * Build DOM structure.
     */
  }, {
    key: "build",
    value: function build() {
      var _this = this;
      var registerEvent = function registerEvent(element, eventName) {
        _this.eventManager.addEventListener(element, eventName, function (event) {
          return _this.runLocalHooks(eventName, event, _this);
        });
      };
      if (!this.buildState) {
        this.buildState = STATE_BUILDING;
      }
      if (this.options.className) {
        (0, _element.addClass)(this._element, this.options.className);
      }
      if (this.options.children.length) {
        (0, _array.arrayEach)(this.options.children, function (element) {
          return _this._element.appendChild(element.element);
        });
      } else if (this.options.wrapIt) {
        var element = this.hot.rootDocument.createElement(this.options.tagName);
        (0, _object.objectEach)(this.options, function (value, key) {
          if (element[key] !== void 0 && key !== 'className' && key !== 'tagName' && key !== 'children') {
            element[key] = _this.translateIfPossible(value);
          }
        });
        this._element.appendChild(element);
        (0, _array.arrayEach)(EVENTS_TO_REGISTER, function (eventName) {
          return registerEvent(element, eventName);
        });
      } else {
        (0, _array.arrayEach)(EVENTS_TO_REGISTER, function (eventName) {
          return registerEvent(_this._element, eventName);
        });
      }
    }

    /**
     * Update DOM structure.
     */
  }, {
    key: "update",
    value: function update() {}

    /**
     * Reset to initial state.
     */
  }, {
    key: "reset",
    value: function reset() {
      this.options.value = '';
      this.update();
    }

    /**
     * Show element.
     */
  }, {
    key: "show",
    value: function show() {
      this.element.style.display = '';
    }

    /**
     * Hide element.
     */
  }, {
    key: "hide",
    value: function hide() {
      this.element.style.display = 'none';
    }

    /**
     * Focus element.
     */
  }, {
    key: "focus",
    value: function focus() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.eventManager.destroy();
      this.eventManager = null;
      this.hot = null;
      if (this._element.parentNode) {
        this._element.parentNode.removeChild(this._element);
      }
      this._element = null;
    }
  }], [{
    key: "DEFAULTS",
    get: function get() {
      return (0, _object.clone)({
        className: '',
        value: '',
        tagName: 'div',
        children: [],
        wrapIt: true
      });
    }
  }]);
  return BaseUI;
}();
(0, _object.mixin)(BaseUI, _localHooks.default);
var _default = BaseUI;
exports.default = _default;
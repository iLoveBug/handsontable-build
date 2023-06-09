"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.symbol.iterator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
exports.__esModule = true;
exports.ChangesObserver = void 0;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _object = require("../../helpers/object");
var _localHooks = _interopRequireDefault(require("../../mixins/localHooks"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _currentInitialChanges = /*#__PURE__*/new WeakMap();
/**
 * The ChangesObserver module is an object that represents a disposable resource
 * provided by the ChangesObservable module.
 *
 * @class ChangesObserver
 */
var ChangesObserver = /*#__PURE__*/function () {
  function ChangesObserver() {
    _classCallCheck(this, ChangesObserver);
    /**
     * The field holds initial changes that will be used to notify the callbacks added using
     * subscribe method. Regardless of the moment of listening for changes, the subscriber
     * will be notified once with all changes made before subscribing.
     *
     * @type {Array}
     */
    _classPrivateFieldInitSpec(this, _currentInitialChanges, {
      writable: true,
      value: []
    });
  }
  _createClass(ChangesObserver, [{
    key: "subscribe",
    value:
    /**
     * Subscribes to the observer.
     *
     * @param {Function} callback A function that will be called when the new changes will appear.
     * @returns {ChangesObserver}
     */
    function subscribe(callback) {
      this.addLocalHook('change', callback);
      this._write(_classPrivateFieldGet(this, _currentInitialChanges));
      return this;
    }

    /**
     * Unsubscribes all subscriptions. After the method call, the observer would not produce
     * any new events.
     *
     * @returns {ChangesObserver}
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.runLocalHooks('unsubscribe');
      this.clearLocalHooks();
      return this;
    }

    /**
     * The write method is executed by the ChangesObservable module. The module produces all
     * changes events that are distributed further by the observer.
     *
     * @private
     * @param {object} changes The chunk of changes produced by the ChangesObservable module.
     * @returns {ChangesObserver}
     */
  }, {
    key: "_write",
    value: function _write(changes) {
      if (changes.length > 0) {
        this.runLocalHooks('change', changes);
      }
      return this;
    }

    /**
     * The write method is executed by the ChangesObservable module. The module produces initial
     * changes that will be used to notify new subscribers.
     *
     * @private
     * @param {object} initialChanges The chunk of changes produced by the ChangesObservable module.
     */
  }, {
    key: "_writeInitialChanges",
    value: function _writeInitialChanges(initialChanges) {
      _classPrivateFieldSet(this, _currentInitialChanges, initialChanges);
    }
  }]);
  return ChangesObserver;
}();
exports.ChangesObserver = ChangesObserver;
(0, _object.mixin)(ChangesObserver, _localHooks.default);
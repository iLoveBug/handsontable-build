function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "core-js/modules/web.timers.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { debounce } from "../../helpers/function.mjs";
import { mixin } from "../../helpers/object.mjs";
import localHooks from "../../mixins/localHooks.mjs";
var DEFAULT_DISPLAY_DELAY = 250;
var DEFAULT_HIDE_DELAY = 250;

/**
 * Display switch for the Comments plugin. Manages the time of delayed displaying / hiding comments.
 *
 * @private
 * @class DisplaySwitch
 */
var DisplaySwitch = /*#__PURE__*/function () {
  function DisplaySwitch(displayDelay) {
    _classCallCheck(this, DisplaySwitch);
    /**
     * Flag to determine if comment can be showed or hidden. State `true` mean that last performed action
     * was an attempt to show comment element. State `false` mean that it was attempt to hide comment element.
     *
     * @type {boolean}
     */
    this.wasLastActionShow = true;
    /**
     * Show comment after predefined delay. It keeps reference to immutable `debounce` function.
     *
     * @type {Function}
     */
    this.showDebounced = null;
    /**
     * Reference to timer, run by `setTimeout`, which is hiding comment.
     *
     * @type {number}
     */
    this.hidingTimer = null;
    this.updateDelay(displayDelay);
  }

  /**
   * Responsible for hiding comment after proper delay.
   */
  _createClass(DisplaySwitch, [{
    key: "hide",
    value: function hide() {
      var _this = this;
      this.wasLastActionShow = false;
      this.hidingTimer = setTimeout(function () {
        if (_this.wasLastActionShow === false) {
          _this.runLocalHooks('hide');
        }
      }, DEFAULT_HIDE_DELAY);
    }

    /**
     * Responsible for showing comment after proper delay.
     *
     * @param {object} range Coordinates of selected cell.
     */
  }, {
    key: "show",
    value: function show(range) {
      this.wasLastActionShow = true;
      this.showDebounced(range);
    }

    /**
     * Cancel hiding comment.
     */
  }, {
    key: "cancelHiding",
    value: function cancelHiding() {
      this.wasLastActionShow = true;
      clearTimeout(this.hidingTimer);
      this.hidingTimer = null;
    }

    /**
     * Update the switch settings.
     *
     * @param {number} displayDelay Delay of showing the comments (in milliseconds).
     */
  }, {
    key: "updateDelay",
    value: function updateDelay() {
      var _this2 = this;
      var displayDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_DISPLAY_DELAY;
      this.showDebounced = debounce(function (range) {
        if (_this2.wasLastActionShow) {
          _this2.runLocalHooks('show', range.from.row, range.from.col);
        }
      }, displayDelay);
    }

    /**
     * Destroy the switcher.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.clearLocalHooks();
    }
  }]);
  return DisplaySwitch;
}();
mixin(DisplaySwitch, localHooks);
export default DisplaySwitch;
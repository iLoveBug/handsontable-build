function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.splice.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.symbol.iterator.js";
import { rangeEach } from "../../../helpers/number.mjs";
import { arrayEach } from "../../../helpers/array.mjs";
import * as C from "../../../i18n/constants.mjs";
import BaseUI from "./_base.mjs";
var privatePool = new WeakMap();

/**
 * Class responsible for the Context Menu entries for the Nested Rows plugin.
 *
 * @private
 * @class ContextMenuUI
 * @augments BaseUI
 */
var ContextMenuUI = /*#__PURE__*/function (_BaseUI) {
  _inherits(ContextMenuUI, _BaseUI);
  var _super = _createSuper(ContextMenuUI);
  function ContextMenuUI(nestedRowsPlugin, hotInstance) {
    var _this;
    _classCallCheck(this, ContextMenuUI);
    _this = _super.call(this, nestedRowsPlugin, hotInstance);
    privatePool.set(_assertThisInitialized(_this), {
      row_above: function row_above(key, selection) {
        var lastSelection = selection[selection.length - 1];
        _this.dataManager.addSibling(lastSelection.start.row, 'above');
      },
      row_below: function row_below(key, selection) {
        var lastSelection = selection[selection.length - 1];
        _this.dataManager.addSibling(lastSelection.start.row, 'below');
      }
    });
    /**
     * Reference to the DataManager instance connected with the Nested Rows plugin.
     *
     * @type {DataManager}
     */
    _this.dataManager = _this.plugin.dataManager;
    return _this;
  }
  /**
   * Append options to the context menu. (Propagated from the `afterContextMenuDefaultOptions` hook callback)
   * f.
   *
   * @private
   * @param {object} defaultOptions Default context menu options.
   * @returns {*}
   */
  _createClass(ContextMenuUI, [{
    key: "appendOptions",
    value: function appendOptions(defaultOptions) {
      var _this2 = this;
      var newEntries = [{
        key: 'add_child',
        name: function name() {
          return this.getTranslatedPhrase(C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD);
        },
        callback: function callback() {
          var translatedRowIndex = _this2.dataManager.translateTrimmedRow(_this2.hot.getSelectedLast()[0]);
          var parent = _this2.dataManager.getDataObject(translatedRowIndex);
          _this2.dataManager.addChild(parent);
        },
        disabled: function disabled() {
          var selected = _this2.hot.getSelectedLast();
          return !selected || selected[0] < 0 || _this2.hot.selection.isSelectedByColumnHeader() || _this2.hot.countRows() >= _this2.hot.getSettings().maxRows;
        }
      }, {
        key: 'detach_from_parent',
        name: function name() {
          return this.getTranslatedPhrase(C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD);
        },
        callback: function callback() {
          _this2.dataManager.detachFromParent(_this2.hot.getSelectedLast());
        },
        disabled: function disabled() {
          var selected = _this2.hot.getSelectedLast();
          var translatedRowIndex = _this2.dataManager.translateTrimmedRow(selected[0]);
          var parent = _this2.dataManager.getRowParent(translatedRowIndex);
          return !parent || !selected || selected[0] < 0 || _this2.hot.selection.isSelectedByColumnHeader() || _this2.hot.countRows() >= _this2.hot.getSettings().maxRows;
        }
      }, {
        name: '---------'
      }];
      rangeEach(0, defaultOptions.items.length - 1, function (i) {
        if (i === 0) {
          arrayEach(newEntries, function (val, j) {
            defaultOptions.items.splice(i + j, 0, val);
          });
          return false;
        }
      });
      return this.modifyRowInsertingOptions(defaultOptions);
    }

    /**
     * Modify how the row inserting options work.
     *
     * @private
     * @param {object} defaultOptions Default context menu items.
     * @returns {*}
     */
  }, {
    key: "modifyRowInsertingOptions",
    value: function modifyRowInsertingOptions(defaultOptions) {
      var priv = privatePool.get(this);
      rangeEach(0, defaultOptions.items.length - 1, function (i) {
        var option = priv[defaultOptions.items[i].key];
        if (option !== null && option !== void 0) {
          defaultOptions.items[i].callback = option;
        }
      });
      return defaultOptions;
    }
  }]);
  return ContextMenuUI;
}(BaseUI);
export default ContextMenuUI;
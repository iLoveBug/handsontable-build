"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
exports.__esModule = true;
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.object.get-prototype-of.js");
var _element = require("./../../../../helpers/dom/element");
var _table = _interopRequireDefault(require("../table"));
var _calculatedRows = _interopRequireDefault(require("./mixin/calculatedRows"));
var _calculatedColumns = _interopRequireDefault(require("./mixin/calculatedColumns"));
var _object = require("./../../../../helpers/object");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
/**
 * Subclass of `Table` that provides the helper methods relevant to the master table (not overlays), implemented through mixins.
 *
 * @mixes calculatedRows
 * @mixes calculatedColumns
 */
var MasterTable = /*#__PURE__*/function (_Table) {
  _inherits(MasterTable, _Table);
  var _super = _createSuper(MasterTable);
  /**
   * @param {TableDao} dataAccessObject The data access object.
   * @param {FacadeGetter} facadeGetter Function which return proper facade.
   * @param {DomBindings} domBindings Bindings into DOM.
   * @param {Settings} wtSettings The Walkontable settings.
   */
  function MasterTable(dataAccessObject, facadeGetter, domBindings, wtSettings) {
    _classCallCheck(this, MasterTable);
    return _super.call(this, dataAccessObject, facadeGetter, domBindings, wtSettings, 'master');
  }
  _createClass(MasterTable, [{
    key: "alignOverlaysWithTrimmingContainer",
    value: function alignOverlaysWithTrimmingContainer() {
      var trimmingElement = (0, _element.getTrimmingContainer)(this.wtRootElement);
      var rootWindow = this.domBindings.rootWindow;
      if (trimmingElement === rootWindow) {
        var preventOverflow = this.wtSettings.getSetting('preventOverflow');
        if (!preventOverflow) {
          this.holder.style.overflow = 'visible';
          this.wtRootElement.style.overflow = 'visible';
        }
      } else {
        var trimmingElementParent = trimmingElement.parentElement;
        var trimmingHeight = (0, _element.getStyle)(trimmingElement, 'height', rootWindow);
        var trimmingOverflow = (0, _element.getStyle)(trimmingElement, 'overflow', rootWindow);
        var holderStyle = this.holder.style;
        var scrollWidth = trimmingElement.scrollWidth,
          scrollHeight = trimmingElement.scrollHeight;
        var _trimmingElement$getB = trimmingElement.getBoundingClientRect(),
          width = _trimmingElement$getB.width,
          height = _trimmingElement$getB.height;
        var overflow = ['auto', 'hidden', 'scroll'];
        if (trimmingElementParent && overflow.includes(trimmingOverflow)) {
          var cloneNode = trimmingElement.cloneNode(false);

          // Before calculating the height of the trimming element, set overflow: auto to hide scrollbars.
          // An issue occurred on Firefox, where an empty element with overflow: scroll returns an element height higher than 0px
          // despite an empty content within.
          cloneNode.style.overflow = 'auto';
          // Issue #9545 shows problem with calculating height for HOT on Firefox while placing instance in some
          // flex containers and setting overflow for some `div` section.
          cloneNode.style.position = 'absolute';
          if (trimmingElement.nextElementSibling) {
            trimmingElementParent.insertBefore(cloneNode, trimmingElement.nextElementSibling);
          } else {
            trimmingElementParent.appendChild(cloneNode);
          }
          var cloneHeight = parseInt((0, _element.getComputedStyle)(cloneNode, rootWindow).height, 10);
          trimmingElementParent.removeChild(cloneNode);
          if (cloneHeight === 0) {
            height = 0;
          }
        }
        height = Math.min(height, scrollHeight);
        holderStyle.height = trimmingHeight === 'auto' ? 'auto' : "".concat(height, "px");
        width = Math.min(width, scrollWidth);
        holderStyle.width = "".concat(width, "px");
        holderStyle.overflow = '';
        this.hasTableHeight = holderStyle.height === 'auto' ? true : height > 0;
        this.hasTableWidth = width > 0;
      }
      this.isTableVisible = (0, _element.isVisible)(this.TABLE);
    }
  }, {
    key: "markOversizedColumnHeaders",
    value: function markOversizedColumnHeaders() {
      var wtSettings = this.wtSettings;
      var wtViewport = this.dataAccessObject.wtViewport;
      var overlayName = 'master';
      var columnHeaders = wtSettings.getSetting('columnHeaders');
      var columnHeadersCount = columnHeaders.length;
      if (columnHeadersCount && !wtViewport.hasOversizedColumnHeadersMarked[overlayName]) {
        var rowHeaders = wtSettings.getSetting('rowHeaders');
        var rowHeaderCount = rowHeaders.length;
        var columnCount = this.getRenderedColumnsCount();
        for (var i = 0; i < columnHeadersCount; i++) {
          for (var renderedColumnIndex = -1 * rowHeaderCount; renderedColumnIndex < columnCount; renderedColumnIndex++) {
            // eslint-disable-line max-len
            this.markIfOversizedColumnHeader(renderedColumnIndex);
          }
        }
        wtViewport.hasOversizedColumnHeadersMarked[overlayName] = true;
      }
    }
  }]);
  return MasterTable;
}(_table.default);
(0, _object.mixin)(MasterTable, _calculatedRows.default);
(0, _object.mixin)(MasterTable, _calculatedColumns.default);
var _default = MasterTable;
exports.default = _default;
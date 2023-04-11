"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.object.freeze.js");
require("core-js/modules/es.weak-map.js");
exports.__esModule = true;
exports.PLUGIN_PRIORITY = exports.PLUGIN_KEY = exports.Filters = void 0;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.object.get-prototype-of.js");
var _base = require("../base");
var _array = require("../../helpers/array");
var _templateLiteralTag = require("../../helpers/templateLiteralTag");
var _console = require("../../helpers/console");
var _number = require("../../helpers/number");
var _eventManager = _interopRequireDefault(require("../../eventManager"));
var _element = require("../../helpers/dom/element");
var _predefinedItems = require("../contextMenu/predefinedItems");
var constants = _interopRequireWildcard(require("../../i18n/constants"));
var _condition = _interopRequireDefault(require("./component/condition"));
var _operators = _interopRequireDefault(require("./component/operators"));
var _value = _interopRequireDefault(require("./component/value"));
var _actionBar = _interopRequireDefault(require("./component/actionBar"));
var _conditionCollection = _interopRequireDefault(require("./conditionCollection"));
var _dataFilter = _interopRequireDefault(require("./dataFilter"));
var _conditionUpdateObserver = _interopRequireDefault(require("./conditionUpdateObserver"));
var _utils = require("./utils");
var _constants2 = require("./constants");
var _translations = require("../../translations");
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var PLUGIN_KEY = 'filters';
exports.PLUGIN_KEY = PLUGIN_KEY;
var PLUGIN_PRIORITY = 250;

/**
 * @plugin Filters
 * @class Filters
 *
 * @description
 * The plugin allows filtering the table data either by the built-in component or with the API.
 *
 * See [the filtering demo](@/guides/columns/column-filter.md) for examples.
 *
 * @example
 * ::: only-for javascript
 * ```js
 * const container = document.getElementById('example');
 * const hot = new Handsontable(container, {
 *   data: getData(),
 *   colHeaders: true,
 *   rowHeaders: true,
 *   dropdownMenu: true,
 *   filters: true
 * });
 * ```
 * :::
 *
 * ::: only-for react
 * ```jsx
 * <HotTable
 *   data={getData()}
 *   colHeaders={true}
 *   rowHeaders={true}
 *   dropdownMenu={true}
 *   filters={true}
 * />
 * ```
 * :::
 */
exports.PLUGIN_PRIORITY = PLUGIN_PRIORITY;
var Filters = /*#__PURE__*/function (_BasePlugin) {
  _inherits(Filters, _BasePlugin);
  var _super = _createSuper(Filters);
  function Filters(hotInstance) {
    var _this;
    _classCallCheck(this, Filters);
    _this = _super.call(this, hotInstance);
    /**
     * Instance of {@link EventManager}.
     *
     * @private
     * @type {EventManager}
     */
    _this.eventManager = new _eventManager.default(_assertThisInitialized(_this));
    /**
     * Instance of {@link DropdownMenu}.
     *
     * @private
     * @type {DropdownMenu}
     */
    _this.dropdownMenuPlugin = null;
    /**
     * Instance of {@link ConditionCollection}.
     *
     * @private
     * @type {ConditionCollection}
     */
    _this.conditionCollection = null;
    /**
     * Instance of {@link ConditionUpdateObserver}.
     *
     * @private
     * @type {ConditionUpdateObserver}
     */
    _this.conditionUpdateObserver = null;
    /**
     * Map, where key is component identifier and value represent `BaseComponent` element or it derivatives.
     *
     * @private
     * @type {Map}
     */
    _this.components = new Map([['filter_by_condition', null], ['filter_operators', null], ['filter_by_condition2', null], ['filter_by_value', null], ['filter_action_bar', null]]);
    /**
     * Map of skipped rows by plugin.
     *
     * @private
     * @type {null|TrimmingMap}
     */
    _this.filtersRowsMap = null;

    // One listener for the enable/disable functionality
    _this.hot.addHook('afterGetColHeader', function (col, TH) {
      return _this.onAfterGetColHeader(col, TH);
    });
    return _this;
  }

  /**
   * Checks if the plugin is enabled in the handsontable settings. This method is executed in {@link Hooks#beforeInit}
   * hook and if it returns `true` then the {@link Filters#enablePlugin} method is called.
   *
   * @returns {boolean}
   */
  _createClass(Filters, [{
    key: "isEnabled",
    value: function isEnabled() {
      /* eslint-disable no-unneeded-ternary */
      return this.hot.getSettings()[PLUGIN_KEY] ? true : false;
    }

    /**
     * Enables the plugin functionality for this Handsontable instance.
     */
  }, {
    key: "enablePlugin",
    value: function enablePlugin() {
      var _this2 = this;
      if (this.enabled) {
        return;
      }
      this.filtersRowsMap = this.hot.rowIndexMapper.registerMap(this.pluginName, new _translations.TrimmingMap());
      this.dropdownMenuPlugin = this.hot.getPlugin('dropdownMenu');
      var dropdownSettings = this.hot.getSettings().dropdownMenu;
      var menuContainer = dropdownSettings && dropdownSettings.uiContainer || this.hot.rootDocument.body;
      var addConfirmationHooks = function addConfirmationHooks(component) {
        component.addLocalHook('accept', function () {
          return _this2.onActionBarSubmit('accept');
        });
        component.addLocalHook('cancel', function () {
          return _this2.onActionBarSubmit('cancel');
        });
        component.addLocalHook('change', function (command) {
          return _this2.onComponentChange(component, command);
        });
        return component;
      };
      var filterByConditionLabel = function filterByConditionLabel() {
        return "".concat(_this2.hot.getTranslatedPhrase(constants.FILTERS_DIVS_FILTER_BY_CONDITION), ":");
      };
      var filterValueLabel = function filterValueLabel() {
        return "".concat(_this2.hot.getTranslatedPhrase(constants.FILTERS_DIVS_FILTER_BY_VALUE), ":");
      };
      if (!this.components.get('filter_by_condition')) {
        var conditionComponent = new _condition.default(this.hot, {
          id: 'filter_by_condition',
          name: filterByConditionLabel,
          addSeparator: false,
          menuContainer: menuContainer
        });
        conditionComponent.addLocalHook('afterClose', function () {
          return _this2.onSelectUIClosed();
        });
        this.components.set('filter_by_condition', addConfirmationHooks(conditionComponent));
      }
      if (!this.components.get('filter_operators')) {
        this.components.set('filter_operators', new _operators.default(this.hot, {
          id: 'filter_operators',
          name: 'Operators'
        }));
      }
      if (!this.components.get('filter_by_condition2')) {
        var _conditionComponent = new _condition.default(this.hot, {
          id: 'filter_by_condition2',
          name: '',
          addSeparator: true,
          menuContainer: menuContainer
        });
        _conditionComponent.addLocalHook('afterClose', function () {
          return _this2.onSelectUIClosed();
        });
        this.components.set('filter_by_condition2', addConfirmationHooks(_conditionComponent));
      }
      if (!this.components.get('filter_by_value')) {
        this.components.set('filter_by_value', addConfirmationHooks(new _value.default(this.hot, {
          id: 'filter_by_value',
          name: filterValueLabel
        })));
      }
      if (!this.components.get('filter_action_bar')) {
        this.components.set('filter_action_bar', addConfirmationHooks(new _actionBar.default(this.hot, {
          id: 'filter_action_bar',
          name: 'Action bar'
        })));
      }
      if (!this.conditionCollection) {
        this.conditionCollection = new _conditionCollection.default(this.hot);
      }
      if (!this.conditionUpdateObserver) {
        this.conditionUpdateObserver = new _conditionUpdateObserver.default(this.hot, this.conditionCollection, function (physicalColumn) {
          return _this2.getDataMapAtColumn(physicalColumn);
        });
        this.conditionUpdateObserver.addLocalHook('update', function (conditionState) {
          return _this2.updateComponents(conditionState);
        });
      }
      this.components.forEach(function (component) {
        return component.show();
      });
      this.addHook('beforeDropdownMenuSetItems', function (items) {
        return _this2.onBeforeDropdownMenuSetItems(items);
      });
      this.addHook('afterDropdownMenuDefaultOptions', function (defaultOptions) {
        return _this2.onAfterDropdownMenuDefaultOptions(defaultOptions);
      });
      this.addHook('afterDropdownMenuShow', function () {
        return _this2.onAfterDropdownMenuShow();
      });
      this.addHook('afterDropdownMenuHide', function () {
        return _this2.onAfterDropdownMenuHide();
      });
      this.addHook('afterChange', function (changes) {
        return _this2.onAfterChange(changes);
      });

      // Temp. solution (extending menu items bug in contextMenu/dropdownMenu)
      if (this.hot.getSettings().dropdownMenu && this.dropdownMenuPlugin) {
        this.dropdownMenuPlugin.disablePlugin();
        this.dropdownMenuPlugin.enablePlugin();
      }
      _get(_getPrototypeOf(Filters.prototype), "enablePlugin", this).call(this);
    }

    /**
     * Disables the plugin functionality for this Handsontable instance.
     */
  }, {
    key: "disablePlugin",
    value: function disablePlugin() {
      var _this3 = this;
      if (this.enabled) {
        var _this$dropdownMenuPlu;
        if ((_this$dropdownMenuPlu = this.dropdownMenuPlugin) !== null && _this$dropdownMenuPlu !== void 0 && _this$dropdownMenuPlu.enabled) {
          this.dropdownMenuPlugin.menu.clearLocalHooks();
        }
        this.components.forEach(function (component, key) {
          component.destroy();
          _this3.components.set(key, null);
        });
        this.conditionCollection.destroy();
        this.conditionCollection = null;
        this.hot.rowIndexMapper.unregisterMap(this.pluginName);
      }
      _get(_getPrototypeOf(Filters.prototype), "disablePlugin", this).call(this);
    }

    /* eslint-disable jsdoc/require-description-complete-sentence */
    /**
     * @memberof Filters#
     * @function addCondition
     * @description
     * Adds condition to the conditions collection at specified column index.
     *
     * Possible predefined conditions:
     *  * `begins_with` - Begins with
     *  * `between` - Between
     *  * `by_value` - By value
     *  * `contains` - Contains
     *  * `empty` - Empty
     *  * `ends_with` - Ends with
     *  * `eq` - Equal
     *  * `gt` - Greater than
     *  * `gte` - Greater than or equal
     *  * `lt` - Less than
     *  * `lte` - Less than or equal
     *  * `none` - None (no filter)
     *  * `not_between` - Not between
     *  * `not_contains` - Not contains
     *  * `not_empty` - Not empty
     *  * `neq` - Not equal.
     *
     * Possible operations on collection of conditions:
     *  * `conjunction` - [**Conjunction**](https://en.wikipedia.org/wiki/Logical_conjunction) on conditions collection (by default), i.e. for such operation: <br/> c1 AND c2 AND c3 AND c4 ... AND cn === TRUE, where c1 ... cn are conditions.
     *  * `disjunction` - [**Disjunction**](https://en.wikipedia.org/wiki/Logical_disjunction) on conditions collection, i.e. for such operation: <br/> c1 OR c2 OR c3 OR c4 ... OR cn === TRUE, where c1, c2, c3, c4 ... cn are conditions.
     *  * `disjunctionWithExtraCondition` - **Disjunction** on first `n - 1`\* conditions from collection with an extra requirement computed from the last condition, i.e. for such operation: <br/> c1 OR c2 OR c3 OR c4 ... OR cn-1 AND cn === TRUE, where c1, c2, c3, c4 ... cn are conditions.
     *
     * \* when `n` is collection size; it's used i.e. for one operation introduced from UI (when choosing from filter's drop-down menu two conditions with OR operator between them, mixed with choosing values from the multiple choice select)
     *
     * **Note**: Mind that you cannot mix different types of operations (for instance, if you use `conjunction`, use it consequently for a particular column).
     *
     * @example
     * ::: only-for javascript
     * ```js
     * const container = document.getElementById('example');
     * const hot = new Handsontable(container, {
     *   data: getData(),
     *   filters: true
     * });
     *
     * // access to filters plugin instance
     * const filtersPlugin = hot.getPlugin('filters');
     *
     * // add filter "Greater than" 95 to column at index 1
     * filtersPlugin.addCondition(1, 'gt', [95]);
     * filtersPlugin.filter();
     *
     * // add filter "By value" to column at index 1
     * // in this case all value's that don't match will be filtered.
     * filtersPlugin.addCondition(1, 'by_value', [['ing', 'ed', 'as', 'on']]);
     * filtersPlugin.filter();
     *
     * // add filter "Begins with" with value "de" AND "Not contains" with value "ing"
     * filtersPlugin.addCondition(1, 'begins_with', ['de'], 'conjunction');
     * filtersPlugin.addCondition(1, 'not_contains', ['ing'], 'conjunction');
     * filtersPlugin.filter();
     *
     * // add filter "Begins with" with value "de" OR "Not contains" with value "ing"
     * filtersPlugin.addCondition(1, 'begins_with', ['de'], 'disjunction');
     * filtersPlugin.addCondition(1, 'not_contains', ['ing'], 'disjunction');
     * filtersPlugin.filter();
     * ```
     * :::
     *
     * ::: only-for react
     * ```jsx
     * const hotRef = useRef(null);
     *
     * ...
     *
     * <HotTable
     *   ref={hotRef}
     *   data={getData()}
     *   filters={true}
     * />
     *
     * // access to filters plugin instance
     * const hot = hotRef.current.hotInstance;
     * const filtersPlugin = hot.getPlugin('filters');
     *
     * // add filter "Greater than" 95 to column at index 1
     * filtersPlugin.addCondition(1, 'gt', [95]);
     * filtersPlugin.filter();
     *
     * // add filter "By value" to column at index 1
     * // in this case all value's that don't match will be filtered.
     * filtersPlugin.addCondition(1, 'by_value', [['ing', 'ed', 'as', 'on']]);
     * filtersPlugin.filter();
     *
     * // add filter "Begins with" with value "de" AND "Not contains" with value "ing"
     * filtersPlugin.addCondition(1, 'begins_with', ['de'], 'conjunction');
     * filtersPlugin.addCondition(1, 'not_contains', ['ing'], 'conjunction');
     * filtersPlugin.filter();
     *
     * // add filter "Begins with" with value "de" OR "Not contains" with value "ing"
     * filtersPlugin.addCondition(1, 'begins_with', ['de'], 'disjunction');
     * filtersPlugin.addCondition(1, 'not_contains', ['ing'], 'disjunction');
     * filtersPlugin.filter();
     * ```
     * :::
     *
     * @param {number} column Visual column index.
     * @param {string} name Condition short name.
     * @param {Array} args Condition arguments.
     * @param {string} [operationId=conjunction] `id` of operation which is performed on the column.
     */
    /* eslint-enable jsdoc/require-description-complete-sentence */
  }, {
    key: "addCondition",
    value: function addCondition(column, name, args) {
      var operationId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants2.OPERATION_AND;
      var physicalColumn = this.hot.toPhysicalColumn(column);
      this.conditionCollection.addCondition(physicalColumn, {
        command: {
          key: name
        },
        args: args
      }, operationId);
    }

    /**
     * Removes conditions at specified column index.
     *
     * @param {number} column Visual column index.
     */
  }, {
    key: "removeConditions",
    value: function removeConditions(column) {
      var physicalColumn = this.hot.toPhysicalColumn(column);
      this.conditionCollection.removeConditions(physicalColumn);
    }

    /**
     * Clears all conditions previously added to the collection for the specified column index or, if the column index
     * was not passed, clear the conditions for all columns.
     *
     * @param {number} [column] Visual column index.
     */
  }, {
    key: "clearConditions",
    value: function clearConditions(column) {
      if (column === void 0) {
        this.conditionCollection.clean();
      } else {
        var physicalColumn = this.hot.toPhysicalColumn(column);
        this.conditionCollection.removeConditions(physicalColumn);
      }
    }

    /**
     * Filters data based on added filter conditions.
     *
     * @fires Hooks#beforeFilter
     * @fires Hooks#afterFilter
     */
  }, {
    key: "filter",
    value: function filter() {
      var _this4 = this;
      var dataFilter = this._createDataFilter();
      var needToFilter = !this.conditionCollection.isEmpty();
      var visibleVisualRows = [];
      var conditions = this.conditionCollection.exportAllConditions();
      var allowFiltering = this.hot.runHooks('beforeFilter', conditions);
      if (allowFiltering !== false) {
        if (needToFilter) {
          var trimmedRows = [];
          this.hot.batchExecution(function () {
            _this4.filtersRowsMap.clear();
            visibleVisualRows = (0, _array.arrayMap)(dataFilter.filter(), function (rowData) {
              return rowData.meta.visualRow;
            });
            var visibleVisualRowsAssertion = (0, _utils.createArrayAssertion)(visibleVisualRows);
            (0, _number.rangeEach)(_this4.hot.countSourceRows() - 1, function (row) {
              if (!visibleVisualRowsAssertion(row)) {
                trimmedRows.push(row);
              }
            });
            (0, _array.arrayEach)(trimmedRows, function (physicalRow) {
              _this4.filtersRowsMap.setValueAtIndex(physicalRow, true);
            });
          }, true);
          if (!visibleVisualRows.length) {
            this.hot.deselectCell();
          }
        } else {
          this.filtersRowsMap.clear();
        }
      }
      this.hot.runHooks('afterFilter', conditions);
      this.hot.view.adjustElementsSize(true);
      this.hot.render();
      this.clearColumnSelection();
    }

    /**
     * Gets last selected column index.
     *
     * @returns {{visualIndex: number, physicalIndex: number} | null} Returns `null` when a column is
     * not selected. Otherwise, returns an object with `visualIndex` and `physicalIndex` properties containing
     * the index of the column.
     */
  }, {
    key: "getSelectedColumn",
    value: function getSelectedColumn() {
      var _this$hot$getSelected;
      var highlight = (_this$hot$getSelected = this.hot.getSelectedRangeLast()) === null || _this$hot$getSelected === void 0 ? void 0 : _this$hot$getSelected.highlight;
      if (!highlight) {
        return null;
      }
      return {
        visualIndex: highlight.col,
        physicalIndex: this.hot.toPhysicalColumn(highlight.col)
      };
    }

    /**
     * Clears column selection.
     *
     * @private
     */
  }, {
    key: "clearColumnSelection",
    value: function clearColumnSelection() {
      var selectedColumn = this.getSelectedColumn();
      if (selectedColumn !== null) {
        this.hot.selectCell(0, selectedColumn.visualIndex);
      }
    }

    /**
     * Returns handsontable source data with cell meta based on current selection.
     *
     * @param {number} [column] The physical column index. By default column index accept the value of the selected column.
     * @returns {Array} Returns array of objects where keys as row index.
     */
  }, {
    key: "getDataMapAtColumn",
    value: function getDataMapAtColumn(column) {
      var _this5 = this;
      var visualColumn = this.hot.toVisualColumn(column);
      var data = [];
      (0, _array.arrayEach)(this.hot.getSourceDataAtCol(visualColumn), function (value, rowIndex) {
        var _this5$hot$getDataAtC;
        var _this5$hot$getCellMet = _this5.hot.getCellMeta(rowIndex, visualColumn),
          row = _this5$hot$getCellMet.row,
          col = _this5$hot$getCellMet.col,
          visualCol = _this5$hot$getCellMet.visualCol,
          visualRow = _this5$hot$getCellMet.visualRow,
          type = _this5$hot$getCellMet.type,
          instance = _this5$hot$getCellMet.instance,
          dateFormat = _this5$hot$getCellMet.dateFormat,
          locale = _this5$hot$getCellMet.locale;
        var dataValue = (_this5$hot$getDataAtC = _this5.hot.getDataAtCell(_this5.hot.toVisualRow(rowIndex), visualColumn)) !== null && _this5$hot$getDataAtC !== void 0 ? _this5$hot$getDataAtC : value;
        data.push({
          meta: {
            row: row,
            col: col,
            visualCol: visualCol,
            visualRow: visualRow,
            type: type,
            instance: instance,
            dateFormat: dateFormat,
            locale: locale
          },
          value: (0, _utils.toEmptyString)(dataValue)
        });
      });
      return data;
    }

    /**
     * `afterChange` listener.
     *
     * @private
     * @param {Array} changes Array of changes.
     */
  }, {
    key: "onAfterChange",
    value: function onAfterChange(changes) {
      var _this6 = this;
      if (changes) {
        (0, _array.arrayEach)(changes, function (change) {
          var _change = _slicedToArray(change, 2),
            prop = _change[1];
          var columnIndex = _this6.hot.propToCol(prop);
          if (_this6.conditionCollection.hasConditions(columnIndex)) {
            _this6.updateValueComponentCondition(columnIndex);
          }
        });
      }
    }

    /**
     * Update the condition of ValueComponent, based on the handled changes.
     *
     * @private
     * @param {number} columnIndex Column index of handled ValueComponent condition.
     */
  }, {
    key: "updateValueComponentCondition",
    value: function updateValueComponentCondition(columnIndex) {
      var dataAtCol = this.hot.getDataAtCol(columnIndex);
      var selectedValues = (0, _utils.unifyColumnValues)(dataAtCol);
      this.conditionUpdateObserver.updateStatesAtColumn(columnIndex, selectedValues);
    }

    /**
     * Restores components to its saved state.
     *
     * @private
     * @param {Array} components List of components.
     */
  }, {
    key: "restoreComponents",
    value: function restoreComponents(components) {
      var _this$getSelectedColu;
      var physicalIndex = (_this$getSelectedColu = this.getSelectedColumn()) === null || _this$getSelectedColu === void 0 ? void 0 : _this$getSelectedColu.physicalIndex;
      components.forEach(function (component) {
        if (component.isHidden()) {
          return;
        }
        component.restoreState(physicalIndex);
      });
      this.updateDependentComponentsVisibility();
    }

    /**
     * After dropdown menu show listener.
     *
     * @private
     */
  }, {
    key: "onAfterDropdownMenuShow",
    value: function onAfterDropdownMenuShow() {
      this.restoreComponents(Array.from(this.components.values()));
    }

    /**
     * After dropdown menu hide listener.
     *
     * @private
     */
  }, {
    key: "onAfterDropdownMenuHide",
    value: function onAfterDropdownMenuHide() {
      this.components.get('filter_by_condition').getSelectElement().closeOptions();
      this.components.get('filter_by_condition2').getSelectElement().closeOptions();
    }

    /**
     * Before dropdown menu set menu items listener.
     *
     * @private
     */
  }, {
    key: "onBeforeDropdownMenuSetItems",
    value: function onBeforeDropdownMenuSetItems() {
      var _this7 = this;
      if (this.dropdownMenuPlugin) {
        this.dropdownMenuPlugin.menu.addLocalHook('afterOpen', function () {
          _this7.dropdownMenuPlugin.menu.hotMenu.updateSettings({
            hiddenRows: true
          });
        });
      }
    }

    /**
     * After dropdown menu default options listener.
     *
     * @private
     * @param {object} defaultOptions ContextMenu default item options.
     */
  }, {
    key: "onAfterDropdownMenuDefaultOptions",
    value: function onAfterDropdownMenuDefaultOptions(defaultOptions) {
      defaultOptions.items.push({
        name: _predefinedItems.SEPARATOR
      });
      this.components.forEach(function (component) {
        defaultOptions.items.push(component.getMenuItemDescriptor());
      });
    }

    /**
     * Get an operation, based on the number and types of arguments (where arguments are states of components).
     *
     * @param {string} suggestedOperation Operation which was chosen by user from UI.
     * @param {object} byConditionState1 State of first condition component.
     * @param {object} byConditionState2 State of second condition component.
     * @param {object} byValueState State of value component.
     * @private
     * @returns {string}
     */
  }, {
    key: "getOperationBasedOnArguments",
    value: function getOperationBasedOnArguments(suggestedOperation, byConditionState1, byConditionState2, byValueState) {
      var operation = suggestedOperation;
      if (operation === _constants2.OPERATION_OR && byConditionState1.command.key !== _constants2.CONDITION_NONE && byConditionState2.command.key !== _constants2.CONDITION_NONE && byValueState.command.key !== _constants2.CONDITION_NONE) {
        operation = _constants2.OPERATION_OR_THEN_VARIABLE;
      } else if (byValueState.command.key !== _constants2.CONDITION_NONE) {
        if (byConditionState1.command.key === _constants2.CONDITION_NONE || byConditionState2.command.key === _constants2.CONDITION_NONE) {
          operation = _constants2.OPERATION_AND;
        }
      }
      return operation;
    }

    /**
     * On action bar submit listener.
     *
     * @private
     * @param {string} submitType The submit type.
     */
  }, {
    key: "onActionBarSubmit",
    value: function onActionBarSubmit(submitType) {
      var _this$dropdownMenuPlu3;
      if (submitType === 'accept') {
        var selectedColumn = this.getSelectedColumn();
        if (selectedColumn === null) {
          var _this$dropdownMenuPlu2;
          (_this$dropdownMenuPlu2 = this.dropdownMenuPlugin) === null || _this$dropdownMenuPlu2 === void 0 ? void 0 : _this$dropdownMenuPlu2.close();
          return;
        }
        var physicalIndex = selectedColumn.physicalIndex;
        var byConditionState1 = this.components.get('filter_by_condition').getState();
        var byConditionState2 = this.components.get('filter_by_condition2').getState();
        var byValueState = this.components.get('filter_by_value').getState();
        var operation = this.getOperationBasedOnArguments(this.components.get('filter_operators').getActiveOperationId(), byConditionState1, byConditionState2, byValueState);
        this.conditionUpdateObserver.groupChanges();
        var columnStackPosition = this.conditionCollection.getColumnStackPosition(physicalIndex);
        if (columnStackPosition === -1) {
          columnStackPosition = void 0;
        }
        this.conditionCollection.removeConditions(physicalIndex);
        if (byConditionState1.command.key !== _constants2.CONDITION_NONE) {
          this.conditionCollection.addCondition(physicalIndex, byConditionState1, operation, columnStackPosition);
          if (byConditionState2.command.key !== _constants2.CONDITION_NONE) {
            this.conditionCollection.addCondition(physicalIndex, byConditionState2, operation, columnStackPosition);
          }
        }
        if (byValueState.command.key !== _constants2.CONDITION_NONE) {
          this.conditionCollection.addCondition(physicalIndex, byValueState, operation, columnStackPosition);
        }
        this.conditionUpdateObserver.flush();
        this.components.forEach(function (component) {
          return component.saveState(physicalIndex);
        });
        this.filtersRowsMap.clear();
        this.filter();
      }
      (_this$dropdownMenuPlu3 = this.dropdownMenuPlugin) === null || _this$dropdownMenuPlu3 === void 0 ? void 0 : _this$dropdownMenuPlu3.close();
    }

    /**
     * On component change listener.
     *
     * @private
     * @param {BaseComponent} component Component inheriting BaseComponent.
     * @param {object} command Menu item object (command).
     */
  }, {
    key: "onComponentChange",
    value: function onComponentChange(component, command) {
      this.updateDependentComponentsVisibility();
      if (component.constructor === _condition.default && !command.inputsCount) {
        this.setListeningDropdownMenu();
      }
    }

    /**
     * On component SelectUI closed listener.
     *
     * @private
     */
  }, {
    key: "onSelectUIClosed",
    value: function onSelectUIClosed() {
      this.setListeningDropdownMenu();
    }

    /**
     * Listen to the keyboard input on document body and forward events to instance of Handsontable
     * created by DropdownMenu plugin.
     *
     * @private
     */
  }, {
    key: "setListeningDropdownMenu",
    value: function setListeningDropdownMenu() {
      if (this.dropdownMenuPlugin) {
        this.dropdownMenuPlugin.setListening();
      }
    }

    /**
     * Updates visibility of some of the components, based on the state of the parent component.
     *
     * @private
     */
  }, {
    key: "updateDependentComponentsVisibility",
    value: function updateDependentComponentsVisibility() {
      var component = this.components.get('filter_by_condition');
      var _component$getState = component.getState(),
        command = _component$getState.command;
      var componentsToShow = [this.components.get('filter_by_condition2'), this.components.get('filter_operators')];
      if (command.showOperators) {
        this.showComponents.apply(this, componentsToShow);
      } else {
        this.hideComponents.apply(this, componentsToShow);
      }
    }

    /**
     * On after get column header listener.
     *
     * @private
     * @param {number} col Visual column index.
     * @param {HTMLTableCellElement} TH Header's TH element.
     */
  }, {
    key: "onAfterGetColHeader",
    value: function onAfterGetColHeader(col, TH) {
      var physicalColumn = this.hot.toPhysicalColumn(col);
      if (this.enabled && this.conditionCollection.hasConditions(physicalColumn)) {
        (0, _element.addClass)(TH, 'htFiltersActive');
      } else {
        (0, _element.removeClass)(TH, 'htFiltersActive');
      }
    }

    /**
     * Creates DataFilter instance based on condition collection.
     *
     * @private
     * @param {ConditionCollection} conditionCollection Condition collection object.
     * @returns {DataFilter}
     */
  }, {
    key: "_createDataFilter",
    value: function _createDataFilter() {
      var _this8 = this;
      var conditionCollection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.conditionCollection;
      return new _dataFilter.default(conditionCollection, function (physicalColumn) {
        return _this8.getDataMapAtColumn(physicalColumn);
      });
    }

    /**
     * It updates the components state. The state is triggered by ConditionUpdateObserver, which
     * reacts to any condition added to the condition collection. It may be added through the UI
     * components or by API call.
     *
     * @private
     * @param {object} conditionsState An object with the state generated by UI components.
     */
  }, {
    key: "updateComponents",
    value: function updateComponents(conditionsState) {
      var _this$dropdownMenuPlu4;
      if (!((_this$dropdownMenuPlu4 = this.dropdownMenuPlugin) !== null && _this$dropdownMenuPlu4 !== void 0 && _this$dropdownMenuPlu4.enabled)) {
        return;
      }
      var _conditionsState$edit = conditionsState.editedConditionStack,
        conditions = _conditionsState$edit.conditions,
        column = _conditionsState$edit.column;
      var conditionsByValue = conditions.filter(function (condition) {
        return condition.name === _constants2.CONDITION_BY_VALUE;
      });
      var conditionsWithoutByValue = conditions.filter(function (condition) {
        return condition.name !== _constants2.CONDITION_BY_VALUE;
      });
      if (conditionsByValue.length >= 2 || conditionsWithoutByValue.length >= 3) {
        (0, _console.warn)((0, _templateLiteralTag.toSingleLine)(_templateObject || (_templateObject = _taggedTemplateLiteral(["The filter conditions have been applied properly, but couldn\u2019t be displayed visually. \n        The overall amount of conditions exceed the capability of the dropdown menu. \n        For more details see the documentation."], ["The filter conditions have been applied properly, but couldn\u2019t be displayed visually.\\x20\n        The overall amount of conditions exceed the capability of the dropdown menu.\\x20\n        For more details see the documentation."]))));
      } else {
        var operationType = this.conditionCollection.getOperation(column);
        this.components.get('filter_by_condition').updateState(conditionsWithoutByValue[0], column);
        this.components.get('filter_by_condition2').updateState(conditionsWithoutByValue[1], column);
        this.components.get('filter_operators').updateState(operationType, column);
        this.components.get('filter_by_value').updateState(conditionsState);
      }
    }

    /**
     * Returns indexes of passed components inside list of `dropdownMenu` items.
     *
     * @private
     * @param {...BaseComponent} components List of components.
     * @returns {Array}
     */
  }, {
    key: "getIndexesOfComponents",
    value: function getIndexesOfComponents() {
      var indexes = [];
      if (!this.dropdownMenuPlugin) {
        return indexes;
      }
      var menu = this.dropdownMenuPlugin.menu;
      for (var _len = arguments.length, components = new Array(_len), _key = 0; _key < _len; _key++) {
        components[_key] = arguments[_key];
      }
      (0, _array.arrayEach)(components, function (component) {
        (0, _array.arrayEach)(menu.menuItems, function (item, index) {
          if (item.key === component.getMenuItemDescriptor().key) {
            indexes.push(index);
          }
        });
      });
      return indexes;
    }

    /**
     * Changes visibility of component.
     *
     * @private
     * @param {boolean} visible Determine if components should be visible.
     * @param {...BaseComponent} components List of components.
     */
  }, {
    key: "changeComponentsVisibility",
    value: function changeComponentsVisibility() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.dropdownMenuPlugin) {
        return;
      }
      var menu = this.dropdownMenuPlugin.menu;
      var hotMenu = menu.hotMenu;
      var hiddenRows = hotMenu.getPlugin('hiddenRows');
      for (var _len2 = arguments.length, components = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        components[_key2 - 1] = arguments[_key2];
      }
      var indexes = this.getIndexesOfComponents.apply(this, components);
      if (visible) {
        hiddenRows.showRows(indexes);
      } else {
        hiddenRows.hideRows(indexes);
      }
      hotMenu.render();
    }

    /**
     * Hides components of filters `dropdownMenu`.
     *
     * @private
     * @param {...BaseComponent} components List of components.
     */
  }, {
    key: "hideComponents",
    value: function hideComponents() {
      for (var _len3 = arguments.length, components = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        components[_key3] = arguments[_key3];
      }
      this.changeComponentsVisibility.apply(this, [false].concat(components));
    }

    /**
     * Shows components of filters `dropdownMenu`.
     *
     * @private
     * @param {...BaseComponent} components List of components.
     */
  }, {
    key: "showComponents",
    value: function showComponents() {
      for (var _len4 = arguments.length, components = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        components[_key4] = arguments[_key4];
      }
      this.changeComponentsVisibility.apply(this, [true].concat(components));
    }

    /**
     * Destroys the plugin instance.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var _this9 = this;
      if (this.enabled) {
        this.components.forEach(function (component, key) {
          if (component !== null) {
            component.destroy();
            _this9.components.set(key, null);
          }
        });
        this.conditionCollection.destroy();
        this.conditionUpdateObserver.destroy();
        this.hot.rowIndexMapper.unregisterMap(this.pluginName);
      }
      _get(_getPrototypeOf(Filters.prototype), "destroy", this).call(this);
    }
  }], [{
    key: "PLUGIN_KEY",
    get: function get() {
      return PLUGIN_KEY;
    }
  }, {
    key: "PLUGIN_PRIORITY",
    get: function get() {
      return PLUGIN_PRIORITY;
    }
  }, {
    key: "PLUGIN_DEPS",
    get: function get() {
      return ['plugin:DropdownMenu', 'plugin:HiddenRows', 'cell-type:checkbox'];
    }
  }]);
  return Filters;
}(_base.BasePlugin);
exports.Filters = Filters;
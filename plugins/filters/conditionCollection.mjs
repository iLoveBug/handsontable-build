function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject, _templateObject2;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.index-of.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.object.freeze.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.regexp.exec.js";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { arrayEach, arrayMap, arrayReduce } from "../../helpers/array.mjs";
import { mixin } from "../../helpers/object.mjs";
import { toSingleLine } from "../../helpers/templateLiteralTag.mjs";
import localHooks from "../../mixins/localHooks.mjs";
import { getCondition } from "./conditionRegisterer.mjs";
import { OPERATION_ID as OPERATION_AND } from "./logicalOperations/conjunction.mjs";
import { operations, getOperationFunc } from "./logicalOperationRegisterer.mjs";
import { isUndefined } from "../../helpers/mixed.mjs";
import { LinkedPhysicalIndexToValueMap as IndexToValueMap } from "../../translations/index.mjs";
var MAP_NAME = 'ConditionCollection.filteringStates';

/**
 * @private
 * @class ConditionCollection
 */
var ConditionCollection = /*#__PURE__*/function () {
  function ConditionCollection(hot) {
    var isMapRegistrable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    _classCallCheck(this, ConditionCollection);
    /**
     * Handsontable instance.
     *
     * @type {Core}
     */
    this.hot = hot;
    /**
     * Indicates whether the internal IndexMap should be registered or not. Generally,
     * registered Maps responds to the index changes. Within that collection, sometimes
     * this is not necessary.
     *
     * @type {boolean}
     */
    this.isMapRegistrable = isMapRegistrable;
    /**
     * Index map storing filtering states for every column. ConditionCollection write and read to/from this element.
     *
     * @type {LinkedPhysicalIndexToValueMap}
     */
    this.filteringStates = new IndexToValueMap();
    if (this.isMapRegistrable === true) {
      this.hot.columnIndexMapper.registerMap(MAP_NAME, this.filteringStates);
    } else {
      this.filteringStates.init(this.hot.columnIndexMapper.getNumberOfIndexes());
    }
  }

  /**
   * Check if condition collection is empty (so no needed to filter data).
   *
   * @returns {boolean}
   */
  _createClass(ConditionCollection, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.getFilteredColumns().length === 0;
    }

    /**
     * Check if value is matched to the criteria of conditions chain.
     *
     * @param {object} value Object with `value` and `meta` keys.
     * @param {number} column The physical column index.
     * @returns {boolean}
     */
  }, {
    key: "isMatch",
    value: function isMatch(value, column) {
      var _stateForColumn$condi;
      var stateForColumn = this.filteringStates.getValueAtIndex(column);
      var conditions = (_stateForColumn$condi = stateForColumn === null || stateForColumn === void 0 ? void 0 : stateForColumn.conditions) !== null && _stateForColumn$condi !== void 0 ? _stateForColumn$condi : [];
      var operation = stateForColumn === null || stateForColumn === void 0 ? void 0 : stateForColumn.operation;
      return this.isMatchInConditions(conditions, value, operation);
    }

    /**
     * Check if the value is matches the conditions.
     *
     * @param {Array} conditions List of conditions.
     * @param {object} value Object with `value` and `meta` keys.
     * @param {string} [operationType='conjunction'] Type of conditions operation.
     * @returns {boolean}
     */
  }, {
    key: "isMatchInConditions",
    value: function isMatchInConditions(conditions, value) {
      var operationType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : OPERATION_AND;
      if (conditions.length) {
        return getOperationFunc(operationType)(conditions, value);
      }
      return true;
    }

    /**
     * Add condition to the collection.
     *
     * @param {number} column The physical column index.
     * @param {object} conditionDefinition Object with keys:
     *  * `command` Object, Command object with condition name as `key` property.
     *  * `args` Array, Condition arguments.
     * @param {string} [operation='conjunction'] Type of conditions operation.
     * @param {number} [position] Position to which condition will be added. When argument is undefined
     * the condition will be processed as the last condition.
     * @fires ConditionCollection#beforeAdd
     * @fires ConditionCollection#afterAdd
     */
  }, {
    key: "addCondition",
    value: function addCondition(column, conditionDefinition) {
      var operation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : OPERATION_AND;
      var position = arguments.length > 3 ? arguments[3] : undefined;
      var localeForColumn = this.hot.getCellMeta(0, column).locale;
      var args = arrayMap(conditionDefinition.args, function (v) {
        return typeof v === 'string' ? v.toLocaleLowerCase(localeForColumn) : v;
      });
      var name = conditionDefinition.name || conditionDefinition.command.key;
      this.runLocalHooks('beforeAdd', column);
      var columnType = this.getOperation(column);
      if (columnType) {
        if (columnType !== operation) {
          throw Error(toSingleLine(_templateObject || (_templateObject = _taggedTemplateLiteral(["The column of index ", " has been already applied with a `", "` \n        filter operation. Use `removeConditions` to clear the current conditions and then add new ones. \n        Mind that you cannot mix different types of operations (for instance, if you use `conjunction`, \n        use it consequently for a particular column)."], ["The column of index ", " has been already applied with a \\`", "\\`\\x20\n        filter operation. Use \\`removeConditions\\` to clear the current conditions and then add new ones.\\x20\n        Mind that you cannot mix different types of operations (for instance, if you use \\`conjunction\\`,\\x20\n        use it consequently for a particular column)."])), column, columnType));
        }
      } else if (isUndefined(operations[operation])) {
        throw new Error(toSingleLine(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Unexpected operation named `", "`. Possible ones are \n        `disjunction` and `conjunction`."], ["Unexpected operation named \\`", "\\`. Possible ones are\\x20\n        \\`disjunction\\` and \\`conjunction\\`."])), operation));
      }
      var conditionsForColumn = this.getConditions(column);
      if (conditionsForColumn.length === 0) {
        // Create first condition for particular column.
        this.filteringStates.setValueAtIndex(column, {
          operation: operation,
          conditions: [{
            name: name,
            args: args,
            func: getCondition(name, args)
          }]
        }, position);
      } else {
        // Add next condition for particular column (by reference).
        conditionsForColumn.push({
          name: name,
          args: args,
          func: getCondition(name, args)
        });
      }
      this.runLocalHooks('afterAdd', column);
    }

    /**
     * Get all added conditions from the collection at specified column index.
     *
     * @param {number} column The physical column index.
     * @returns {Array} Returns conditions collection as an array.
     */
  }, {
    key: "getConditions",
    value: function getConditions(column) {
      var _this$filteringStates, _this$filteringStates2;
      return (_this$filteringStates = (_this$filteringStates2 = this.filteringStates.getValueAtIndex(column)) === null || _this$filteringStates2 === void 0 ? void 0 : _this$filteringStates2.conditions) !== null && _this$filteringStates !== void 0 ? _this$filteringStates : [];
    }

    /**
     * Get operation for particular column.
     *
     * @param {number} column The physical column index.
     * @returns {string|undefined}
     */
  }, {
    key: "getOperation",
    value: function getOperation(column) {
      var _this$filteringStates3;
      return (_this$filteringStates3 = this.filteringStates.getValueAtIndex(column)) === null || _this$filteringStates3 === void 0 ? void 0 : _this$filteringStates3.operation;
    }

    /**
     * Get all filtered physical columns in the order in which actions are performed.
     *
     * @returns {Array}
     */
  }, {
    key: "getFilteredColumns",
    value: function getFilteredColumns() {
      return this.filteringStates.getEntries().map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          physicalColumn = _ref2[0];
        return physicalColumn;
      });
    }

    /**
     * Gets position in the filtering states stack for the specific column.
     *
     * @param {number} column The physical column index.
     * @returns {number} Returns -1 when the column doesn't exist in the stack.
     */
  }, {
    key: "getColumnStackPosition",
    value: function getColumnStackPosition(column) {
      return this.getFilteredColumns().indexOf(column);
    }

    /**
     * Export all previously added conditions.
     *
     * @returns {Array}
     */
  }, {
    key: "exportAllConditions",
    value: function exportAllConditions() {
      return arrayReduce(this.filteringStates.getEntries(), function (allConditions, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          column = _ref4[0],
          _ref4$ = _ref4[1],
          operation = _ref4$.operation,
          conditions = _ref4$.conditions;
        allConditions.push({
          column: column,
          operation: operation,
          conditions: arrayMap(conditions, function (_ref5) {
            var name = _ref5.name,
              args = _ref5.args;
            return {
              name: name,
              args: args
            };
          })
        });
        return allConditions;
      }, []);
    }

    /**
     * Import conditions to the collection.
     *
     * @param {Array} conditions The collection of the conditions.
     */
  }, {
    key: "importAllConditions",
    value: function importAllConditions(conditions) {
      var _this = this;
      this.clean();
      arrayEach(conditions, function (stack) {
        arrayEach(stack.conditions, function (condition) {
          return _this.addCondition(stack.column, condition);
        });
      });
    }

    /**
     * Remove conditions at given column index.
     *
     * @param {number} column The physical column index.
     * @fires ConditionCollection#beforeRemove
     * @fires ConditionCollection#afterRemove
     */
  }, {
    key: "removeConditions",
    value: function removeConditions(column) {
      this.runLocalHooks('beforeRemove', column);
      this.filteringStates.clearValue(column);
      this.runLocalHooks('afterRemove', column);
    }

    /**
     * Clean all conditions collection and reset order stack.
     *
     * @fires ConditionCollection#beforeClean
     * @fires ConditionCollection#afterClean
     */
  }, {
    key: "clean",
    value: function clean() {
      this.runLocalHooks('beforeClean');
      this.filteringStates.clear();
      this.runLocalHooks('afterClean');
    }

    /**
     * Check if at least one condition was added at specified column index. And if second parameter is passed then additionally
     * check if condition exists under its name.
     *
     * @param {number} column The physical column index.
     * @param {string} [name] Condition name.
     * @returns {boolean}
     */
  }, {
    key: "hasConditions",
    value: function hasConditions(column, name) {
      var conditions = this.getConditions(column);
      if (name) {
        return conditions.some(function (condition) {
          return condition.name === name;
        });
      }
      return conditions.length > 0;
    }

    /**
     * Destroy object.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.isMapRegistrable) {
        this.hot.columnIndexMapper.unregisterMap(MAP_NAME);
      }
      this.filteringStates = null;
      this.clearLocalHooks();
    }
  }]);
  return ConditionCollection;
}();
mixin(ConditionCollection, localHooks);
export default ConditionCollection;
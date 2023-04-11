"use strict";

require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
exports.__esModule = true;
exports.default = void 0;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
var C = _interopRequireWildcard(require("../constants"));
var _dictionary;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var dictionary = (_dictionary = {
  languageCode: 'ar-AR',
  languageDirection: 'rtl'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NO_ITEMS, 'لا توجد خيارات متوفرة'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'إدراج صف للأعلى'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'إدراج صف للأسفل'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'إدراج عمود لليسار'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'إدراج عمود لليمين'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['احدف الصف', 'احذف الصفوف']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['احدف العمود', 'احدف الأعمدة']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'تراجع'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'إلغاء التراجع'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'للقراءة فقط'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'افرغ العمود'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'المحاذاة'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'يسار'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'وسط'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'يمين'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'بالتساوي'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'أعلى'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'متوسط'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'أسفل'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'تجميد العمود'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'إلغاء تجميد العمود'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'الحدود'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'أعلى'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'يمين'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'أسفل'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'يسار'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'أحذف الحد(ود)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'أضف تعليقاً'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'تعديل التعليق'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'احذف التعليق'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'تعليق للقراءة فقط'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'ادمج الخلايا'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'إلغاء دمج الخلايا'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'نسخ'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'قص'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'أدخل صفاً فرعياً'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'افصل عن الصف الأصلي'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['إخفاء العمود', 'إخفاء الأعمدة']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['إظهار العمود', 'إظهار الأعمدة']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['إخفاء السطر', 'إخفاء السطور']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['إظهار السطر', 'إظهار السطور']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'بلا'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'فارغ'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'غير فارغ'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'يساوي'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'لا يساوي'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'يبداً بـ'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'ينتهي بـ'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'يحتوي'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'لا يحتوي'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'أكبر من'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'أكبر أو يساوي'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'أصغر'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'أصغر أو يساوي'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'بين'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'خارج المجال'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'بعد'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'قبل'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'اليوم'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'غداً'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'البارحة'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'خلايا فارغة'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'تصفية حسب الشرط'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'تصفية حسب القيمة'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'و'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'أو'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'اختيار الكل'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'إلغاء'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'موافق'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'إلغاء'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'البحث'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'القيمة'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'القيمة الثانية'), _dictionary);
var _default = dictionary;
exports.default = _default;
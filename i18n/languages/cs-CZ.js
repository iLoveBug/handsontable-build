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
  languageCode: 'cs-CZ'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NO_ITEMS, 'Žádné volby nejsou dostupné'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Vložit řádek nad'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Vložit řádek pod'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Vložit sloupec vlevo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Vložit sloupec vpravo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Smazat řádek', 'Smazat řádky']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Smazat sloupec', 'Smazat sloupce']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Zpět'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Znovu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Pouze pro čtení'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Vymazat obsah sloupce'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Zarovnat'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Vlevo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Na střed'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Vpravo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Do bloku'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Nahoru'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Na střed'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Dolů'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Zmrazit sloupec'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Zrušit zmrazení sloupce'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Ohraničení'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Nahoře'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Vpravo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Dole'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Vlevo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Zrušit ohraničení'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Přidat komentář'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Upravit komentář'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Vymazat komentář'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Komenář pouze pro čtení'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Sloučit buňky'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Zrušit sloučení buněk'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopírovat'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Vyjmout'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Vložit podřízený řádek'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Oddělit od nadřízeného'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Skrýt sloupec', 'Skrýt sloupce']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Zobrazit sloupec', 'Zobrazit sloupce']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Skrýt řádek', 'Skrýt řádky']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Zobrazit řádek', 'Zobrazit řádky']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Žádné'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Prázdné'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Neprázdné'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Rovná se'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Nerovná se'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Začíná na'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Končí na'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Obsahuje'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Neobsahuje'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Větší než'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Větší nebo se rovná'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Menší než'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Menší nebo se rovná'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Je v rozsahu'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Není v rozsahu'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Po'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Před'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Dnes'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Zítra'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Včera'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Prádné buňky'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrovat dle stavu'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrovat dle hodnoty'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'A'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Nebo'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Vybrat vše'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Smazat'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Storno'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Hledat'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Hodnota'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Druhá hodnota'), _dictionary);
var _default = dictionary;
exports.default = _default;
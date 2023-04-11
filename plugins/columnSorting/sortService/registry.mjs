import { compareFunctionFactory as defaultSort, COLUMN_DATA_TYPE as DEFAULT_DATA_TYPE } from "../sortFunction/default.mjs";
import { compareFunctionFactory as numericSort, COLUMN_DATA_TYPE as NUMERIC_DATA_TYPE } from "../sortFunction/numeric.mjs";
import { compareFunctionFactory as checkboxSort, COLUMN_DATA_TYPE as CHECKBOX_DATA_TYPE } from "../sortFunction/checkbox.mjs";
import { compareFunctionFactory as dateSort, COLUMN_DATA_TYPE as DATE_DATA_TYPE } from "../sortFunction/date.mjs";
import staticRegister from "../../../utils/staticRegister.mjs";
var _staticRegister = staticRegister('sorting.compareFunctionFactory'),
  registerCompareFunctionFactory = _staticRegister.register,
  getGloballyCompareFunctionFactory = _staticRegister.getItem,
  hasGloballyCompareFunctionFactory = _staticRegister.hasItem;
var _staticRegister2 = staticRegister('sorting.mainSortComparator'),
  registerRootComparator = _staticRegister2.register,
  getRootComparator = _staticRegister2.getItem;

/**
 * Gets sort function for the particular column basing on it's data type.
 *
 * @param {string} type The data type.
 * @returns {Function}
 */
export function getCompareFunctionFactory(type) {
  if (hasGloballyCompareFunctionFactory(type)) {
    return getGloballyCompareFunctionFactory(type);
  }
  return getGloballyCompareFunctionFactory(DEFAULT_DATA_TYPE);
}
registerCompareFunctionFactory(NUMERIC_DATA_TYPE, numericSort);
registerCompareFunctionFactory(CHECKBOX_DATA_TYPE, checkboxSort);
registerCompareFunctionFactory(DATE_DATA_TYPE, dateSort);
registerCompareFunctionFactory(DEFAULT_DATA_TYPE, defaultSort);
export { registerRootComparator, getRootComparator };
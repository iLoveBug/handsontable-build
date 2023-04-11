import { isObject, deepClone } from "../helpers/object.mjs";
import { arrayEach } from "./../helpers/array.mjs";
import { isUndefined } from "../helpers/mixed.mjs";
import { extendNotExistingKeys, normalizeLanguageCode, warnUserAboutLanguageRegistration } from "./utils.mjs";
import staticRegister from "../utils/staticRegister.mjs";
import { getPhraseFormatters } from "./phraseFormatters/index.mjs";
import DEFAULT_DICTIONARY from "./languages/en-US.mjs";
import * as _dictionaryKeys from "./constants.mjs";
export { _dictionaryKeys as dictionaryKeys };
export var DEFAULT_LANGUAGE_CODE = DEFAULT_DICTIONARY.languageCode;
var _staticRegister = staticRegister('languagesDictionaries'),
  registerGloballyLanguageDictionary = _staticRegister.register,
  getGlobalLanguageDictionary = _staticRegister.getItem,
  hasGlobalLanguageDictionary = _staticRegister.hasItem,
  getGlobalLanguagesDictionaries = _staticRegister.getValues;

/**
 * Register automatically the default language dictionary.
 */
registerLanguageDictionary(DEFAULT_DICTIONARY);

/**
 * Register language dictionary for specific language code.
 *
 * @param {string|object} languageCodeOrDictionary Language code for specific language i.e. 'en-US', 'pt-BR', 'de-DE' or object representing dictionary.
 * @param {object} dictionary Dictionary for specific language (optional if first parameter has already dictionary).
 * @returns {object}
 */
export function registerLanguageDictionary(languageCodeOrDictionary, dictionary) {
  var languageCode = languageCodeOrDictionary;
  var dictionaryObject = dictionary;

  // Dictionary passed as first argument.
  if (isObject(languageCodeOrDictionary)) {
    dictionaryObject = languageCodeOrDictionary;
    languageCode = dictionaryObject.languageCode;
  }
  extendLanguageDictionary(languageCode, dictionaryObject);
  registerGloballyLanguageDictionary(languageCode, deepClone(dictionaryObject));

  // We do not allow user to work with dictionary by reference, it can cause lot of bugs.
  return deepClone(dictionaryObject);
}

/**
 * Extend handled dictionary by default language dictionary. As result, if any dictionary key isn't defined for specific language, it will be filled with default language value ("dictionary gaps" are supplemented).
 *
 * @private
 * @param {string} languageCode Language code.
 * @param {object} dictionary Dictionary which is extended.
 */
function extendLanguageDictionary(languageCode, dictionary) {
  if (languageCode !== DEFAULT_LANGUAGE_CODE) {
    extendNotExistingKeys(dictionary, getGlobalLanguageDictionary(DEFAULT_LANGUAGE_CODE));
  }
}

/**
 * Get language dictionary for specific language code.
 *
 * @param {string} languageCode Language code.
 * @returns {object} Object with constants representing identifiers for translation (as keys) and corresponding translation phrases (as values).
 */
export function getLanguageDictionary(languageCode) {
  if (!hasLanguageDictionary(languageCode)) {
    return null;
  }
  return deepClone(getGlobalLanguageDictionary(languageCode));
}

/**
 *
 * Get if language with specified language code was registered.
 *
 * @param {string} languageCode Language code for specific language i.e. 'en-US', 'pt-BR', 'de-DE'.
 * @returns {boolean}
 */
export function hasLanguageDictionary(languageCode) {
  return hasGlobalLanguageDictionary(languageCode);
}

/**
 * Get default language dictionary.
 *
 * @returns {object} Object with constants representing identifiers for translation (as keys) and corresponding translation phrases (as values).
 */
export function getDefaultLanguageDictionary() {
  return DEFAULT_DICTIONARY;
}

/**
 * Get registered language dictionaries.
 *
 * @returns {Array}
 */
export function getLanguagesDictionaries() {
  return getGlobalLanguagesDictionaries();
}

/**
 * Get phrase for specified dictionary key.
 *
 * @param {string} languageCode Language code for specific language i.e. 'en-US', 'pt-BR', 'de-DE'.
 * @param {string} dictionaryKey Constant which is dictionary key.
 * @param {*} argumentsForFormatters Arguments which will be handled by formatters.
 *
 * @returns {string}
 */
export function getTranslatedPhrase(languageCode, dictionaryKey, argumentsForFormatters) {
  var languageDictionary = getLanguageDictionary(languageCode);
  if (languageDictionary === null) {
    return null;
  }
  var phrasePropositions = languageDictionary[dictionaryKey];
  if (isUndefined(phrasePropositions)) {
    return null;
  }
  var formattedPhrase = getFormattedPhrase(phrasePropositions, argumentsForFormatters);
  if (Array.isArray(formattedPhrase)) {
    return formattedPhrase[0];
  }
  return formattedPhrase;
}

/**
 * Get formatted phrase from phrases propositions for specified dictionary key.
 *
 * @private
 * @param {Array|string} phrasePropositions List of phrase propositions.
 * @param {*} argumentsForFormatters Arguments which will be handled by formatters.
 *
 * @returns {Array|string}
 */
function getFormattedPhrase(phrasePropositions, argumentsForFormatters) {
  var formattedPhrasePropositions = phrasePropositions;
  arrayEach(getPhraseFormatters(), function (formatter) {
    formattedPhrasePropositions = formatter(phrasePropositions, argumentsForFormatters);
  });
  return formattedPhrasePropositions;
}

/**
 * Returns valid language code. If the passed language code doesn't exist default one will be used.
 *
 * @param {string} languageCode Language code for specific language i.e. 'en-US', 'pt-BR', 'de-DE'.
 * @returns {string}
 */
export function getValidLanguageCode(languageCode) {
  var normalizedLanguageCode = normalizeLanguageCode(languageCode);
  if (!hasLanguageDictionary(normalizedLanguageCode)) {
    normalizedLanguageCode = DEFAULT_LANGUAGE_CODE;
    warnUserAboutLanguageRegistration(languageCode);
  }
  return normalizedLanguageCode;
}
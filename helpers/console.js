"use strict";

exports.__esModule = true;
exports.error = error;
exports.info = info;
exports.log = log;
exports.warn = warn;
var _mixed = require("./mixed");
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */

/**
 * "In Internet Explorer 9 (and 8), the console object is only exposed when the developer tools are opened
 * for a particular tab.".
 *
 * Source: https://stackoverflow.com/a/5473193.
 */

/**
 * Logs message to the console if the `console` object is exposed.
 *
 * @param {...*} args Values which will be logged.
 */
function log() {
  if ((0, _mixed.isDefined)(console)) {
    var _console;
    (_console = console).log.apply(_console, arguments);
  }
}

/**
 * Logs warn to the console if the `console` object is exposed.
 *
 * @param {...*} args Values which will be logged.
 */
function warn() {
  if ((0, _mixed.isDefined)(console)) {
    var _console2;
    (_console2 = console).warn.apply(_console2, arguments);
  }
}

/**
 * Logs info to the console if the `console` object is exposed.
 *
 * @param {...*} args Values which will be logged.
 */
function info() {
  if ((0, _mixed.isDefined)(console)) {
    var _console3;
    (_console3 = console).info.apply(_console3, arguments);
  }
}

/**
 * Logs error to the console if the `console` object is exposed.
 *
 * @param {...*} args Values which will be logged.
 */
function error() {
  if ((0, _mixed.isDefined)(console)) {
    var _console4;
    (_console4 = console).error.apply(_console4, arguments);
  }
}
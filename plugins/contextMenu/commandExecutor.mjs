function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "core-js/modules/es.array.join.js";
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
import { arrayEach } from "../../helpers/array.mjs";
import { hasOwnProperty } from "../../helpers/object.mjs";
/**
 * Command executor for ContextMenu.
 *
 * @private
 * @class CommandExecutor
 */
var CommandExecutor = /*#__PURE__*/function () {
  function CommandExecutor(hotInstance) {
    _classCallCheck(this, CommandExecutor);
    this.hot = hotInstance;
    this.commands = {};
    this.commonCallback = null;
  }

  /**
   * Register command.
   *
   * @param {string} name Command name.
   * @param {object} commandDescriptor Command descriptor object with properties like `key` (command id),
   *                                   `callback` (task to execute), `name` (command name), `disabled` (command availability).
   */
  _createClass(CommandExecutor, [{
    key: "registerCommand",
    value: function registerCommand(name, commandDescriptor) {
      this.commands[name] = commandDescriptor;
    }

    /**
     * Set common callback which will be trigger on every executed command.
     *
     * @param {Function} callback Function which will be fired on every command execute.
     */
  }, {
    key: "setCommonCallback",
    value: function setCommonCallback(callback) {
      this.commonCallback = callback;
    }

    /**
     * Execute command by its name.
     *
     * @param {string} commandName Command id.
     * @param {*} params Arguments passed to command task.
     */
  }, {
    key: "execute",
    value: function execute(commandName) {
      var _this = this;
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      var commandSplit = commandName.split(':');
      var commandNamePrimary = commandSplit[0];
      var subCommandName = commandSplit.length === 2 ? commandSplit[1] : null;
      var command = this.commands[commandNamePrimary];
      if (!command) {
        throw new Error("Menu command '".concat(commandNamePrimary, "' not exists."));
      }
      if (subCommandName && command.submenu) {
        command = findSubCommand(subCommandName, command.submenu.items);
      }
      if (command.disabled === true) {
        return;
      }
      if (typeof command.disabled === 'function' && command.disabled.call(this.hot) === true) {
        return;
      }
      if (hasOwnProperty(command, 'submenu')) {
        return;
      }
      var callbacks = [];
      if (typeof command.callback === 'function') {
        callbacks.push(command.callback);
      }
      if (typeof this.commonCallback === 'function') {
        callbacks.push(this.commonCallback);
      }
      params.unshift(commandSplit.join(':'));
      arrayEach(callbacks, function (callback) {
        return callback.apply(_this.hot, params);
      });
    }
  }]);
  return CommandExecutor;
}();
/**
 * @param {string} subCommandName The subcommand name.
 * @param {string[]} subCommands The collection of the commands.
 * @returns {boolean}
 */
function findSubCommand(subCommandName, subCommands) {
  var command;
  arrayEach(subCommands, function (cmd) {
    var cmds = cmd.key ? cmd.key.split(':') : null;
    if (Array.isArray(cmds) && cmds[1] === subCommandName) {
      command = cmd;
      return false;
    }
  });
  return command;
}
export default CommandExecutor;
"use strict";

require("core-js/modules/es.symbol.iterator.js");
exports.__esModule = true;
exports.default = void 0;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
var _object = require("./../helpers/object");
var _number = require("./../helpers/number");
var _mixed = require("./../helpers/mixed");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @class SamplesGenerator
 */
var SamplesGenerator = /*#__PURE__*/function () {
  function SamplesGenerator(dataFactory) {
    _classCallCheck(this, SamplesGenerator);
    /**
     * Samples prepared for calculations.
     *
     * @type {Map}
     * @default {null}
     */
    this.samples = null;
    /**
     * Function which give the data to collect samples.
     *
     * @type {Function}
     */
    this.dataFactory = dataFactory;
    /**
     * Custom number of samples to take of each value length.
     *
     * @type {number}
     * @default {null}
     */
    this.customSampleCount = null;
    /**
     * `true` if duplicate samples collection should be allowed, `false` otherwise.
     *
     * @type {boolean}
     * @default {false}
     */
    this.allowDuplicates = false;
  }

  /**
   * Get the sample count for this instance.
   *
   * @returns {number}
   */
  _createClass(SamplesGenerator, [{
    key: "getSampleCount",
    value: function getSampleCount() {
      if (this.customSampleCount) {
        return this.customSampleCount;
      }
      return SamplesGenerator.SAMPLE_COUNT;
    }

    /**
     * Set the sample count.
     *
     * @param {number} sampleCount Number of samples to be collected.
     */
  }, {
    key: "setSampleCount",
    value: function setSampleCount(sampleCount) {
      this.customSampleCount = sampleCount;
    }

    /**
     * Set if the generator should accept duplicate values.
     *
     * @param {boolean} allowDuplicates `true` to allow duplicate values.
     */
  }, {
    key: "setAllowDuplicates",
    value: function setAllowDuplicates(allowDuplicates) {
      this.allowDuplicates = allowDuplicates;
    }

    /**
     * Generate samples for row. You can control which area should be sampled by passing `rowRange` object and `colRange` object.
     *
     * @param {object|number} rowRange The rows range to generate the samples.
     * @param {object} colRange The column range to generate the samples.
     * @returns {object}
     */
  }, {
    key: "generateRowSamples",
    value: function generateRowSamples(rowRange, colRange) {
      return this.generateSamples('row', colRange, rowRange);
    }

    /**
     * Generate samples for column. You can control which area should be sampled by passing `colRange` object and `rowRange` object.
     *
     * @param {object} colRange Column index.
     * @param {object} rowRange Column index.
     * @returns {object}
     */
  }, {
    key: "generateColumnSamples",
    value: function generateColumnSamples(colRange, rowRange) {
      return this.generateSamples('col', rowRange, colRange);
    }

    /**
     * Generate collection of samples.
     *
     * @param {string} type Type to generate. Can be `col` or `row`.
     * @param {object} range The range to generate the samples.
     * @param {object|number} specifierRange The range to generate the samples.
     * @returns {Map}
     */
  }, {
    key: "generateSamples",
    value: function generateSamples(type, range, specifierRange) {
      var _this = this;
      var samples = new Map();
      var _ref = typeof specifierRange === 'number' ? {
          from: specifierRange,
          to: specifierRange
        } : specifierRange,
        from = _ref.from,
        to = _ref.to;
      (0, _number.rangeEach)(from, to, function (index) {
        var sample = _this.generateSample(type, range, index);
        samples.set(index, sample);
      });
      return samples;
    }

    /**
     * Generate sample for specified type (`row` or `col`).
     *
     * @param {string} type Samples type `row` or `col`.
     * @param {object} range The range to generate the samples.
     * @param {number} specifierValue The range to generate the samples.
     * @returns {Map}
     */
  }, {
    key: "generateSample",
    value: function generateSample(type, range, specifierValue) {
      var _this2 = this;
      if (type !== 'row' && type !== 'col') {
        throw new Error('Unsupported sample type');
      }
      var samples = new Map();
      var computedKey = type === 'row' ? 'col' : 'row';
      var sampledValues = [];
      (0, _number.rangeEach)(range.from, range.to, function (index) {
        var _ref2 = type === 'row' ? _this2.dataFactory(specifierValue, index) : _this2.dataFactory(index, specifierValue),
          value = _ref2.value,
          bundleSeed = _ref2.bundleSeed;
        var hasCustomBundleSeed = typeof bundleSeed === 'string' && bundleSeed.length > 0;
        var seed;
        if (hasCustomBundleSeed) {
          seed = bundleSeed;
        } else if ((0, _object.isObject)(value)) {
          seed = "".concat(Object.keys(value).length);
        } else if (Array.isArray(value)) {
          seed = "".concat(value.length);
        } else {
          seed = "".concat((0, _mixed.stringify)(value).length);
        }
        if (!samples.has(seed)) {
          samples.set(seed, {
            needed: _this2.getSampleCount(),
            strings: []
          });
        }
        var sample = samples.get(seed);
        if (sample.needed) {
          var duplicate = sampledValues.indexOf(value) > -1;
          if (!duplicate || _this2.allowDuplicates || hasCustomBundleSeed) {
            sample.strings.push(_defineProperty({
              value: value
            }, computedKey, index));
            sampledValues.push(value);
            sample.needed -= 1;
          }
        }
      });
      return samples;
    }
  }], [{
    key: "SAMPLE_COUNT",
    get:
    /**
     * Number of samples to take of each value length.
     *
     * @type {number}
     */
    function get() {
      return 3;
    }
  }]);
  return SamplesGenerator;
}();
var _default = SamplesGenerator;
exports.default = _default;
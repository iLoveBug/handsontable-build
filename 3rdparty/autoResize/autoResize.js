"use strict";

exports.__esModule = true;
exports.autoResize = autoResize;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/web.timers.js");
/**
 * autoResize - resizes a DOM element to the width and height of another DOM element
 *
 * Copyright 2014, Marcin Warpechowski
 * Licensed under the MIT license
 */

function autoResize() {
  var defaults = {
      minHeight: 200,
      maxHeight: 300,
      minWidth: 100,
      maxWidth: 300
    },
    el,
    body = document.body,
    text = document.createTextNode(''),
    span = document.createElement('SPAN'),
    observe = function observe(element, event, handler) {
      element.addEventListener(event, handler, false);
    },
    _unObserve = function unObserve(element, event, handler) {
      element.removeEventListener(event, handler, false);
    },
    resize = function resize(newChar) {
      var width, scrollHeight;
      if (!newChar) {
        newChar = "";
      } else if (!/^[a-zA-Z \.,\\\/\|0-9]$/.test(newChar)) {
        newChar = ".";
      }
      if (text.textContent !== void 0) {
        text.textContent = el.value + newChar;
      } else {
        text.data = el.value + newChar; //IE8
      }
      // Won't expand the element size for displaying body as for example, `grid`, `inline-grid` or `flex` with 
      // `flex-direction` set as `column`.
      span.style.position = 'absolute';
      span.style.fontSize = getComputedStyle(el).fontSize;
      span.style.fontFamily = getComputedStyle(el).fontFamily;
      span.style.whiteSpace = "pre";
      body.appendChild(span);
      width = span.clientWidth + 2;
      body.removeChild(span);
      el.style.height = defaults.minHeight + 'px';
      if (defaults.minWidth > width) {
        el.style.width = defaults.minWidth + 'px';
      } else if (width > defaults.maxWidth) {
        el.style.width = defaults.maxWidth + 'px';
      } else {
        el.style.width = width + 'px';
      }
      scrollHeight = el.scrollHeight ? el.scrollHeight - 1 : 0;
      if (defaults.minHeight > scrollHeight) {
        el.style.height = defaults.minHeight + 'px';
      } else if (defaults.maxHeight < scrollHeight) {
        el.style.height = defaults.maxHeight + 'px';
        el.style.overflowY = 'visible';
      } else {
        el.style.height = scrollHeight + 'px';
      }
    },
    delayedResize = function delayedResize() {
      window.setTimeout(resize, 0);
    },
    extendDefaults = function extendDefaults(config) {
      if (config && config.minHeight) {
        if (config.minHeight == 'inherit') {
          defaults.minHeight = el.clientHeight;
        } else {
          var minHeight = parseInt(config.minHeight);
          if (!isNaN(minHeight)) {
            defaults.minHeight = minHeight;
          }
        }
      }
      if (config && config.maxHeight) {
        if (config.maxHeight == 'inherit') {
          defaults.maxHeight = el.clientHeight;
        } else {
          var maxHeight = parseInt(config.maxHeight);
          if (!isNaN(maxHeight)) {
            defaults.maxHeight = maxHeight;
          }
        }
      }
      if (config && config.minWidth) {
        if (config.minWidth == 'inherit') {
          defaults.minWidth = el.clientWidth;
        } else {
          var minWidth = parseInt(config.minWidth);
          if (!isNaN(minWidth)) {
            defaults.minWidth = minWidth;
          }
        }
      }
      if (config && config.maxWidth) {
        if (config.maxWidth == 'inherit') {
          defaults.maxWidth = el.clientWidth;
        } else {
          var maxWidth = parseInt(config.maxWidth);
          if (!isNaN(maxWidth)) {
            defaults.maxWidth = maxWidth;
          }
        }
      }
      if (!span.firstChild) {
        span.className = "autoResize";
        span.style.display = 'inline-block';
        span.appendChild(text);
      }
    },
    _init = function init(el_, config, doObserve) {
      el = el_;
      extendDefaults(config);
      if (el.nodeName == 'TEXTAREA') {
        el.style.resize = 'none';
        el.style.overflowY = '';
        el.style.height = defaults.minHeight + 'px';
        el.style.minWidth = defaults.minWidth + 'px';
        el.style.maxWidth = defaults.maxWidth + 'px';
        el.style.overflowY = 'hidden';
      }
      if (doObserve) {
        observe(el, 'change', resize);
        observe(el, 'cut', delayedResize);
        observe(el, 'paste', delayedResize);
        observe(el, 'drop', delayedResize);
        observe(el, 'keydown', delayedResize);
        observe(el, 'focus', resize);
        observe(el, 'compositionstart', delayedResize);
        observe(el, 'compositionupdate', delayedResize);
        observe(el, 'compositionend', delayedResize);
      }
      resize();
    };
  function getComputedStyle(element) {
    return element.currentStyle || document.defaultView.getComputedStyle(element);
  }
  return {
    init: function init(el_, config, doObserve) {
      _init(el_, config, doObserve);
    },
    unObserve: function unObserve() {
      _unObserve(el, 'change', resize);
      _unObserve(el, 'cut', delayedResize);
      _unObserve(el, 'paste', delayedResize);
      _unObserve(el, 'drop', delayedResize);
      _unObserve(el, 'keydown', delayedResize);
      _unObserve(el, 'focus', resize);
      _unObserve(el, 'compositionstart', delayedResize);
      _unObserve(el, 'compositionupdate', delayedResize);
      _unObserve(el, 'compositionend', delayedResize);
    },
    resize: resize
  };
}
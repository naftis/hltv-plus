// ==UserScript==
// @name hltv-plus
// @namespace https://github.com/naftis
// @match https://*.hltv.org/*
// @grant none
// ==/UserScript==

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"wpPI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function findParent(parentSelector, childrenSelector) {
  var matches = document.querySelectorAll(childrenSelector);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var match = _step.value;
      var closest = match.closest(parentSelector);

      if (closest) {
        return closest;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
}

exports.findParent = findParent;
},{}],"Whw5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var find_parent_1 = require("../utils/find-parent");

function removeForums() {
  var forumsPanel = find_parent_1.findParent('.right2Col', 'a[href="/forums"]');

  if (forumsPanel) {
    forumsPanel.remove();
  } else {
    throw new Error('Could not remove forums from sidepanel');
  }
}

exports.removeForums = removeForums;
},{"../utils/find-parent":"wpPI"}],"f88W":[function(require,module,exports) {

},{}],"7QCb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var remove_forums_1 = require("./modifications/remove-forums");

var fs_1 = require("fs");

function addStyles() {
  var styles = ".bgPadding,\r\n.widthControl {\r\n  max-width: none;\r\n}\r\n.navbar {\r\n  position: absolute;\r\n}\r\n.navbar .navcon {\r\n  height: 60px;\r\n}\r\n.navcon a {\r\n  border-right: 0 !important;\r\n  border-left: 0 !important;\r\n}\r\n.hltv-logo-container {\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 50000;\r\n}\r\n\r\n/* Hide comments from articles */\r\n.forum {\r\n  display: none;\r\n}\r\n\r\n.leftCol {\r\n  min-width: 15%;\r\n  max-width: 15%;\r\n}\r\n\r\n.leftCol .team {\r\n  width: 50% !important;\r\n}\r\n\r\nbody {\r\n  zoom: 1.15 !important;\r\n}\r\n";
  var styleNode = document.createElement('style');
  document.head.appendChild(styleNode);
  styleNode.innerHTML = styles;
}

remove_forums_1.removeForums();
addStyles();
},{"./modifications/remove-forums":"Whw5","fs":"f88W"}]},{},["7QCb"], null)
//# sourceMappingURL=/hltvplus.user.js.map
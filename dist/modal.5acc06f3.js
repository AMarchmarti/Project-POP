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
})({"app/components/modal.js":[function(require,module,exports) {
/*jshint esversion: 6 */
"use strict";
/**
 * We create the object
 * @Modal
 * that will point to the prototype of the general javascript object
 */

var Modal = Object.create(Object);
/**
 * We have not incorporated this function into the prototyping of
 * the object because it is not part of it, it is a function that uses it but does not compose it.
 * @param item
 */

function searchImage(item) {
  /**
   * Its utility is to look for images in the directory that we have told it.
   * @dir
   * @fileImge
   * @nameImage
   * These images will have the name of the item we are looking for and will try to return it if it exists
   * @returns string that indicates where the image is
   * with any suffix
   * @png
   * @jpg
   * @jpeg
   * that we have provided
   * @returns file
   */
  var dir = "/img/events/";
  var arrayTemp = item.split('');
  arrayTemp.forEach(function (letter) {
    if (letter === 'ñ') {
      var index = arrayTemp.indexOf('ñ');
      console.log('index :', index);
      arrayTemp.splice(index, 1, 'n');
      item = arrayTemp.join('');
    }
  });

  try {
    return dir + item + ".png";
  } catch (_unused) {
    return "";
  }
}

Modal.prototype.constructorModal = function modalConstructor(element, index, table) {
  /**
   * This function belonging to the prototyping works as a union of
   * the different parts of the modal we need as parameters
   * @param element
   * @param index
   * @param table
   * We use the different internal functions of the object for the construction of the modal
   * @function createDivModal -> create the structure of modal
   * @function createElement -> function to create elements in the HTML, modifies the DOM
   * @function closeModal -> create element to close modal
   * @function titleModal -> create title of the modal
   * @function bodyModal -> create body of the modal
   * @function appendChild -> unifies all components
   *
   * @returns component modal
   */
  var modal = this.createDivModal(index);
  var modalDiv = document.createElement("div");
  var linkModal = this.closeModal();
  var modalH1 = this.titleModal(index < 10 ? "Dia 0".concat(index + 1) : "Dia ".concat(index + 1));
  var modalBody = this.bodyModal(element, table);
  modalDiv.appendChild(linkModal);
  modalDiv.appendChild(modalH1);
  modalDiv.appendChild(modalBody);
  modal.appendChild(modalDiv);
  return modal;
};

Modal.prototype.createDivModal = function createModal(index) {
  /**
   * we create the container div where all the modal contents will go
   * @param index
   * @function createElement
   * @function setAttribute -> modifies the element that we already created, we add the attribute that we need
   * @returns div container of the modal
   */
  var modal = document.createElement("div");
  modal.setAttribute("id", "openModal".concat(index));
  modal.setAttribute("class", "window");
  return modal;
};

Modal.prototype.closeModal = function close() {
  /**
   * Element that its function is to close the active modal at this time
   * @returns linkModal -> element to close modal
   */
  var linkModal = document.createElement("a");
  linkModal.textContent = "Cerrar";
  linkModal.setAttribute("title", "Cerrar");
  linkModal.setAttribute("href", "#");
  linkModal.setAttribute("class", "modal-close");
  return linkModal;
};

Modal.prototype.titleModal = function createTitle(content) {
  /**
   * Function that creates the modal title
   * @param content
   * @returns modalH1 -> title of modal
   */
  var modalH1 = document.createElement("h1");
  modalH1.textContent = content;
  return modalH1;
};

Modal.prototype.bodyModal = function createBody(element, table) {
  /**
   * This is the most important function, since it is the one that creates the modal content,
   * each modal has a variable content depending on the day that comes from the diary.
   * Its function is to show on screen the events that it does during the day, some images of
   * these events and if Mariano becomes an octopus or not
   * @param element -> day of the diary
   * @param table -> object to make the matrix of each item in the day
   * @function searchImage -> the utility function that we explain at the start
   * @return body of modal
   */
  var body = document.createElement("div");
  body.setAttribute("id", "bodyModal");
  element["eventos"].forEach(function (item) {
    var pModal = document.createElement("p"); // We create the component image in the DOM and show the image in the correponent folder

    var img = document.createElement("img");
    img.setAttribute("src", searchImage(item));
    pModal.textContent = item;
    img.setAttribute("alt", "image".concat(item));
    var divImage = document.createElement('div'); // Join all the elements in the body of the modal

    divImage.appendChild(img);
    body.appendChild(pModal);
    body.appendChild(divImage);
  });
  var h3 = document.createElement("h3");
  var gif = document.createElement('img');

  if (element["pulpo"]) {
    h3.textContent = "Me he convertido en pulpo";
    gif.setAttribute('src', '/img/turned.gif');
  } else {
    h3.textContent = "¡Bien! No me he convertido en pulpo";
    gif.setAttribute('src', '/img/notTurned.gif');
  }

  body.appendChild(h3);
  body.appendChild(gif);
  return body;
};
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55326" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app/components/modal.js"], null)
//# sourceMappingURL=/modal.5acc06f3.js.map
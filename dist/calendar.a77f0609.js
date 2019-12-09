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
})({"../BBDD/diary.js":[function(require,module,exports) {
/*jshint esversion: 6 */
var DIARIO = [{
  "eventos": ["mejillones", "caminar", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["pan de millo", "filloas", "me lave los dientes", "siesta con La Vuelta", "baño en a Lanzada"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "chinchos", "me lave los dientes", "Panorama", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["caldo gallego", "licor cafe", "me lave los dientes", "mencia", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["feria del pulpo", "pementos de padron", "me lave los dientes", "caminar", "siesta con La Vuelta", "Paris de Noia"],
  "pulpo": false
}, {
  "eventos": ["caldo gallego", "filloas", "me lave los dientes", "caña de 1906", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["pizza", "me lave los dientes", "mencia", "leer el Marca", "baño en a Lanzada"],
  "pulpo": false
}, {
  "eventos": ["pan de millo", "recortarme la barba", "me lave los dientes", "Panorama", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["empanada de bacalao", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pizza", "me lave los dientes", "Panorama", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["carne o caldeiro", "chinchos", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["me lave los dientes", "siesta con La Vuelta", "baño en a Lanzada"],
  "pulpo": false
}, {
  "eventos": ["navajas", "me lave los dientes", "ver el fúbol", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["vieiras", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["me lave los dientes", "mencia", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["navajas", "chinchos", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "me lave los dientes", "caña de 1906", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["empanada de bacalao", "choveu", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["pan de millo", "me lave los dientes", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["carne o caldeiro", "me lave los dientes", "caminar", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["vieiras", "me lave los dientes", "choveu", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "licor cafe", "me lave los dientes", "ver el fúbol", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["vieiras", "chinchos", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["empanada de bacalao", "licor cafe", "me lave los dientes", "Panorama", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["vieiras", "percebes", "mencia", "siesta con La Vuelta"],
  "pulpo": true
}, {
  "eventos": ["feria del pulpo", "licor cafe", "me lave los dientes", "mencia", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["feria del pulpo", "licor cafe", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["percebes", "me lave los dientes", "caña de 1906", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["feria del pulpo", "caminar", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pizza", "licor cafe", "mencia", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["carne o caldeiro", "licor cafe", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["empanada de bacalao", "pementos de padron", "choveu", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["carne o caldeiro", "chinchos", "me lave los dientes", "caña de 1906", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["feria del pulpo", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pizza", "recortarme la barba", "leer el Marca", "Paris de Noia"],
  "pulpo": false
}, {
  "eventos": ["carne o caldeiro", "filloas", "Panorama", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["vieiras", "me lave los dientes", "choveu", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["vieiras", "filloas", "ver el fúbol", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["pan de millo", "me lave los dientes", "caminar", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["carne o caldeiro", "percebes", "leer el Marca"],
  "pulpo": true
}, {
  "eventos": ["pizza", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["feria del pulpo", "caminar", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["me lave los dientes", "caminar", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["vieiras", "me lave los dientes", "ver el fúbol", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pizza", "Panorama", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "me lave los dientes", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "recortarme la barba", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pizza", "percebes", "pementos de padron", "leer el Marca"],
  "pulpo": true
}, {
  "eventos": ["mejillones", "percebes", "me lave los dientes", "choveu", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["feria del pulpo", "percebes", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "chinchos", "me lave los dientes", "caminar", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pizza", "percebes", "me lave los dientes", "ver el fúbol", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["carne o caldeiro", "me lave los dientes", "Panorama", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["empanada de bacalao", "percebes", "me lave los dientes", "mencia", "leer el Marca", "baño en a Lanzada"],
  "pulpo": false
}, {
  "eventos": ["navajas", "me lave los dientes", "ver el fúbol", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["feria del pulpo", "me lave los dientes", "mencia", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pan de millo", "pementos de padron", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["feria del pulpo", "chinchos", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "filloas", "me lave los dientes", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "me lave los dientes", "caminar", "siesta con La Vuelta", "baño en a Lanzada"],
  "pulpo": false
}, {
  "eventos": ["caldo gallego", "caña de 1906", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["navajas", "me lave los dientes", "caña de 1906", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pementos de padron", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["caldo gallego", "me lave los dientes", "mencia", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pan de millo", "me lave los dientes", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["empanada de bacalao", "me lave los dientes", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["vieiras", "pementos de padron", "ver el fúbol", "leer el Marca", "baño en a Lanzada"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "filloas", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["navajas", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "licor cafe", "me lave los dientes", "Panorama", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pizza", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["vieiras", "percebes", "caminar", "siesta con La Vuelta"],
  "pulpo": true
}, {
  "eventos": ["pan de millo", "recortarme la barba", "mencia", "siesta con La Vuelta", "baño en a Lanzada"],
  "pulpo": false
}, {
  "eventos": ["me lave los dientes", "caña de 1906", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["navajas", "percebes", "me lave los dientes", "leer el Marca", "baño en a Lanzada"],
  "pulpo": false
}, {
  "eventos": ["carne o caldeiro", "me lave los dientes", "ver el fúbol", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["empanada de bacalao", "me lave los dientes", "caña de 1906", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "me lave los dientes", "caña de 1906", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "choveu", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["mejillones", "percebes", "choveu", "siesta con La Vuelta"],
  "pulpo": true
}, {
  "eventos": ["feria del pulpo", "me lave los dientes", "caña de 1906", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["carne o caldeiro", "licor cafe", "leer el Marca", "baño en a Lanzada"],
  "pulpo": false
}, {
  "eventos": ["empanada de bacalao", "percebes", "me lave los dientes", "Panorama", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pizza", "me lave los dientes", "caña de 1906", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["navajas", "me lave los dientes", "leer el Marca"],
  "pulpo": false
}, {
  "eventos": ["pan de millo", "me lave los dientes", "ver el fúbol", "siesta con La Vuelta"],
  "pulpo": false
}, {
  "eventos": ["empanada de bacalao", "percebes", "me lave los dientes", "siesta con La Vuelta"],
  "pulpo": false
}];
module.exports = DIARIO;
},{}],"back/scripts/info.js":[function(require,module,exports) {
/*jshint esversion: 6 */
'use strict';
/**
 * We create the info object with the properties:
 * @property events
 * @property numbersFalse
 * @property numbersTrue
 * @property diary -> const object @name DIARY
 */

var info = {
  events: [],
  numbersFalse: [],
  numbersTrue: [],
  diary: require('../../../BBDD/diary')
};
/**
 * In the following functions we will see the use of @this this, 
 * when these do not belong to any scope, then this should refer to the function.
 * However when entering them within our info object, @this this refers to the object 
 * so we can call the @properties of the same object using this
 */

function getItems() {
  var _this = this;

  /**
   * Function that runs through the diary property and 
   * @returns our property events 
   * composed with the events, without repeating, of Mariano's diary
   */
  this.events = [];
  this.diary.forEach(function (items) {
    items.eventos.forEach(function (event) {
      if (!_this.events.includes(event)) {
        _this.events.push(event);
      }
    });
  });
  return this.events;
}

function matrixForItem(element) {
  /**
   * Function that runs through the daily property, searches on each day in 
   * the mariano itinerary's events if there is an element that we pass as a parameter.
   * Its functionality is to count the times it becomes octopus and when it is false and 
   * the times, in general, it becomes octopus or not
   * @param element
   * @returns matrix
   */
  this.numbersFalse = [];
  this.numbersTrue = [];
  var matrix = [];
  var countElementTrue = 0;
  var countElementFalse = 0;
  var countFalse = 0;
  var countTrue = 0;
  this.diary.forEach(function (items) {
    if (items.eventos.includes(element)) {
      if (items.pulpo) {
        countElementTrue++;
      } else {
        countElementFalse++;
      }
    } else {
      if (items.pulpo) {
        countTrue++;
      } else {
        countFalse++;
      }
    }
  });
  this.numbersFalse.push(countFalse, countElementFalse);
  this.numbersTrue.push(countTrue, countElementTrue);
  matrix.push(this.numbersFalse, this.numbersTrue);
  return matrix;
}
/**
 * Here we insert the two functions that we have created in the object, 
 * but not in its prototyping
 */


info.items = getItems;
info.matrixItem = matrixForItem;
module.exports = info;
},{"../../../BBDD/diary":"../BBDD/diary.js"}],"back/scripts/phi.js":[function(require,module,exports) {
/*jshint esversion: 6 */
'use strict';

function phi(matrix) {
  /**
   * matrix[1][1] YES octopus, YES X.
   * matrix[0][0] NOT octopus, NOT X.
   * matrix[1][0] YES octopus, NOT X.
   * matrix[0][1] NOT octopus, YES X.
   */
  var DIVIDE = matrix[1][1] * matrix[0][0] - matrix[1][0] * matrix[0][1];
  var DIVISOR = Math.sqrt(
  /**
   * Square root of:
   * - matrix[1][0] + matrix[1][1] --> Whenever octopus is TRUE.
   * - matrix[0][0] + matrix[0][1] --> Whenever octopus is FALSE.
   * - matrix[0][1] + matrix[1][1] --> Whenever X is TRUE.
   * - matrix[0][0] + matrix[1][0] --> Whenever X is FALSE.
   */
  (matrix[1][0] + matrix[1][1]) * (matrix[0][0] + matrix[0][1]) * (matrix[0][1] + matrix[1][1]) * (matrix[0][0] + matrix[1][0]));
  var RESULT = DIVIDE / DIVISOR;
  return RESULT;
}

module.exports = phi;
},{}],"back/scripts/index.js":[function(require,module,exports) {
/*jshint esversion: 6 */
"use strict";
/**
 * We create the object
 * @name TableInfo
 * that refers to the prototyping of
 * @name Object
 * of javascript
 */

var TableInfo = Object.create(Object);
/**
 * We add the properties we need, in our case they are:
 * @property recolectInfo -> this property refers to the @name info object
 * @property phi -> @function phi
 * @property map -> array that we introduce the results
 */

TableInfo.recolectInfo = Object.create(require("./info")), TableInfo.phi = require("./phi"), TableInfo.map = [];

TableInfo.prototype.calculatedMatrix = function matrix(item) {
  /**
   * Function belonging to the object that calls the
   * @function matrixItem
   * @param item
   * @return matrix -> array of arrays
   */
  return this.recolectInfo.matrixItem(item);
};

TableInfo.prototype.calculatedPhi = function Phi(item) {
  /**
   * This function calls our property phi, which is the function
   * with the same name, and calculates its result,
   * thus obtaining the correlation of the item
   * @param item
   * @returns number
   */
  return this.phi(this.calculatedMatrix(item));
};

TableInfo.prototype.row = function Row(element) {
  /**
   * This function creates an object that has as properties, the name of the event,
   * its correlation matrix and its calculation
   * @param element
   * @retruns Object
   * @property item -> @name element
   * @property matrix -> @function calculatedMatrix
   * @property phi -> @function calculatedPhi
   *
   * In other words this function returns a row of the table
   */
  return {
    item: element,
    matrix: this.calculatedMatrix(element),
    phi: this.calculatedPhi(element)
  };
};

TableInfo.prototype.result = function showResults() {
  var _this = this;

  /**
   * This function is what gives us the complete result, that is, it creates the complete table.
   * We use the
   * @property @name recolectInfo
   * and with this we call its
   * @function items()
   * that will return an array with the existing events
   *
   * @returns array of rows -> Objects
   */
  this.map = [];
  this.recolectInfo.items().forEach(function (element) {
    _this.map.push(_this.row(element));
  });
  return this.map;
};

TableInfo.prototype.columns = function Columns() {
  /**
   * Function that
   * @returns an array
   * with the
   * @name columns
   * of the information table that we have created.
   * We use the Object
   * @function keys()
   * that extracts the name of the map keys
   */
  return Object.keys(this.result()[0]);
};

TableInfo.prototype.sortTable = function sortTable() {
  /**
   * Method for ordering our information @table by the probability that it becomes an octopus or not.
   * We had to create this 
   * @method sortTable because the @function sort 
   * belonging to the parent 
   * @name Array 
   * orders only with positive numbers, then the negatives, makes them as if they were positive, 
   * taking into account the script in front, that is, first look at the symbol and then order 
   * the number doing so that the positive numbers are well ordered and the negative 
   * ones as if they were positive
   * 
   * We separate in two arrays our map:
   * @member arrayTempNegative
   * @member arrayTempPositive
   */
  var arrayTempNegative = [];
  var arrayTempPositive = [];
  /**
   * We traverse our map with the results and divide it into the two array according 
   * to positive and negative. But first we convert the property of the 
   * @object that we are seen in @number
   */

  this.result().forEach(function (row) {
    var newPhi = Number(row.phi);

    if (newPhi < 0) {
      arrayTempNegative.push(newPhi);
    } else {
      arrayTempPositive.push(row.phi);
    }
  }); // We sort normally, using the sort method the positive numbers

  arrayTempPositive.sort();
  /**
   * We create a new array where we order how we want the array with the 
   * negative numbers and use the 
   * @function concat 
   * to join them
   */

  var correctArry = arrayTempNegative.sort().reverse().concat(arrayTempPositive);
  var resultArray = [];
  var items = this.result(); //Finally we rebuild our map with the order we have specified

  correctArry.forEach(function (phi) {
    var found = false;
    items = items.filter(function (item) {
      if (!found && item.phi === phi) {
        resultArray.push(item);
        found = true;
        return false;
      } else {
        return true;
      }
    });
  });
  return resultArray;
};

module.exports = TableInfo;
},{"./info":"back/scripts/info.js","./phi":"back/scripts/phi.js"}],"app/components/modal.js":[function(require,module,exports) {
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
},{}],"app/components/calendar.js":[function(require,module,exports) {
/*jshint esversion: 6 */
'use strict';
/**
 * We ask our document to give us the html component with the id that we request through:
 * @param calendar_component
 * @document
 * @function @getElementById
 */

var calendar = document.getElementById('calendar_component');
/**
 * We create an object that points to the prototyping of the general object, 
 * using the functionality of the same main object:
 * @Object
 * @function @create
 */

var Calendar = Object.create(Object);
/**
 * We add to the object that we have created the properties that we need in 
 * this case we use:
 * @calendarDiv
 * @TableInfo -> object that contains the project functionalities
 * @modal -> Extern component
 */

Calendar.TableInfo = require('../../back/scripts/index');
Calendar.modal = require('./modal');

Calendar.prototype.createCalendar = function createCalendar(events) {
  /**
   * Function for the creation of the calendar, divided by months containing 
   * the name of the days of the week and the main and div container of the days of the month
   * @param events -> array that contains the events of days and reset every 30 days
   * @weekDays -> Array with the name of the days of week
   */
  var main = document.createElement('main');
  var weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  var divWeek = document.createElement('div');
  divWeek.setAttribute('class', 'day-of-week');
  var divCalendar = document.createElement('div');
  divCalendar.setAttribute('class', 'calendar');
  var div = document.createElement('div');
  div.setAttribute('class', 'date-grid');
  events.forEach(function (event) {
    div.appendChild(event);
  });
  weekDays.forEach(function (day) {
    var divDay = document.createElement('div');
    divDay.textContent = day;
    divWeek.appendChild(divDay);
  });
  divCalendar.appendChild(divWeek);
  divCalendar.appendChild(div);
  main.appendChild(divCalendar);
  calendar.appendChild(main);
};

Calendar.prototype.buttonModal = function showModal(index) {
  /**
   * Here we create the button to activate the manners, it has as a link element, 
   * due to the ease to activate the modal and to be able to reference each of 
   * the manners more easily
   * @param index
   */
  var buttonOpen = document.createElement('a');
  buttonOpen.setAttribute('href', "#openModal".concat(index));
  buttonOpen.setAttribute('class', 'btn');
  var button = document.createElement('button');

  if (index < 9) {
    button.textContent = "0".concat(index + 1);
  } else if (9 < index && index < 30) {
    button.textContent = "".concat(index + 1);
  } else {
    index % 30 < 9 ? button.textContent = "0".concat(index % 30 + 1) : button.textContent = "".concat(index % 30 + 1);
  }

  buttonOpen.appendChild(button);
  return buttonOpen;
};

Calendar.prototype.constructorCalendar = function showDays() {
  /**
   * Here we go through the diary to obtain each day, 
   * both the number of the day and the itinerary it does
   * we create a constant that refers to the newspaper that 
   * we have already worked
   * This is the functionality of creating the calendar, that is to say the 
   * calendar and that makes every day of the week, it is divided into different parts to be able 
   * to make the code more readable and easier to maintain
   * we created in this function:
   * @DIARY
   * and we cretae an array that keep the buttons of one month
   * @events
   * The we construct the diferents parts of modal:
   * @function this.modal.constructorModal(@param DIARY[index], @param index, @param TableInfo)
   * @function push -> keep the button that we create with @function this.buttonModal
   * and every month reset events, we create de div of days, tha main part and the days of weexk. And
   * we put it all together in calendar
   * @function this.createCalendar
   * 
   */
  var events = [];
  var DIARY = this.TableInfo.recolectInfo.diary;

  for (var index = 0; index <= DIARY.length - 1; index++) {
    var modal = this.modal.constructorModal(DIARY[index], index, this.TableInfo);
    calendar.appendChild(modal);
    events.push(this.buttonModal(index));

    if ((index + 1) % 30 === 0) {
      this.createCalendar(events);
      events = [];
    }
  }
};
/**
 * Almost at the end we call the function constructorCalendar that will create the calendar 
 * with the object we have created
 * @Calendar
 * @constructorCalendar
 */


Calendar.constructorCalendar();
},{"../../back/scripts/index":"back/scripts/index.js","./modal":"app/components/modal.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app/components/calendar.js"], null)
//# sourceMappingURL=/calendar.a77f0609.js.map
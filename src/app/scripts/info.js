'use strict'
/**
 * We create the info object with the properties:
 * @property events
 * @property numbersFalse
 * @property numbersTrue
 * @property diary -> const object @name DIARY
 */

const info = {
  events: [],
  numbersFalse: [],
  numbersTrue: [],
  diary: require("../../../BBDD/diary")
};

/**
 * In the following functions we will see the use of @this this, 
 * when these do not belong to any scope, then this should refer to the function.
 * However when entering them within our info object, @this this refers to the object 
 * so we can call the @properties of the same object using this
 */

function getItems() {
  /**
   * Function that runs through the diary property and 
   * @returns our property events 
   * composed with the events, without repeating, of Mariano's diary
   */
  this.events = [];
  this.diary.forEach(items => {
    items.eventos.forEach(event => {
      if (!this.events.includes(event)) {
        this.events.push(event);
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
  let matrix = [];
  let countElementTrue = 0;
  let countElementFalse = 0;
  let countFalse = 0;
  let countTrue = 0;
  this.diary.forEach(items => {
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

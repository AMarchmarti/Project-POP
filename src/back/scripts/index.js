/*jshint esversion: 6 */
"use strict";

/**
 * We create the object
 * @name TableInfo
 * that refers to the prototyping of
 * @name Object
 * of javascript
 */
const TableInfo = Object.create(Object);

/**
 * We add the properties we need, in our case they are:
 * @property recolectInfo -> this property refers to the @name info object
 * @property phi -> @function phi
 * @property map -> array that we introduce the results
 */
(TableInfo.recolectInfo = Object.create(require("./info"))),
(TableInfo.phi = require("./phi")),
(TableInfo.map = []);

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
    this.recolectInfo.items().forEach(element => {
        this.map.push(this.row(element));
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
    let arrayTempNegative = [];
    let arrayTempPositive = [];

    /**
     * We traverse our map with the results and divide it into the two array according 
     * to positive and negative. But first we convert the property of the 
     * @object that we are seen in @number
     */
    this.result().forEach(row => {
        let newPhi = Number(row.phi);
        if (newPhi < 0) {
            arrayTempNegative.push(newPhi);
        } else {
            arrayTempPositive.push(row.phi);
        }
    });
    // We sort normally, using the sort method the positive numbers
    arrayTempPositive.sort();

    /**
     * We create a new array where we order how we want the array with the 
     * negative numbers and use the 
     * @function concat 
     * to join them
     */
    let correctArry = arrayTempNegative.sort().reverse().concat(arrayTempPositive);

    let resultArray = [];
    let items = this.result();

    //Finally we rebuild our map with the order we have specified
    correctArry.forEach(phi => {
        let found = false;
        items = items.filter(item => {
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
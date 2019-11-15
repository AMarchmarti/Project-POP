const DIARY = require("../BBDD/diary");
const phi = require("./phi");

let infoTabla = {
  events: function getItems() {
    let arrayTemp = [];

    DIARY.forEach(items => {
      items.eventos.forEach(event => {
        if (!arrayTemp.includes(event)) {
          arrayTemp.push(event);
        }
      });
    });

    return arrayTemp;
  },

  matrixRelation: function matrixForItem(element) {
    let matrix = [];
    let numbersFalse = [];
    let numbersTrue = [];
    countElementTrue = 0;
    countElementFalse = 0;
    countFalse = 0;
    countTrue = 0;

    DIARY.forEach(items => {
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

    numbersFalse.push(countFalse, countElementFalse);
    numbersTrue.push(countTrue, countElementTrue);
    matrix.push(numbersFalse, numbersTrue);


    return matrix;
  },

  calculatedPhi: function getPhi(array) {return phi(array)}
};


let tabla = Object.create(infoTabla)

tabla.tablaItems = function getMapItems(){
    let map = []
    this.events().forEach(item => {
        map.push({
            item : item,
            relation : `${this.matrixRelation(item)}`,
            coeficient : `${this.calculatedPhi(this.matrixRelation(item))}`
        })
    })

    return map;
}

console.table(tabla.tablaItems.call(tabla))




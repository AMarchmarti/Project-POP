const DIARY = require("../BBDD/diary");
const phi = require("./phi");

let infoTabla = {
  getItems: function getItems() {
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

  matrixForItem: function matrixForItem(element) {
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

  getMapItems: function getMapItemMatrixPhi() {
    let iteMap = [];
    this.getItems().forEach(item => {
      let arrayItem = this.matrixForItem(item);
      let calculatedPhi = phi(arrayItem)
      iteMap.push({
        item: item,
        array : arrayItem,
        phi: calculatedPhi
      });
    });
    return iteMap;
  }
};

const tabla = Object.create(infoTabla);

console.table(tabla.getMapItems.call(tabla))




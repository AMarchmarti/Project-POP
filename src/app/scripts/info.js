

const info = {
  arrayTemp: [],
  numbersFalse: [],
  numbersTrue: [],
  diary: require("../../../BBDD/diary")
};

function getItems() {
  this.arrayTemp = [];
  this.diary.forEach(items => {
    items.eventos.forEach(event => {
      if (!this.arrayTemp.includes(event)) {
        this.arrayTemp.push(event);
      }
    });
  });

  return this.arrayTemp;
}

function matrixForItem(element) {
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


info.items = getItems;
info.matrixItem = matrixForItem;

module.exports = info;

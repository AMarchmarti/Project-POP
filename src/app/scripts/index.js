'use strict'


function TableInfo() {

    this.recolectInfo = Object.create(require('./info'))
    this.phi = require('./phi')
    this.map = []
    
}

TableInfo.prototype.calculatedMatrix = function matrix(item) {
    return this.recolectInfo.matrixItem(item)
}
TableInfo.prototype.calculatedPhi = function Phi(item) {
    return this.phi(this.calculatedMatrix(item))
}

TableInfo.prototype.row = function Row(element) {
    return {
        item: element,
        matrix: this.calculatedMatrix(element),
        phi: this.calculatedPhi(element)
    }
}

TableInfo.prototype.result = function showResults(){
    this.recolectInfo.items().forEach(element => {
        this.map.push(this.row(element))
    })

    return this.map
}

const table = new TableInfo()


console.log('object :', table.recolectInfo.matrixItem('mejillones'));
table.recolectInfo.items()
console.log('objectFalse :', table.recolectInfo.numbersFalse);
table.result()
console.log('table :', table.map)

console.log('table.row(mejillones) :', table.row('mejillones'));

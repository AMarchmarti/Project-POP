'use strict'


function TablaInfo() {

    this.recolectInfo = Object.create(require('./info'))
    this.phi = require('./phi')
    this.map = []
    
}

TablaInfo.prototype.calculatedMatrix = function matrix(item) {
    return this.recolectInfo.matrixItem(item)
}
TablaInfo.prototype.calculatedPhi = function Phi(item) {
    return this.phi(this.calculatedMatrix(item))
}

TablaInfo.prototype.result = function showResults(){
    this.recolectInfo.items().forEach(element => {
        this.map.push({
                item: element,
                matrix: this.calculatedMatrix(element),
                phi: this.calculatedPhi(element)
        })
    })

    return this.map
}

const tabla = new TablaInfo()


console.log('object :', tabla.recolectInfo.matrixItem('mejillones'));
tabla.recolectInfo.items()
console.log('objectFalse :', tabla.recolectInfo.numbersFalse);
tabla.result()
console.log('tabla :', tabla.map)

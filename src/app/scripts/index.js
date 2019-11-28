'use strict'

const infObject = require('./info')

function TablaInfo() {

    this.recolectInfo = Object.create(infObject)
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

console.log('tabla :', tabla.result()[0].matrix); 

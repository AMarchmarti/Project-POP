
const table = document.getElementById('table_component')

const button = document.createElement('button')
button.textContent='Mostrar Tabla'
button.setAttribute('id', 'buttonTable')



const Table = Object.create(Object);

Table.table = document.createElement('div')
Table.table.setAttribute('id', 'table')
Table.TableInfo = require('../scripts/index')
Table.modal = require('./modal')

Table.prototype.constructorTable = function constuctorTable(element, index){
    let card_scene = document.createElement('div')
    let modal =  this.modal.constructorModal(element, index, this.TableInfo)
    card_scene.appendChild(modal)
    this.table.appendChild(card_scene)
}

Table.prototype.days = function showDays() {
    const diary = this.TableInfo.recolectInfo.diary;
    for(let index = 0; index <= diary.length - 1; index++){
        this.constructorTable(diary[index], index)
    }
}

function showTable () {
    button.setAttribute('display', 'none')
    Table.days()
}
button.addEventListener('click', showTable())

table.appendChild(button)
table.appendChild(Table.table)
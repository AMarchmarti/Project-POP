
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
    let modal_scene = document.createElement('div')
    modal_scene.setAttribute('class', 'modal_scene')
    let buttonOpen = document.createElement('a')
    buttonOpen.setAttribute('href', `#openModal${index}`)
    buttonOpen.setAttribute('class', 'btn')
    index < 10 
        ? buttonOpen.textContent = `Dia 0${index + 1}` 
        : buttonOpen.textContent = `Dia ${index + 1}`
    let modal =  this.modal.constructorModal(element, index, this.TableInfo)
    modal_scene.appendChild(modal)
    modal_scene.appendChild(buttonOpen)
    this.table.appendChild(modal_scene)
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

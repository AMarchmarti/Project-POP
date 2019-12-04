
const table = document.getElementById('table_component')

const button = document.createElement('button')
button.textContent='Mostrar Tabla'
button.setAttribute('id', 'buttonTable')



const Table = Object.create(Object);

Table.table = document.createElement('div')
Table.table.setAttribute('id', 'table')
Table.TableInfo = require('../scripts/index')

Table.prototype.constructorTable = function constuctorTable(element, index){
    let div = document.createElement('div')
    div.setAttribute('id', 'elementTable')
    let h2 = document.createElement('h2')
    h2.textContent = `Dia ${index+1}`
    let list = document.createElement('ul')
    element.eventos.forEach( item => {
        let li = document.createElement('li')
        let button = document.createElement('button')
        button.textContent = item
        li.appendChild(button)
        list.appendChild(li)
    });
    div.appendChild(h2)
    div.appendChild(list)
    this.table.appendChild(div)
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

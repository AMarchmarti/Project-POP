'use strict'
/**
 * We ask our document to give us the html component with the id that we request through:
 * @table_component
 * @document
 * @function @getElementById
 */
const table = document.getElementById('table_component')


/**
 * We create an object that points to the prototyping of the general object, 
 * using the functionality of the same main object:
 * @Object
 * @function @create
 */
const Table = Object.create(Object);


/**
 * We add to the object that we have created the properties that we need in 
 * this case we use:
 * @table
 * @TableInfo -> object that contains the project functionalities
 * @modal -> Extern component
 */
Table.table = document.createElement('div')
Table.table.setAttribute('id', 'table')
Table.TableInfo = require('../scripts/index')
Table.modal = require('./modal')

/**
 * Now we will create the protopides of the object, previously created
 * @constructorTableDiary
 * @buttonModal
 * @days
 */
Table.prototype.constructorTableDiary = function constuctorTable(element, index){
    /**
     * This is the functionality of creating the table of the newspaper, that is to say the 
     * calendar and that makes every day of the week, it is divided into different parts to be able 
     * to make the code more readable and easier to maintain
     * we created in this function:
     * @modal_scene -> is a div that contains all the buttons and modals of the page
     * @buttonOpen -> Use another funtion of the object prototype to create the button to open modals
     * @setAttribute -> is a function to modified the elements from the DOM and add the attributes that we need
     * @modal -> 
     */
    let modal_scene = document.createElement('div')
    modal_scene.setAttribute('class', 'modal_scene')
    let buttonOpen = this.buttonModal(index)
    let modal =  this.modal.constructorModal(element, index, this.TableInfo)

    // this.closeModalWindow(modal)
    modal_scene.appendChild(modal)
    modal_scene.appendChild(buttonOpen)
    this.table.appendChild(modal_scene)
}

Table.prototype.buttonModal = function showModal(index){
    let buttonOpen = document.createElement('a')
    buttonOpen.setAttribute('href', `#openModal${index}`)
    buttonOpen.setAttribute('class', 'btn')
    index < 10 
        ? buttonOpen.textContent = `Dia 0${index + 1}` 
        : buttonOpen.textContent = `Dia ${index + 1}`
    
    return buttonOpen
}
//TODO
// Table.prototype.closeModalWindow = function closModal(){
//     document.onclick = function(event) {
//     console.log('event.target.id :', !event.target.id === '');
//         document.getElementById(event.srcElement.id).style.visibility = 'hidden'
//     }
    
// }

Table.prototype.days = function showDays() {
    const diary = this.TableInfo.recolectInfo.diary;
    for(let index = 0; index <= diary.length - 1; index++){
        this.constructorTableDiary(diary[index], index)
    }
}

Table.days()


table.appendChild(Table.table)

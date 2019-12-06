'use strict'
/**
 * We ask our document to give us the html component with the id that we request through:
 * @param table_component
 * @document
 * @function @getElementById
 */
const calendar = document.getElementById('calendar_component')


/**
 * We create an object that points to the prototyping of the general object, 
 * using the functionality of the same main object:
 * @Object
 * @function @create
 */
const Calendar = Object.create(Object);


/**
 * We add to the object that we have created the properties that we need in 
 * this case we use:
 * @calendarDiv
 * @TableInfo -> object that contains the project functionalities
 * @modal -> Extern component
 */
Calendar.calendarDiv = document.createElement('div')
Calendar.calendarDiv.setAttribute('id', 'calendar')
Calendar.TableInfo = require('../scripts/index')
Calendar.modal = require('./modal')

/**
 * Now we will create the protopides of the object, previously created
 * @constructorCalendar
 * @buttonModal
 * @days
 */
Calendar.prototype.constructorCalendar = function constuctorCalendar(element, index){
    /**
     * This is the functionality of creating the calendar, that is to say the 
     * calendar and that makes every day of the week, it is divided into different parts to be able 
     * to make the code more readable and easier to maintain
     * we created in this function:
     * @param element
     * @param index
     * @modal_scene -> is a div that contains all the buttons and modals of the page
     * @buttonOpen -> Use another funtion of the object prototype to create the button to open modals
     * @setAttribute -> is a function to modified the elements from the DOM and add the attributes that we need
     * @modal -> it is a property of the object that in turn is an external component (Modal object) 
     * then we use the function 
     * @appendChild
     * to unify the components in the 
     * @calendar property
     */
    let modal_scene = document.createElement('div') 
    modal_scene.setAttribute('class', 'modal_scene') 
    let buttonOpen = this.buttonModal(index) 
    let modal =  this.modal.constructorModal(element, index, this.TableInfo)

    // this.closeModalWindow(modal)
    modal_scene.appendChild(modal)
    modal_scene.appendChild(buttonOpen)
    this.calendarDiv.appendChild(modal_scene)
}

Calendar.prototype.buttonModal = function showModal(index){
    /**
     * Here we create the button to activate the manners, it has as a link element, 
     * due to the ease to activate the modal and to be able to reference each of 
     * the manners more easily
     * @param index
     */
    let buttonOpen = document.createElement('a')
    buttonOpen.setAttribute('href', `#openModal${index}`)
    buttonOpen.setAttribute('class', 'btn')
    index < 10 
        ? buttonOpen.textContent = `Dia 0${index + 1}` 
        : buttonOpen.textContent = `Dia ${index + 1}`
    
    return buttonOpen
}
// TODO
// Table.prototype.closeModalWindow = function closModal(){
//     document.onclick = function(event) {
//     console.log('event.target.id :', !event.target.id === '');
//         document.getElementById(event.srcElement.id).style.visibility = 'hidden'
//     }
    
// }

Calendar.prototype.days = function showDays() {
    /**
     * Here we go through the diary to obtain each day, 
     * both the number of the day and the itinerary it does
     * we create a constant that refers to the newspaper that 
     * we have already worked
     * @DIARY
     * and we use the function 
     * @constructorTableDiary
     * we have explained before to build the calendar
     */
    const DIARY = this.TableInfo.recolectInfo.diary;
    for(let index = 0; index <= DIARY.length - 1; index++){
        this.constructorCalendar(DIARY[index], index)
    }
}

/**
 * Almost at the end we call the function days that will create the calendar 
 * with the object we have created
 * @Calendar
 * @days
 */
Calendar.days()

/**
 * Finally we add the object created to the main table that we had already named 
 * at the beginning of the file
 * @calendar
 */

calendar.appendChild(Calendar.calendarDiv) 

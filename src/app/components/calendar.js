'use strict'
/**
 * We ask our document to give us the html component with the id that we request through:
 * @param calendar_component
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

Calendar.TableInfo = require('../../back/scripts/index')
Calendar.modal = require('./modal')


Calendar.prototype.createCalendar = function createCalendar(events){
    /**
     * Function for the creation of the calendar, divided by months containing 
     * the name of the days of the week and the main and div container of the days of the month
     * @param events -> array that contains the events of days and reset every 30 days
     * @weekDays -> Array with the name of the days of week
     */
    let main = document.createElement('main')
    const weekDays  =['Lun','Mar','Mié','Jue','Vie','Sáb','Dom']
    
    let divWeek = document.createElement('div')
    divWeek.setAttribute('class', 'day-of-week')
    
    let divCalendar = document.createElement('div')
    divCalendar.setAttribute('class', 'calendar')
    
    let div  = document.createElement('div')
    div.setAttribute('class', 'date-grid')

    events.forEach( event => {
        div.appendChild(event)
    })

    weekDays.forEach( day => {
        let divDay  = document.createElement('div')
        divDay.textContent = day
        divWeek.appendChild(divDay)
        
    })
    divCalendar.appendChild(divWeek)
    divCalendar.appendChild(div)
    main.appendChild(divCalendar)
    calendar.appendChild(main)
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
    let button = document.createElement('button')
   if (index < 9){
        button.textContent = `0${index + 1}`
   } else if (9 < index && index < 30){
        button.textContent = `${index + 1}`
   } else {
       (index % 30) < 9
        ? button.textContent = `0${(index % 30) + 1}`
        : button.textContent = `${(index % 30)+ 1}`
   }
    
    buttonOpen.appendChild( button)
    return buttonOpen
}
// TODO
// Table.prototype.closeModalWindow = function closModal(){
//     document.onclick = function(event) {
//     console.log('event.target.id :', !event.target.id === '');
//         document.getElementById(event.srcElement.id).style.visibility = 'hidden'
//     }
    
// }

Calendar.prototype.constructorCalendar = function showDays() {
    /**
     * Here we go through the diary to obtain each day, 
     * both the number of the day and the itinerary it does
     * we create a constant that refers to the newspaper that 
     * we have already worked
     * This is the functionality of creating the calendar, that is to say the 
     * calendar and that makes every day of the week, it is divided into different parts to be able 
     * to make the code more readable and easier to maintain
     * we created in this function:
     * @DIARY
     * and we cretae an array that keep the buttons of one month
     * @events
     * The we construct the diferents parts of modal:
     * @function this.modal.constructorModal(@param DIARY[index], @param index, @param TableInfo)
     * @function push -> keep the button that we create with @function this.buttonModal
     * and every month reset events, we create de div of days, tha main part and the days of weexk. And
     * we put it all together in calendar
     * @function this.createCalendar
     * 
     */
    let events = []
    const DIARY = this.TableInfo.recolectInfo.diary;
    for(let index = 0; index <= DIARY.length - 1; index++){
        let modal = this.modal.constructorModal(DIARY[index], index, this.TableInfo)
        calendar.appendChild(modal)
        events.push(this.buttonModal(index))
        if((index + 1) % 30 === 0 ){
           this.createCalendar(events)
            events = []
        }
    }
}

/**
 * Almost at the end we call the function constructorCalendar that will create the calendar 
 * with the object we have created
 * @Calendar
 * @constructorCalendar
 */
Calendar.constructorCalendar()

 

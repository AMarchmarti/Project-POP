const path = require('path');
const fs = require('fs');

const Modal = Object.create(Object)

function searchImage(item) {
    const dir = '../Project-POP/src/app/img'
    const directoryPath = path.join(dir);

    fs.readdir(directoryPath, function (err, files) {

        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            if (file.substr(-4) === '.png'){
            return (file.substring(0, file.length - 4)) === item ? file : ''
        } return ''
        });

    });
}

Modal.prototype.constructorModal = function modalConstructor(element, index, table){
    let modal = this.createDivModal(index)
    let modalDiv = document.createElement('div')
    let linkModal = this.closeModal()
    let modalH1 = this.titleModal(index)
    let modalBody = this.bodyModal(element, table)
    
    
    modalDiv.appendChild(linkModal)
    modalDiv.appendChild(modalH1)
    modalDiv.appendChild(modalBody)
    modal.appendChild(modalDiv)

    return modal
}

Modal.prototype.createDivModal = function createModal(index){
    let modal = document.createElement('div')
    modal.setAttribute('id', `openModal${index}`)
    modal.setAttribute('class', 'window')

    return modal
}

Modal.prototype.closeModal = function close(){
    let linkModal = document.createElement('a')
    linkModal.textContent = 'Close'
    linkModal.setAttribute('title', 'Close') 
    linkModal.setAttribute('href', '#') 
    linkModal.setAttribute('class', 'modal-close')

    return linkModal
}

Modal.prototype.titleModal = function createTitle(index){
    let modalH1 = document.createElement('h1')
    modalH1.textContent = `Dia ${index + 1}`

    return modalH1
}

Modal.prototype.bodyModal = function createBody(element, table){
    let body = document.createElement('div')
    body.setAttribute('id', 'bodyModal')
    element['eventos'].forEach(item => {
        let pModal = document.createElement('p')
        let img = document.createElement('img')
        let divImage = document.createElement('div')
        let divMatrix = document.createElement('div')
        // img.setAttribute('src', searchImage(item))
        pModal.textContent = item
        img.setAttribute('alt', `image${item}`)
        divMatrix.textContent = `${table.recolectInfo.matrixItem(item)}`
        divImage.appendChild(img)
        body.appendChild(pModal)
        body.appendChild(divMatrix)
        body.appendChild(divImage)
    });
    return body

}
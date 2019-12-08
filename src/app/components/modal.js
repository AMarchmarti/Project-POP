/*jshint esversion: 6 */
"use strict";

/**
 * We create the object
 * @Modal
 * that will point to the prototype of the general javascript object
 */
const Modal = Object.create(Object);

/**
 * We have not incorporated this function into the prototyping of
 * the object because it is not part of it, it is a function that uses it but does not compose it.
 * @param item
 */
function searchImage(item) {
    /**
     * Its utility is to look for images in the directory that we have told it.
     * @dir
     * @fileImge
     * @nameImage
     * These images will have the name of the item we are looking for and will try to return it if it exists
     * @returns string that indicates where the image is
     * with any suffix
     * @png
     * @jpg
     * @jpeg
     * that we have provided
     * @returns file
     */
    const dir = "/img/events/";

  let arrayTemp = item.split('');

  arrayTemp.forEach( letter => {
    if (letter === 'ñ'){
      let index = arrayTemp.indexOf('ñ')
      console.log('index :', index);
      arrayTemp.splice(index, 1, 'n')
      item = arrayTemp.join('')
    }
  })

  let arrayTemp = item.split('');

  arrayTemp.forEach( letter => {
    if (letter === 'ñ'){
      let index = arrayTemp.indexOf('ñ')
      console.log('index :', index);
      arrayTemp.splice(index, 1, 'n')
      item = arrayTemp.join('')
    }
  })

  try {
    return dir + item + ".png";
  } catch {
    return "";
  }
}

Modal.prototype.constructorModal = function modalConstructor(
    element,
    index,
    table
) {
    /**
     * This function belonging to the prototyping works as a union of
     * the different parts of the modal we need as parameters
     * @param element
     * @param index
     * @param table
     * We use the different internal functions of the object for the construction of the modal
     * @function createDivModal -> create the structure of modal
     * @function createElement -> function to create elements in the HTML, modifies the DOM
     * @function closeModal -> create element to close modal
     * @function titleModal -> create title of the modal
     * @function bodyModal -> create body of the modal
     * @function appendChild -> unifies all components
     *
     * @returns component modal
     */
    let modal = this.createDivModal(index);
    let modalDiv = document.createElement("div");
    let linkModal = this.closeModal();
    let modalH1 = this.titleModal(
        index < 10 ? `Dia 0${index + 1}` : `Dia ${index + 1}`
    );
    let modalBody = this.bodyModal(element, table);

    modalDiv.appendChild(linkModal);
    modalDiv.appendChild(modalH1);
    modalDiv.appendChild(modalBody);
    modal.appendChild(modalDiv);

    return modal;
};

Modal.prototype.createDivModal = function createModal(index) {
    /**
     * we create the container div where all the modal contents will go
     * @param index
     * @function createElement
     * @function setAttribute -> modifies the element that we already created, we add the attribute that we need
     * @returns div container of the modal
     */
    let modal = document.createElement("div");
    modal.setAttribute("id", `openModal${index}`);
    modal.setAttribute("class", "window");

    return modal;
};

Modal.prototype.closeModal = function close() {
    /**
     * Element that its function is to close the active modal at this time
     * @returns linkModal -> element to close modal
     */
    let linkModal = document.createElement("a");
    linkModal.textContent = "Cerrar";
    linkModal.setAttribute("title", "Cerrar");
    linkModal.setAttribute("href", "#");
    linkModal.setAttribute("class", "modal-close");

    return linkModal;
};

Modal.prototype.titleModal = function createTitle(content) {
    /**
     * Function that creates the modal title
     * @param content
     * @returns modalH1 -> title of modal
     */
    let modalH1 = document.createElement("h1");
    modalH1.textContent = content;

    return modalH1;
};

Modal.prototype.bodyModal = function createBody(element, table) {
    /**
     * This is the most important function, since it is the one that creates the modal content,
     * each modal has a variable content depending on the day that comes from the diary.
     * Its function is to show on screen the events that it does during the day, some images of
     * these events and if Mariano becomes an octopus or not
     * @param element -> day of the diary
     * @param table -> object to make the matrix of each item in the day
     * @function searchImage -> the utility function that we explain at the start
     * @return body of modal
     */
    let body = document.createElement("div");
    body.setAttribute("id", "bodyModal");

    element["eventos"].forEach(item => {
        let pModal = document.createElement("p");

    // We create the component image in the DOM and show the image in the correponent folder
    let img = document.createElement("img");
    img.setAttribute("src", searchImage(item));
    pModal.textContent = item;
    img.setAttribute("alt", `image${item}`);
    let divImage = document.createElement('div')

    // Join all the elements in the body of the modal
    divImage.appendChild(img);
    body.appendChild(pModal);

    body.appendChild(divImage);
  });

    let h3 = document.createElement("h3");
    let gif = document.createElement('img')
    if (element["pulpo"]) {
        h3.textContent = "Me he convertido en pulpo";
        gif.setAttribute('src', '/img/turned.gif')
    } else {
        h3.textContent = "¡Bien! No me he convertido en pulpo";
        gif.setAttribute('src', '/img/notTurned.gif')
    }
    body.appendChild(h3);
    body.appendChild(gif);
    return body;
};
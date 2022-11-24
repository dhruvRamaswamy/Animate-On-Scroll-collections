
"use strict";
function BoxContainer(containerIdAttribute){
    // Selects box items in the given container
    this.boxes = document.querySelectorAll(`[box-container-id="${containerIdAttribute}"] > .box`)
    // This is stupid, why do i have to do this fml
    let localBoxRef = this.boxes
    this.triggerBottom = window.innerHeight * 6 / 7
    // Check boxes function: goes through each box, checks to see if they are in position and applies the proper class
    this.checkBoxes = function() {
        this.triggerBottom = window.innerHeight * 6 / 7
        localBoxRef.forEach(box => {
            // Getboundingclientrect gives back properties of a given element about its position, search it up its not that complicated

            // Box top is the space between the element and the top of the viewport, same for boxBottom (but bottom...)
            const boxTop = box.getBoundingClientRect().top
            // the stuff at the end of this line is to account for when the box should show up, slightly before its in view
            const boxBottom = box.getBoundingClientRect().bottom + this.triggerBottom * 6 / 7

            // Making sure its in range
            if(boxTop < this.triggerBottom && boxBottom > this.triggerBottom){
                box.classList.add('show')
            }
            else {
                box.classList.remove('show')
            }
        })
    }
    // For each object you initialize this
    // Does this one time at the start to intialize everything
    window.addEventListener('scroll', this.checkBoxes)
    this.checkBoxes()
}

function initializeBoxes() {
    const boxContainersElements = Array.from(document.querySelectorAll('.container-boxes'))

    // All you have to do is pass in the name of the container and it will do the rest
    boxContainersElements.forEach(givenBoxContainer => {
        let x = new BoxContainer(givenBoxContainer.getAttribute('box-container-id'))
    })
}


// There: abstracted into a simple function
initializeBoxes()

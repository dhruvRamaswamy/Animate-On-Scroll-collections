const boxes = document.querySelectorAll('.box')
let triggerBottom;
// call checkBoxes() when the window detects a scroll change
// window.addEventListener('scroll', checkBoxes)
checkBoxes()


function checkBoxes(){
    // Multiply by 4/5 to account for space at top
    triggerBottom = window.innerHeight * 6 / 7
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // t
        const boxBottom = box.getBoundingClientRect().bottom + triggerBottom * 6 / 7
        // console.log(boxTop, box)
        if(boxTop < triggerBottom && boxBottom > triggerBottom){
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}

// function BoxContainer(containerItem){
//     this.boxes = document.querySelectorAll(`${containerItem} > .box`)
//     this.checkBoxes = function() {

//     }
// }
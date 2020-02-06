console.log("hello apartments!");



// $('.flat-one').on('hover', function() {
//     $('.flat-one').addClass('visible');
// });


var flatOne = document.getElementsByClassName('background-flat-one');
console.log(flatOne);

var flatTwo = document.getElementsByClassName('background-flat-two');
console.log(flatTwo);

//onMouseEnter

function onMouseEnter(flat) {
    if (flat === 1) {
        for (let i = 0; i < flatOne.length; i++) {
            flatOne[i].classList.add('visible');
        }
    }
    if (flat === 2) {
        for (let i = 0; i < flatTwo.length; i++) {
            flatTwo[i].classList.add('visible');
        }
    }
}

// onmouseleave

function onMouseLeave(flat) {
    if (flat === 1) {
        for (let i = 0; i < flatOne.length; i++) {
            flatOne[i].classList.remove('visible');
        }
    }
    if (flat === 2) {
        for (let i = 0; i < flatTwo.length; i++) {
            flatTwo[i].classList.remove('visible');
        }
    }
}
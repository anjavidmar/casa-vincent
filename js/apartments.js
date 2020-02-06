console.log("hello apartments!");



// $('.flat-one').on('hover', function() {
//     $('.flat-one').addClass('visible');
// });


var flatOne = document.getElementsByClassName('background-flat-one');
console.log(flatOne);

var textBox1 = document.querySelector('.text-box--1');

var flatTwo = document.getElementsByClassName('background-flat-two');
console.log(flatTwo);

var textBox2 = document.querySelector('.text-box--2');

//onMouseEnter

function onMouseEnter(flat) {
    if (flat === 1) {
        for (let i = 0; i < flatOne.length; i++) {
            flatOne[i].classList.add("visible");
        }
        textBox1.classList.add("select");
    }
    if (flat === 2) {
        for (let i = 0; i < flatTwo.length; i++) {
            flatTwo[i].classList.add("visible");
        }
        textBox2.classList.add("select");
    }
}

// onmouseleave

function onMouseLeave(flat) {
    if (flat === 1) {
        for (let i = 0; i < flatOne.length; i++) {
            flatOne[i].classList.remove("visible");
        }
        textBox1.classList.remove("select");
    }
    if (flat === 2) {
        for (let i = 0; i < flatTwo.length; i++) {
            flatTwo[i].classList.remove("visible");
        }
        textBox2.classList.remove("select");
    }
}
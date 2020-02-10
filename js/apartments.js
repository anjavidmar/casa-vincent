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


//flat info page:

var photo = document.getElementsByClassName('photo');
var visiblePhoto;

function showPhoto(x) {
    photo[x].classList.add("visible");
    visiblePhoto = x;
}

function hidePhotos() {
    for (let i = 0; i < photo.length; i++) {
        photo[i].classList.remove("visible");
    }
}

function nextPhoto() {
    console.log("[next]");
    photo[visiblePhoto].classList.remove("visible");
    visiblePhoto++
    if (visiblePhoto < photo.length) {
        photo[visiblePhoto].classList.add("visible");
    } else {
        visiblePhoto = 0;
        photo[visiblePhoto].classList.add("visible");
    }
    
}

function previousPhoto() {
    console.log("[previous]");
    photo[visiblePhoto].classList.remove("visible");
    visiblePhoto--
    console.log(visiblePhoto);
    if (visiblePhoto >= 0) {
        photo[visiblePhoto].classList.add("visible");
    } else {
        console.log("back to last");
        visiblePhoto = photo.length - 1;
        photo[visiblePhoto].classList.add("visible");
        console.log(visiblePhoto);
    }
}
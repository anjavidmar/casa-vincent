console.log("hello apartments!");

var visible = 0;
var floorplan = document.getElementsByClassName('floorplan');
var floorLink = document.getElementsByClassName('desktop-floor-navigation');
var floorLinkMobile = document.getElementsByClassName('mobile-floor-navigation');
var activeFloor = (floorLink.length - 1) - visible;

var upButton = document.getElementsByClassName('arrow--up');
console.log(upButton);

var downButton = document.getElementsByClassName('arrow--down');
console.log(downButton);


if (floorplans.length > 0) {
    floorplan[visible].classList.add('visible');
    floorLink[activeFloor].classList.add('current');
    floorLinkMobile[visible].classList.add('current');
    if (visible === 0) {
        for (let i = 0; i < downButton.length; i++) {
            downButton[i].classList.remove("active");
        }
    }
    if (visible === floorplan.length - 1) {
        for (let i = 0; i < upButton.length; i++) {
            upButton[i].classList.remove("active");
        }
    }
}

function goUp() {
    var max = floorplan.length - 1;
    if (visible < max) {
        floorplan[visible].classList.remove('visible');
        floorLink[activeFloor].classList.remove('current');
        floorLinkMobile[visible].classList.remove('current');
        visible++
        activeFloor = (floorLink.length - 1) - visible;
    }
    floorplan[visible].classList.add('visible');
    floorLink[activeFloor].classList.add('current');
    floorLinkMobile[visible].classList.add('current');
    checkButtons()
}

function goDown() {
    if (visible > 0) {
        floorplan[visible].classList.remove('visible');
        floorLink[activeFloor].classList.remove('current');
        floorLinkMobile[visible].classList.remove('current');
        visible--
        activeFloor = (floorLink.length - 1) - visible;
    }
    floorplan[visible].classList.add('visible');
    floorLink[activeFloor].classList.add('current');
    floorLinkMobile[visible].classList.add('current');
    checkButtons()
}

function jumpToFloor(floor) {
    floorplan[visible].classList.remove('visible');
    floorLink[activeFloor].classList.remove('current');
    floorLinkMobile[visible].classList.remove('current');
    visible = floor;
    activeFloor = (floorLink.length - 1) - visible;
    floorplan[visible].classList.add('visible');
    floorLink[activeFloor].classList.add('current');
    floorLinkMobile[visible].classList.add('current');
    checkButtons()
}

function checkButtons() {
    var max = floorplan.length - 1;
    if (visible > 0) {
        for (let i = 0; i < downButton.length; i++) {
            downButton[i].classList.add("active");
        }
    } else {
        for (let i = 0; i < downButton.length; i++) {
            downButton[i].classList.remove("active");
        }
    }
    if (visible < max) {
        for (let i = 0; i < upButton.length; i++) {
            upButton[i].classList.add("active");
        }
    } else {
        for (let i = 0; i < upButton.length; i++) {
            upButton[i].classList.remove("active");
        }
    }
}

var flatOne = document.getElementsByClassName('background--flat-one');
var flatTwo = document.getElementsByClassName('background--flat-two');
var flatThree = document.getElementsByClassName('background--flat-three');
var flatFour = document.getElementsByClassName('background--flat-four');
var flatFive = document.getElementsByClassName('background--flat-five');
var flatSix = document.getElementsByClassName('background--flat-six');
var flatSeven = document.getElementsByClassName('background--flat-seven');

var textBox = document.getElementsByClassName('text-box');

function onMouseEnter(flat) {
    if (flat === 0) {
        for (let i = 0; i < flatOne.length; i++) {
            flatOne[i].classList.add("visible");
        }
    }
    if (flat === 1) {
        for (let i = 0; i < flatTwo.length; i++) {
            flatTwo[i].classList.add("visible");
        }
    }
    if (flat === 2) {
        for (let i = 0; i < flatThree.length; i++) {
            flatThree[i].classList.add("visible");
        }
    }
    if (flat === 3) {
        for (let i = 0; i < flatFour.length; i++) {
            flatFour[i].classList.add("visible");
        }
    }
    if (flat === 4) {
        for (let i = 0; i < flatFive.length; i++) {
            flatFive[i].classList.add("visible");
        }
    }
    if (flat === 5) {
        for (let i = 0; i < flatSix.length; i++) {
            flatSix[i].classList.add("visible");
        }
    }
    if (flat === 6) {
        for (let i = 0; i < flatSeven.length; i++) {
            flatSeven[i].classList.add("visible");
        }
    }
    textBox[flat].classList.add("select");
}

function onMouseLeave(flat) {
    if (flat === 0) {
        for (let i = 0; i < flatOne.length; i++) {
            flatOne[i].classList.remove("visible");
        }
    }
    if (flat === 1) {
        for (let i = 0; i < flatTwo.length; i++) {
            flatTwo[i].classList.remove("visible");
        }
    }
    if (flat === 2) {
        for (let i = 0; i < flatThree.length; i++) {
            flatThree[i].classList.remove("visible");
        }
    }
    if (flat === 3) {
        for (let i = 0; i < flatFour.length; i++) {
            flatFour[i].classList.remove("visible");
        }
    }
    if (flat === 4) {
        for (let i = 0; i < flatFive.length; i++) {
            flatFive[i].classList.remove("visible");
        }
    }
    if (flat === 5) {
        for (let i = 0; i < flatSix.length; i++) {
            flatSix[i].classList.remove("visible");
        }
    }
    if (flat === 6) {
        for (let i = 0; i < flatSeven.length; i++) {
            flatSeven[i].classList.remove("visible");
        }
    }
    textBox[flat].classList.remove("select");
}

// when flat info is within sections on apartments page, currently <a> link to external appartment page in html

// function linkTo(page) {
//     if (flat === 0) {
//         for (let i = 0; i < flatOne.length; i++) {
//             flatOne[i].classList.remove("visible");
//         }
//         // textBox1.classList.remove("select");
//     }
//     if (flat === 1) {
//         for (let i = 0; i < flatTwo.length; i++) {
//             flatTwo[i].classList.remove("visible");
//         }
//         // textBox2.classList.remove("select");
//     }
//     if (flat === 2) {
//         for (let i = 0; i < flatThree.length; i++) {
//             flatThree[i].classList.remove("visible");
//         }
//         // textBox2.classList.remove("select");
//     }
//     if (flat === 3) {
//         for (let i = 0; i < flatFour.length; i++) {
//             flatFour[i].classList.remove("visible");
//         }
//         // textBox2.classList.remove("select");
//     }
//     if (flat === 4) {
//         for (let i = 0; i < flatFive.length; i++) {
//             flatFive[i].classList.remove("visible");
//         }
//         // textBox2.classList.remove("select");
//     }
//     if (flat === 5) {
//         for (let i = 0; i < flatSix.length; i++) {
//             flatSix[i].classList.remove("visible");
//         }
//         // textBox2.classList.remove("select");
//     }
//     if (flat === 6) {
//         window.location.href = 'YOUR URL';
//     }
// }


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
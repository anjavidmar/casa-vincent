console.log("hello world!");

var h = window.innerHeight;
var w = window.innerWidth;

var site = document.getElementById('site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

console.log('screen height = ' + h, 'screen width = ' + w);
console.log('site height = ' + site_h, 'site width = ' + site_w);

var lang;

if (document.querySelector('html').lang) {
    lang = document.querySelector('html').lang;
} else {
    lang = 'en';
}

console.log(lang);

var header = document.getElementById('header');
var header_h = header.offsetHeight;

var main = document.getElementById('main');

console.log(header, header_h);

// menu/close button scripts:

var button = document.querySelector('.animated-button');
var callback = document.getElementById('callback-form');
var contact = document.getElementById('contact-form');
var menu = document.getElementById('site-navigation');
var slideshow = document.getElementById('slideshow');

function toggleMenu() {
    button.classList.toggle("animated-button--show")
    button.classList.toggle("animated-button--hide")
    menu.classList.toggle("site-navigation--opened")
    menu.classList.toggle("site-navigation--closed")
    header.classList.toggle("ui-plum-background")
}

function toggleForm(el, a, r) {
    var classes = ["callback-form--opened", "callback-form--closed", "contact-form--opened", "contact-form--closed"];
    el.classList.toggle(classes[a]);
    el.classList.toggle(classes[r]);
}

function openSlideshow(photo) {
    console.log(photo);
    slideshow.classList.remove("slideshow--closed");
    slideshow.classList.add("slideshow--opened");
    showPhoto(photo)
}

function closeSlideshow() {
    slideshow.classList.remove("slideshow--opened");
    slideshow.classList.add("slideshow--closed");
    hidePhotos()
}

// var class 
// el.classList.toggle(class[a])

// $('.menu-button').on('click', function() {
//     console.log('hello');
//     $('.animated-button').toggleClass("animated-button--hide");
//     $('.animated-button').toggleClass("animated-button--show");
// });

// window.addEventListener("resize", function() {

// main.style.paddingTop = header_h + 'px';

// window.addEventListener('resize', function() {
//     header_h = header.offsetHeight;

//     main.style.paddingTop = header_h + 'px';
// })




var fixedHeight = document.getElementsByClassName('fixed-height');
var maxHeight = document.getElementsByClassName('max-height');
var minHeight = document.getElementsByClassName('min-height');
var floorplans = document.getElementsByClassName('floorplans-container__inner');
var mainHeight_h = h;

if (w > 639) {
    mainHeight_h = h - 105;
} else if (w > 415) {
    mainHeight_h = h - 115;
} else {
    mainHeight_h = h - 155;
}


if (fixedHeight.length > 0) {
    for (let i = 0; i < fixedHeight.length; i++) {
        fixedHeight[i].style.height = mainHeight_h + 'px';
    }
}

if (maxHeight.length > 0) {
    for (let i = 0; i < maxHeight.length; i++) {
        maxHeight[i].style.maxHeight = mainHeight_h + 'px';
    }
}

if (minHeight.length > 0) {
    for (let i = 0; i < maxHeight.length; i++) {
        minHeight[i].style.minHeight = mainHeight_h + 'px';
    }
}

if (floorplans.length > 0) {
    var floorplans_w = mainHeight_h * 1.2;

    for (let i = 0; i < floorplans.length; i++) {
        floorplans[i].style.maxWidth = floorplans_w + 'px';
    }
}

if (window.pageYOffset > 3) {
    header.classList.add("opaque-on-scroll")
}

console.log(window.pageYOffset);

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 3) {
        header.classList.add("opaque-on-scroll")
    } else {
        header.classList.remove("opaque-on-scroll")
    }
})

window.addEventListener('resize', function() {
    h = window.innerHeight;
    w = window.innerWidth;

    if (fixedHeight.length > 0) {
        if (w > 639) {
            mainHeight_h = h - 105;
        } else if (w > 415) {
            mainHeight_h = h - 115;
        } else {
            mainHeight_h = h - 155;
        }

        for (let i = 0; i < fixedHeight.length; i++) {
            fixedHeight[i].style.height = mainHeight_h + 'px';
        }
    }

    if (maxHeight.length > 0) {
        if (w > 639) {
            mainHeight_h = h - 105;
        } else if (w > 415) {
            mainHeight_h = h - 115;
        } else {
            mainHeight_h = h - 155;
        }

        for (let i = 0; i < maxHeight.length; i++) {
            maxHeight[i].style.maxHeight = mainHeight_h + 'px';
        }
    }

    if (floorplans.length > 0) {
        var floorplans_w = mainHeight_h * 1.2;

        for (let i = 0; i < floorplans.length; i++) {
            floorplans[i].style.maxWidth = floorplans_w + 'px';
        }
    }
})
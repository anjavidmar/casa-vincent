console.log("hello world!");

var h = window.innerHeight;
var w = window.innerWidth;

var site = document.getElementById('site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

// console.log('screen height = ' + h, 'screen width = ' + w);
// console.log('site height = ' + site_h, 'site width = ' + site_w);

console.log($);

var header = document.getElementById('header');
var header_h = header.offsetHeight;

var main = document.getElementById('main');

console.log(header, header_h);


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

var button = document.querySelector('.animated-button')

$('.menu-button').on('click', function() {
    $('.animated-button').toggleClass("animated-button--hide");
    $('.animated-button').toggleClass("animated-button--show");
    $('#site-navigation').toggleClass("site-navigation--opened site-navigation--closed");
    $('header').toggleClass("ui-plum-background");
    header.classList.remove("opaque-on-scroll")
});

$('.contact-link').on('click', function() {
    $('#callback-form').toggleClass("callback-form--opened callback-form--closed");
});

$('.contact-us-link').on('click', function() {
    $('#contact-form').toggleClass("contact-form--opened contact-form--closed");
});

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

if (window.pageYOffset > 0) {
    header.classList.add("opaque-on-scroll")
}

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
        header.classList.add("opaque-on-scroll")
    } else {
        header.classList.remove("opaque-on-scroll")
    }
})
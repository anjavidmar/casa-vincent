console.log("hello world!");

var h = window.innerHeight;
var w = window.innerWidth;

var site = document.getElementById('site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

console.log('screen height = ' + h, 'screen width = ' + w);
console.log('site height = ' + site_h, 'site width = ' + site_w);

var header = document.getElementById('header');
var header_h = header.offsetHeight;

var main = document.getElementById('main');

console.log(header, header_h);

// menu/close button scripts:

var button = document.querySelector('.animated-button')

$('.menu-button').on('click', function() {
    $('.animated-button').toggleClass("animated-button--hide");
    $('.animated-button').toggleClass("animated-button--show");
    $('#site-navigation').toggleClass("site-navigation--opened site-navigation--closed");
    $('header').toggleClass("ui-plum-background");
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
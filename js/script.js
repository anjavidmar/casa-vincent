console.log("hello world!");

var h = window.innerHeight;
var w = window.innerWidth;

var site = document.getElementById('site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

// site.style.minHeight = h + "px";

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

// main.style.minHeight = h + "px";
console.log(header, header_h);

// menu/close button scripts:

function setTransition() {
    var aside = document.getElementsByTagName('aside');

    console.log(aside);

    for (let i = 0; i < aside.length; i++) {
        // console.log(aside[i]);
        aside[i].classList.add('smooth-transition');
    }
}

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

// home page

var homeInner = document.getElementsByClassName('home__inner');
var hero = document.getElementById('hero');
var hero_w;

if (homeInner.length > 0) {
    hero_w = hero.offsetWidth;
    console.log("hero_w : " + hero_w);
}

var button = document.querySelector('.animated-button');
var callback = document.getElementById('callback-form');
var contact = document.getElementById('contact-form');
var menu = document.getElementById('site-navigation');
var slideshow = document.getElementById('slideshow');

var fixedHeight = document.getElementsByClassName('fixed-height');
var maxHeight = document.getElementsByClassName('max-height');
var minHeight = document.getElementsByClassName('min-height');
var innerMinHeight = document.getElementsByClassName('min-height__inner');
var maxHomeWidth = document.getElementsByClassName('max-home-width');
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

console.log(minHeight);


if (minHeight.length > 0) {
    for (let i = 0; i < minHeight.length; i++) {
        minHeight[i].style.minHeight = mainHeight_h + 'px';
    }
}

if (innerMinHeight.length > 0) {
    var innerMinHeight_h = mainHeight_h - 56;

    for (let i = 0; i < innerMinHeight.length; i++) {
        innerMinHeight[i].style.minHeight = innerMinHeight_h + 'px';
    }
}

if (maxHomeWidth.length > 0) {
    var maxWidth = mainHeight_h * 1.65;

    for (let i = 0; i < maxHomeWidth.length; i++) {
        maxHomeWidth[i].style.maxWidth = maxWidth + 'px';
    }
}

if (floorplans.length > 0) {
    var floorplans_w = mainHeight_h * 1.2;

    for (let i = 0; i < floorplans.length; i++) {
        floorplans[i].style.maxWidth = floorplans_w + 'px';
    }
}

var videoContainer = document.getElementsByClassName('video-container');
var videoContainer_w;

if (videoContainer.length > 0) {
    videoContainer_w = videoContainer[0].offsetWidth;
}

var video = document.getElementsByClassName('youtube-video');
var video_w;
var video_h;

if (video.length > 0) {
    video_w = videoContainer_w;
    video_h = videoContainer_w * 0.5625;

    for (let i = 0; i < video.length; i++) {
        video[i].width = video_w;
        video[i].height = video_h;
    }
}

if (window.pageYOffset > 3) {
    header.classList.add("opaque-on-scroll")
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        setTransition()
    }, 2000);
});

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

    if (videoContainer.length > 0) {
        videoContainer_w = videoContainer[0].offsetWidth;
    }

    if (video.length > 0) {
        video_w = videoContainer_w;
        video_h = videoContainer_w * 0.5625;

        for (let i = 0; i < video.length; i++) {
            video[i].width = video_w;
            video[i].height = video_h;
        }
    }
})
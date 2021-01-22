var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--nojs');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeader.classList.remove('page-header--nojs');
  }
});


var sliderItemBefore = document.querySelector('.slider__item--before');
var sliderItemAfter = document.querySelector('.slider__item--after');
var sliderBeforeButton = document.querySelector('.slider__button--before');
var sliderAfterButton = document.querySelector('.slider__button--after');
var sliderRange = document.querySelector('.slider__range')



sliderAfterButton.addEventListener('click', function() {
  if (sliderItemAfter.classList.contains('slider__item--hidden')) {
    sliderItemAfter.classList.remove('slider__item--hidden');
    sliderItemAfter.classList.add('slider__item--shown');
    sliderItemBefore.classList.remove('slider__item--shown');
    sliderItemBefore.classList.add('slider__item--hidden');
    sliderRange.classList.add('slider__range--after');
  }
});

sliderBeforeButton.addEventListener('click', function() {
  if (sliderItemBefore.classList.contains('slider__item--hidden')) {
    sliderItemBefore.classList.remove('slider__item--hidden');
    sliderItemBefore.classList.add('slider__item--shown');
    sliderItemAfter.classList.remove('slider__item--shown');
    sliderItemAfter.classList.add('slider__item--hidden');
    sliderRange.classList.remove('slider__range--after');
  }
});

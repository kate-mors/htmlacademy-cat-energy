var sliderItemBefore = document.querySelector('.slider__item--before');
var sliderItemAfter = document.querySelector('.slider__item--after');
var sliderBeforeButton = document.querySelector('.slider__button--before');
var sliderAfterButton = document.querySelector('.slider__button--after');
var sliderRange = document.querySelector('.slider__range')



sliderAfterButton.addEventListener('click', function() {

  //на 259 строке у li slider__item--after надо добавить slider__item--shown и убрать slider__item--hidden
  //на 251 строке у li sider__item--before надо убрать slider__item--shown и добавить --hidden
  //т добавить смещение range

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

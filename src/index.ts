import './scss/index.scss';

const $thumb: JQuery = $('.thumb');
const $slider: JQuery = $('.slider');
const $min: JQuery = $('.min');
const $max: JQuery = $('.max');
const $tooltip: JQuery = $('.tooltip');
const $progressBar: JQuery = $('.progress-bar');

let min: number = 20;
let max: number = 100;
let dflt: number = 50;
let step: number = 13;
let sliderWidth: number = $slider[0].getBoundingClientRect().right - $slider[0].getBoundingClientRect().left;

$thumb.css('left', `${sliderWidth/(max-min)*(dflt - min)}px`)
$min.html(`${min}`);
$max.html(`${max}`);
$tooltip.html(`${dflt}`);
$progressBar.css('width', `${sliderWidth/(max-min)*(dflt - min)}`)
$thumb.on('mousedown', MouseDownHandler)
$slider.on('mousedown', MouseDownHandler)

function MouseDownHandler(event: JQuery.TriggeredEvent) {
  
  const $document = $(document);
  event.preventDefault();
  if ($(event.target).attr('class') === 'slider' || $(event.target).attr('class') === 'progress-bar') {
    let newCoor = event.clientX - $slider[0].getBoundingClientRect().left;
    let value = newCoor/sliderWidth * (max - min) + min;
    let possibleValue = closestPossibleValueFinder(value);
    let coor = (possibleValue - min)/(max - min) * sliderWidth;

    $thumb.css('left', `${coor}px`);
    $progressBar.css('width', `${coor}`);
    $tooltip.html(`${possibleValue}`);
  }
  
  let shiftX = event.clientX - $thumb[0].getBoundingClientRect().left;
  $document.on('mousemove', mouseMoveHandler);
  $document.on('mouseup', mouseUpHandler);
  
  function possibleValuesCreator() {
    let possibleValues: number[] = [];
    for (let value = dflt; value >= min; value -= step) {
      possibleValues.push(value);
    }
    for (let value = dflt + step; value <= max; value += step) {
      possibleValues.push(value);
    }
    
    return possibleValues;
  }

  function closestPossibleValueFinder(value: number) {
    const possibleValues = possibleValuesCreator();
    let closestValue = possibleValues.reduce((prev: number, curr: number):number => {
      return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
    });
    return closestValue;
  }

  function mouseMoveHandler(event: JQuery.Event) {
    let newCoor = event.clientX - shiftX - $slider[0].getBoundingClientRect().left;

    if (newCoor < 0) {
      newCoor = 0;
    }

    let rightSide = $slider.outerWidth();

    if (newCoor > rightSide) {
      newCoor = rightSide;
    }
    let value = newCoor/sliderWidth * (max - min) + min;
    let possibleValue = closestPossibleValueFinder(value);
    let coor = (possibleValue - min)/(max - min) * sliderWidth;
    $thumb.css('left', `${coor}px`);
    $progressBar.css('width', `${coor}`);
    $tooltip.html(`${possibleValue}`);
  }

  function mouseUpHandler(event: JQuery.Event) {
    $document.off();
  }
}






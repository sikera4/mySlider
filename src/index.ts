import './scss/index.scss';

let $thumb: JQuery = $('.thumb');
let $slider: JQuery = $('.slider');
let $min: JQuery = $('.min');
let $max: JQuery = $('.max');
let $tooltip: JQuery = $('.tooltip');
let min: number = 20;
let max: number = 100;
let dflt: number = 20;
let sliderWidth: number = $slider[0].getBoundingClientRect().right - $slider[0].getBoundingClientRect().left;

$thumb.css('left', `${sliderWidth/(max-min)*(dflt - min)}px`)
$min.html(`${min}`);
$max.html(`${max}`);
$tooltip.html(`${dflt}`);

$thumb.on('mousedown', MouseDownHandler)
$slider.on('mousedown', MouseDownHandler)

function MouseDownHandler(event: JQuery.TriggeredEvent) {
  
  const $document = $(document);
  event.preventDefault();
  if ($(event.target).attr('class') === 'slider') {
    let newCoor = event.clientX - $slider[0].getBoundingClientRect().left - $thumb.outerWidth()/2;
    $thumb.css('left', `${event.clientX - $slider[0].getBoundingClientRect().left - $thumb.outerWidth()/2}px`);
    $tooltip.html(`${newCoor/sliderWidth*(max - min) + min}`);
  }
  
  let shiftX = event.clientX - $thumb[0].getBoundingClientRect().left;
  $document.on('mousemove', mouseMoveHandler);
  $document.on('mouseup', mouseUpHandler);

  function mouseMoveHandler(event: JQuery.Event) {
    let newCoor = event.clientX - shiftX - $slider[0].getBoundingClientRect().left;

    if (newCoor < 0) {
      newCoor = 0;
    }

    let rightSide = $slider.outerWidth();

    if (newCoor > rightSide) {
      newCoor = rightSide;
    }
    
    $thumb.css('left', `${newCoor}px`);
    $tooltip.html(`${(newCoor/sliderWidth*(max - min) + min).toFixed(2)}`);
  }

  function mouseUpHandler(event: JQuery.Event) {
    $document.off();
  }
  
}






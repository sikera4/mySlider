import './scss/index.scss';

let thumb = $('.thumb');

thumb.on('mousedown', thumbMouseDownHandler)

function thumbMouseDownHandler(event: JQuery.Event) {
  const slider = $('#slider');
  thumb.css({
    'position': 'absolute',
    'z-index': '1000',
  });
  moveAt(event.pageX);
  console.log('lol');
  slider.on('mousemove', sliderMouseMoveHandler);
  thumb.on('mouseup', thumbMouseUpHandler);
}

function moveAt(pageX: number) {
  thumb.css('left', `${pageX - thumb.outerWidth()/2}px`)
}

function sliderMouseMoveHandler(event: JQuery.Event) {
  moveAt(event.pageX);
}

function thumbMouseUpHandler(event: JQuery.Event) {
  $('#slider').off();
  thumb.off('mouseup');
}
// I spent too much time trying to figure out the errors in the css.

// Original code from Jerhemy on CodePen

var $die = $('.die'),
    sides = 10,
    initialSide = 0,
    lastFace,
    timeoutId,
    transitionDuration = 500, 
    animationDuration  = 3000

$('ul > li > a').click(function () {
  reset()
  rollTo($(this).attr('href'))
  
  return false
})

function randomFace() {
  var face = Math.floor((Math.random() * sides)) + initialSide
  lastFace = face == lastFace ? randomFace() : face
  return face;
}

function rollTo(face) {
  clearTimeout(timeoutId)
  
  $('ul > li > a').removeClass('active')
  $('[href=' + face + ']').addClass('active')
  
  $die.attr('data-face', face)
}

function reset() {
  $die.attr('data-face', null).removeClass('rolling')
}

$('.randomize, .die').click(function () {
  $die.addClass('rolling')
  clearTimeout(timeoutId)
  
  timeoutId = setTimeout(function () {
    $die.removeClass('rolling')
    
    rollTo(randomFace())
  }, animationDuration)
  
  return false
})
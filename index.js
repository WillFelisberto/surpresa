$('#bouncing').on('mouseover', function() {
  $('#bouncing').css('position','absolute');
  
  $(this).animate({
    'top': Math.random() * window.innerHeight + "px",
    'left': Math.random() * window.innerWidth + "px"
  }, "medium");
})
'use strict';

var TAN = {};

  $(document).ready(function() {
  TAN.menuExpanded = false;

  $('#menu-button').click(function(event) {
    event.preventDefault();

    if (TAN.menuExpanded) {
      $('#menu').hide();
      TAN.menuExpanded = false;
    } else {
      $('#menu').show();
      TAN.menuExpanded = true;
    }
  });

  $('.nav-action').click(function(event) {
    event.preventDefault();

    var selected_id = $(this).attr('id');
    selected_id = selected_id.substring(0, selected_id.length - 4); // Length of '_nav' is 4

    var scrollPosition = $('#' + selected_id).position().top;
    if (TAN.menuExpanded) {
      scrollPosition -= 36; // Height of title bar is 36px
    }

    $('html, body').animate({
      scrollTop: scrollPosition
    }, 'slow');

    if (TAN.menuExpanded) {
      $('#menu').hide();
      TAN.menuExpanded = false;
    }
  });
});
'use strict';

var TAN = {
  init: function() {
    this.menuExpanded = false;
    this.getSelectors();
    this.setEvents();
  },
  getSelectors: function () {
    this.$menu = $('#menu');
    this.$menuButton = $('#menu-button');
    this.$navActions = $('.nav-action');
  },
  setEvents: function (){
    this.$menuButton.click(this.toggleMenu);
    this.$navActions.click(this.scrollNav);
  },
  scrollNav: function(event) {
    console.log($(this).attr('href'));
    if ($(this).attr('href') === "#") {
      event.preventDefault();
      var selected_id = $(this).attr('id');
      selected_id = selected_id.substring(0, selected_id.length - 4); // Length of '_nav' is 4
      console.log(selected_id);
      var scrollPosition = $('#' + selected_id).position().top;
      if (TAN.menuExpanded) {
        scrollPosition -= 36; // Height of title bar is 36px
      }
      $('html, body').animate({
        scrollTop: scrollPosition
      }, 'slow');
      if (TAN.menuExpanded) {
        TAN.$menu.hide();
        TAN.menuExpanded = false;
      }

    }
  },
  toggleMenu: function(event) {
    event.preventDefault();
    if (TAN.menuExpanded) {
      TAN.$menu.hide();
      TAN.menuExpanded = false;
    } else {
      TAN.$menu.show();
      TAN.menuExpanded = true;
    }
  }
};

TAN.init();

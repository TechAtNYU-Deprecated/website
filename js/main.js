'use strict';

$(document).ready(function(){
    $(".video").fitVids();
  });

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
    $(window).resize(this.resizeMenu);
  },
  resizeMenu: function() {
    if (window.matchMedia('(max-width: 35em)').matches) {
      TAN.$menu.hide();
      TAN.menuExpanded = false;
    } else {
      TAN.$menu.show();
      TAN.menuExpanded = true;
    }
  },
  scrollNav: function(event) {
    if ($(this).attr('href').substr(0, 2) === "/#") {
      var selected_id = $(this).attr('id');
      selected_id = selected_id.substr(0, selected_id.length - 4); // Length of '-nav' is 4
      var scrollPosition = $('#' + selected_id).position().top;
      if (TAN.menuExpanded) {
        scrollPosition -= 36; // Height of title bar is 36px
      }
      $('html, body').animate({
        scrollTop: scrollPosition
      }, 200);
      if (TAN.menuExpanded) {
        TAN.$menu.hide();
        TAN.menuExpanded = false;
      }
    } else if ($(this).attr('href')[0] === "#") {
      event.preventDefault();
    }
  },
  toggleMenu: function(event) {
    event.preventDefault();
    if (TAN.menuExpanded) {
      TAN.$menu.slideUp(200);
      TAN.menuExpanded = false;
    } else {
      TAN.$menu.slideDown(200);
      TAN.menuExpanded = true;
    }
  }
};

TAN.init();

'use strict';

var TAN = {};

$(document).ready(function() {
    TAN.menuExpanded = false;

    $('#menu-button').click(function(event) {
        if (TAN.menuExpanded) {
            $('#menu').hide();
            TAN.menuExpanded = false;
        } else {
            $('#menu').show();
            TAN.menuExpanded = true;
        }
    });
});
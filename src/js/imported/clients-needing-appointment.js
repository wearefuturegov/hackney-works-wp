import $ from "jquery"
import "jquery-ui"

$.fn.clients_needing_appointment = function() {

  if (this.length === 0) { return false; }

  $("#clients_needing_appointment #view_more").click(function() {
    if ($("#clients_needing_appointment").hasClass('open')) {
      $("#view_more span.line #swap-word").html("See")
      $("#clients_needing_appointment #hidden-section").slideUp();
    } else {
      $("#clients_needing_appointment #hidden-section").slideDown();

      $("#view_more span.line #swap-word").html("Hide")
    }

    $("#clients_needing_appointment").toggleClass('open');
  });

};

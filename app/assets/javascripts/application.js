// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require materialize-sprockets
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
  $(".button-collapse").sideNav();
  
  $("#close").click(function(){
    $("#success").fadeOut('slow');
  });

  $("#close").click(function(){
    $("#error").fadeOut('slow');
  });

  $("#close").click(function(){
    $("#alert").fadeOut('slow');
  });

  $(".done").click(function(){
    if ( $(this).is(".green") ) {
      $(this).removeClass("green").addClass("blue");
      $(this).children("i").removeClass("mdi-action-done").addClass("mdi-content-undo");
      $(this).parent().parent().children('div').first().children('span').addClass('strk');
      $(this).parent().parent().children('div').last().show();
    } else {
      $(this).removeClass("blue").addClass("green");
      $(this).children("i").removeClass("mdi-content-undo").addClass("mdi-action-done");
      $(this).parent().parent().children('div').first().children('span').removeClass('strk');
      $(this).parent().parent().children('div').last().hide();
    }
  });

});
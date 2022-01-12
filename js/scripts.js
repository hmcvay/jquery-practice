$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $(".yellow").click(function() {
    $(".highlight").fadeIn();
  });
});
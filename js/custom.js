/*global $ */

$(function () {
    'use strict';
    $(".header").height($(window).height());
    new WOW().init();
    $("body").niceScroll({
        cursorcolor: "#f00",
        cursorwidth: "3px"
    });

});
window.onload = function () {
('use strict');
$(".loading").fadeOut("slow");
}

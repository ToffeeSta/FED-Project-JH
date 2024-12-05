$(function () {
    $('body').prepend('<header id="header"></header>')
    $("#header").load("inc.html .head",function(){
        $.getScript('./js/header.js');
    });
});
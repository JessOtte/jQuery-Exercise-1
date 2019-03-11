"use strict";

function main() {

    $('#action').on("click", main);



    $('#grow-me').addClass("big");
    $('#shrink-me').removeClass("big");


    $('#link').attr('href', 'https://www.example.com');
    $('#link').text("somewhere");

    $('#hide-me').css({"display": "none"});
    $('#show-me').css({"display": "block"});
    

    $('h1').text(`Welcome to the show ${$('#name').val()}`);

    console.log($('li'));



}
    
window.addEventListener('resize', () => {

    if ($(window).width() < 780) {
        $("#mobile-menu").fadeIn(100);
    } else
        $('#menu3').fadeOut();

});

$(document).ready(function() {
    if ($(window).width() > 780) {
        $("#main-second").addClass("main-second2");

    } else {
        $("#main-second").removeClass("main-second2");
    }
});

function menuSlide() {
    $("#menu-nav3").toggle(200);
    $("#menu3").css("right", "0");
    $("#menu3").css("display", "block");
    $("#mobile-menu").css("rotate", "90deg");
};


$('.menu3-a').click(function() {
    $(this).parent().parent().parent().find('.menu3-ul').slideUp(250);
    if ($(this).next('.menu3-ul').css("display") == "none")
        $(this).next('.menu3-ul').slideDown();
});

async function LoadAbout(url) {
    $('#main-second').load('./' + url);
}
async function LoadHome(url) {
    $('#main-second').load('./' + url);
}
async function LoadOrder(url) {
    $('#main-second').load('./' + url);
}
async function LoadSpecifications(url) {
    $('#main-second').load('./' + url);
}
async function LoadNewsEvents(url) {
    $('#main-second').load('./' + url);
}
async function Loadarticle(url) {
    $('#main-second').load('./' + url);
}
Loadarticle
//********************************************* */ 
$(function() {
    $(window).scroll(function() {
        var aTop = $('#order-select-table').height();
        if ($(this).scrollTop() >= aTop) {
            $('#order-main-select-case-price').css("display", "block");
        } else {
            $('#order-main-select-case-price').css("display", "none");
        }
    })
});
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 2100) {
            $('#order-main-select-case-price').css("display", "none");
        }
    })
});

// $("#order-price-p1").click(function() {
//     $('#order-main-select-case-price').css("left", -200).fadeOut(500).animtion(500);
// })
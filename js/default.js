/**
 * Created by ggm on 23-Mar-16.
 */


$(function () {
    $("#tab_li3").on('click', function (e) {
        $('.tab_content').hide();
        $element3 = $('#tabs-3');
        $element3.show();
        e.preventDefault();
    });

    $("#tab_li2").on('click', function (e) {
        $('.tab_content').hide();
        $element2 = $('#tabs-2');
        $element2.show();
        e.preventDefault();
    });

    $("#tab_li1").on('click', function (e) {
        $('.tab_content').hide();
        $element1 = $('#tabs-1');
        $element1.show();
        e.preventDefault();
    });

    $(function () {
        $('#tabs-3').hide();
        $('#tabs-2').hide();
        $('#tabs-1').show();
    });
//-------------------------- new - version (after 90 ball)------------//
    $("fieldset input").on('mouseover', function (events) {
        var name = $(this).attr('id');
        if (name == 'sub') return;
        var text;
        var id_tooltip;
        var id_triangle;
        switch(name) {
            case 'firstname1':
                text = 'Введить Ваше ім\'я.';
                id_tooltip = 'fname';
                id_triangle = 'fname_triangle';
                break;
            case 'lastname1': text = 'Введить Ваше прізвище.';
                id_tooltip = 'lname';
                id_triangle = 'lname_triangle';
                break;
            case 'address1': text = 'Введить Ваш e-mail.';
                id_tooltip = 'e_mail';
                id_triangle = 'email_triangle';
                break;
        }
        var $addTooltip = $('footer').before('<div class="tooltip" id="'+ id_tooltip + '">'+ text +'</div>');
        var $addName = $('tooltip');
        $triangle = $('.tooltip').after('<div class="triangle-down" id="' + id_triangle +'"></div>');

    });

    $("fieldset input").on('mouseout', function (events) {
        $('.tooltip').animate({
            opacity: 0,
            left: "+=150",
            height: "toggle"
        }, 200, function(){
            $('.tooltip').remove();
            $('.triangle-down').remove();
        });
        $('.triangle-down').animate({
            opacity: 0,
            left: "+=150",
            top: "-=20",
            height: "toggle"
        }, 200, function(){
        $('.tooltip').remove();
        $('.triangle-down').remove();
        });
    });



});
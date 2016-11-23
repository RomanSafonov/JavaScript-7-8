
$(function () {
    $("#tab_li3").on('mouseover', function (e) {
        $('.tab_content').hide();
        $element3 = $('#tabs-3');
        $element3.show();
        e.preventDefault();
    });

    $("#tab_li2").on('mouseover', function (e) {
        $('.tab_content').hide();
        $element2 = $('#tabs-2');
        $element2.show();
        e.preventDefault();
    });

    $("#tab_li1").on('mouseover', function (e) {
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

});
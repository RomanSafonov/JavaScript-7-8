/**
 * Created by ggm on 23-Mar-16.
 */


$(function () {
    $("#tab_li3 ").on('click', function (e) {
        $( "#tabs-3 p" ).toggle( "slow" );
        $( "#tabs-2 p" ).hide();
        $( "#tabs-1 p" ).hide();
        e.preventDefault();
    });

    $("#tab_li2").on('click', function (e) {
        $( "#tabs-2 p" ).toggle( "slow" );
        $( "#tabs-1 p" ).hide();
        $( "#tabs-3 p" ).hide();
        e.preventDefault();
    });

    $("#tab_li1").on('click', function (e) {
        $( "#tabs-1 p" ).toggle( "slow" );
        $( "#tabs-2 p" ).hide();
        $( "#tabs-3 p" ).hide();
        e.preventDefault();
    });

    $(function () {
        $( "#tabs-1 p" ).show();
        $( "#tabs-2 p" ).hide();
        $( "#tabs-3 p" ).hide();
    });

});
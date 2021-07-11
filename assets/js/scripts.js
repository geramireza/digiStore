$(function (){
    $('#topMenu #buttonLeft').click(function (){
        $('#topMenu nav ul').slideToggle();
        $('#menu').css('right','-300px')
    })

    $('#topMenu #buttonRight').click(function (){
        if($('#menu').css('right') === '-300px')
        {
            $('#menu').css('right','0')
            $('#topMenu nav ul').slideUp();
        }
        else
            $('#menu').css('right','-300px')

    })

    $('#menu .fa-chevron-down').click(function (event){
        $(this).parent('a').siblings('ul').slideToggle()
        event.preventDefault()
    })

    $(window).resize(function (){
        if($('#menu').css('width') != '300px')
            $('#menu .submenu').slideUp()
    })

})


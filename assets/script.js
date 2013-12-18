$(document).ready(function(){

/*	$('.header-link').hover(function() {
		$(this).css({'color': '#A6D785'});
	}, function() {
		$(this).css({'color': 'white'});
	});
*/

    $('#about-header').hover(function() {
        $('#about').show();
    }, function() {
        $('#about').hide();
    });

    $('.dropdownitem').hover(function() {
        $(this).css({'background-color': '#555'});
    }, function() {
        $(this).css({'background-color': '#333'});
    });

    $('.linkheader').hover(function() {
        $(this).css({'color': '#7fa958'});
    }, function() {
        $(this).css({'color': '#629632'});
    });

    $('.greylinkheader').hover(function() {
        $(this).css('color', '#333');
    }, function() {
        $(this).css('color', 'grey');
    });

    $('.link').hover(function() {
        $(this).css({'color': 'grey'});
    }, function() {
        $(this).css({'color': 'black'});
    });

    $('.event-name').hover(function() {
        $(this).css({'color': 'grey'});
    }, function() {
        $(this).css({'color': 'black'});
    });

    $('.credit').hover(function() {
        $(this).css({'color': '#7fa958'});
    }, function() {
        $(this).css({'color': '#629632'});
    });

    $('.creditgrey').hover(function() {
        $(this).css({'color': 'black'});
    }, function() {
        $(this).css({'color': 'grey'});
    });

    $('.tab').click(function() {
        $('.tab').css({'color': 'grey'});
        $(this).css({'color': 'white'});
    });

    $('#panels a').click(function() {
        var panel_id = $(this).attr('href');
        $('.panel').hide();
        $(panel_id).show(400);
    });

    $('.photoone').hover(function() {
        $(this).next().css({'z-index': '3'});
        $(this).next().fadeIn(400);
    }, function() {
    });

    $('.phototwo').hover(function() {
    }, function() {
        $(this).stop().fadeOut(400);
    });

});

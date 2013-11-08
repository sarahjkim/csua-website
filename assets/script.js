$(document).ready(function(){

/*	$('.header-link').hover(function() {
		$(this).css({'color': '#A6D785'});
	}, function() {
		$(this).css({'color': 'white'});
	});
*/
    $('.linkheader').hover(function() {
        $(this).css({'color': '#7fa958'});
    }, function() {
        $(this).css({'color': '#629632'});
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
        $(panel_id).show();
    });

    $('.photoone').hover(function() {
        /*$(this).css({'display': 'none'});
        $(this).next().css({'display': 'inline-block'});*/
        $(this).hide();
        $(this).next().show();
    }, function() {
        $(this).show();
        $(this).next().hide();
        /*$(this).next().css({'display': 'none'});
        $(this).css({'display': 'inline-block'});*/
    });

});

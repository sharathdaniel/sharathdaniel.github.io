$(window).load(function(){
	
  $("#header").sticky({ topSpacing: 0 });
  
  $('body').each(function () {
  	var $spy = $(this).scrollspy('refresh');
  });
  
});

/*=============Parallax Backgrounds==================*/

(function($) {
	'use strict';
	$(document).ready(function(){
		$(window).bind('load', function () {
			parallaxInit();
		});
		function parallaxInit() {
			testMobile = isMobile.any();
			if (testMobile == null) {
				$('.top-parallax-window').parallax("50%", 0.1);
				$('.about_parallax').parallax("27%", 0.1);
				$('.port_parallax').parallax("50%", 0.1);
			}
		}	
		parallaxInit();	 
	});	
	var testMobile;
	var isMobile = {
		BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
		Android: function() { return navigator.userAgent.match(/Android/i); },
		any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
}($));

/*=============DOCUMENT READY==================*/

$(document).ready(function(){
   
	$('.top-parallax-window').height(
		$(window).height()
	);
	
	$('.flexslider').flexslider({
		direction: "vertical",
		directionNav: false,
		animation: "slide",
		slideshowSpeed: 3000,
		startAt: 0
	});
	
	$("#nav_toggle").click(function() { 
		$("#nav").slideToggle(300);
		$("#nav-icon3").toggleClass("open");
	});
	
	if ($(window).width() < 686) {
		$("#nav ul li a").click(function() { 
			$("#nav").hide();
			$("#nav-icon3").removeClass("open");
		});
	}
	
	$(window).resize(function() {
		if ($(window).width() < 686) {
			$("#nav ul li a").click(function() { 
				$("#nav").hide();
				$("#nav-icon3").removeClass("open");
			});
		}
	});

	$.easing.easeInOutCubic = function(x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	};

	$('#nav a[href^="#"]').click(function(e) {
		e.preventDefault();
	    $.scrollTo(this.hash, 1000, { easing:'easeInOutCubic' });
	});
	
	$('body').scrollspy({ target: '#nav' })
	
   	window.scrollReveal = new scrollReveal({});

	$('#about').waypoint(function() {
		$('.chart').easyPieChart({
			easing: 'easeOutBounce',
			animate: 4000,
			size: 100,
			barColor: '#2196f3',
			trackColor: '#d2d2d2',
			lineWidth: 2,
			lineCap: 'square',
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}, { offset: '80%' });
	
	$(".what_ido i").rotate({ 
   	bind: 
     { 
        mouseover : function() { 
            $(this).rotate({animateTo:360})
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0})
        }
     } 
   
	});
	
	$("#skill_set").owlCarousel({
		autoPlay: 3000,
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});
	
	$('.tooltip_show').tooltip({animation:true});
	
	$('.fancybox').fancybox();
   
	$("#back_top").hide();
	
	$(function () {
		
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back_top').fadeIn();
			} else {
				$('#back_top').fadeOut();
			}
		});

		$('#back_top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
	});

	var d = new Date();
	var n = d.getFullYear();
	document.getElementById("copyyear").innerHTML = n;

});

;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};

	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var countdown = function() {
		// var d = new Date("2022-05-28T08:00:00+07:00");

		var d = new Date(Date.now() + 5000);

		// default example
		simplyCountdown('.simply-countdown-one', {
				year: d.getFullYear(),
				month: d.getMonth() + 1,
				day: d.getDate(),
				hours: d.getHours(),
				minutes: d.getMinutes(),
				seconds: d.getSeconds(),
				enableUtc: false,
				onEnd: function() {
					var countdown = document.getElementById('countdown');
					var livestream = document.getElementById('livestream');
					countdown.style.display = 'none';
					livestream.style.display = 'block';
				}
		});
	};

	var formSubmission = function() {
		var responseContainer = document.getElementById('responseContainer');
		var formContainer = document.getElementById('formContainer');
		window.addEventListener("load", function() {
			const form = document.getElementById('rsvp');
			form.addEventListener("submit", function(e) {
				e.preventDefault();
				const data = new FormData(form);
				const action = e.target.action;
				fetch(action, {
					method: 'POST',
					body: data,
				})
				.then(() => {
					formContainer.style.display = 'none';
					responseContainer.style.display = 'block';
				})
			});
		});
	};

	var collapsible = function() {
		var coll = document.getElementsByClassName("collapsible");

		for (var i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight){
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				} 
			});
		}
	};

	var ajax = function() {
		$.ajax({
			url: 'https://script.googleusercontent.com/macros/echo?user_content_key=iqxtafa-zg1W3vgqCjXybT0yYM5XWe6aa3h4dctBRspqc1_tM4R-tJQdYzAczm2rOZ-p5C0-73MdXsFkLjq6RxmFmJVO4BYbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEoSH7AJcn_l1C21T8iYsP8hyhLrHaTSMCc2UvhHBIp7cd8cX-QXImwgL_jim2vnXBQzEB9xT-bKHKATw3r0EfT2DW5H20kYXtz9Jw9Md8uu&lib=M7vB5U2vXQ79BkITwHhiH3fz8cqXX5ADs',
			dataType: 'json',
			success: function(data) {
				if (data.data.length > 0) {
					var testi = document.getElementById('fh5co-testimonial')
					testi.style.display = 'block';
					for (var i in data.data) {
						var item, subItem, people, testi, paragraph;
						var owlDiv = document.getElementById('owl-testimony')
						item = document.createElement('div');
						item.classList.add('item');
						subItem = document.createElement('div');
						subItem.classList.add('testimony-slide')
						subItem.classList.add('active')
						subItem.classList.add('text-center')
						people = document.createElement('span');
						testi = document.createElement('blockquote');
						paragraph = document.createElement('p');
						people.textContent = data.data[i].name;
						paragraph.textContent = data.data[i].testimony;
						testi.appendChild(paragraph);
						subItem.appendChild(people);
						subItem.appendChild(testi);
						item.appendChild(subItem);
						owlDiv.appendChild(item);
					}
					if(data.data.length > 1) {
						$('.owl-carousel-fullwidth').owlCarousel({
							items: 1,
							loop: true,
							margin: 0,
							responsiveClass: true,
							nav: true,
							dots: false,
							smartSpeed: 800,
							autoHeight: false,
						});
					}
				}
			}
		});
	};
	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		countdown();
		formSubmission();
		collapsible();
		ajax();
	});


}());
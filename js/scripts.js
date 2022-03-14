
$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};


    //item-video
    $('.js-btn-video').on('click', function () {
        let videoURL = $(this).parents('.item-video').attr('data-video');
        $(this).parents('.item-video').addClass('active');
        $(this).parents('.item-video').append('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>');
        return false;
    })

	//popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})
    
    
    //items toggle
    if (!!$('.js-items').offset()) {
        $('.js-items .item-wrap.active').each(function() {
            if ($(window).innerWidth()<992) {
                $(this).find('.js-item-content').slideDown(200);
            }
        })
        $('.js-items .item-wrap').on('click', function() {
            if ($(this).hasClass('active')) {
            } else {
                if ($(window).innerWidth()<992) {
                    $(this).parent('.js-items').find('.active').find('.js-item-content').slideUp(200);
                    $(this).find('.js-item-content').slideDown(200);
                }
                $(this).parent('.js-items').find('.active').removeClass('active');
                $(this).addClass('active');
                return false;
            }
        })
    }
    if (!!$('.js-items-inner').offset()) {
        $('.js-items-inner .item-wrap.active').each(function() {
            $(this).find('.js-item-content').slideDown(200);
        })
        $('.js-items-inner .item-wrap').on('click', function() {
            if ($(this).hasClass('active')) {
            } else {
                $(this).parent('.js-items-inner').find('.active').find('.js-item-content').slideUp(200);
                $(this).find('.js-item-content').slideDown(200);
                $(this).parent('.js-items-inner').find('.active').removeClass('active');
                $(this).addClass('active');
                return false;
            }
        })
    }


    //reviews-slider-box
    if (!!$('.reviews-slider-box').offset()) {
        $('.reviews-slider-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
        });
    }
    


    //soft-slider-box
    if (!!$('.soft-slider-box').offset()) {
        let swiperSoft = new Swiper('.swiper-soft', {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 0,
            freeMode: true,
            slidesPerView: 1,
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 6,
                },
                1180: {
                    slidesPerView: 5,
                }
            }
        });
        /*$('.soft-slider-box .slider').slick({
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1180,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });*/
    }
    


    //main-gallery-box
    if (!!$('.main-gallery-box').offset()) {
        $('.main-gallery-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
        });
    }

    //clients-box
    if (!!$('.clients-box').offset()) {

        let swiperClients = new Swiper('.swiper-clients', {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 0,
            freeMode: true,
            slidesPerView: 1,
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
                1180: {
                    slidesPerView: 3,
                }
            }
        });
        /*$('.clients-box .slider').slick({
            dots: false,
            slidesToShow: 3,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1180,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });*/
    }
    //logo
    $('.item-logo .logo-image').on('click', function() {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parents('.clients-box').find('.item-logo.active').removeClass('active');
            $(this).parent().addClass('active');
        }
        return false;
    })
    $('.item-logo .ico-close').on('click', function() {
        $(this).parents('.item-logo').toggleClass('active');
        return false;
    })


    //info-box
    if (!!$('.info-box').offset()) {
        $('.info-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            autoplay: true,
            slidesToScroll: 1,
            speed: 15000,
            autoplaySpeed: 1000,
            cssEase: 'linear',
        });
    }

    //main-news-box
    if (!!$('.main-news-box').offset()) {
        let swiperNews = new Swiper('.swiper-news', {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 0,

        });
        /*$('.main-news-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
        });*/
    }
    
});

(function ($) {
	"use strict";

	////brand-slider
	let tp_brand_slide = new Swiper(".vz-about-brand-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 2000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_text_slide = new Swiper(".vz-text-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 40,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 3000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});
	
	////brand-slider
	let tp_brand_3_slide = new Swiper(".vz-brand-3-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 3000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_text_6_slide = new Swiper(".vz-text-6-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_text_7_slide = new Swiper(".vz-text-7-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_text_slide_2 = new Swiper(".vz-text-slider-active-2", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 40,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_gallery_active = new Swiper(".vz-gallery-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////brand-slider
	let tp_footer_3_active = new Swiper(".vz-footer-3-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});


	//// Brand slider
	let tp_testimonial_slide = new Swiper(".vz-testimonial-active", {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 200,
		autoplay: true,
		pagination: {
			el: ".vz-testimonial-dot",
			clickable: true,
		}
	});

	let testimonial_active = new Swiper('.ar-testimonial-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		spaceBetween: 0,
		speed: 1000,
		navigation: {
			prevEl: '.ar-testimonial-prev',
			nextEl: '.ar-testimonial-next',
		},
		pagination: {
			el: '.swiper-pagination-progress',
			type: 'progressbar',
		},
		on: {
			init: function () {
				let swiper = this;
				let fraction = document.querySelector('.swiper-pagination-fraction');
				if (fraction) {
					let totalSlides = swiper.slides.length - swiper.loopedSlides * 2; 
					fraction.innerHTML = `<span class="current">${swiper.realIndex + 1}</span><span class="total">${totalSlides}</span>`;
				}
			},
			slideChange: function () {
				let swiper = this;
				let fraction = document.querySelector('.swiper-pagination-fraction');
				if (fraction) {
					let current = fraction.querySelector('.current');
					if (current) {
						current.textContent = swiper.realIndex + 1;
					}
				}
			}
		}
	});


	let tp_service_6 = new Swiper ('.vz-service-6-active', {
		direction: 'vertical',
		effect: 'slide',
		slidesPerView: 3,
		loop: true,
		autoplay: {
			delay: 1000,
			reverseDirection: false,
			disableOnInteraction: false,
		},
	})


	var slider = new Swiper ('.vz-hero-2-top-active', {
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,
		loopedSlides: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var thumbs = new Swiper ('.gallery-thumbs', {
		slidesPerView: 3,
		spaceBetween: 10,
		centeredSlides: true,
		loop: true,
		slideToClickedSlide: true,
	});
	slider.controller.control = thumbs;
	thumbs.controller.control = slider;




})(jQuery);

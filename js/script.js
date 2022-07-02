'use strict';

//네브바 스크롤시 배경전환
const navbar = document.querySelector('header');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	if (window.scrollY > navbarHeight) {
		navbar.classList.add('navbar--light');
	} else {
		navbar.classList.remove('navbar--light');
	}
});

// 메인 슬라이더
new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	loop: true,
	// autoplay: {
	// 	delay: 3500,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//스크롤 내릴 시 숫자카운드 증가
$(function () {
	gsap.registerPlugin(ScrollTrigger);

	$('.counter').each(function (index, element) {
		var count = $(this),
			zero = {
				val: 0,
			},
			num = count.data('number'),
			split = (num + '').split('.'), // to cover for instances of decimals
			decimals = split.length > 1 ? split[1].length : 0;

		gsap.to(zero, {
			val: num,
			duration: 3,
			scrollTrigger: element,
			onUpdate: function () {
				count.text(zero.val.toFixed(decimals));
			},
		});
	});
});

// youtube API
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
	new YT.Player('player', {
		videoId: '0Int2E3hrSk',
		playerVars: {
			autoplay: true,
			loop: false,
			playlist: '0Int2E3hrSk',
			origin: 'http://127.0.0.1:5500',
		},
		events: {
			onReady: function (event) {
				event.target.mute();
			},
		},
	});
}

// video overlay
const videoIcon = document.querySelector('.video .icon');
const overlay = document.querySelector('#overlay');
const videoClose = document.querySelector('.close');

videoIcon.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.classList.add('visible');
});
videoClose.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.classList.remove('visible');
});
overlay.addEventListener('click', () => {
	overlay.classList.remove('visible');
});

// 하단 슬라이더 bxslider사용
$(document).ready(function () {
	$('.post_list').bxSlider({
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		slideWidth: 370,
		slideMargin: 30,
		auto: true,
		pager: false,
		nextSelector: '.controls .next',
		prevSelector: '.controls .prev',
	});
});

// project filter

var mixer = mixitup('.project_list', {
	animation: {
		effects: 'fade scale(0.5)',
		easing: 'ease-in-out',
	},
});

// toggle
const toggleBtn = document.querySelector('.toggle');
const navbarMenu = document.querySelector('.main-menu');

toggleBtn.addEventListener('click', () => {
	navbarMenu.classList.toggle('active');
});

// services 애니매이션

const services = document.querySelector('.services');
const serviceThreshold = services.offsetTop - 600;

const showService = () => {
	if (window.scrollY > serviceThreshold) {
		services.classList.add('active');
	}
};

document.addEventListener('scroll', _.throttle(showService, 100));

// excellent mobile animate css
const animateTarget = document.querySelectorAll('[data-move]');

const eventHandler = () => {
	animateTarget.forEach((item, index) => {
		let targetOst = item.offsetTop - 700;
		let targetClass = item.getAttribute('data-move');
		if (window.scrollY > targetOst) {
			item.classList.add(targetClass);
		}
	});
};

document.addEventListener('scroll', _.throttle(eventHandler, 500));

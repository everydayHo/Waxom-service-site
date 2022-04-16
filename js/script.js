const navbar = document.querySelector('header');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	if (window.scrollY > navbarHeight) {
		navbar.classList.add('navbar--light');
	} else {
		navbar.classList.remove('navbar--light');
	}
});

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

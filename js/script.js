
let menuMainLinks = document.querySelectorAll('.menu-main__link');

for (let index = 0; index < menuMainLinks.length; index++) {
	let menuMainLink = menuMainLinks[index];
	menuMainLink.addEventListener('mouselenter', () => {
		menuMainLinks.classList.add('_active');
	})
	menuMainLink.addEventListener('mouseleave', () => {
		menuMainLinks.classList.remove('_active');
	})
}

let menuMainBurger = document.querySelector('.menu-main__burger');
let menuMainBody = document.querySelector('.menu-main__body');

menuMainBurger.addEventListener('click', () => {
	menuMainBurger.classList.toggle('_active');
	_slideToggle(menuMainBody);
})


new Swiper('.announcement-bottom-main', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
})

new Swiper('.product-main-bottom', {
	loop: true,
	speed: 1000,
	breakpoints: {
		992: {
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 1
		}
	}
})

new Swiper('.slider-books', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.title__button-next',
		prevEl: '.title__button-prev'
	},
	breakpoints: {
		1290: {
			slidesPerView: 4
		},
		1100: {
			slidesPerView: 3
		},
		380: {
			slidesPerView: 2,
		}
	}
})

new Swiper('.slider-featured-categories', {
	navigation: {
		nextEl: '.slider-featured-categories__button-next',
		prevEl: '.slider-featured-categories__button-prev'
	},
	spaceBetween: 30,
	autoHeight: true,
	breakpoints: {
		1160: {
			slidesPerView: 7
		},
		1025: {
			slidesPerView: 6
		},
		825: {
			slidesPerView: 5,
			spaceBetween: 18
		},
		660: {
			slidesPerView: 4
		},
		536: {
			slidesPerView: 3
		},
		392: {
			slidesPerView: 2
		},
	},
})

new Swiper('.slider-authors', {

	navigation: {
		nextEl: '.authors-button-next',
		prevEl: '.authors-button-prev'
	},
	spaceBetween: 27,
	breakpoints: {
		1280: {
			slidesPerView: 6
		},
		1100: {
			slidesPerView: 5
		},
		930: {
			slidesPerView: 4
		},
		730: {
			slidesPerView: 3
		},
		540: {
			slidesPerView: 2
		},
	}
})

let icon_burger = document.querySelector('.icon-burger');
let menu_body = document.querySelector('.menu-header__body');

icon_burger.addEventListener('click', e => {
	icon_burger.classList.toggle('_active');
	menu_body.classList.toggle('_active');
})

let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}

let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}

let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	display = window.getComputedStyle(target).display;
	if (display === "none") {
		display = "block";
	}
	target.style.display = display;
	let height = target.offsetHeight;

	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
// ScrollFade 0.1

const fadeElements = document.getElementsByClassName('scrollFade');

const scrollFade = () => {
	const viewportBottom = window.scrollY + window.innerHeight;

	for (let index = 0; index < fadeElements.length; index++) {
		const element = fadeElements[index];
		const rect = element.getBoundingClientRect();

		const elementFourth = rect.height/4;
		const fadeInPoint = window.innerHeight - elementFourth;
		const fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', () => {
    scrollFade();
});
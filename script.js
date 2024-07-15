let slideIndex = 0;
const slides = document.querySelector(".slider__slides");
const dots = document.querySelectorAll(".dot");

showSlides(slideIndex);

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	const totalSlides = document.querySelectorAll(".slider__slide").length;
	const totalVisibleSlides = 4;
	const slideWidth = (100 - 7.5 * 3) / totalVisibleSlides;
	let transformValue = -(n * (slideWidth + 7.5));

	if (n >= totalSlides / totalVisibleSlides) {
		slideIndex = 0;
	} else if (n < 0) {
		slideIndex = totalSlides / totalVisibleSlides - 1;
	}

	slides.style.transform = `translateX(${transformValue}%)`;
	dots.forEach((dot) => dot.classList.remove("active"));
	dots[slideIndex].classList.add("active");
}

// // Auto slide (Optional)
// setInterval(() => {
// 	showSlides((slideIndex += 1));
// }, 3000);

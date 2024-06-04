const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const imgActive = document.querySelector('.banner-img');
const dots = document.querySelectorAll('.dot');
const tagLineDOM = document.querySelector('#banner p');
let index = 0


arrowLeft.addEventListener('click', () => {
	console.log('gauche')
	index = (index - 1 + slides.length) % slides.length;
	selectDot()
	imgSelect()
});

arrowRight.addEventListener('click', () => {
	console.log('droite')
	index = (index + 1) % slides.length;
	selectDot()
	imgSelect()
});


function selectDot(){
	dots.forEach((dot) => {
		dot.classList.remove('dot_selected')
	})
	dots[index].classList.add('dot_selected')
}

function imgSelect(){
	tagLineDOM.innerHTML = slides[index].tagLine;
	imgActive.src = "./assets/images/slideshow/" + slides[index].image
}


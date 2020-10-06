$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});



const switchColorButton = document.getElementById('switch-color__mode');
const htmlTag = document.getElementById('HTML');
const imgTags = document.querySelectorAll('img');

function switchColorMode() {

	htmlTag.classList.toggle('html-color');

	for (const img of imgTags) {
		img.classList.toggle('img-color');
	}

}

function localColorTheme() {
	localStorage.setItem("switchColorTheme", switchColorMode())
	console.log(localStorage.getItem("switchColorTheme"));
};


const switchMode = switchColorButton.addEventListener('click', localColorTheme);

console.log(localStorage.getItem("switchColorTheme"));


// function lightMode() {

// 	htmlTag.classList.add('html-color');

// 	for (const img of imgTags) {
// 		img.classList.add('img-color');
// 	}

// }

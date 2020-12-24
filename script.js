'use strict';

//identifying variables
const counter = document.querySelector('#character-count');
const close = document.querySelector('.close');
const tweetbtn = document.querySelector('#tweetbtn');
const textBox = document.querySelector('#tweet');

//initial conditions
const characterLimit = 140;
const warningLimit = 20;
//let tweet = true;

//used keyup instead of keydown because keydown was glithcy
textBox.addEventListener('keyup', function(str) {
	//console.log(str.key);

	const strLength = str.target.value.length;
	let charLeft = characterLimit - strLength;

	console.log(charLeft);
	counter.textContent = charLeft;

	if (charLeft <= warningLimit) {
		counter.style.color = 'red';
	} else {
		counter.style.color = 'white';
	}

	if (charLeft < 0) {
		tweetbtn.disabled = true;
		tweetbtn.style.backgroundColor = 'gray';
	} else {
		tweetbtn.disabled = false;
		tweetbtn.style.backgroundColor = '#07AAF0';
	}
});

//console.log(charLeft);

// //if (key)

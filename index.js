/* console.log(data);
var random = Math.floor(Math.random() * 48);
 document.getElementById('id').innerHTML = data[random].name;
 document.getElementById('law-title').innerHTML = data[random].title;
 document.getElementById('law-desc').innerHTML = data[random].desc; */


var timer = 0;
var perc = 0;

function updateProgress(percentage) {
	$('#pbar_innerdiv').css("width", percentage + "%");
	$('#pbar_innertext span').text(percentage + "%");
}

function animateUpdate() {
	$('#law-form').fadeOut();
	$('.question').fadeOut();
	$('form button').fadeOut();
	$('#pbar_innertext').fadeIn();
	perc++;
	updateProgress(perc);
	if (perc < 100) {
		timer = setTimeout(animateUpdate, 50);
	} else {
		$('#pbar_innertext').fadeOut();
		$('#law-form').fadeIn();

		flamesCal();
	}
}

function flamesCal() {
	let var1 = $('.yourname').val().toLowerCase();
	let var2 = $('.crush').val().toLowerCase();
	let flame = [
		{ name: 'Friends', numbers: [0, 6, 12], description: 'Oh well! Either one of you have been made the Executive head of the friend zone.' },
		{ name: 'Lovers', numbers: [1, 7, 13], description: 'Oh lucky you! You guys have something that we hardly have in this generation. You both should cherish it and I hope it last forever.' },
		{ name: 'Admirer', numbers: [2, 8, 14], description: 'Oh! Oh!! I guess someone has a Secret Admirer.' },
		{ name: 'Marriage', numbers: [3, 9, 15], description: 'Oh boy!!! This is a strong one. You both are so sprung on each other you guys should get married already if you are not married already.' },
		{ name: 'Enemy', numbers: [4, 10, 16], description: 'I am sure you were expecting something like Marriage yeah?? But yikes!! You guys hate each others guts. Really dunno what can help both of you though.' },
		{ name: 'Siblings', numbers: [5, 11, 17], description: 'Mehn!! This will only feel somehow if you had intentions. But I guess you have been made brother/sister of each other. Enjoy the family zone. And this zone is one that cannot be broken, once a brother always a brother.' }
	]

	console.log(var1, var2);

	let ArrVar1 = var1.split('');
	let ArrVar2 = var2.split('');

	let myArray = ArrVar1.filter(function (el) {
		return ArrVar2.indexOf(el) < 0;
	});

	let myArray2 = ArrVar2.filter(function (el) {
		return ArrVar1.indexOf(el) < 0;
	});

	myArray.push(...myArray2);
	for (let i = 0; i < flame.length; i++) {
		let coo = flame[i].numbers;
		let ki = flame[i].numbers.indexOf(myArray.length);

		if (ki > -1) {
			console.log(flame[i].name);
			$('.answer-title').html(flame[i].name);
			$('.answer-description').html(flame[i].description);
			$('.var1').html(var1);
			$('.var2').html(var2);
			/* let flameArr = localStorage.getItem('flames') ? localStorage.getItem('flames') : [];
			let flameObj = {
				firstPerson: var1,
				secondPerson: var2,
				answer: flame[i].name,
				description: flame[i].description
			}
			flameArr.push(flameObj.toString());
			localStorage.setItem('flames', flameArr); */
			$('.answer').slideDown();
			$('.rrssb-buttons').fadeIn();
		}
	}
}

$(document).ready(function () {
	$("#law-id").on('click', '.btn', function (e) {
		console.log('me');
		e.preventDefault();
		$('.answer').hide();
		$("#law").fadeOut();
		$("#content").fadeIn();
		$('.question').fadeIn();
		$('form button').fadeIn();
		
	});

	$(document).on('click', '.close', function (e) {
		$("#content").fadeOut();
		$("#law").fadeIn();
	});

	$("form").on('click', 'button', function (e) {
		e.preventDefault();
		clearTimeout(timer);
		perc = 0;
		animateUpdate();
	});
});
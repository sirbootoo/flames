/* console.log(data);
var random = Math.floor(Math.random() * 48);
 document.getElementById('id').innerHTML = data[random].name;
 document.getElementById('law-title').innerHTML = data[random].title;
 document.getElementById('law-desc').innerHTML = data[random].desc; */

$(document).ready(function () {
	$("#law-id").on('click', '.btn', function (e) {
		console.log('me');
		e.preventDefault();
		$("#law").fadeOut();
		$("#content").fadeIn();
	});

	$(document).on('click', '.close', function(e){
		$("#content").fadeOut();
		$("#law").fadeIn();
	});

	$("form").on('click', 'button', function (e) {
		e.preventDefault();
		let var1 = $('.yourname').val();
		let var2 = $('.crush').val();
		let flame = [
			{ name: 'Friends', numbers: [1, 7] },
			{ name: 'Lovers', numbers: [2, 8] },
			{ name: 'Admirer', numbers: [3, 9] },
			{ name: 'Marriage', numbers: [4, 10] },
			{ name: 'Enemy', numbers: [5, 11] },
			{ name: 'Sibling', numbers: [6, 12] }
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
				$('#law-form').fadeOut();
				$('.question').fadeOut();
				$('form button').fadeOut();

				$('.answer-title').html(flame[i].name);
				$('.answer').slideDown();
			}
		}
	})
});
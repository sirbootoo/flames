/* console.log(data);
var random = Math.floor(Math.random() * 48);
 document.getElementById('id').innerHTML = data[random].name;
 document.getElementById('law-title').innerHTML = data[random].title;
 document.getElementById('law-desc').innerHTML = data[random].desc; */


var timer = 0;
var perc = 0;
var var1;
var var2;
var logoSample = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAKfSURBVHjabJNNSFRRGIafc+6d8Y6OM42aTmpNauRgUVBRVEwZCC6kdtGqRRBtWkWLKGgXtghaRIsK3ES0L4pKCPpZREX2oxnVlOn4V4026Tjj3HvPPS2asRp64OODw8v3cXjfTxinrlOGBHSxzgPjxW4Cqvj+j7icy8AVIAIcK5YPuAMc/9+2fxEioWz3sFoozCrloVzVrLKLtud6XQiRKKlKcrPYo8AbhEiq+Xxba2MN7dEwtqsQCExT8moszfRMNmFUWwN4uhKI/z1gHikCai6/fefaRlqiYW6+HGEunQU00cYaejbGeJacjgym0hEjGBhC66UvhIEWlbPHN6yqo7UhzLUbz9mxup65C4dInTtIxPLRd/sFW1vqaaoNoRw1DawAQhI4Awzi6fjahjD97ybAUfTuWc+Je6+5l5zmTOc6mMnydOQbm2N1sGh3AZNArwR6Pa0fRGqD5BYdvk7MEoo3sbG1npXVFsv8JtviTdAWZWjyB8pRUOkHuAqcNYEpDQOmFJ2O8iCbpyfegRSCk53rlszZFKtjYCiFqzyElAAPgQkTuGgIcfR7JkeouRYCfrw/Li1RcD38oQCW5UMvFKCqog/YYgJ9QAbHPTKbt5cnNrVy980op+uCzOVshBCYhmR4LM2+DTFG0vNgGu+BS8AjUYqyFiLp5QttBza38flnjudPPoDt/k5ulUX37g6k43JncAwjGOhH626A0oA1wEfl6UVs10q0NxK2fGQLLkJAqMLHeGaBF5++KllVYQjIF+13SkFKAi2GFN+wfMOP36ZiZqWfppogrqeZTM+jXYURtO4XN8cAp/wWvgA5YMoIWiOelPtHZ7JMZBYywm/uNSorQOvRona0/Bb+ZhcgBRQMQ14CUsAtoAoolIt/DQBMqAUSa5wR2gAAAABJRU5ErkJggg==';

function updateProgress(percentage) {
	$('#pbar_innerdiv').css("width", percentage + "%");
	$('#pbar_innertext span').text(percentage + "%");
}

window.onload = function (e) {
	if (GetURLParameter('val1') && GetURLParameter('val2')) {
		console.log(GetURLParameter('val1'), GetURLParameter('val2'));
		$('.answer').hide();
		$("#law").fadeOut();
		$("#content").fadeIn();
		$('.question').fadeIn();
		$('form button').fadeIn();
		clearTimeout(timer);
		perc = 0;
		var val1 = GetURLParameter('val1');
		var val2 = GetURLParameter('val2');
		console.log(val1, val2);
		animateUpdate(val1, val2);
	}
}


function animateUpdate(val1, val2) {
	$('#law-form').fadeOut();
	$('.question').fadeOut();
	$('form button').fadeOut();
	$('#pbar_innertext').fadeIn();
	perc++;
	updateProgress(perc);
	if (perc < 100) {
		timer = setTimeout(animateUpdate(val1, val2), 50);
	} else {
		$('#pbar_innertext').fadeOut();
		$('#law-form').fadeIn();

		console.log(val1, val2);

		flamesCal(val1, val2);
	}
}

function flamesCal(val1, val2) {

	var1 = decodeURIComponent(val1.toLowerCase());
	var2 = decodeURIComponent(val2.toLowerCase());

	let flame = [
		{ name: 'Friends', numbers: [0, 6, 12], description: 'Oh well! Either one of you have been made the Executive head of the friend zone.' },
		{ name: 'Lovers', numbers: [1, 7, 13], description: 'Oh lucky you! You guys have something that we hardly have in this generation. You both should cherish it and I hope it last forever.' },
		{ name: 'Admirers', numbers: [2, 8, 14], description: 'Oh! Oh!! I guess someone has a Secret Admirer.' },
		{ name: 'Marriage', numbers: [3, 9, 15], description: 'Oh boy!!! This is a strong one. You both are so sprung on each other you guys should get married already if you are not married already.' },
		{ name: 'Enemies', numbers: [4, 10, 16], description: 'I am sure you were expecting something like Marriage yeah?? But yikes!! You guys hate each others guts. Really dunno what can help both of you though.' },
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
			var flameUrl = 'https://flamesng.herokuapp.com/?val1='+var1+'&val2='+var2;
			var text;
			if(flame[i].name.toLowerCase() == 'marriage'){
				text = 'I just found out that '+var1+' & '+var2+' are ripe for '+flame[i].name+'. You can check this out at';
			}else if(flame[i].name.toLowerCase() == 'friends'){
				text = 'I just found out that '+var1+' & '+var2+' have either one in '+flame[i].name+' zone. You can check this out at';
			}else if(flame[i].name.toLowerCase() == 'lovers'){
				text = 'I just found out that '+var1+' & '+var2+' are '+flame[i].name+'. You can check this out at';
			}else if(flame[i].name.toLowerCase() == 'admirers' || flame[i].name.toLowerCase() == 'enemies' || flame[i].name.toLowerCase() == 'siblings'){
				text = 'I just found out that '+var1+' & '+var2+' are '+flame[i].name+'. You can check this out at';
			}
			var sharingurlFacebook = 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(flameUrl);
			var twitterInfo = 'text='+encodeURIComponent(text)+'&amp;url='+encodeURIComponent(flameUrl)+'&amp;hashtags=flamesMatch';
			var sharingurlTwitter = 'https://twitter.com/share?'+twitterInfo; 
			$('.icon--twitter a').attr('href', sharingurlTwitter);
			$('.icon--facebook a').attr('href', sharingurlFacebook);
			$('.answer').slideDown();
			$('.rrssb-buttons').fadeIn();
		}
	}
}

//Convert base64 into blob
//cf http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
function b64toBlob(b64Data, contentType, sliceSize) {
	contentType = contentType || '';
	sliceSize = sliceSize || 512;

	var bb64 = btoa(b64Data);

	var byteCharacters = atob(bb64);
	var byteArrays = [];

	for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		var slice = byteCharacters.slice(offset, offset + sliceSize);

		var byteNumbers = new Array(slice.length);
		for (var i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		var byteArray = new Uint8Array(byteNumbers);

		byteArrays.push(byteArray);
	}

	var blob = new Blob(byteArrays, { type: contentType });
	return blob;
}

OAuth.initialize('gVjn080iuDvRAmFP9paf1uP0LHw');

twitterLogin = function () {
	var oAuthRequest;
	OAuth.initialize('bbii4DU7QS7yQZH55rqC0acFz0s');
	oAuthRequest = OAuth.create('twitter');
	if (!oAuthRequest) {
		OAuth.popup(
			'twitter', { cache: true }
		).done(function (oauthResult) {
			return oauthResult.get(
				'https://api.twitter.com/1.1/account/verify_credentials.json'
			);
		});
		return OAuth.create('twitter');
	}
	return oAuthRequest;
};

twitterChunkedUpload = function (base64ImageString, fileSize, chunkSize) {
	var mediaIdString;
	var oAuthRequest = twitterLogin();
	oAuthRequest.post(
		'https://upload.twitter.com/1.1/media/upload.json',
		{
			data: {
				command: 'INIT',
				media_type: 'image/jpeg',
				total_bytes: fileSize
			}
		}
	).done(function (twitterResponse) {
		// INIT successfully sent
		// upload the one and only chunk to twitter
		mediaIdString = twitterResponse.media_id_string;
		oAuthRequest.post(
			'https://upload.twitter.com/1.1/media/upload.json',
			{
				headers: { 'Content-Transfer-Encoding': 'base64' },
				data: {
					command: 'APPEND',
					media_data: base64ImageString.slice(0, chunkSize),
					media_id: mediaIdString,
					segment_index: 0
				}
			}
		).done(function () {
			// first APPEND successful
			oAuthRequest.post(
				'https://upload.twitter.com/1.1/media/upload.json',
				{
					headers: { 'Content-Transfer-Encoding': 'base64' },
					data: {
						command: 'APPEND',
						media_data: base64ImageString.slice(
							chunkSize,
							base64ImageString.length
						),
						media_id: mediaIdString,
						segment_index: 1
					}
				}
			).done(function () {
				// second APPEND successful
				oAuthRequest.post(
					'https://upload.twitter.com/1.1/media/upload.json',
					{
						data: {
							command: 'FINALIZE',
							media_id: mediaIdString
						}
					}
				).done(function () {
					// FINALIZE successful
					tweet(
						oAuthRequest,
						'Chunked (size ' + chunkSize + ') Append!',
						mediaIdString
					);
				}).fail(function (err) {
					console.log('FINALIZE Failed');
					console.log(err);
				});
			}).fail(function (err) {
				console.log('second APPEND Failed');
				console.log(err);
			});
		}).fail(function (err) {
			console.log('first APPEND Failed');
			console.log(err);
		});
	}).fail(function (err) {
		console.log('INIT Failed');
		console.log(err);
	});
};

function GetURLParameter(sParam) {

	var sPageURL = window.location.search.substring(1);

	var sURLVariables = sPageURL.split('&');

	for (var i = 0; i < sURLVariables.length; i++) {

		var sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] == sParam) {

			return sParameterName[1];

		}

	}

}

function dataURLtoBlob(dataURL) {
	//http://mitgux.com/send-canvas-to-server-as-file-using-ajax
	// Decode the dataURL    
	var binary = atob(dataURL.split(',')[1]);
	// Create 8-bit unsigned array
	var array = [];
	for (var i = 0; i < binary.length; i++) {
		array.push(binary.charCodeAt(i));
	}
	// Return our Blob object
	return new Blob([new Uint8Array(array)], { type: 'image/png' });
}



$(document).ready(function () {
	$("#law-id").on('click', '.btn', function (e) {
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
		var1 = $('.yourname').val();
		var2 = $('.crush').val();
		animateUpdate(var1, var2);
	});

	var element = $(".container")[0];
	var getCanvas = [];

	/* $('.social-icons').on('click', '.icon--twitter', function (e) {
		console.log(element);

		html2canvas(element, {
			onrendered: function (canvas) {
				getCanvas[0] = canvas;
				console.log(canvas);
			}
		}).then(payl => {
			console.log(payl);
			$('.renderCanvas').css({
				width: '500px',
				height: '450px'
			});
			payl.width = 100;
			payl.height = 100;
			var imageData = payl.toDataURL("image/jpeg");
			var imageDataString = imageData.split(',');
			var file = dataURLtoBlob(imageData);
			console.log(imageDataString[1], file);
		});

	}); */
});

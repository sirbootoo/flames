<!DOCTYPE html>
<html>

<head>
	<title>New Tab - Flames Extension</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="styles.css" type="text/css" />
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
</head>

<body>
	<div class="container">
		<div id="law" class="law">
			<p id="law-id">
				<span class="title pointer">Flames</span>
				<br>
				<span id="id">Do you still remember back then in Secondary School (junior secondary school for some and Senior for others) ? A game
					we played to use style to know how we and our crush clicked. Yeah I just brought that game to you, so you can know your
					chance with your crush with the same old technique of
					<span>
						<b>FLAMES _</b>
					</span>
				</span>
				<br>
				<button class="btn transition">Try it out</button>
			</p>
		</div>
		<div id="content" class="content">
			<p id="law-title"></p>
			<p id="law-desc">
				<form id="law-form">
					<span class="close"><svg aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-times fa-w-12 fa-spin fa-lg"><path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z" class=""></path></svg></span>
					<h1 class="pointer">Flames</h1>
					<div class="question">
						<input type="text" class="yourname" required/>
						<label>Your Name</label>
					</div>
					<div class="question">
						<input type="text" class="crush" required/>
						<label>Crush's Name</label>
					</div>
					<div class="question">
						<input type="text" required/>
						<label>Email Address</label>
					</div>
					<button>Submit</button>


					<div class="answer">
						<span class="answer-title"></span>
						<p class="answer-description"></p>
						<span class="try-again"><svg aria-hidden="true" data-prefix="fas" data-icon="redo-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-redo-alt fa-w-16 fa-spin fa-lg"><path fill="currentColor" d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z" class=""></path></svg> Try Again</span>
					</div>



				</form>

			</p>
		</div>
	</div>
	<div id="pbar_outerdiv">
		<div id="pbar_innerdiv"></div>
		<div id="pbar_innertext">Loading Your Fate <br> <span>0</span></div>
	</div>
</body>
<script type="text/javascript" src="jquery.min.js"></script>
<script src="index.js"></script>

</html>
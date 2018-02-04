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
						<span class="try-again"><img src="data:image/png;base64,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"></span>
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
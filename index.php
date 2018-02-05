<!DOCTYPE html>
<html>

<head>
	<title>New Tab - Flames Extension</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="styles.css" type="text/css" />
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
	<link rel="stylesheet" href="./rrssb.css" />
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
						<div class="people">
							<span class="var1"></span> x <span class="var2"></span>
						</div>
						<span class="answer-title"></span>
						<p class="answer-description"></p>
					</div>

					
					<!--Social Buttons-->
					<ul class="social-icons">
						<li class="icon icon--twitter">
							<a href="#">
								<span class="icon__name">Twitter</span>
							</a>
						</li>
						<li class="icon icon--facebook">
							<a href="#">
								<span class="icon__name">Facebook</span>
							</a>
						</li>
					</ul>
					<!-- Buttons end here -->

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
<script src="./rrssb.min.js" type="text/javascript"></script>
<script src="./oauth.min.js" type="text/javascript"></script>
<script src="./html2canvas.min.js" type="text/javascript"></script>
<script src="index.js"></script>

</html>
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

					<ul class="rrssb-buttons clearfix">
						<li class="rrssb-email">
							<!-- Replace subject with your message using URL Encoding: http://meyerweb.com/eric/tools/dencoder/ -->
							<a href="mailto:?Subject=your%20subject">
								<span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M20.11 26.147c-2.335 1.05-4.36 1.4-7.124 1.4C6.524 27.548.84 22.916.84 15.284.84 7.343 6.602.45 15.4.45c6.854 0 11.8 4.7 11.8 11.252 0 5.684-3.193 9.265-7.398 9.3-1.83 0-3.153-.934-3.347-2.997h-.077c-1.208 1.986-2.96 2.997-5.023 2.997-2.532 0-4.36-1.868-4.36-5.062 0-4.75 3.503-9.07 9.11-9.07 1.713 0 3.7.4 4.6.972l-1.17 7.203c-.387 2.298-.115 3.3 1 3.4 1.674 0 3.774-2.102 3.774-6.58 0-5.06-3.27-8.994-9.304-8.994C9.05 2.87 3.83 7.545 3.83 14.97c0 6.5 4.2 10.2 10 10.202 1.987 0 4.09-.43 5.647-1.245l.634 2.22zM16.647 10.1c-.31-.078-.7-.155-1.207-.155-2.572 0-4.596 2.53-4.596 5.53 0 1.5.7 2.4 1.9 2.4 1.44 0 2.96-1.83 3.31-4.088l.592-3.72z"/></svg></span>
								<span class="rrssb-text">email</span>
							</a>
						</li>
						<li class="rrssb-facebook">
							<!--  Replace with your URL. For best results, make sure you page has the proper FB Open Graph tags in header: https://developers.facebook.com/docs/opengraph/howtos/maximizing-distribution-media-content/ -->
							<a href="https://www.facebook.com/sharer/sharer.php?u=http://your-url-here" class="popup">
								<span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"/></svg></span>
								<span class="rrssb-text">facebook</span>
							</a>
						</li>
						<li class="rrssb-twitter">
							<!-- Replace href with your Meta and URL information  -->
							<a href="https://twitter.com/intent/tweet?text=https://rrssb.netlify.com/"
							class="popup">
								<span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z"/></svg></span>
								<span class="rrssb-text">twitter</span>
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
<script src="index.js"></script>

</html>
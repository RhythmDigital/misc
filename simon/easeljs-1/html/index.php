<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Simon Easel 1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>


	<canvas id="canvas" width="900" height="700" />


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
	<script src="http://code.createjs.com/easeljs-0.7.1.min.js"></script>

    <script src="js/dev/libs/Function.prototype.bind.js"></script>
    <script src="js/dev/libs/Main.js"></script>

	<script src="js/dev/Simon.js"></script>
    <script src="js/dev/AppManager.js"></script>


	<script>
		MAIN.init = function()
		{
			var app = MAIN.namespace('MAIN.app');
			var appManager = new app.AppManager();
			appManager.init();
		};

		$(function(){
			MAIN.init();
		});
	</script>

</body>
</html>
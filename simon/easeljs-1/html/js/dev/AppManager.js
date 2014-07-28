(function(){

    var namespace = MAIN.namespace('MAIN.app');


    if (namespace.AppManager === undefined)
    {
        namespace.AppManager = function()
        {
        }

        var p = namespace.AppManager.prototype;


        p.init = function()
        {
			this.initEaselJS();

			// now create a simon
			this.createSimon();

			// move the simon
			TweenMax.to(this.simon1.bmp, 3, {x:600, y:300, scaleX:.5, scaleY:.5, rotation:30, ease:Sine.easeInOut});
        }

		p.createSimon = function()
		{
			// create a Simon + initialise
			this.simon1 = new namespace.Simon();
			this.simon1.init();

			// add the Simon's Bitmap to the stage
			this.stage.addChild(this.simon1.bmp);
		}


		// INITIALISE EASEL JS

		p.initEaselJS = function()
		{
			this.ctx = document.getElementById('canvas').getContext("2d");

			this.stage = new createjs.Stage(this.ctx.canvas);
			this.stage.name = 'stage';

			// mouse / touch stuff
			//this.stage.enableMouseOver(10);
			//createjs.Touch.enable(this.stage);

			createjs.Ticker.setFPS(60);
			createjs.Ticker.useRAF = true;

			// make stage update every frame
			createjs.Ticker.addEventListener("tick", this.render.bind(this)); // bound to scope of this instance of this class
		}

		p.render = function()
		{
			this.stage.update();
		}
    }

})();
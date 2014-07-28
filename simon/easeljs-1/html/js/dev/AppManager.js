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
			console.log("EaselJS initialised!", this.stage.canvas);
        };

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
		}
    }

})();
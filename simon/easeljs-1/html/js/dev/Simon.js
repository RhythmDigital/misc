(function(){

	var namespace = MAIN.namespace('MAIN.app');


	if (namespace.Simon === undefined)
	{
		namespace.Simon = function()
		{
		}

		var p = namespace.Simon.prototype;


		p.init = function()
		{
			// create an easel "Bitmap" instance – passing a URL for an image
			this.bmp = new createjs.Bitmap("img/horses.jpg");

			// scale down to start
			this.bmp.scaleX = this.bmp.scaleY = 0.2;
		};
	}

})();
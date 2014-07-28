var RHYTHM = RHYTHM || {};
RHYTHM.Utils = RHYTHM.Utils || {};

RHYTHM.Utils.Tools = (function(){

	return {
		getParameterByName: function(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			
			var regexS = "[\\?&]" + name + "=([^&#]*)";
			var regex = new RegExp(regexS);
			var results = regex.exec(window.location.search);

			if(results == null)
				return "";
			else
				return decodeURIComponent(results[1].replace(/\+/g, " "));
		},

		getCoords: function(e) {

			var x = e.clientX || e.pageX;
			var y = e.clientY || e.pageY;

			if(e.changedTouches) {
				x = (e.changedTouches[0].clientX || e.changedTouches[0].pageX);
				y = (e.changedTouches[0].clientY || e.changedTouches[0].pageY);
			}
			
			newX = x;
			newY = y;

			return {x:newX, y:newY, event:e};
		},

		mapRange: function(x, in_min, in_max, out_min, out_max)
        {
          return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        },

        getPercentageAtValueBetween: function(min, max, value)
        {
            return (value-min)/(max - min);
        }
	}

})();
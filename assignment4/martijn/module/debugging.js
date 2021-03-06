var Debugging = function(options) {

	// set vars to the good scope
	var _this = this;
	// add the options instead of the parameters
	var _options = {
		code: ,
		message: ""
	}
	var debugId = _this.debugId;

}; 

// Prototype everything so that every functions inherits the same options = above.

Debugging.prototype.geoErrorHandler = function() {

    debug_message('geo.js error '+code+': '+message);
    debug_message('geo.js error '+_options.code+': '+_options.message);

}
Debugging.prototype.debugMessage = function(){
    
    (customDebugging && debugId)?document.getElementById(debugId).innerHTML:console.log(_options.message);

}
Debugging.prototype.setCustomDebugging = function(){

    customDebugging = true;

}

module.exports;
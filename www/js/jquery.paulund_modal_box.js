(function($){

	// Defining our jQuery plugin
	$.fn.paulund_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : "250",
			width : "500",
			title:"JQuery Modal Box Demo",
			description: "Example of how to create a modal box.",
			top: "20%",
			left: "30%",
		},prop);

		return this.click(function(e){
		     //Do stuff here
		});

		return this;
	};

})(jQuery);

$(function() {

    // create accordion object for managing click state
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// find the header of submenu with ".link" selector
		var links = this.el.find(".link");
		// Evento
		links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
	};

	Accordion.prototype.dropdown = function(e) {
        let $el = e.data.el;        
        let $this = $(this); 
        let $next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass("open");

		if (!e.data.multiple) {
			$el
				.find(".submenu")
				.not($next)
				.slideUp()
				.parent()
				.removeClass("open");
		}
	};

	var accordion = new Accordion($("#accordion"), false);
});

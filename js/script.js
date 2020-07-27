(function() {

	'use strict';

	// banner flexslider
	$('.flexslider').flexslider({
		animation: 'slide',
		pauseOnHover: true,
		controlNav: false,
		prevText: '',
		nextText: ''
	});

	// portfolio items masonry
	var $grid = $('#grid');
	$grid.imagesLoaded( function() {
		$grid.masonry({
			itemSelector: 'li'
		});
	});

})();
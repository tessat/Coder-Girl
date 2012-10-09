// ***************
// Includes
// ***************

// ***************
// Events
// ***************

$('ul.columns li').live('mouseenter', function() {
	
	growColumn($(this).children('div'));
	
});

$('ul.columns li').live('mouseleave', function() {
	
	shrinkColumn($(this).children('div'));
	
});

// ***************
// Functions
// ***************

function growColumn(col_elem) {
	
	$(col_elem).animate({
		height: '400px',
		width: '1%'
	}, 400, function() {

	});
	
}

function shrinkColumn(col_elem) {
	$(col_elem).animate({
		width: '100%'
	}, 400, function() {
		
	});
}
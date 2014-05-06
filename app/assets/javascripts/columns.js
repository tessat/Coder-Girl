// On ready
$(function($){
  
  // ***************
  // Includes
  // ***************

  // ***************
  // Events
  // ***************

  $('ul.columns li').on('mouseenter', function() {
  	growColumn($(this).children('div'));
  });

  $('ul.columns li').on('mouseleave', function() {
  	shrinkColumn($(this).children('div'));
  });

  // ***************
  // Functions
  // ***************

  function growColumn(col_elem) {
  	$(col_elem).animate({
  		height: '400px',
  		width: '1%'
  	}, 400);
  }

  function shrinkColumn(col_elem) {
  	$(col_elem).animate({
  		width: '100%'
  	}, 400);
  }
  
  
})


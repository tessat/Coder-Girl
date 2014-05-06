// On ready
$(function($){
  
  // ***************
  // Includes
  // ***************

  // ***************
  // Events
  // ***************
  
  // Index load
	if ($('.pages').hasClass('index')) {
    run_hello_world();
	
	// Sandbox load
	} else if ($('.pages').hasClass('sandbox')) {
		
	}
	
	// On hello world cursor done
	$('.hello-world .cursor').on('cursorDone', function() {
  	do_cursor();
  });
	
	
  // ***************
  // Functions
  // ***************

  function run_hello_world() {
  	// Create the hello world element
  	$('body').append('<div id="page-overlay"><span class="hello-world">\><span class="cursor">&nbsp;</span></span></div>');
  	// Run
  	hello_world("hello world");

  	// On complete
  	$('.hello-world').on('helloWorldDone', function() {
  		$('#page-overlay').fadeOut(1000, function() {
  			$('.hello-world .cursor').off('cursorDone');
  			$('#page-overlay').remove();
  		});
  	});
  }
  
  function hello_world(text) {
  	do_cursor();
  	setTimeout(function() {
  		print_char(text, function() {
  			setTimeout(function() {
  				$('.hello-world .cursor').css('display', 'block');
  				setTimeout(function() {
  					$('.hello-world').trigger('helloWorldDone');
  				}, 1000);
  			}, 1000);
  		});
  	}, 2000);
  }

  function do_cursor() {
  	$('.hello-world .cursor').addClass('hidden');
  	setTimeout(function() {
  		$('.hello-world .cursor').removeClass('hidden');
  		setTimeout(function() {
  			$('.hello-world .cursor').trigger('cursorDone');
  		}, 500);
  	}, 500);
  }

  function print_char(text, callback) {
  	callback = callback || $.noop;
  	if (text.length == 0) {
  		callback(true);
  	} else {
  		var charAt = text.charAt(0);
  		if (charAt == ' ') {
  			charAt = "&nbsp;";
  		}
  		setTimeout(function() {
  			$('.hello-world .cursor').removeClass('hidden');
  			$('.hello-world .cursor').before(charAt);
  			print_char(text.substr(1), function(r) {
  				callback(true);
  			});
  		}, 300);
  	}
  }
  
  
})


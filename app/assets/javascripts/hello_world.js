// ***************
// Includes
// ***************

// ***************
// Events
// ***************

$('.hello-world .cursor').live('cursorDone', function() {
	do_cursor();
});


// ***************
// Functions
// ***************

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
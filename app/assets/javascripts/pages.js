// ***************
// Includes
// ***************

// ***************
// Events
// ***************

// On index load
$('.pages.index').ready(function() {
	run_hello_world();
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
	$('.hello-world').live('helloWorldDone', function() {
		$('#page-overlay').fadeOut(1000, function() {
			$('.hello-world .cursor').die('cursorDone');
			$('#page-overlay').remove();
		});
	});
}
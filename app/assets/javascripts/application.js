// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


// ***************
// Includes
// ***************

// ***************
// Events
// ***************

// On load
$(document).ready(function() {
	load_background();
	preload_images();
});

// Img swap in
$('img.hover-swap').live('mouseenter', function() {
	var new_src = $(this).attr('src').replace('.png', '-selected.png');
	$(this).attr('src', new_src);
});

// Img swap out
$('img.hover-swap').live('mouseleave', function() {
	var new_src = $(this).attr('src').replace('-selected', '');
	$(this).attr('src', new_src);
});

// ***************
// Functions
// ***************

function load_background() {
	$.ajax({
		url: "/background.txt",
		data: {},
		type: 'GET',
		dataType: 'text',
		success: function(text) {
			$('body').prepend('<div id="background"><span></span></div>');
			var style = "#background span:before {content: '"+text+text+text+"';}";
			$('head').append('<style>'+style+'</style>');
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {

		},
	});
}

function preload_images() {
	var images = new Array();
	$('img.hover-swap').each(function() {
		images.push($(this).attr('src').replace('.png', '-selected.png'));
	});
	preload(images);
}

function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
	});
}

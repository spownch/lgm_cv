window.onscroll = function() {myFunction()};

let $navbar = document.getElementById("navbar");
let $sticky = $navbar.offsetTop;
let $about = document.getElementById('about-menu');
let $timeline = document.getElementById('work-menu');
let $contact = document.getElementById('contact-menu');

function myFunction() {
	if (window.pageYOffset >= $sticky) {
		$navbar.classList.add("sticky")
	} else {
		$navbar.classList.remove("sticky");
	}

	if($about.offsetTop > 0) {
		$about.classList.add('activem');
	} else {
		$about.classList.remove('activem');
	}

	if($timeline.offsetTop <= window.pageYOffset) {
		$timeline.classList.add('activem');
	} else {
		$timeline.classList.remove('activem');
	}
}
// collapse
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

//smooth on scroll
$(document).ready(function(){
	// Add smooth scrolling to all links
	$(".menu").on('click', function(event) {
		$('.menu').removeClass('activem');
		$(this).addClass('activem');

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			let hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

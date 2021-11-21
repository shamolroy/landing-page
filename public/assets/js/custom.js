$(document).ready(function(){ 

		/*********** Nav menu ***************/
		$('.bar-area img,.close-area').click(function(){
			$('.mobile-menu-area').toggleClass('offcanvas');
			return false;
		});
		
		AOS.init({
			once:true,
		});
		$('.arrow-up-area i').click(function() {
			$('html, body').animate({
			  scrollTop: 0
			}, 800);
			return false;
		});
		$('.menubar-area ul li a').click(function(e){
			e.preventDefault();
			var target = $($(this).attr('href'));
			if(target.length){
			  var scrollTo = target.offset().top;
			  $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
			}
		  });
});
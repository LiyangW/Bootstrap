		$(document).ready(function(){
			$('#mycarousel').carousel({interval: 2000});
			$('#carouselButton').click(function(event) {
				if ($('#carouselButton').children('span').hasClass('fa-pause')){
					$('#mycarousel').carousel('pause');	
					$('#carouselButton').children('span').removeClass('fa-pause');
					$('#carouselButton').children('span').addClass('fa-play');
				}
				else if ($('#carouselButton').children('span').hasClass('fa-play')){
					$('#mycarousel').carousel('cycle');	
					$('#carouselButton').children('span').removeClass('fa-play');
					$('#carouselButton').children('span').addClass('fa-pause');

				}
				/* Act on the event */
			});
			$('#loginButton').click(function() {
				$('#loginModal').modal();
			});
			$('#reserveButton').click(function() {
				$('#modalReserve').modal();
			});
			$('#closeBtnLogin').click(function() {
				$('#loginModal').modal('hide');
			});
			$('#reserveCloseBtn').click(function() {
				$('#modalReserve').modal('hide');
			});
		});
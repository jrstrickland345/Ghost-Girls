//Adjest Slideshow Settings Here
$(document).ready(function() {

var slideShow = {
				speed: 400,						
				easing: "swing",
				timer: 5000,
				restartTime: 15000,				//The Delay After a Button is Pressed in Miliseconds
				fowardButton: $('#fwdBtn'),		//Set the id's and classes for the buttons
				backwardButton: $('#bkdBtn'),
				navigationBlock: $('#sliderNav'),
				navigationButtons: $('div')
			};
			
//						
			var	viewer = $('#slideShow'),				//Define Variables
				innerDiv = $('#innerDiv'),				
				images = viewer.find('img'),				//Be sure img position is set to relative
				imagesWidth = images[0].width,
				totalWidth = imagesWidth * images.length,
				fwdBtn = $(slideShow.fowardButton),  
				bkdBtn = $(slideShow.backwardButton),
				currentBtn = $(slideShow.navigationBlock).find(slideShow.navigationButtons),  
				loc = 0,
				currentIndex = 0;
				
				var active = $(slideShow.navigationBlock).children();
				
				
				viewer.css('overflow-x','hidden');		//Set CSS
				innerDiv.css('width', totalWidth+'px');
				images.css('position', 'relative');
				$(active[0]).addClass('highlight');
				
				fwdBtn.on('click', function () {nextImage(true)});		//Set Event Handlers
				bkdBtn.on('click', function () {prevImage(true)});
				currentBtn.on('click', function() {goToImage($(this).index(), true)});
				
				
				function nextImage(x) {
				
					if(x===true){
						clearInterval(count);
						setTimeout(restart, slideShow.restartTime);
					}
					
					loc -= imagesWidth;
					
					
					if (loc<-(totalWidth - imagesWidth)) {
						images.animate({
							'left': 0
						}, slideShow.speed, slideShow.easing);
						loc = 0;
						$(active[currentIndex]).removeClass('highlight');
						currentIndex = 0;
						$(active[0]).addClass('highlight');
						return;
						
					}
					
					images.animate({
						'left': '-='+imagesWidth+'px'
					}, slideShow.speed, slideShow.easing);
				
					$(active[currentIndex]).removeClass('highlight');
					currentIndex++;
					$(active[currentIndex]).addClass('highlight');
					
				}		// END nextImage Function
				
				function prevImage(x) {
				
					if(x===true){
						clearInterval(count);
						setTimeout(restart, slideShow.restartTime);
					}
					
					loc += imagesWidth;
					
					if (loc>0){
						images.animate({
							'left': -(totalWidth - imagesWidth)
						}, slideShow.speed, slideShow.easing)
						loc = -(totalWidth - imagesWidth);
						$(active[currentIndex]).removeClass('highlight');
						currentIndex = -(totalWidth - imagesWidth);
						$(active[currentIndex]).addClass('highlight');
						return;
					}
					
					images.animate({
						'left':'+='+imagesWidth+'px'
					}, slideShow.speed, slideShow.easing);
					
					$(active[currentIndex]).removeClass('highlight');
					currentIndex--;
					$(active[currentIndex]).addClass('highlight');
					
				}		//END prevImage Function
				
				function goToImage(y,x) {
					
					if(x===true){
						clearInterval(count);
						setTimeout(restart, slideShow.restartTime);
					}
					
					c=0;
					
					images.animate({'left': "-="+(imagesWidth*(y-currentIndex))+'px'}, slideShow.speed, slideShow.easing, function() {
					
						c++;
					
					if(images.length===c){
							loc = -(imagesWidth*y);
							$(active[currentIndex]).removeClass('highlight');
							currentIndex = y;
							$(active[currentIndex]).addClass('highlight');
						}
						
						console.log(loc);
					});
					
				} //END goToImage Function
				
				
								
				var count = window.setInterval(
				function() {nextImage(false)}, slideShow.timer);
				
				function restart(){
					clearInterval(count);
					count = setInterval(function() {nextImage(false)}, slideShow.timer);
				}		//END restart Function
				
				
				


});				
				
				 
				
			
			
			
			

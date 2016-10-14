(function($){
	$.fn.verticalSlider = function(options){
		var finalOptions =  $.extend({}, $.fn.verticalSlider.defaults , options);

		var slider = $(this);
		var slideUpArrow =  $('<span class="slideUp"></span>');
		var slideDownArrow =  $('<span class="slideDown"></span>');


		var navControls = $('<div class="nav-controls"></div>');
		navControls.append(slideUpArrow);
		navControls.append(slideDownArrow);



		var sliderUl = slider.children("ul.slides");
		if(finalOptions.theme == 'fixedSliding'){
			slider.addClass("fixedSliding");
		}
		var sliderHeight = slider.height();
		
		var noSlides = sliderUl.children("li").length;



		var controls = $('<ul class="controls"></ul>');
		
		for(var i = 0 ; i<noSlides; i++){
			var controlLink = $("<li><span data-slide="+i+"></span></li>");
			controls.append(controlLink);
		}

		controls.find("li span").each(function(){
			$(this).on("click", function(){
				$.fn.verticalSlider.moveTo(this, finalOptions);
			})
		});
		var curSlide = sliderUl.children("li.active");
		slider.prepend(navControls);
		slider.append(controls);

		/* Initializing ************ */
		$.fn.verticalSlider.initialize(slider,sliderUl,finalOptions,curSlide);
		
		$.fn.verticalSlider.setDimensions(slider,sliderUl,finalOptions);

		$(window).resize(function(){
			$.fn.verticalSlider.setDimensions(slider,sliderUl,finalOptions);
		})



		slideUpArrow.on('click', function(){
			$.fn.verticalSlider.moveUp(sliderUl,finalOptions.speed,noSlides, finalOptions.theme)
		})
		slideDownArrow.on('click', function(){
			$.fn.verticalSlider.moveDown(sliderUl,finalOptions.speed,noSlides, finalOptions.theme)
		});


	}


	$.fn.verticalSlider.setDimensions =  function(slider,sliderUl, finalOptions){
		var slide = slider.find("ul.slides li").eq(0);
		slider.height(finalOptions.height);
		sliderUl.height(slider.height())
		sliderUl.children("li").height(slider.height())
	}


	$.fn.verticalSlider.initialize = function(slider, sliderUl,finalOptions,curSlide, theme){
		sliderUl.children("li").each(function(index){
			if(theme == 'fixedSliding'){
				$(this).css({
					'z-index' : 0
				})
			}
			$(this).attr("data-slide-id", index);

			var back = $("<div class='background'></div>");
			back.css({
				'background-image': 'url("'+ $(this).attr("data-img")+'")'
			})
			$(this).prepend(back)
		});

		sliderUl.children("li").eq(finalOptions.initialSlide -1).addClass("active");
		sliderUl.parent().find(".controls").children("li").eq(finalOptions.initialSlide -1).addClass("active");
		if(finalOptions.theme == 'fixedSliding'){
			sliderUl.children("li").eq(finalOptions.initialSlide -1).css({
				'top': 0,
				'z-index': 2
			});
		}else{
			sliderUl.children("li").each(function(index){
				if(index < finalOptions.initialSlide -1){
					var clone = $(this).clone();
					$(this).remove();
					sliderUl.append(clone)
				}
			})
		}
		

		curSlide = sliderUl.children("li.active");

		sliderUl.height(slider.height());
		sliderUl.children("li").height(slider.height());
	}

	$.fn.verticalSlider.moveUp =  function(sliderUl,speed,noSlides, theme){
		curSlide = sliderUl.children("li.active");
		if(theme == 'fixedSliding'){
			var index = noSlides -1;
			if(curSlide.prev().length>0){
				index = curSlide.prev().index();
			}
			sliderUl.parent().find(".controls").children("li").removeClass("active");
			sliderUl.parent().find(".controls").children("li").eq(index).addClass("active");
			var nextSlide;

			sliderUl.children("li").css("top", 0)

			if(curSlide.next().length>0){
				nextSlide = curSlide.next();
			}else{
				nextSlide = sliderUl.children("li").eq(0)
			}

			sliderUl.children("li").css({
				'z-index': 0
			})
			nextSlide.css({
				'top': sliderUl.height(),
				'z-index': 2
			});
			curSlide.css({
				'z-index': 1
			})
			nextSlide.animate({
				'top' : '0'
			}, speed, function(){
				curSlide.removeClass("active");
				nextSlide.addClass("active")
				curSlide = nextSlide;
				sliderUl.removeClass("animatingUp")
			})
			
			sliderUl.addClass("animatingUp");
			

		}
		else{
			sliderUl.children("li").css("margin-top", 0);
			sliderUl.children("li").eq(0).animate({
				'margin-top': -1 * sliderUl.height()
			}, speed, function(){
				curSlide.next().addClass("active");
				curSlide.removeClass("active");
				var last = sliderUl.find("li").eq(0).clone();
				sliderUl.find("li").eq(0).remove();
				sliderUl.append(last);
				if(curSlide.next().length>0){
					curSlide = curSlide.next();
				}else{
					curSlide = sliderUl.children("li").eq(0);
				}

				var index = curSlide.index();
				sliderUl.parent().find(".controls").children("li").removeClass("active");
				sliderUl.parent().find(".controls").children("li").eq(index).addClass("active");
			});
		}


	}
	$.fn.verticalSlider.moveDown =  function(sliderUl,speed,noSlides, theme){
		curSlide = sliderUl.children("li.active");

		if(theme == 'fixedSliding'){
			var index = 0;
			if(curSlide.next().length>0){
				index = curSlide.next().index();
			}
			sliderUl.parent().find(".controls").children("li").removeClass("active");
			sliderUl.parent().find(".controls").children("li").eq(index).addClass("active");
			var prevSlide;

			sliderUl.children("li").css("top", 0)

			if(curSlide.prev().length>0){
				prevSlide = curSlide.prev();
			}else{
				prevSlide = sliderUl.children("li").eq(noSlides - 1)
			}

			sliderUl.children("li").css({
				'z-index': 0
			})
			prevSlide.css({
				'top': -1*sliderUl.height(),
				'z-index': 2
			});
			curSlide.css({
				'z-index': 1
			})
			prevSlide.animate({
				'top' : '0'
			}, speed, function(){
				curSlide.removeClass("active");
				prevSlide.addClass("active")
				curSlide = prevSlide;
			
				sliderUl.removeClass("animatingDown")
			});
			
			sliderUl.addClass("animatingDown")
		}
		else{
			sliderUl.children("li").css("margin-top", 0);
			var last = sliderUl.find("li").eq(noSlides -1).clone();
			sliderUl.find("li").eq(noSlides -1).remove();

			last.css({
				'margin-top': -1 * sliderUl.height()
			})
			sliderUl.prepend(last);

			sliderUl.children("li").eq(0).animate({
				'margin-top': 0
			}, speed, function(){
				curSlide.prev().addClass("active");
				curSlide.removeClass("active")	
				curSlide = curSlide.prev();

				var index = curSlide.index();
				sliderUl.parent().find(".controls").children("li").removeClass("active");
				sliderUl.parent().find(".controls").children("li").eq(index).addClass("active");
			})

		}
	}


	$.fn.verticalSlider.moveTo = function(obj, finalOptions){
		var sliderUl = $(obj).closest(".verticalSlider").find(".slides");
		var slideId = $(obj).attr("data-slide");
		if(finalOptions.theme == "fixedSliding"){
			curSlide = sliderUl.children("li.active");
			var nextSlide = sliderUl.children("li").eq(slideId);
			sliderUl.children("li").css("top", 0);
			

			sliderUl.children("li").css({
				'z-index': 0
			})
			nextSlide.css({
				'top': sliderUl.height(),
				'z-index': 2
			});
			curSlide.css({
				'z-index': 1
			})
			nextSlide.animate({
				'top' : '0'
			}, 100, function(){
				curSlide.removeClass("active");
				nextSlide.addClass("active")
				curSlide = nextSlide;
				sliderUl.removeClass("animatingUp")
			})

			sliderUl.addClass("animatingUp");
		}
		else{
			var slide = sliderUl.children("li[data-slide-id="+slideId+"]");
			var slideIndex =  slide.index();
			$(sliderUl).children("li").each(function(index){
				if(index < slideIndex - 1){
					var clone = $(this).clone();
					$(this).remove();
					sliderUl.append(clone);
				}
			});
			var noSlides = sliderUl.children("li").length;
			$.fn.verticalSlider.moveUp(sliderUl,100,noSlides, finalOptions.theme);
		}

		var index = sliderUl.children("li.active").index();
		sliderUl.parent().find(".controls").children("li").removeClass("active");
		sliderUl.parent().find(".controls").children("li").eq(index).addClass("active");

	}



	$.fn.verticalSlider.defaults = {
		speed: 700,
		initialSlide : 1,
		height : 350,
		transition: 'default' // other option : - fixedSliding
	}
}(jQuery))
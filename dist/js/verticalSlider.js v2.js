var noSlides,sliderUl,sliderHeight, slider, finalOptions, curSlide;
$.fn.verticalSlider = function(options){
	finalOptions =  $.extend({}, $.fn.verticalSlider.defaults , options);

	slider = $(this);
	slideUpArrow =  $('<span class="slideUp"></span>');
	slideDownArrow =  $('<span class="slideDown"></span>');
	controls = $('<div class="controls"></div>');
	controls.append(slideUpArrow);
	controls.append(slideDownArrow);
	




	sliderUl = slider.children("ul.slides");
	sliderHeight = slider.height();
	
	noSlides = sliderUl.children("li").length;

	/* Initializing ************ */
	$.fn.verticalSlider.initialize();
	

	slider.prepend(controls);
	$.fn.verticalSlider.setDimensions();

	$(window).resize(function(){
		$.fn.verticalSlider.setDimensions();
	})



	slideUpArrow.on('click', function(){
		$.fn.verticalSlider.moveDown()
	})
	slideDownArrow.on('click', function(){
		$.fn.verticalSlider.moveUp()
	})

}

$.fn.verticalSlider.defaults = {
	speed: 'slow',
	height: 'auto',
	initialSlide : 1,
	slideRatio : 0.27
}

$.fn.verticalSlider.setDimensions =  function(){
	var slide = slider.find("ul.slides li").eq(0);
	slider.height(slide.width() * finalOptions.slideRatio);
	sliderUl.height(slider.height())
	sliderUl.children("li").height(slider.height())
}


$.fn.verticalSlider.initialize = function(){
	sliderUl.children("li").each(function(index){
		$(this).css({
			'z-index' : 2
		})
		var back = $("<div class='background'></div>");
		back.css({
			'background': 'url("'+ $(this).attr("data-img")+'") no-repeat scroll 0 0/ 100%'
		})
		$(this).prepend(back)
	});

	sliderUl.children("li").eq(finalOptions.initialSlide -1).addClass("active");
	curSlide = sliderUl.children("li.active");
	sliderUl.children("li").eq(finalOptions.initialSlide -1).css({
		'top': 0,
		'z-index': 2
	});

	curSlide.prevAll().css({'top': '-100%', 'z-index': 2});
	curSlide.nextAll().css({'top': '100%', 'z-index': 2});

	sliderUl.height(slider.height());
	sliderUl.children("li").height(slider.height());
}


$.fn.verticalSlider.getActiveSlide = function(){
	return sliderUl.children("li.active");
}

$.fn.verticalSlider.moveUp =  function(){
	curSlide = $.fn.verticalSlider.getActiveSlide();

	var prevSlide;

	if(curSlide.prev().length>0){
		prevSlide = curSlide.prev();
	}else{
		prevSlide = sliderUl.children("li").eq(noSlides - 1)
	}



	curSlide.animate({
		'top' : '100%',
		'z-index': 2,
		'background-position' : '0 -100%'
	}, 3000, function(){
		curSlide.removeClass("active");
		curSlide = prevSlide;
		prevSlide.css({
			'z-index': 0
		});
	});
	prevSlide.css({
		'top': 0,
		'z-index': 0
	});
	prevSlide.addClass("active");
	

}
$.fn.verticalSlider.moveDown =  function(){
	curSlide = $.fn.verticalSlider.getActiveSlide();

	var nextSlide;

	if(curSlide.next().length>0){
		nextSlide = curSlide.next();
	}else{
		nextSlide = sliderUl.children("li").eq(0)
	}



	curSlide.animate({
		'top' : '-100%',
		'z-index': 2,
		'background-position' : '0 100%'
	}, 3000, function(){
		curSlide.removeClass("active");
		curSlide = nextSlide;
		nextSlide.css({
			'z-index': 0
		});
	});
	nextSlide.css({
		'top': 0,
		'z-index': 0
	});
	nextSlide.addClass("active");
}
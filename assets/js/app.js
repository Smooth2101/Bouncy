$(function () {

	var header= $("#header"),
	introH= $("#intro").innerHeight(),
	scrollOffset= $(window).scrollTop();


	chekScroll(scrollOffset);
	$(window).on("scroll", function(){
		scrollOffset=$(this).scrollTop();
		chekScroll(scrollOffset)
	});


	function chekScroll(scrollOffcet){
		scrollOffset=$(this).scrollTop();
			if(scrollOffset>=introH){
				header.addClass('fixed');
			}
			else{
				header.removeClass('fixed')
			}
	}


	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this= $(this),
				blockId= $this.data('scroll'),
				blockOffset= $(blockId).offset().top;
		$("#nav active").removeClass('active');
		$this.addClass('active');
		$("html, body").animate({scrollTop: blockOffset},500)
	});


	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();
		$(this).toggleClass('active')
		$("#nav").toggleClass('active');
		$("#header").toggleClass('active');

	});


	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();
		var $this= $(this),
				blockId= $this.data('collapse');
		$this.toggleClass('active');
	});

	$('.slider__team').slick({
		dots: true,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 1000,
		speed:3000,
	});

	$('.slider__test').slick({
		dots: true,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed:3000,
	});

	$('.slider__slide').slick({
		dots: true,
		arrows: false,
	});
	

});






/*aroows - показать кнопки*/
/*dots - показать точки*/
/*ataptiveHeight - адаптивная высота слайда*/
/*slidesToShow - количество слайдов отображаемых за раз*/
/*slidesToScroll - количество слайдов которые перелистываются за раз*/
/*speed - скорость перелистывания*/
/*easing - вид анимации*/
/* infinite - цикличность*/
/*initialSlide - с какого слайда начинается*/
/*autoplay - автоматическое воизпроизведение*/
/*autoplaySpeed - скорость автоматического переключения*/
/*pauseOnFocus - остановка при нажатии*/
/*pauseOnHover - остановка при наведении*/
/*pauseOnDotsHover - остановка при наведении на точки*/
/*draggable - свайп мышью*/
/*swipe - свайп на телефоне*/
/*touchTrashhold - количество шагов для постепенного переключения на следующий слайд*/
/*touchMove - плавное переключение на следующий слайд*/
/*waitForAnimate - переключение до окончания анимации*/
/*centerMode - первый слайд по центру*/
/*variableWidth -  адаптивный слайдер*/
/*rows - количество объектов по вертикали*/
/*slidersPerRow - количество столбцов в слайдере*/
/*vertical - вертикальный слайдер*/
/* verticalSwiping - вертикальный свайп*/
/*fade - замещение слайдеров*/
/*asNavFor - соединение двух слайдеров свойство указывается в обоих*/
/*mobile first - сначала размеры мобильных устройств  min-width*/
/*data-lazy - постепенная загрузка изображений указывать вместо src=".."*/
/*appendArrows* - переместить кнопки в другой блок*/
/*appendDots - переместить точки в другой блок*/

/*
responsive:[   				/*адаптивность слайдера к разным экранам
	{
		breakpoint:1200,	/*указывается ширина экрана max-width
		settings:{				/* указываются свойства слайдера
			aroows:true
		}
	}
]
*/
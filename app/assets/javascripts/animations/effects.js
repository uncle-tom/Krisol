$(function(){
  init();
});

function init() {
	// Fixed admin-sidebar_left
	var height_admin_sidebar_left = 85;
	var width = document.body.clientWidth;
	
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_left && width > 600 ) {
			$('.admin-sidebar_left').css('position', 'fixed');
			$('.admin-sidebar_left').css('top', '0px');
		} else {
			$('.admin-sidebar_left').css('position', 'relative');
			$('.admin-sidebar_left').css('top', '0px');
		}
	});

	//Fixed admin-sidebar_right_position
	var height_admin_sidebar_right_position = 150;
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_right_position && width > 600 ) {
			$('.addproduct_cirlce_button').fadeIn()
		} else {
			$('.addproduct_cirlce_button').fadeOut()
		}
	});

	//Fixed admin-sidebar_right_position
	var height_admin_sidebar_right_position = 350;
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_right_position && width > 600 ) {
			$('.header-buy').fadeIn()
		} else {
			$('.header-buy').fadeOut()
		}
	});

	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	// МОБИЛЬНЫЙ ХЕАДЕР

	

	// МОБИЛЬНЫЙ ХЕАДЕР ЗАКАНЧИВАЕТСЯ

	// СКОЛЛ САЙДБАРА
	(function(){
		var a = document.querySelector('#aside1'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
		window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		function Ascroll() {
		  if (b == null) {
		    var Sa = getComputedStyle(a, ''), s = '';
		    for (var i = 0; i < Sa.length; i++) {
		      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
		        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
		      }
		    }
		    b = document.createElement('div');
		    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
		    a.insertBefore(b, a.firstChild);
		    var l = a.childNodes.length;
		    for (var i = 1; i < l; i++) {
		      b.appendChild(a.childNodes[1]);
		    }
		    a.style.height = b.getBoundingClientRect().height + 'px';
		    a.style.padding = '0';
		    a.style.border = '0';
		  }
		  var Ra = a.getBoundingClientRect(),
		      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
		  if ((Ra.top - P) <= 20) {
		    if ((Ra.top - P) <= R) {
		      b.className = 'stop';
		      b.style.top = - R +'px';
		    } else {
		      b.className = 'sticky';
		      b.style.top = P + 20 + 'px';
		    }
		  } else {
		    b.className = '';
		    b.style.top = '';
		  }
		  window.addEventListener('resize', function() {
		    a.children[0].style.width = getComputedStyle(a, '').width
		  }, false);
		}
		})()
		// СКРОЛЛ САЙДБАРА ЗАКАНЧИВАЕТСЯ

		// ОТКРЫВАЕМ ШАПКУ ОДЕЖДЫ И АКСЕССУАРОВ



		// END ОТКРЫВАЕМ ШАПКУ ОДЕЖДЫ И АКСЕССУАРОВ

		

}
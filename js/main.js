window.addEventListener('scroll', function () {
	let btnScroll = document.querySelector('#scroll');
	if (document.documentElement.scrollTop> document.documentElement.clientHeight) {
		btnScroll.style.opacity = '.7';
	} else {
		btnScroll.style.opacity = '0';
	}
});
var timeOut;
	function goUp(){
		var top = document.documentElement.scrollTop;
	if (top>0){
		window.scrollBy(0,-60);
		timeOut = setTimeout('goUp()', 10);
	} else {
	};
};

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#menu-footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
//пызда
[].map.call(document.querySelectorAll('[anim="ripple"]'), el=> {
    el.addEventListener('click',e => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
    })
})


//Вызов popup окна
let reserveBlock = document.querySelector('#reserveBlock');
let reserveForm = document.querySelector('#reserveBlock form');
let reserveOpen_btn = document.querySelectorAll('.reserve-button');
let reserveClose_btn = document.querySelector('.reserveClose');
let reserveBackground = document.querySelector('.backgroundForm');
reserveOpen_btn[0].addEventListener('click', function () {
	if (reserveForm.classList.contains('DisplayNone')) {
		reserveForm.classList.remove('DisplayNone');
		reserveBlock.classList.remove('vis');
	}
});
reserveOpen_btn[1].addEventListener('click', function () {
	if (reserveForm.classList.contains('DisplayNone')) {
		reserveForm.classList.remove('DisplayNone');
		reserveBlock.classList.remove('vis');
	}
});
//Закрываем окно аналогичным способом
reserveClose_btn.addEventListener('click', function () {
	if (!reserveForm.classList.contains('DisplayNone')) {
		reserveForm.classList.add('DisplayNone');
		reserveBlock.classList.add('vis');
		//очищаем поле форм нажатием на крестик
		var DATE = document.querySelectorAll('#reserveBlock input')[0];
		var EMAIL = document.querySelectorAll('#reserveBlock input')[1];
		var NAME = document.querySelectorAll('#reserveBlock input')[2];
		var SURNAME = document.querySelectorAll('#reserveBlock input')[3];
		DATE.value = '';
		EMAIL.value = '';
		NAME.value = '';
		SURNAME.value = '';
	}
});

reserveBackground.addEventListener('click', function () {
	if (!reserveForm.classList.contains('DisplayNone')) {
		reserveForm.classList.add('DisplayNone');
		reserveBlock.classList.add('vis');
		//очищаем поле форм нажатием на крестик
		var DATE = document.querySelectorAll('#reserveBlock input')[0];
		var EMAIL = document.querySelectorAll('#reserveBlock input')[1];
		var NAME = document.querySelectorAll('#reserveBlock input')[2];
		var SURNAME = document.querySelectorAll('#reserveBlock input')[3];
		DATE.value = '';
		EMAIL.value = '';
		NAME.value = '';
		SURNAME.value = '';
	}
});
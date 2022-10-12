//---- СЛАЙДЕР ----
var slides = document.getElementsByClassName('slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide show';
}

//---- ОБРАТНЫЙ ОТСЧЕТ ВРЕМЕНИ ----
timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
	today = new Date();
	today = Math.floor((timeend-today)/1000);
	tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	thour=today%24; today=Math.floor(today/24);
	//timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
	document.getElementById('hours').innerHTML=thour;
  document.getElementById('minutes').innerHTML=tmin;
  document.getElementById('seconds').innerHTML=tsec;
	window.setTimeout("time()",1000);
}

//---- МАСКИ JQUERY ----
$(function(){
  $("#phone").mask("8(999) 999-9999");
  $("#phone2").mask("8(999) 999-9999");
  $("#phone3").mask("8(999) 999-9999");
});

//---- ОБРБОТКА СОБЫТИЙ ----
$(".zakaz").on("click", function(event) {
  $("#box").css("display","inline-block");
  $("#name").val("");
  $("#phone").val("");
  //jQuery('form')[0].reset();
  event.preventDefault();
});

$(".btn-close").on("click", function(event) {
  $("#box").css("display","none");
  event.preventDefault();
});

$(".vizov_form").on("submit", function(event) {
  $("#box").css("display","none");
  $("#new-box").css("display","inline-block");
  event.preventDefault();
});

$(".vizov2_form").on("submit", function(event) {
  event.preventDefault();
  $("#new-box").css("display","inline-block");
  $("#name2").val("");
  $("#phone2").val("");
});

$(".closeVizov").on("click", function(event) {
  $("#new-box").css("display","none");
  event.preventDefault();
});


new WOW().init();


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
});
$('#upbutton').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});
$(document).ready(function() {
  //Вывод карточки подробнее о враче
  var flag = true;
  var content;
  $('.docs__item').click(function(e) {
    if (flag) { //проверка на единожное открытие блока
      $('.card').show();
      flag = false;
    }
    $(content).show(500); //отображает скрытого предыдущего врача
    content = $(e.target).closest("div");
    $(content).hide(300); //скрывает врача на которого кликнули
  });

  //dropdown
  var i = 0;
  var selected;
  var text;
  var flagArr = true;
  $("#form-horizontal-select li").each(function() {
    $(this).attr("id", "" + i);
    i++;
  });

  $('#form-horizontal-select li').click(function(e) {
    selected = event.target.id;
    text = $(event.target).text();
    $('#btn-drop').click();
    $('#btn-drop').text(text);
    $('#select-prof li').removeClass('uk-active');
    $('#select-prof li:eq(' + selected + ')').addClass('uk-active');
  })

  $('#btn-drop').click(function() {
    if (flagArr) {
      $(this).removeClass('btn-arr-down');
      $(this).addClass('btn-arr-top');
    } else {
      $(this).addClass('btn-arr-down');
      $(this).removeClass('btn-arr-top');
    }
    flagArr = !flagArr;
  });

  //mob-menu
  var isOpen = false;
  $('.header-mob__btn').click(function() {
    if (isOpen) {
      $('.header-drop').hide();
      $('.header-mob__btn').css('background', 'url(/img/mob/nav.svg)left top no-repeat');
      $('.header-mob__phone').show();
    } else {
      $('.header-drop').show();
      $('.header-mob__btn').css('background', 'url(/img/mob/close.svg)left top no-repeat');
      $('.header-mob__phone').hide();
    }
    isOpen = !isOpen;
  });


});
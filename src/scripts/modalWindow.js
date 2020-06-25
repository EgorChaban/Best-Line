$(function () {
  //отменяем стандартное поведение для button
  $("button").on("click", function (e) {
    eventType = e.preventDefault();
  });

  //мобильное меню
  let mMenu = $(".m-menu");
  let mButton = $(".m-menu-button");

  mButton.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
  //конец мобильного меню
  //окно "перезвоним"
  let callButton = $(".header__phone-call");
  let callWindow = $(".window-call");
  let callClosed = $(".window-call__closed-svg");
  let callBody = $(".window-wrapp");
  //открыть

  callButton.on("click", function () {
    callWindow.fadeIn(500);
    callBody.fadeIn(150);
    $("body").addClass("no-scroll");
  });
  //закрыть
  callClosed.on("click", function () {
    callWindow.fadeOut(500);
    callBody.fadeOut(150);
    $("body").removeClass("no-scroll");
  });
  //Конец окна "перезвоним"
  //мобильное окно "перезвоним"
  let mMenuButton = $(".m-menu__form-button");
  let mMenuName = $(".m-menu__name-input");
  let mMenuClosed = $(".m-window-call__img");
  let mMenuBody = $(".m-window-call");
  let mMenuNameSee = $(".m-window-call__name");

  //открыть
  mMenuButton.on("click", function () {
    mMenuNameSee.text(function () {
      return "Спасибо, " + mMenuName.val() + "!";
    });
    mMenuBody.fadeIn(500);
  });
  //закрыть
  mMenuClosed.on("click", function () {
    mMenuBody.fadeOut(300);
  });
  //конец мобильного "перезвоним"
  //записаться \заявка
  let requestWrapp = $(".request-wrapp");
  let requestBody = $(".request");
  let requestOpen = $(".header__body-button");
  let requestClosed = $(".request__img");
  let requestOk = $(".request-ok");
  let requestName = $(".request__name");
  let requestButton = $(".request__button");
  let requestOkClosed = $(".request-ok__img");
  let requestOkTitle = $(".request-ok__title");
  let saleButton = $(".sale__body-button");
  let addressButton = $(".address__button");
  let designerName = $(".designer__form-name");
  let designerButton = $(".designer__form-button");

  //открыть
  requestOpen.on("click", function () {
    requestWrapp.fadeIn(600);
    requestBody.fadeIn(800);
    // $("body").addClass("no-scroll");
  });
  //закрыть
  requestClosed.on("click", function () {
    requestWrapp.fadeOut(600);
    requestBody.fadeOut(800);
    // $("body").removeClass("no-scroll");
  });
  //открыть ОК
  requestButton.on("click", function () {
    requestOk.fadeIn(500);
    requestOkTitle.text(function () {
      return "Ожидайте звонка, " + requestName.val() + " :)";
    });
  });
  //закрыть ОК и заявку
  requestOkClosed.on("click", function () {
    requestOk.fadeOut(800);
    requestWrapp.fadeOut(900);
    requestBody.fadeOut(200);
    // $("body").removeClass("no-scroll");
  });
  //открыть заказ sale
  saleButton.on("click", function () {
    requestWrapp.fadeIn(800);
    requestBody.fadeIn(800);
    // $("body").addClass("no-scroll");
  });
  //закрыть заказ sale
  requestClosed.on("click", function () {
    requestWrapp.fadeOut(700);
    requestBody.fadeOut(700);
    // $("body").removeClass("no-scroll");
  });
  //открыть ОК
  requestButton.on("click", function () {
    requestOk.fadeIn(500);
    requestOkTitle.text(function () {
      return "Ожидайте звонка, " + requestName.val() + " :)";
    });
  });
  //закрыть ОК и заявку
  requestOkClosed.on("click", function () {
    requestOk.fadeOut(900);
    requestWrapp.fadeOut(900);
    requestBody.fadeOut(200);
    // $("body").removeClass("no-scroll");
  });
  //открыть адресное окно записи
  addressButton.on("click", function () {
    requestWrapp.fadeIn(800);
    requestBody.fadeIn(800);
    // $("body").addClass("no-scroll");
  });
  requestClosed.on("click", function () {
    requestWrapp.fadeOut(800);
    requestBody.fadeOut(800);
    // $("body").removeClass("no-scroll");
  });
  //открыть ОК
  requestButton.on("click", function () {
    requestOk.fadeIn(300);
    requestOkTitle.text(function () {
      return "Ожидайте звонка, " + requestName.val() + " :)";
    });
  });
  //закрыть ОК и заявку
  requestOkClosed.on("click", function () {
    requestOk.fadeOut(800);
    requestWrapp.fadeOut(900);
    requestBody.fadeOut(200);
    // $("body").removeClass("no-scroll");
  });
  //Дизайнер окно

  designerButton.on("click", function () {
    requestOk.fadeIn(800);
    requestWrapp.fadeIn(800);
    requestOkTitle.text(function () {
      return "Ожидайте звонка, " + designerName.val() + " :)";
    });
  });
  //закрыть дизайнер-окно
  requestOkClosed.on("click", function () {
    requestOk.fadeOut(900);
    requestWrapp.fadeOut(800);
  });
});

$(function () {
  //========СКРОЛЛ ДЕСТОП:
  //О нас
  $("#self").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".header").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //stage
  $("#stage").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".stage").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //Catalog
  $("#catalog").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".gallery").offset().top, // класс объекта к которому приезжаем
      },
      1500 // Скорость прокрутки
    );
  });

  //contacts
  $("#contacts").click(function () {
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".address").offset().top, // класс объекта к которому приезжаем
      },
      2000 // Скорость прокрутки
    );
  });
  //МОБИЛЬНЫЙ СКРОЛЛ
  //закрыть мобильное меню
  let mMenu = $(".m-menu");
  // let mMenuButton $('.m-menu__top-element');
  // mMenuButton.on("click", function(){
  //   mMenu.removeClass('active');
  //   $('body').removeClass('no-scroll');
  // })
  //self
  $("#m-self").click(function () {
    //закрываем мобильное меню
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".header").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //stage
  $("#m-stage").click(function () {
    //закрываем мобильное меню
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".stage").offset().top, // класс объекта к которому приезжаем
      },
      1000 // Скорость прокрутки
    );
  });
  //Catalog
  $("#m-catalog").click(function () {
    //закрываем мобильное меню
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".gallery").offset().top, // класс объекта к которому приезжаем
      },
      1500 // Скорость прокрутки
    );
  });
  //contacts
  $("#m-contacts").click(function () {
    //закрываем мобильное меню
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
    // ID откуда кливаем
    $("html, body").animate(
      {
        scrollTop: $(".address").offset().top, // класс объекта к которому приезжаем
      },
      2000 // Скорость прокрутки
    );
  });
});

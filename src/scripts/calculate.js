$(function () {
  //ВЫПАДАЮЩЕЕ МЕНЮ===========================================>
  $(".select").each(function () {
    const _this = $(this),
      selectOption = _this.find("option"),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(":selected"),
      duration = 300; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $("<div>", {
      class: "new-select",
      text: _this.children("option:disabled").text(),
    }).insertAfter(_this);

    const selectHead = _this.next(".new-select");
    $("<div>", {
      class: "new-select__list",
    }).insertAfter(selectHead);

    const selectList = selectHead.next(".new-select__list");
    for (let i = 1; i < selectOptionLength; i++) {
      $("<div>", {
        class: "new-select__item",
        html: $("<span>", {
          text: selectOption.eq(i).text(),
        }),
      })
        .attr("data-value", selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find(".new-select__item");
    selectList.slideUp(0);
    selectHead.on("click", function () {
      if (!$(this).hasClass("on")) {
        $(this).addClass("on");
        selectList.slideDown(duration);

        selectItem.on("click", function () {
          let chooseItem = $(this).data("value");

          $("select").val(chooseItem).attr("selected", "selected");
          selectHead.text($(this).find("span").text());

          selectList.slideUp(duration);
          selectHead.removeClass("on");
        });
      } else {
        $(this).removeClass("on");
        selectList.slideUp(duration);
      }
    });
  });
});
// КОНЕЦ МЕНЮ
//КАЛЬКУЛЯТОР======================>
let button = document.querySelector(".calculate__button");
let select = document.querySelector(".select");
let meter = document.querySelector(".calculate__meter-input");
let table = document.querySelector(".calculate__table-input");
let plate = document.querySelector(".calculate__plate-input");
let washer = document.querySelector(".calculate__washer-input");

let platePrice;
let washerPrice;
let tablePrice;

function platePriceSee() {
  if (plate.checked) {
    platePrice = 300;
  } else {
    platePrice = 0;
  }
  return platePrice;
}
function washerPriceSee() {
  if (washer.checked) {
    washerPrice = 600;
  } else {
    washerPrice = 0;
  }
  return washerPrice;
}

function tablePriceSee() {
  tablePrice = table.value * 3;
  return tablePrice;
}

let total = document.querySelector(".total-price");

button.addEventListener("click", function () {
  total.textContent =
    select.value * meter.value +
    tablePriceSee() +
    platePriceSee() +
    washerPriceSee();
});

//открыть калькулятор
let totalPriceP = $(".total-price-p");
let calculateWrapp = $(".calculate-wrapp");
let calculateClosed = $(".calculate__img");
let requestWrapp = $(".request-wrapp");
let calculateButton = $(".calculate__button");
let calculateOpen = $(".gallery__img-img");

calculateOpen.on("click", function () {
  requestWrapp.fadeIn(600);
  calculateWrapp.fadeIn(800);
});
//закрыть калькулятор
calculateClosed.on("click", function () {
  requestWrapp.fadeOut(500);
  calculateWrapp.fadeOut(900);
});

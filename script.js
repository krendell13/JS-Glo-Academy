// УРОК №3. Динамическая типизация данных в Javascript. Условия, ветвления.
"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

let getRollbackMessage = function(price) {
  if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}
};

let getAllServicePrices = function() {
  return servicePrice1 + servicePrice2;
};

let showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

let getTitle  = function() {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLocaleLowerCase();
};

let getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экрана " + screenPrice + " юаней и Стоимость разработки сайта " + fullPrice + " юаней");








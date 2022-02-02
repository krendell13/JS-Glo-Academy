// УРОК №3. Динамическая типизация данных в Javascript. Условия, ветвления.
"use strict";

/* 
   библиотека полезностей
*/
// разделитель смысловых значений в строке ввода
const separator = ',';
// контроль ввода смысловых значений ( убираем пустотые значения, "форматируем" оставшиеся)
const controlSense = input => 
  input.split(separator).map(el => el.trim()).filter( (el)=> el.length ).join(separator+' ');
// выделение первого смыслового названия в строке ( до запятой или конца строки )
const firstSense = input => input.slice(0, Math.max(input.indexOf(separator),0) || input.length ).trim();
// перевод строчной записи сумм в целое число больше нуля
const convertToMany = input => Math.max( +parseInt(input) || 0, 0);

// 3) запрос названия проекта
const title = prompt( 'Как называется Ваш проект ?') || 'Разработка сайта';
console.log('Название проета: [', title,']');

// 4) название типов экранов
const screens = controlSense( 
  prompt('Какие типы экранов нужно разработать? \n ( перечислите через запятую )', 
         "Простые, Сложные, Интерактивные" ) || 'Простые' 
);
console.log('Необходимо разработать типы экранов: [', screens,']');

// 5) стоимостное предложение заказчика по разработке
const screenPrice = convertToMany( 
  prompt('Сколько будет стоить данная работа? \n(в рублях)', 12000)
);
console.log(`Заказчик предлогает за верстку экранов ${screenPrice} рублей`);

// 6) необходимость в адаптивном сайте
const adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(`Адаптив на сайте: [ ${ adaptive ? 'нужен' : 'не нужен'} ]`);

// 7) Спросить у пользователя по 2 раза о дополнительных услугах и их ценовых предложениях 
console.log(`Дополнительные услуги:`);
let service1 = firstSense( controlSense( 
  prompt( 'Какой дополнительный тип услуги нужен? ( № 1 ) :', 
           (adaptive) ? 'адаптив' : '' ) || 'услуга № 1' 
));
let servicePrice1 = convertToMany( prompt(`Сколько будет стоить ${service1}?`,0) ) ;
console.log(` - ${service1} - ${servicePrice1} рублей`);
let service2 = firstSense( controlSense( 
  prompt( 'Какой дополнительный тип услуги нужен? ( № 2 ) :', '' ) || 'услуга № 2' ));
let servicePrice2 = convertToMany( prompt(`Сколько будет стоить ${service2}?`,0) ) ;
console.log(` - ${service2} - ${servicePrice2} рублей`);

// 8) Итоговая стоимость работы
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(`ИТОГО стоимость заказа по разработке сайта ${fullPrice} рублей`);

// 9) Доход разработчика (итоговая стоимость уменьшенная на сумму отката посреднику, 
//    округленная в большую сторону)
const rollback = 10;  // % отката посреднику
console.log(`Откат посреднику от стоимости заказа - ${rollback}% `);
let servicePercentPrice = Math.ceil( fullPrice * (100-rollback) / 100 );
console.log(`ДОХОД разработчика - ${servicePercentPrice} рублей`);

// 10) Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
if ( fullPrice >= 30000 ) { 
  console.log('Даем скидку в 10%'); 
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice < 15000 ) {
  console.log('Скидка не предусмотрена');
} else {
  console.log('Что то пошло не так...'); 
}
// Урок 2. Типы данных, операторы, методы и свойства

// название проекта
const title = "Калькулятор доходов";
// название типов экранов
const screens = "Простые, Сложные, Интерактивные";
// любое число
const screenPrice = 15;
// % отката посреднику - любое число от 1 до 100;
const rollback = 90;
// любое число (сколько хотите заработать)
const fullPrice = 1000000;
// булевое значение
const adaptive = true;

console.log(`Типы переменных: \n ` +
  `\t title: ${typeof(title)}, fullPrice: ${typeof(fullPrice)}, adaptive: ${typeof(adaptive)}`);
console.log("длина строки screens = "+ screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
// строку screens в нижний регистр и разбить на массив и вывести его в консоль
console.log( screens.toLowerCase().split(', ') );
// откат посреднику
console.log(`Посреднику - ${rollback}% \nЭто целых ${ fullPrice * (rollback/100) } рублей/ долларов/гривен/юани !`);
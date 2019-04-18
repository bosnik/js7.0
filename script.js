'use strict'
let money = prompt("Ващ бюджет на месяц?"),
time = prompt("Введите дату в форме YYYY-MM-DD"),
question = prompt('Введите обязательную статью расходов в этом месяце'),
answer1 = prompt('Во сколько обойдется?'),
question2 = prompt('Введите обязательную статью расходов в этом месяце'),
answer2 = prompt('Во сколько обойдется?'),
saving = false,
oneDay = 30;

let appData = {
    timeData: time,
    budget: money,
    income: [],
    saving,
     expenses:{},
     optionalExpenses:{}
};

appData.expenses[question] = answer1;
appData.expenses[question2] = answer2;

alert( money/30);
console.log(appData);





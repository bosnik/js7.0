'use strict'
let money = prompt("Ващ бюджет на месяц?"),
time = prompt("Введите дату в форме YYYY-MM-DD"),
question = prompt('Введите обязательную статью расходов в этом месяце'),
question2 = prompt('Во сколько обойдется?'),
question3 = prompt('Введите обязательную статью расходов в этом месяце'),
question4 = prompt('Во сколько обойдется?'),
saving = false,
oneDay = 30;




let firstQuestion = '';
let twoQuestion = '';


let appData = {
    timeData: time,
    budget: money,
    income: [''],
    saving,
     expenses:{},
     optionalExpenses:{}
};


appData.expenses[question] = question2;
appData.expenses[question3] = question4;



alert( money/30);
console.log(appData);





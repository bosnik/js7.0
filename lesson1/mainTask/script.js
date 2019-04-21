'use strict'
let money = prompt("Ващ бюджет на месяц?"),
time = prompt("Введите дату в форме YYYY-MM-DD"),
question = prompt('Введите обязательную статью расходов в этом месяце'),
answer = prompt('Во сколько обойдется?'),
question1 = prompt('Введите обязательную статью расходов в этом месяце'),
answer1 = prompt('Во сколько обойдется?'),
saving = false;


let appData = {
    timeData: time,
    budget: money,
    income: [],
    saving,
     expenses:{},
     optionalExpenses:{}
};

appData.expenses[question] = answer;
appData.expenses[question1] = answer1;

alert(money/30);
console.log(appData);

  







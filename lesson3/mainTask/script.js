'use strict'

let money, time;

function start(){
     money = +prompt("Ващ бюджет на месяц?");
     time = prompt("Введите дату в форме YYYY-MM-DD");

     while(isNaN(money) || money == '' 
          || money == null) {
           money = +prompt("Ващ бюджет на месяц?");
     
     }
}

start(); 

let appData = {
    timeData: time,
    budget: money,
    income: [],
    saving: true,
    expenses:{},
    optionalExpenses:{}
};

console.log(appData);

function chooseExpenses() {
     for (let i = 0; i < 2; i++){
          let question = prompt('Введите обязательную статью расходов в этом месяце'),
          answer1 = prompt('Во сколько обойдется?');

          if ( (typeof(question))=== 'string'
          && (typeof(question)) != null 
          && (typeof(answer1)) != null 
          && question != ''
          && answer1 != '' 
          && question.length < 50 ){
          console.log("Done");
          appData.expenses[question] = answer1;
         
     }else{
          i = i - 1;
     }
   }
}
chooseExpenses();


//функция дневного бюджета
function detectDayBudget() {
     appData.moneyPerDay = (appData.budget / 30).toFixed();

     alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();


//функция достатка
function detectLevel() {
     if(appData.moneyPerDay < 100){
          console.log("Минимальный уровень достанка");
     
     }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
          console.log("Средний уровень достанка");
     
     }else if(appData.moneyPerDay > 100){
          console.log("Высокий уровень достанка");
     
     }else{
          console.log("Произошла ошибка");
     }
}
detectLevel();
//функция депозита

function checkSavings() {
     if(appData.saving == true) {
          let save = +prompt('Какова сумма накоплений:'),
               percent = +prompt('Под какой процент?');

          appData.monthIncome = (save/100/12*percent).toFixed();
          alert("Это доход в месяц с вашего депозита: " + appData.monthIncome);
     }
}

checkSavings();
let expensesNum = '1',
     expensesNum1 = '2',
     expensesNum2 = '3';

function chooseOptExpenses() {
     for (let i = 0; i < 3; i++){
          let optional = prompt('Статья необязательных расходов?');
         

          if ( (typeof(optional))=== 'string'
          && (typeof(optional)) != null 
          && (typeof(optional)) != null 
          && optional != ''
          && optional != '' 
          && optional.length < 50 ){
          console.log("Done");
          appData.optionalExpenses[expensesNum] = optional;
          appData.optionalExpenses[expensesNum1] = optional;
          appData.optionalExpenses[expensesNum2] = optional;
          
         
     }else{
          i = i - 1;
     }
   }
}
chooseOptExpenses();
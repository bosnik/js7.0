'use strict';

let startBtn = document.getElementById('start'),
  budgetValue = document.querySelector('.budget-value'),
  daybudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalexpensesValuse = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthsavingsValue = document.querySelector('.monthsavings-value'),
  savingsValue = document.getElementById('savings'),
  sumVelue = document.getElementById('sum'),
  percentVelue = document.getElementById('percent'),
  yearsavingsValue = document.querySelector('.yearsavings-value'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value'),
  chooseItem = document.querySelector('.choose-income'),
  expensesItem = document.querySelectorAll('.expenses-item'),
  optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
  buttons = document.querySelectorAll('button'),
  accept1 = document.querySelector('.expenses-item-btn'),
  accept2 = document.querySelector('.optionalexpenses-btn'),
  count = document.querySelector('.count-budget-btn');

  let money, time;


startBtn.addEventListener('click', function(){
 
  time = prompt("Введите дату в форме YYYY-MM-DD");
  money = +prompt("Ваш бюджет на месяц?");

  while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
  }
        appData.budget = money;
        appData.timeData = time;
               budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getUTCDate();
});
accept1.disabled = true;
count.disabled = true;
startBtn.addEventListener('click', function () {
    
      if (startBtn.value == ' ' ) {
        count.disabled = true;
        accept1.disabled = true;
      } else {
        count.disabled = false;
        accept1.disabled = false;
      } 
  });

accept1.addEventListener('click', function() {
  let sum = 0;

  for (let i = 0; i < expensesItem.length ; i++){
    let question = expensesItem[i].value,
        answer1 = expensesItem[++i].value;

    if ( (typeof(question))=== 'string'
    
    && (typeof(question)) != null 
    && (typeof(answer1)) != null 
    && question != ''
    && answer1 != '' 
    && question.length < 50 ){
    console.log("Done");
    appData.expenses[question] = answer1;
    sum += +answer1;
}else{
    i--;
}
}
expensesValue.textContent = sum;
appData.expensesSum = sum;
});

accept2.disabled = true;


    optionalExpenses.forEach(function (elem, i) {
    elem.addEventListener('change', function () {
      if (elem.value == ' ') {
          accept2.disabled = true;
        } else {
          accept2.disabled = false;
        }
    });
});

accept2.addEventListener('click', function() {
  for (let i = 0; i < optionalExpenses.length; i++){
    
    let optional = optionalExpenses[i].value;
    appData.optionalExpenses[i] = optional;
    optionalexpensesValuse.textContent += appData.optionalExpenses[i] + ' ';    
    
  }  
});

count.addEventListener('click', function() {
  let expenses = appData.expensesSum;

  if(appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - expenses) / 30).toFixed();
  daybudgetValue.textContent = appData.moneyPerDay;

  } if(appData.moneyPerDay < 100){
    levelValue.textContent = "Минимальный уровень достанка";

}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
  levelValue.textContent = "Средний уровень достанка";

}else if(appData.moneyPerDay > 2000){
  levelValue.textContent = "Высокий уровень достанка";

}else{
  levelValue.textContent = "Произошла ошибка";
} 
});

chooseItem.addEventListener('input', function() {
    let item = chooseItem.value;
    appData.income = item.split(', ');
    incomeValue.textContent = appData.income;
});

savingsValue.addEventListener('click', function() {
    if(appData.saving == true) {
        appData.saving = false;
    }else{
        appData.saving = true;
    }
});

sumVelue.addEventListener('input', function() {
    if(appData.saving == true) {
        let sum = +sumVelue.value,
            percent = +percentVelue.value;

        appData.monthIncome = (sum / 100 / 12 * percent);
        appData.yearIncome = (sum / 100 * percent);

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);    
    }
});

percentVelue.addEventListener('input', function() {
    if(appData.saving == true) {
        let sum = +sumVelue.value,
            percent = +percentVelue.value;

        appData.monthIncome = (sum / 100 / 12 * percent);
        appData.yearIncome = (sum / 100 * percent);

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);   
    }
});

let appData = {
    timeData: time,
    budget: money,
    income: [],
    saving: false,
    expenses:{},
    optionalExpenses:{}
};




  


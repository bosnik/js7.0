'use strict';

let money, time;

function start(){
     money = +prompt("Ващ бюджет на месяц?");
     time = prompt("Введите дату в форме YYYY-MM-DD");
     while(isNaN(money) || money == '' || money == null) {
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
    optionalExpenses:{},
    chooseExpenses:function() {
     for (let i = 0; i < 2; i++){
          let question = prompt('Введите обязательную статью расходов в этом месяце'),
          answer1 = prompt('Во сколько обойдется?');
          if ( typeof(question)=== 'string'
          && typeof(question) != "object" 
          && typeof(answer1) != "object" 
          && question != ''
          && answer1 != '' 
          && question.length < 50 ){
          console.log("Done");
          appData.expenses[question] = answer1;
         
     }else{
          i--;
     }
   }
    },
    detectDayBudget: function(){
     appData.moneyPerDay = (appData.budget / 30).toFixed();
     alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
     if(appData.moneyPerDay < 100){
          console.log("Минимальный уровень достанка");
     
     }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
          console.log("Средний уровень достанка");
     
     }else if(appData.moneyPerDay > 2000){
          console.log("Высокий уровень достанка");
     
     }else{
          console.log("Произошла ошибка");
     }
    },
    checkSavings: function() {
     if(appData.saving == true) {
          let save = +prompt('Какова сумма накоплений:'),
               percent = +prompt('Под какой процент?');

          appData.monthIncome = (save/100/12*percent).toFixed();
          alert("Это доход в месяц с вашего депозита: " + appData.monthIncome);
     }
    },
    chooseOptExpenses:function() {
     for (let i = 1; i < 4; i++){
          let optional = prompt('Статья необязательных расходов?');
         
          appData.optionalExpenses[i] = optional;    
     }  
    },
    chooseIncome: function() {
     for (let i = 0; i < 1; i++){
          let items = prompt('Что  принесет дополнительный доход? (Перечислите через запятую)', '');
          if (typeof (items) === 'string' && items != '' && typeof (items) != "object"){
               appData.income = items.split(', ');
                appData.income.push(prompt('Можнт что то еще?'));
                appData.income.sort();
               appData.income.forEach(function(item,i){
                let messeng = ' Способы доп. заработка: ';
               let n = i + 1;
               alert(n + messeng  + item);
           });      
          } else {
               i--;
             }    
     }     
    }
};
for (let key in appData) {
     console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
   }
console.log(appData);




'use strict'
let money = +prompt("Ващ бюджет на месяц?"),
time = prompt("Введите дату в форме YYYY-MM-DD"),
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

console.log(appData);

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
          i--;
     }
};

/* -------while-------- */

/* var i = 0;
 while (i < 2) {
     
          let question = prompt('Введите обязательную статью расходов в этом месяце'),
          answer1 = +prompt('Во сколько обойдется?');

          if ( (typeof(question))=== 'string'
          && (typeof(question)) != null 
          && (typeof(answer1)) != null
          && question != ''
          && answer1 != '' 
          && question.length < 50 ){
          console.log("Done");
          appData.expenses[question] = answer1;
         i++;
     }else{
          i--;
     }
} */



/* -------while-------- */
/* -------doWhile-------- */
/* var i = 0;
do{
     let question = prompt('Введите обязательную статью расходов в этом месяце'),
     answer1 = +prompt('Во сколько обойдется?');

     if ( (typeof(question))=== 'string'
     && (typeof(question)) != null 
     && (typeof(answer1)) != null
     && question != ''
     && answer1 != '' 
     && question.length < 50 ){
     console.log("Done");
     appData.expenses[question] = answer1;
    i++;
 }else{
     i--;
}
}while (i < 2); */

/* -------doWhile-------- */

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
     console.log("Минимальный уровень достанка");

}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
     console.log("Средний уровень достанка");

}else if(appData.moneyPerDay > 2000){
     console.log("Высокий уровень достанка");

}else{
     console.log("Произошла ошибка");

}



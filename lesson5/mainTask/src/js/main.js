let startBtn = document.getElementById('start'),
  budgetValue = document.querySelector('.budget-value'),
  daybudget = document.querySelector('.daybudget-value'),
  level = document.querySelector('.level-value'),
  expenses = document.querySelector('.expenses-value'),
  optionalexpenses = document.querySelector('.optionalexpenses-value'),
  income = document.querySelector('.income-value'),
  monthsavings = document.querySelector('.monthsavings-value'),
  checkbox = document.querySelector('#savings'),
  sum = document.querySelector('#sum'),
  percent = document.querySelector('#percent'),
  yearsavings = document.querySelector('.yearsavings-value'),
  year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value'),
  choose = document.querySelector('.choose-income'),

  buttons = document.getElementsByTagName('button'),
  accept1 = document.querySelector('.expenses-item-btn'),
  accept2 = document.querySelector('.optionalexpenses-btn'),
  count = document.querySelector('.count-budget-btn');

  let money, time;

  startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в форме YYYY-MM-DD");
    money = +prompt("Ващ бюджет на месяц?");
    while(isNaN(money) || money == '' || money == null) {
          money = +prompt("Ващ бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

  });
  
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
            i--;
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
       
       }else if(appData.moneyPerDay > 2000){
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
  
  
  function chooseOptExpenses() {
       for (let i = 1; i < 4; i++){
            let optional = prompt('Статья необязательных расходов?');
           
            appData.optionalExpenses[i] = optional;    
       }  
  }
  chooseOptExpenses();
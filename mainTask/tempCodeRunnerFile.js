
var asd = function(){
     for (let i = 0; i < 2; i++){
          let question = prompt('Введите обязательную статью расходов в этом месяце'),
          answer1 = prompt('Во сколько обойдется?');
          
          if ( (typeof(question))=== 'string' && (typeof(question)) != null 
          && (typeof(answer1)) != null && question != ''
          && answer1 != '' && question.length < 50 ){
          console.log("Done");
          appData.expenses[question] = answer1;
         
     }else{
          return asd;
     }
}};
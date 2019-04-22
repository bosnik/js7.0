
var week = 
['Понедельник',
'Вторник',
'Среда',
'Четверг',
'Пятница',
'Суббота',
'Воскресение'];

for (let i = 0; i < week.length; i++) {
         if (week[i] == 'Суббота' || week[i] == 'Воскресение') {
         document.write(`<p><b>${week[i]}</i></p>`);
        } else if (week[i] == 'Среда') {
            document.write(`<p><i>${week[i]}</i></p>`);
        } else {
         document.write(`<p>${week[i]}</p>`);
       }
     }
     
console.log(week);


/* let arr = ['127', '334', '322', '761', '993', '978', '333'];

arr.forEach((e) => {
       if (e[0] == '3' || e[0] == '7') {
         document.write(`<br>${e}`);
       }
     });
 */
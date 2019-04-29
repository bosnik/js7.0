let headerNav = document.querySelector ('.menu'),
 bodyBg = document.querySelector('.body'),
 title = document.getElementById('title'),
 colums = document.querySelectorAll('.column'),
 delet = document.querySelector('.adv'),
 promptt = document.getElementById('prompt'),
 first = headerNav.children[1],
 last = headerNav.children[2],
 li = document.createElement('li');

headerNav.insertBefore(last, first); 

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
headerNav.appendChild(li);

document.body.style.background = "#f3f3f3 url('img/apple_true.jpg') no-repeat right top";

title.textContent = 'Мы продаем только подлинную технику Apple';

colums[1].removeChild(delet);

question = prompt('Как вы относитесь к технике apple ?', '');
promptt.innerHTML = `<h1>${question}</h1>`;








let secretNumber = 7;
let num;

for (let i = 1; i <= 3; i++) {
  num = Number(prompt('угадай число от 1 до 10:'));

  if (num === secretNumber) {
alert('Правильно! Ты угадал!');
break;
} else if (secretNumber > num) {
    alert('загаданное число меньше');
} else if (num === null){
    alert('Вы нажали на отменк');
} else {
    alert('загаданное число больше');
}

  if (i === 3 && num !== secretNumber) {
 alert('Попытки закончились! Ответ: ' + secretNumber);
break;
}
}

let total = 0;

while (true) {
  let userInput = prompt(`Введите число`);

  if (userInput === null) {
    break;
  }
  userInput = Number(userInput);
  total += userInput;
}
console.log(`Общая сумма чисел равна ${total}`);

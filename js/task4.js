const credits = 23580;
const pricePerDroid = 3000;
let userQuantity = prompt("Какое количество дроидов хотите купить?");
let totalPrice = userQuantity * pricePerDroid;
let message;

if (userQuantity === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
  console.log(message);
} else if (totalPrice <= credits) {
  message = `Вы купили ${userQuantity} дроидов, на счету осталось ${
    credits - totalPrice
  } кредитов.`;
  console.log(totalPrice);
  console.log(message);
}

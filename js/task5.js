const deliveryCountry = prompt("Доставка в какую страну?").toLowerCase();
let Country1 = "китай";
let Country2 = "чили";
let Country3 = "австралия";
let Country4 = "индия";
let Country5 = "ямайка";
let price;

switch (deliveryCountry) {
  case Country1:
    price = 100;
    break;

  case Country2:
    price = 250;
    break;

  case Country3:
    price = 170;
    break;

  case Country4:
    price = 80;
    break;

  case Country5:
    price = 120;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);

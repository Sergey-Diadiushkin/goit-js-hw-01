// let message;
// const ADMIN_PASSWORD = prompt();
// if (ADMIN_PASSWORD === "jqueryismyjam") {
//   message = "Добро пожаловать!";
//   alert(message);
// } else if (ADMIN_PASSWORD !== "jqueryismyjam") {
//   message = "Доступ запрещен, неверный пароль!";
//   alert(message);
// } else if (ADMIN_PASSWORD === "null");
// message = "Отменено пользователем!";
// alert(message);

let message;
const ADMIN_PASSWORD = "jqueryismyjam";
let userPassword = prompt("Введите пароль");

if (userPassword === null) {
  message = "Отменено пользователем!";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);

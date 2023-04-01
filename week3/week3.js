//example 1
let youLogin = true;
function login() {
  if (youLogin === true) {
    return "Wellcome in our bookshop";
  } else {
    return "Please login";
  }
}
console.log(login());

//example 2
let total = 200;
function checkOrder() {
  if (total > 0) {
    return "Thanks for your order!";
  } else {
    return "Your order didn't complete, please add product";
  }
}
console.log(checkOrder());

//example 3
let personalSell = 10;
function promoCode() {
  if (personalSell > 0) {
    return total - (total * personalSell) / 100;
  } else {
    return total;
  }
}
console.log(promoCode());

// example 4
let categories = "fantasy";
function checkCategory() {
  if (categories === "novels") {
    return "You choose novels!";
  }
  if (categories === "advanture") {
    return "You choose advanture!";
  }
  if (categories === "fantasy") {
    return "You choose fantasy!";
  } else {
    return "You choose poetry!";
  }
}
console.log(checkCategory());

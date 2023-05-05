/*const prod = [];

let x = document.getElementById("boton");
x.addEventListener("click", () => {
  let num = 1;
  prod.push(num);
  console.log(prod);
});
*/
document.addEventListener("DOMContentLoaded", () => {
  let numRandom = parseInt(Math.random() * 100000);
  let codigo = "XX " + numRandom + " ZZ";
  document.getElementById("codigo").innerText = codigo;
});

document.addEventListener("click", () => {
  let x = document.getElementById("butbanner");
  let bot = document.getElementById("banner");
  bot.style.display = "none";
});

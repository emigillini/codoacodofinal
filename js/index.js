document.addEventListener("DOMContentLoaded", () => {
  let numRandom = Math.round(Math.random() * 100000);
  document.getElementById("codigo").innerText = "XX " + numRandom + " ZZ";
});

document.addEventListener("click", () => {
  let bot = document.getElementById("banner");
  bot.remove();
});

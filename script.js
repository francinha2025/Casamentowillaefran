
const destino = new Date("2025-11-14T15:00:00").getTime();
const x = setInterval(function() {
  const agora = new Date().getTime();
  const distancia = destino - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("contador").innerHTML =
    dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "É hoje! Vamos celebrar!";
  }
}, 1000);

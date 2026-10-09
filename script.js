let victoriasUsuario = 0;
let victoriasMaquina = 0;

while (victoriasUsuario < 3 && victoriasMaquina < 3) {

  let jugada = prompt("Elige: Piedra, Papel o Tijera");
  jugada = jugada.toLowerCase();

  let azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  console.log(`La máquina eligió: ${jugadaMaquina}`);

  if (jugada === jugadaMaquina) {
    console.log("Empate");
    alert(`La máquina eligió: ${jugadaMaquina}\n\n¡Empate en esta ronda!\nMarcador: Tú ${victoriasUsuario} -${victoriasMaquina} Máquina`);
  } else if (jugada === "piedra" && jugadaMaquina === "tijera") {
    victoriasUsuario++;
    alert(`La máquina eligió: ${jugadaMaquina}\n\n¡Ganaste esta ronda! \nMarcador: Tú ${victoriasUsuario} -${victoriasMaquina} Máquina`);
  } else if (jugada === "papel" && jugadaMaquina === "piedra") {
    victoriasUsuario++;
    alert(`La máquina eligió: ${jugadaMaquina}\n\n¡Ganaste esta ronda! \nMarcador: Tú ${victoriasUsuario} -${victoriasMaquina} Máquina`);
  } else if (jugada === "tijera" && jugadaMaquina === "papel") {
    victoriasUsuario++;
    alert(`La máquina eligió: ${jugadaMaquina}\n\n¡Ganaste esta ronda! \nMarcador: Tú ${victoriasUsuario} -${victoriasMaquina} Máquina`);
  } else {
    victoriasMaquina++;
    alert(`La máquina eligió: ${jugadaMaquina}\n\nLa máquina ganó esta ronda \nMarcador: Tú ${victoriasUsuario} -${victoriasMaquina} Máquina`);
  }
}

let campeon = victoriasUsuario === 3 ? "¡Ganaste el torneo!" : "La máquina ganó el torneo";
console.log(campeon);
alert(campeon);
let startGame = document.getElementsByClassName("startGame")[0];

startGame.addEventListener("click", function () {
    let cantidadJuegos = parseInt(prompt("¿Cuántas veces vas a jugar?"));
    let victoria = 0;
    let derrota = 0;
    let empate = 0;

    for (let i = 0; i < cantidadJuegos; i++) {
      juego();
    }

    function juego() {
        let selectionPlayer = parseInt(
          prompt(
            "Elige 0 para Piedra 🥌, Elige 1 para Papel 📄 y Elige 2 para Tijera ✂"
          )
        );
        let selectionCpu = optionCpu();
      
        if (selectionPlayer === selectionCpu) {
          alert("Han empatado");
          empate += 1;
        } else if (
          (selectionPlayer === 1 && selectionCpu === 0) ||
          (selectionPlayer === 2 && selectionCpu === 1) ||
          (selectionPlayer === 0 && selectionCpu === 2)
        ) {
          alert("Has ganado");
          victoria += 1;
        } else {
          alert("Has perdido");
          derrota += 1;
        }
      }
      
      function optionCpu() {
        let randomNumber = Math.floor(Math.random() * 3);
        let selectedNumber;
        switch (randomNumber) {
          case 0:
            selectedNumber = 0;
            alert("La CPU eligió Piedra 🥌");
            break;
      
          case 1:
            selectedNumber = 1;
            alert("La CPU eligió Papel 📄");
            break;
      
          default:
            selectedNumber = 2;
            alert("La CPU eligió Tijera ✂");
            break;
        }
        return selectedNumber;
      }

    alert(
      `Resultados finales: Victorias: ${victoria} Derrotas: ${derrota} Empates: ${empate}`
    );
  });

function desafioMaquina() {
    // cantidad de jugadas
    const jugadas = parseInt(prompt("¿Cuántas veces quieres jugar?"));

    for (let i = 0; i < jugadas; i++) {
        // eleccion del usuario
        const usuario = prompt(`
        Escribe el numero de tu jugada :
         1. Papel 🖐️
         2. Piedra 🪨
         3. Tijera ✂️
        `);

        // como genera random la maquina su jugada
        const maquina = Math.floor(Math.random() * 3);

        // transformacion de numeros a letras

        let usuarioElegido = "";
        switch (usuario) {
            case "1":
                usuarioElegido = "Papel 🖐️";
                break
            case "2":
                usuarioElegido = "Piedra 🪨";
                break
            case "3":
                usuarioElegido = "Tijera ✂️";
                break
            default:
                console.log("Elegiste una opción Invalida")
                return;
        }

        let maquinaElegido = "";
        switch (maquina) {
            case 0:
                maquinaElegido = "Papel 🖐️";
                break
            case 1:
                maquinaElegido = "Piedra 🪨";
                break
            case 2:
                maquinaElegido = "Tijera ✂️";
                break
            default:

        }

        // eleccion de ganador
        let resultado = "";
        if (usuarioElegido === maquinaElegido) {
            resultado = "Han empatado piensas tan genial como la maquina! 🤔🤔";
        } else if ((usuarioElegido === "Tijera ✂️" && maquinaElegido === "Papel 🖐️") || (usuarioElegido === "Piedra 🪨" && maquinaElegido === "Tijera ✂️") || (usuarioElegido === "Papel 🖐️" && maquinaElegido === "Piedra 🪨")) {
            resultado = "Eres mejor de lo que pensaba has ganado! 😎";
        } else {
            resultado = "La maquina ha sido más hábil que tú Perdiste 🥹😭😿";
        }

        console.log(`Elegiste: "${usuarioElegido}" y la Maquina "${maquinaElegido}"`);
        console.log(resultado);



    }
}

desafioMaquina();
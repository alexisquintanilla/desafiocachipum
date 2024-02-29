// AUMENTA FICHAS AL CLICKEAR EN BOTON
let ficha = 0;

function fichas() {
    ficha++;
    document.getElementById("fichas").value = ficha;

}
// RESTAR FICHAS AL JUGAR
function fichasMenos() {
    ficha--;
    document.getElementById("fichas").value = ficha;
}

let usuarioElegido
// BOTON RADIO DE ELECCION DE JUGADA
function seleccionarRadio() {
    var opcion1 = document.getElementById("papel");
    var opcion2 = document.getElementById("piedra");
    var opcion3 = document.getElementById("tijera");

    if (opcion1.checked) {
        usuarioElegido = document.getElementById("papel").value;
    } else if (opcion2.checked) {
        usuarioElegido = document.getElementById("piedra").value;
    } else if (opcion3.checked) {
        usuarioElegido = document.getElementById("tijera").value;
    } else {
        console.log("Ninguna opción está seleccionada.");
    }
    desafioMaquina();
}


// FUNCION DEL JUEGO
function desafioMaquina() {
    // cantidad de jugadas
    if (ficha >= 1) {


        // como genera random la maquina su jugada
        const maquina = Math.floor(Math.random() * 3);

        let maquinaElegido = "";
        switch (maquina) {
            case 0:
                maquinaElegido = "Papel";
                break
            case 1:
                maquinaElegido = "Piedra";
                break
            case 2:
                maquinaElegido = "Tijera";
                break
            default:

        }

        // eleccion de ganador
        let resultado = "";
        if (usuarioElegido === maquinaElegido) {
            resultado = "Han empatado piensas tan genial como la maquina! 🤔🤔";
            document.getElementById("img").src = "./assets/img/empate.gif"
        } else if ((usuarioElegido === "Tijera" && maquinaElegido === "Papel") || (usuarioElegido === "Piedra" && maquinaElegido === "Tijera") || (usuarioElegido === "Papel" && maquinaElegido === "Piedra")) {
            resultado = "Eres mejor de lo que pensaba has ganado! 😎";
            document.getElementById("resultado").style.cssText = 'color: green;';
            document.getElementById("img").src = "./assets/img/ganar.gif"
        } else {
            resultado = "La maquina ha sido más hábil que tú Perdiste 🥹😭😿";
            document.getElementById("resultado").style.cssText = 'color: red;';
            document.getElementById("img").src = "./assets/img/perder.gif"
        }



        document.getElementById("seleccionDeAmbos").innerHTML = `Elegiste: "${usuarioElegido}" y la Maquina "${maquinaElegido}"`;

        document.getElementById("resultado").innerHTML = resultado;


        fichasMenos();


        // }
    } else {
        document.getElementById("seleccionDeAmbos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("img").src = "./assets/img/insertaficha.gif"

    }


}


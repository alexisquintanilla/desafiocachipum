// AUMENTA FICHAS AL CLICKEAR EN BOTON
let ficha = 0;
let empate = 0;
let victoria = 0;
let derrota = 0;

// RESTAR FICHAS AL JUGAR
function fichasMenos() {
    ficha--;
    document.getElementById("fichas").value = ficha;
}
// sumar victorias en el dom

function victorias() {
    victoria++;
    document.getElementById("victoria").value = victoria;
}
// sumar derrotas en el dom

function derrotas() {
    derrota++;
    document.getElementById("derrota").value = derrota;
}
// sumar empates en el dom

function empates() {
    empate++;
    document.getElementById("empate").value = empate;
}
function fichas() {
    ficha++;
    document.getElementById("fichas").value = ficha;
    document.getElementById("derrota").value = derrota = 0;
    document.getElementById("victoria").value = victoria = 0;
    document.getElementById("empate").value = empate = 0;

}
// BOTON RADIO DE ELECCION DE JUGADA
let usuarioElegido
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
            document.getElementById("resultado").style.cssText = 'color: yellow;';
            empates()
        } else if ((usuarioElegido === "Tijera" && maquinaElegido === "Papel") || (usuarioElegido === "Piedra" && maquinaElegido === "Tijera") || (usuarioElegido === "Papel" && maquinaElegido === "Piedra")) {
            resultado = "Eres mejor de lo que pensaba has ganado! 😎";
            document.getElementById("resultado").style.cssText = 'color: green;';
            document.getElementById("img").src = "./assets/img/ganar.gif"
            victorias()
        } else {
            resultado = "La maquina ha sido más hábil que tú Perdiste 🥹😭😿";
            document.getElementById("resultado").style.cssText = 'color: red;';
            document.getElementById("img").src = "./assets/img/perder.gif"
            derrotas()
        }

        document.getElementById("seleccionDeAmbos").innerHTML = `Elegiste: "${usuarioElegido}" y la Maquina "${maquinaElegido}"`;
        document.getElementById("resultado").innerHTML = resultado;
        fichasMenos();

    } else {
        document.getElementById("seleccionDeAmbos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("img").src = "./assets/img/insertaficha.gif"
    }
}


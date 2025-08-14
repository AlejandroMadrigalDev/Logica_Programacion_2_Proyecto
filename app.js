let numeroAleatorio = 0;
let intentos = 0;

function cambiarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroAleatorio) {
        cambiarTexto('h1', '¡Felicidades!');
        cambiarTexto('p', `Acertaste el numero en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario < numeroAleatorio) {
            cambiarTexto('h1', '¡Intenta de nuevo!');
            cambiarTexto('p', 'El numero es mayor');
        } else {
            cambiarTexto('h1', '¡Intenta de nuevo!');
            cambiarTexto('p', 'El numero es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function generaNumeroAleatorio() {
    return Math.floor(Math.random()*100)+1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales() {
    cambiarTexto('h1', 'JUEGO DE ADIVINAR UN NUMERO');
    cambiarTexto('p', 'Ingresa un numero de 1 al 100.');
    numeroAleatorio = generaNumeroAleatorio();
    intentos = 1;
}

condicionesIniciales();
/*
function cambiarTitulo() {
    let titulo = document.getElementById('ttt');

    titulo.innerHTML = 'TITULO NUEVO EN MAYUSCULAS';
}
*/
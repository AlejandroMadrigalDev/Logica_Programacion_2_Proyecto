let numeroAleatorio = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 20;
let maximoIntentos = 5;

console.log(`numeroAleatorio: ${numeroAleatorio}`);

function cambiarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if (intentos < maximoIntentos) {
        console.log(`intentos : ${intentos}`);
        if (numeroDeUsuario === numeroAleatorio) {
            cambiarTexto('h1', '¡Felicidades!');
            cambiarTexto('p', `Acertaste el numero en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('intentar').setAttribute('disabled', 'true');
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
    } else {        
        cambiarTexto('h1', '¡Juego terminado!');
        cambiarTexto('p', `No acertaste el numero en ${maximoIntentos} intentos. El numero era ${numeroAleatorio}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intentar').removeAttribute('disabled');
}

function generaNumeroAleatorio() {
    let nuevoNumeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(`nuevoNumeroGenerado: ${nuevoNumeroGenerado}`);
    console.log(`listaNumerosSorteados: ${listaNumerosSorteados}`);
    if (listaNumerosSorteados.length == numeroMaximo) {
        document.getElementById('intentar').setAttribute('disabled', 'true');
        cambiarTexto('h1', '¡Juego terminado!');
        cambiarTexto('p', 'No puedes jugar mas veces.');
        return;
    } else {
        if (listaNumerosSorteados.includes(nuevoNumeroGenerado)) {
            return generaNumeroAleatorio();
        } else {
            listaNumerosSorteados.push(nuevoNumeroGenerado);
            return nuevoNumeroGenerado;
        }
    }
}

function condicionesIniciales() {
    cambiarTexto('h1', 'JUEGO DE ADIVINAR UN NUMERO');
    cambiarTexto('p', `Ingresa un numero de 1 al ${numeroMaximo}.`);
    numeroAleatorio = generaNumeroAleatorio();
    intentos = 1;
}   

condicionesIniciales();
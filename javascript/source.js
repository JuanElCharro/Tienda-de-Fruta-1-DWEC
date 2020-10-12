//Funciones onclick() de cada fruta

/* Pruebas de pulsación
    function addPiña(){
    let fruta = 4;
    alert("Añadido un kilo de Piña");
    return fruta;
}

function addPomelo(){
    let fruta = 15;
    alert("Añadido un kilo de Pomelo");
    return fruta;
}

function addCastaña(){
    let fruta = 1;
    alert("Añadido un kilo de Castaña ");
    return fruta;
}

function addCoco(){
    let fruta = 6;
    alert("Añadido un kilo de Coco ");
    return fruta;
}

function addFresa(){
    let fruta = 2;
    alert("Añadido un kilo de Fresa ");
    return fruta;
}

function addGrosella(){
    let fruta = 10;
    alert("Añadido un kilo de Grosella ");
    return fruta;
}

function addHigo(){
    let fruta = 5;
    alert("Añadido un kilo de Higo ");
    return fruta;
}

function addLichi(){
    let fruta = 20;
    alert("Añadido un kilo de Lichi ");
    return fruta;
}

function addMora(){
    let fruta = 7;
    alert("Añadido un kilo de Mora ");
    return fruta;
}

function addNaranja(){
    let fruta = 2;
    alert("Añadido un kilo de Naranja ");
    return fruta;
}

function addPapaya(){
    let fruta = 8;
    alert("Añadido un kilo de Papaya ");
    return fruta;
}
*/

/**
 * Variables
 */
var precio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var precioTotal = 0;
var kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var contador = 0;
var precioMedio = 0;
var contenidoP;
var parrafoP;

/**
 * Función Principal
 */
function principal() {
    alert("Pulse en cada imagen para añadir un kilo a la compra");

    let pina = document.getElementById("pinna");
    pina.addEventListener("click", () => {

        alert("Añadido 1kg de Piña");
        precio[0] = precio[0] + 4;
        kilos[0] = kilos[0] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Piña --- " + kilos[0] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let pomelo = document.getElementById("pomelo");
    pomelo.addEventListener("click", () => {

        alert("Añadido 1kg de Pomelo");
        precio[1] = precio[1] + 15;
        kilos[1] = kilos[1] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Pomelo --- " + kilos[1] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let castanna = document.getElementById("castanna");
    castanna.addEventListener("click", () => {

        alert("Añadido 1kg de Castaña");
        precio[2] = precio[2] + 1;
        kilos[2] = kilos[2] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Castaña --- " + kilos[2] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let coco = document.getElementById("coco");
    coco.addEventListener("click", () => {

        alert("Añadido 1kg de Coco");
        precio[3] = precio[3] + 1;
        kilos[3] = kilos[3] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Coco --- " + kilos[3] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let fresa = document.getElementById("fresa");
    fresa.addEventListener("click", () => {

        alert("Añadido 1kg de Fresa");
        precio[4] = precio[4] + 1;
        kilos[4] = kilos[4] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Fresa --- " + kilos[4] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let grosella = document.getElementById("grosella");
    grosella.addEventListener("click", () => {

        alert("Añadido 1kg de Grosella");
        precio[5] = precio[5] + 1;
        kilos[5] = kilos[5] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Grosella --- " + kilos[5] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let higo = document.getElementById("higo");
    higo.addEventListener("click", () => {

        alert("Añadido 1kg de Higo");
        precio[6] = precio[6] + 1;
        kilos[6] = kilos[6] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Higo --- " + kilos[6] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let lichi = document.getElementById("lichi");
    lichi.addEventListener("click", () => {

        alert("Añadido 1kg de Lichi");
        precio[7] = precio[7] + 1;
        kilos[7] = kilos[7] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Lichi --- " + kilos[7] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let mora = document.getElementById("mora");
    mora.addEventListener("click", () => {

        alert("Añadido 1kg de Mora");
        precio[8] = precio[8] + 1;
        kilos[8] = kilos[8] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Mora --- " + kilos[8] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let naranja = document.getElementById("naranja");
    naranja.addEventListener("click", () => {

        alert("Añadido 1kg de Naranja");
        precio[9] = precio[9] + 1;
        kilos[9] = kilos[9] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Naranja --- " + kilos[9] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

    let papaya = document.getElementById("papaya");
    papaya.addEventListener("click", () => {

        alert("Añadido 1kg de Papaya");
        precio[10] = precio[10] + 1;
        kilos[10] = kilos[10] + 1;
        contador++;

        parrafoP = document.createElement("p");
        parrafoP.id = "p1";
        contenidoP = document.createTextNode(" Papaya --- " + kilos[10] + " kilo(s)");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);
    })

}

/**
 * Función para mostrar precio Total y Precio Medio
 */
function resultadoFinal() {

    for (let index = 0; index < precio.length; index++) {
        precioTotal = precioTotal + precio[index];
    }

    parrafoP = document.createElement("p");
    parrafoP.id = "p1";
    contenidoP = document.createTextNode(" Precio Total --- " + precioTotal + " €");
    parrafoP.appendChild(contenidoP);
    document.body.appendChild(parrafoP);

    PrecioMedio = (precioTotal/contador);

    parrafoP = document.createElement("p");
    parrafoP.id = "p1";
    contenidoP = document.createTextNode(" Precio Medio --- " + PrecioMedio + " €/kg");
    parrafoP.appendChild(contenidoP);
    document.body.appendChild(parrafoP);

}
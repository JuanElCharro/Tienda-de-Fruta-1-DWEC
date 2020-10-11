//Funciones onclick() de cada fruta

/* Testing
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

var precioPinna = 0;
var precioPomelo = 0;
var contenidoP;

function principal(){
    alert("Pulse en cada imagen para añadir un kilo a la compra");

    let pina = document.getElementById("pinna");
    pina.addEventListener("click", () => {

        alert("Añadido 1kg de Piña");
        precioPinna = precioPinna + 4;

        let parrafoP = document.createElement("p");
        parrafoP.id="p1";
        contenidoP = document.createTextNode(" Piña: " + precioPinna + "€");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);

    })

    let pomelo = document.getElementById("pomelo");
    pomelo.addEventListener("click", () => {

        alert("Añadido 1kg de Pomelo");
        precioPomelo = precioPomelo + 15;

        let parrafoP = document.createElement("p");
        parrafoP.id="p1";
        contenidoP = document.createTextNode(" Piña: " + precioPomelo + "€");
        parrafoP.appendChild(contenidoP);
        document.body.appendChild(parrafoP);

    })
}
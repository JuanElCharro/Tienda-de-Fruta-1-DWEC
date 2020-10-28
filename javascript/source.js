
//Variables Globales & Arrays
var precio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var nombreDeFrutas = ["pinna", "pomelo", "castanna", "coco", "fresa", "grosella", "higo", "lichi", "mora", "naranja", "papaya"];

var precioTotal = 0;
var contador = 0;
var precioMedio = 0;
var contenidoP;
var parrafoP;

/**
 * Clases Fruta: Principal, Frutas de verano y Frutas de invierno.
 */
class Fruta{
    constructor(nombre, kilos, precio){
        this.nombre = nombre;
        this.kilos = kilos;
        this.precio = precio;
    }

    getFruta(){
        return " " + this.nombre + " nombre " + this.kilos + " kilos " + this.precio + " €/kg "+ (this.precio * this.kilos) + " ";
    }
}

// Frutas de verano y de invierno extienden de la principal
class FrutaVerano extends Fruta{
    constructor(nombre, kilos, precio, proximidad, region){
        super(nombre, kilos, precio);

        this.proximidad = proximidad;
        this.region = region;
    }

}

class FrutaInvierno extends Fruta{
    constructor(nombre, kilos, precio, nevera){
        super(nombre, kilos, precio);

        this.nevera = nevera;
    }
}

//Objetos, me daban error al colocarlos encima de las clases Fruta, ahora ya no.
var pinnaObject = new FrutaVerano("Piña", 0, 4, true, "España");
var pomeloObject = new FrutaVerano("Pomelo", 0, 15, false, "Chile");
var castannaObject = new FrutaInvierno("Castaña", 0, 1, false);
var cocoObject = new FrutaVerano("Coco", 0, 6, false, "Panamá");
var fresaObject = new FrutaVerano("Fresa", 0, 2, true, "España");
var grosellaObject = new FrutaInvierno("Grosella", 0, 10, true);
var higoObject = new FrutaInvierno("Higo", 0, 5, false);
var lichiObject = new FrutaInvierno("Lichi", 0, 20, true);
var moraObject = new FrutaInvierno("Mora", 0, 7, true);
var naranjaObject = new FrutaVerano("Naranja", 0, 2, true, "España");
var papayaObject = new FrutaVerano("Papaya", 0, 8, false, "Ecuador");

/**
 * Función Principal
 */
function principal(frutaPulsada) {
    let cantidad = parseInt(prompt("INTRODUZCA LOS KILOS: "));

    switch(frutaPulsada){
        case "pinna":
            pinnaObject.cantidad = 
                pinnaObject.cantidad + cantidad;

            kilos[0] = pinnaObject.cantidad;

            for (let index = 0; index < pinnaObject.cantidad; index++) {
                pinnaObject.precio = pinnaObject.precio + 4;
                contador++;
            }
            precio[0] = pinnaObject.precio;
            
            document.getElementById("p1").innerHTML = (" Piña --- " + pinnaObject.cantidad + " kilo(s)");
            document.getElementById("p2").innerHTML = (" Piña --- " + pinnaObject.precio + " euro(s)");

            break;
        case "pomelo":
            pomeloObject.cantidad = 
                pomeloObject.cantidad + cantidad;
            break;
        case "castanna":
            castannaObject.cantidad = 
                castannaObject.cantidad + cantidad;
            break;
        case "coco":
            cocoObject.cantidad = 
                cocoObject.cantidad + cantidad;
            break;
        case "fresa":
            fresaObject.cantidad = 
                fresaObject.cantidad + cantidad;
            break;
        case "grosella":
            grosellaObject.cantidad = 
                grosellaObject.cantidad + cantidad;
            break;
        case "higo":
            higoObject.cantidad = 
                higoObject.cantidad + cantidad;
            break;
        case "lichi":
            lichiObject.cantidad = 
                lichiObject.cantidad + cantidad;
            break;
        case "mora":
            moraObject.cantidad = 
                moraObject.cantidad + cantidad;
            break;
        case "naranja":
            naranjaObject.cantidad = 
                naranjaObject.cantidad + cantidad;
            break;
        case "papaya":
            papayaObject.cantidad = 
                papayaObject.cantidad + cantidad;
            break;
    }

    /*
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
 
    */
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
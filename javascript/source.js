
//Variables Globales & Arrays
var precio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var nombreDeFrutas = ["pinna", "pomelo", "castanna", "coco", "fresa", "grosella", "higo", "lichi", "mora", "naranja", "papaya"]; //Posible uso para un bucle u objetos.

var contador = 0;
var precioMedio = 0;
var contenidoP;
var parrafoP;

/**
 * Clases Fruta: Principal, Frutas de verano y Frutas de invierno.
 */
class Fruta {

    constructor(nombre, kilos, precio) {
        this.nombre = nombre;
        this.kilos = kilos;
        this.precio = precio;
    }

    getFruta() {
        return " " + this.nombre + " nombre " + this.kilos + " kilos " + this.precio + " €/kilo " + (this.precio * this.kilos) + " ";
    }
}

// Frutas de verano y de invierno extienden de la principal
class FrutaVerano extends Fruta {
    constructor(nombre, kilos, precio, proximidad, region) {
        super(nombre, kilos, precio);

        this.proximidad = proximidad;
        this.region = region;
    }

}

class FrutaInvierno extends Fruta {
    constructor(nombre, kilos, precio, nevera) {
        super(nombre, kilos, precio);

        this.nevera = nevera;
    }
}

//Objetos, me daban error al colocarlos encima de las clases Fruta, ahora ya no.
var pinnaObject = new FrutaVerano("Piña", 0, 4.1, true, "España");
var pomeloObject = new FrutaVerano("Pomelo", 0, 15.2, false, "Chile");
var castannaObject = new FrutaInvierno("Castaña", 0, 1.3, false);
var cocoObject = new FrutaVerano("Coco", 0, 6.4, false, "Panamá");
var fresaObject = new FrutaVerano("Fresa", 0, 2.5, true, "España");
var grosellaObject = new FrutaInvierno("Grosella", 0, 10.6, true);
var higoObject = new FrutaInvierno("Higo", 0, 5.7, false);
var lichiObject = new FrutaInvierno("Lichi", 0, 20.8, true);
var moraObject = new FrutaInvierno("Mora", 0, 7.9, true);
var naranjaObject = new FrutaVerano("Naranja", 0, 2.11, true, "España");
var papayaObject = new FrutaVerano("Papaya", 0, 8.12, false, "Ecuador");

/**
 * Función Principal
 */
function principal(frutaPulsada) {
    let pedidoAlUsuario = prompt("INTRODUZCA LOS KILOS: ");
    let cantidad = Number(pedidoAlUsuario);

    switch (frutaPulsada) {
        case "pinna":
            pinnaObject.kilos =
                pinnaObject.kilos + cantidad;

            kilos[0] = pinnaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[0] = precio[0] + pinnaObject.precio;
                contador++; //Para la media
            }
            break;
        case "pomelo":
            pomeloObject.kilos =
                pomeloObject.kilos + cantidad;

            kilos[0] = pomeloObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[1] = precio[1] + pomeloObject.precio;
                contador++; //Para la media
            }
            break;
        case "castanna":
            castannaObject.kilos =
                castannaObject.kilos + cantidad;

            kilos[2] = castannaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[2] = precio[2] + castannaObject.precio;
                contador++; //Para la media
            }
            break;
        case "coco":
            cocoObject.kilos =
                cocoObject.kilos + cantidad;

            kilos[3] = cocoObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[3] = precio[3] + cocoObject.precio;
                contador++; //Para la media
            }
            break;
        case "fresa":
            fresaObject.kilos =
                fresaObject.kilos + cantidad;

            kilos[4] = fresaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[4] = precio[4] + fresaObject.precio;
                contador++; //Para la media
            }
            break;
        case "grosella":
            grosellaObject.kilos =
                grosellaObject.kilos + cantidad;

            kilos[5] = grosellaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[5] = precio[5] + grosellaObject.precio;
                contador++; //Para la media
            }
            break;
        case "higo":
            higoObject.kilos =
                higoObject.kilos + cantidad;

            kilos[6] = higoObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[6] = precio[6] + higoObject.precio;
                contador++; //Para la media
            }
            break;
        case "lichi":
            lichiObject.kilos =
                lichiObject.kilos + cantidad;

            kilos[7] = lichiObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[7] = precio[7] + lichiObject.precio;
                contador++; //Para la media
            }
            break;
        case "mora":
            moraObject.kilos =
                moraObject.kilos + cantidad;

            kilos[8] = moraObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[8] = precio[8] + moraObject.precio;
                contador++; //Para la media
            }
            break;
        case "naranja":
            naranjaObject.kilos =
                naranjaObject.kilos + cantidad;

            kilos[9] = naranjaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[9] = precio[9] + naranjaObject.precio;
                contador++; //Para la media
            }
            break;
        case "papaya":
            papayaObject.kilos =
                papayaObject.kilos + cantidad;

            kilos[10] = papayaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[10] = precio[10] + papayaObject.precio;
                contador++; //Para la media
            }
            break;
    }
}

/**
 * Función que calcula el precio total.
 */
function precioTotalFunc(){
    var precioTotal = 0;

    for (let index = 0; index < precio.length; index++) { 
        precioTotal = precioTotal + precio[index];
    }
    return precioTotal;
}

function ventanaInviernoVerano(){

}

/**
 * Función para mostrar precio Total y Precio Medio.
 */
function resultadoFinal() {

    let d = new Date();
    let n = d.toLocaleString();
    document.getElementById("p0").innerHTML = ("Fecha de compra: " + n);

    //Mostrar Las Frutas - Ordenado Inverso
    document.getElementById("p2").innerHTML = (" Pomelo --- " + pomeloObject.kilos + "kg --- " + pomeloObject.precio + "€u --- " + precio[1] + "€ ");
    document.getElementById("p1").innerHTML = (" Pinna --- " + pinnaObject.kilos + "kg --- " + pinnaObject.precio + "€u --- " + precio[0] + "€ ");
    document.getElementById("p11").innerHTML = (" Papaya --- " + papayaObject.kilos + "kg --- " + papayaObject.precio + "€u --- " + precio[10] + "€ ");
    document.getElementById("p10").innerHTML = (" Naranja --- " + naranjaObject.kilos + "kg --- " + naranjaObject.precio + "€u --- " + precio[9] + "€ ");
    document.getElementById("p9").innerHTML = (" Mora --- " + moraObject.kilos + "kg --- " + moraObject.precio + "€u --- " + precio[8] + "€ ");
    document.getElementById("p8").innerHTML = (" Lichi --- " + lichiObject.kilos + "kg --- " + lichiObject.precio + "€u --- " + precio[7] + "€ ");
    document.getElementById("p7").innerHTML = (" Higo --- " + higoObject.kilos + "kg --- " + higoObject.precio + "€u --- " + precio[6] + "€ ");
    document.getElementById("p6").innerHTML = (" Grosella --- " + grosellaObject.kilos + "kg --- " + grosellaObject.precio + "€u --- " + precio[5] + "€ ");
    document.getElementById("p5").innerHTML = (" Fresa --- " + fresaObject.kilos + "kg --- " + fresaObject.precio + "€u --- " + precio[4] + "€ ");
    document.getElementById("p4").innerHTML = (" Coco --- " + cocoObject.kilos + "kg --- " + cocoObject.precio + "€u --- " + precio[3] + "€ ");
    document.getElementById("p3").innerHTML = (" Castaña --- " + castannaObject.kilos + "kg --- " + castannaObject.precio + "€u --- " + precio[2] + "€ ");

    document.getElementById("separador").innerHTML = (" ------------------------------ ");

    precioTotal = precioTotalFunc();

    //Media y Precio Total
    document.getElementById("p12").innerHTML = (" Precio Total --- " + (Math.floor(precioTotal*100)/100).toFixed(2) + " €");
    PrecioMedio = (precioTotal / contador);
    document.getElementById("p13").innerHTML = (" Precio Medio --- " +  PrecioMedio.toFixed(3) + " €/kg");

}
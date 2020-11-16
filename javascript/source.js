
//Variables Globales & Arrays
var precio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
            barraL(pinnaObject.nombre, pinnaObject.kilos);
            break;
        case "pomelo":
            pomeloObject.kilos =
                pomeloObject.kilos + cantidad;

            kilos[0] = pomeloObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[1] = precio[1] + pomeloObject.precio;
                contador++; //Para la media
            }
            barraL(pomeloObject.nombre, pomeloObject.kilos);
            break;
        case "castanna":
            castannaObject.kilos =
                castannaObject.kilos + cantidad;

            kilos[2] = castannaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[2] = precio[2] + castannaObject.precio;
                contador++; //Para la media
            }
            barraL(castannaObject.nombre, castannaObject.kilos);
            break;
        case "coco":
            cocoObject.kilos =
                cocoObject.kilos + cantidad;

            kilos[3] = cocoObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[3] = precio[3] + cocoObject.precio;
                contador++; //Para la media
            }
            barraL(cocoObject.nombre, cocoObject.kilos);
            break;
        case "fresa":
            fresaObject.kilos =
                fresaObject.kilos + cantidad;

            kilos[4] = fresaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[4] = precio[4] + fresaObject.precio;
                contador++; //Para la media
            }
            barraL(fresaObject.nombre, fresaObject.kilos);
            break;
        case "grosella":
            grosellaObject.kilos =
                grosellaObject.kilos + cantidad;

            kilos[5] = grosellaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[5] = precio[5] + grosellaObject.precio;
                contador++; //Para la media
            }
            barraL(grosellaObject.nombre, grosellaObject.kilos);
            break;
        case "higo":
            higoObject.kilos =
                higoObject.kilos + cantidad;

            kilos[6] = higoObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[6] = precio[6] + higoObject.precio;
                contador++; //Para la media
            }
            barraL(higoObject.nombre, higoObject.kilos);
            break;
        case "lichi":
            lichiObject.kilos =
                lichiObject.kilos + cantidad;

            kilos[7] = lichiObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[7] = precio[7] + lichiObject.precio;
                contador++; //Para la media
            }
            barraL(lichiObject.nombre, lichiObject.kilos);
            break;
        case "mora":
            moraObject.kilos =
                moraObject.kilos + cantidad;

            kilos[8] = moraObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[8] = precio[8] + moraObject.precio;
                contador++; //Para la media
            }
            barraL(moraObject.nombre, moraObject.kilos);
            break;
        case "naranja":
            naranjaObject.kilos =
                naranjaObject.kilos + cantidad;

            kilos[9] = naranjaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[9] = precio[9] + naranjaObject.precio;
                contador++; //Para la media
            }
            barraL(naranjaObject.nombre, naranjaObject.kilos);
            break;
        case "papaya":
            papayaObject.kilos =
                papayaObject.kilos + cantidad;

            kilos[10] = papayaObject.kilos;

            for (let index = 0; index < cantidad; index++) {
                precio[10] = precio[10] + papayaObject.precio;
                contador++; //Para la media
            }
            barraL(papayaObject.nombre, papayaObject.kilos);
            break;
    }
}

/**
 * Función que calcula el precio total.
 */
function precioTotalFunc() {
    var precioTotal = 0;

    for (let index = 0; index < precio.length; index++) {
        precioTotal = precioTotal + precio[index];
    }
    return precioTotal;
}

/**
 * Función de barra lateral. si es mayor de 1 kilo se muestra en la derecha.
 * @param {*} fruta 
 * @param {*} kilos 
 */
function barraL(fruta, kilos) {
    if (kilos >= 1) {
        var elemento = document.createElement("p");
        elemento.appendChild(document.createTextNode(" [FRUTA:] " + fruta + " [KILOS:] " + kilos + ""));
        document.getElementById("barraLateral").appendChild(elemento);
    }
}

/**
 * Función para mostrar precio Total y Precio Medio.
 */
function resultadoFinal() {

    ventanaTerminarPedido();

    let arrayInviernoVerano = [];
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

    if (pomeloObject.kilos > 0) {
        arrayInviernoVerano.push(("[ El pomelo es de verano, ¿es cercano?: " + pomeloObject.proximidad + " y su zona es: " + pomeloObject.region + "] "));
    }
    if (pinnaObject.kilos > 0) {
        arrayInviernoVerano.push(("[ La piña es de verano, ¿es cercana?: " + pinnaObject.proximidad + " y su zona es: " + pinnaObject.region + "] "));
    }
    if (papayaObject.kilos > 0) {
        arrayInviernoVerano.push(("[ La papaya es de verano, ¿es cercana?: " + papayaObject.proximidad + " y su zona es: " + papayaObject.region + "] "));
    }
    if (naranjaObject.kilos > 0) {
        arrayInviernoVerano.push(("[ La naranja es de verano, ¿es cercana?: " + naranjaObject.proximidad + " y su zona es: " + naranjaObject.region + "] "));
    }
    if (moraObject.kilos > 0) {
        arrayInviernoVerano.push(("[ La mora es de invierno, ¿se debe guardar en la nevera?: " + moraObject.nevera + "] "));
    }
    if (lichiObject.kilos > 0) {
        arrayInviernoVerano.push(("[ El lichi es de invierno, ¿se debe guardar en la nevera?: " + lichiObject.nevera + "] "));
    }
    if (higoObject.kilos > 0) {
        arrayInviernoVerano.push(("[ El Higo es de invierno, ¿se debe guardar en la nevera?: " + higoObject.nevera + "] "));
    }
    if (grosellaObject.kilos > 0) {
        arrayInviernoVerano.push(("[ La grosella es de invierno, ¿se debe guardar en la nevera?: " + grosellaObject.nevera + "] "));
    }
    if (fresaObject.kilos > 0) {
        arrayInviernoVerano.push(("[ La fresa es de verano, ¿es cercana?: " + fresaObject.proximidad + " y su zona es: " + fresaObject.region + "] "));
    }
    if (cocoObject.kilos > 0) {
        arrayInviernoVerano.push(("[ El coco es de verano, ¿es cercano?: " + cocoObject.proximidad + " y su zona es: " + cocoObject.region + "] "));
    }
    if (castannaObject.kilos > 0) {
        arrayInviernoVerano.push(("[ La castaña es de invierno, ¿se debe guardar en la nevera?: " + castannaObject.nevera + "] "));
    }

    document.getElementById("separador").innerHTML = (" ------------------------------ ");

    //Media y Precio Total.
    mediaYPrecioTotal();
    //MostrarFrutaInviernoOVerano.
    inviernoVerano(arrayInviernoVerano);
    //Limpiar a los 10 segundos.
    //window.setInterval('refrescar()', 10000);
}

function ventanaTerminarPedido(){
    window.name = "Ventana";
    var ventana = window.open("", "MsgWindow", "width=500,height=300");
    ventana.document.write("<button style='font-size: 25px;' id='resultadoButton;' onclick='resultadoFinal()'>Realizar Pedido</button>");
    ventana.document.write("<button style='font-size: 25px;' id='limpiarButton' onclick='limpiarFormulario()'>Limpiar Formulario</button>");
}

/**
 * Función que recibe precioTotal() y lo muestra seguido del PrecioMedio.
 * Cumple los requisitos de redondeo.
 */
function mediaYPrecioTotal(){
    precioTotal = precioTotalFunc();

    document.getElementById("p12").innerHTML = (" Precio Total --- " + (Math.floor(precioTotal * 100) / 100).toFixed(2) + " €"); //Redondeo hacia abajo y dos decimales
    PrecioMedio = (precioTotal / contador);
    document.getElementById("p13").innerHTML = (" Precio Medio --- " + PrecioMedio.toFixed(3) + " €/kg"); //Tres decimales
}

/**
 * Función que recibe el array sobre invierno o verano y muestra en una nueva ventana las descripciones.
 * @param {*} arrayIV 
 */
function inviernoVerano(arrayIV){
    if (arrayIV.length > 0) { //Comprobamos si se ha introducido algún elemento en el array.
        window.name = "Ventana";
        var ventana2 = window.open("", "MsgWindow", "width=500,height=500");
        ventana2.document.write("<hr> <p> " + arrayIV.join('\n') + " </p> <hr>");
    }
}

/**
 * Función JavaScript que recarga la página, y limpia variables y datos.
 */
function limpiarFormulario() {
    precio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    contador = 0;
    precioMedio = 0;
    window .location.reload();
}
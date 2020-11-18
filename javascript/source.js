
//Variables Globales & Arrays
var precio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var cantidad = 0;
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

//Objetos de cada fruta
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

//Array de objetos de cada fruta.
var arrayDeObjetos = [pinnaObject, pomeloObject, castannaObject, cocoObject, fresaObject, grosellaObject, higoObject, lichiObject, moraObject, naranjaObject, papayaObject];

window.onload = () => {
    //Array para el tooltip
    for (let index = 0; index < arrayDeObjetos.length; index++) {
        document.getElementsByTagName("img")[index].addEventListener("mouseover", () => {
            document.getElementsByClassName("tooltiptext")[index].innerHTML = (" La " + arrayDeObjetos[index].nombre + " ¿es cercana?: " + arrayDeObjetos[index].proximidad + " y es de: " + arrayDeObjetos[index].region + " ¿nevera? " + arrayDeObjetos[index].nevera + "");
        }, false);
    }
}

/**
 * Función Principal
 */
function principal(frutaPulsada) {
    let recogerValorInput = 0;

    switch (frutaPulsada) {
        case "pinna":
            recogerValorInput = document.getElementById("pinnaA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("pomeloA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("castannaA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("cocoA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("fresaA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("grosellaA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("higoA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("lichiA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("moraA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("naranjaA").value;
            cantidad = Number(recogerValorInput);

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
            recogerValorInput = document.getElementById("papayaA").value;
            cantidad = Number(recogerValorInput);

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
 * Muestra el nombre de la fruta y la cantidad de kilos que se han introducido en el input text 
 * de la fruta correspondiente. Solo lo muestra en la barra lateral si hay más de un kilo.
 * @param {*} fruta 
 * @param {*} kilos 
 */
function barraL(fruta, kilos) {
    if (kilos >= 1) {
        var elemento = document.createElement("p");

        elemento.appendChild(document.createTextNode(" FRUTA: " + fruta + " KILOS: " + cantidad + ""));
        document.getElementById("barraLateral").appendChild(elemento);
        elemento.setAttribute("class", fruta);
        let elementos = document.getElementById("barraLateral").childNodes;
        
        for (let index = 0; index < elementos.length; index++) {
            if (elementos[index].getAttribute("class") == fruta) {
                elementos[index].style.backgroundColor = "lightblue";
            }
            if (elementos[index].getAttribute("class") != fruta) {
                elementos[index].style.backgroundColor = "white";
            }
            //Para el scroll de la vista, que muestre la última.
            document.getElementById("barraLateral").scrollIntoView(false);
        }
    }
}

/**
 * Función que validará el formulario del usuario. Si hay algún elemento no validado
 * devolverá un error y no se abrirá la nueva ventana.
 */
function validar() {
    //Creo un array dinámico, en el cual introduciré los errores y verificaré al final si cumplen la condición todos para ejecutar la ventana emergente.
    let errores = [];

    //Type text
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let direccion = document.getElementById("direccion");
    let email = document.getElementById("email");

    //Type text labels
    let nombreL = document.getElementById("nombreL");
    let apellidosL = document.getElementById("apellidosL");
    let direccionL = document.getElementById("direccionL");
    let emailL = document.getElementById("emailL");

    //Radio Buttons
    let tarjetaSi = document.getElementById("tarjetaSi");
    let tarjetaNo = document.getElementById("tarjetaNo");
    let sicliente = document.getElementById("sicliente");
    let nocliente = document.getElementById("nocliente");

    //Radio Buttons labels
    let tarjetaSiL = document.getElementById("tarjetaSiL");
    let tarjetaNoL = document.getElementById("tarjetaNoL");
    let siclienteL = document.getElementById("siclienteL");
    let noclienteL = document.getElementById("noclienteL");

    //Type Text en caso positivo
    let codCliente = document.getElementById("codCliente");

    if (!nombre.checkValidity()) {
        nombre.style.backgroundColor = "red";
        nombreL.style.backgroundColor = "red";
        errores.push(false);
    } else {
        nombre.style.backgroundColor = "white";
        nombreL.style.backgroundColor = "white";
        errores.push(true);
    }

    if (!apellidos.checkValidity()) {
        apellidos.style.backgroundColor = "red";
        apellidosL.style.backgroundColor = "red";
        errores.push(false);
    } else {
        apellidos.style.backgroundColor = "white";
        apellidosL.style.backgroundColor = "white";
        errores.push(true);
    }

    if (!direccion.checkValidity()) {
        direccion.style.backgroundColor = "red";
        direccionL.style.backgroundColor = "red";
        errores.push(false);
    } else {
        direccion.style.backgroundColor = "white";
        direccionL.style.backgroundColor = "white";
        errores.push(true);
    }

    if (!email.checkValidity()) {
        email.style.backgroundColor = "red";
        emailL.style.backgroundColor = "red";
        errores.push(false);
    } else {
        email.style.backgroundColor = "white";
        emailL.style.backgroundColor = "white";
        errores.push(true);
    }

    if (tarjetaSi.checked == true || tarjetaNo.checked == true) {
        errores.push(true);
        tarjetaSiL.style.backgroundColor = "rgb(186, 179, 255)";
        tarjetaNoL.style.backgroundColor = "rgb(186, 179, 255)";
    }else{
        errores.push(false);
        tarjetaSiL.style.backgroundColor = "red";
        tarjetaNoL.style.backgroundColor = "red";
    }

    if (sicliente.checked == true || nocliente.checked == true) {
        errores.push(true);
        siclienteL.style.backgroundColor = "rgb(186, 179, 255)";
        noclienteL.style.backgroundColor = "rgb(186, 179, 255)";
        codCliente.style.backgroundColor = "white";
    }else{
        errores.push(false);
        siclienteL.style.backgroundColor = "red";
        noclienteL.style.backgroundColor = "red";
    }
    if (sicliente.checked == true) {
        if (!codCliente.checkValidity()) {
            codCliente.style.backgroundColor = "red";
            errores.push(false);
        }else{
            codCliente.style.backgroundColor = "white";
            errores.push(true);
        }
    }

    //Recorremos el bucle dinámico, si algún valor es falso devolverá true y ejecutará la ventana emergente, sino devolverá false.
    for (let index = 0; index < errores.length; index++) { 
        if (errores[index] == false) {
            return true;
        }
    }
    return false;
}

/**
 * Función que abre una nueva ventana con el resultado.
 */
function resultadoFinal() {

    if (validar() == false) {
        let ventanilla = window.open("compra.html", "pop-up", "width=500px height=300px scrollbars=yes");
    }
}

/**
 * Función JavaScript que recarga la página, y limpia variables y datos.
 */
function limpiarFormulario() {
    //Limpia todos los input de las frutas
    document.getElementById("pinnaA").value = '';
    document.getElementById("pomeloA").value = '';
    document.getElementById("castannaA").value = '';
    document.getElementById("cocoA").value = '';
    document.getElementById("fresaA").value = '';
    document.getElementById("grosellaA").value = '';
    document.getElementById("higoA").value = '';
    document.getElementById("lichiA").value = '';
    document.getElementById("moraA").value = '';
    document.getElementById("naranjaA").value = '';
    document.getElementById("papayaA").value = '';

    //Limpia los textos del formulario
    document.getElementById("nombre").value = '';
    document.getElementById("apellidos").value = '';
    document.getElementById("direccion").value = '';
    document.getElementById("email").value = '';

    //Limpia los radio buttons
    document.getElementById("tarjetaSi").checked = false;
    document.getElementById("tarjetaNo").checked = false;
    document.getElementById("sicliente").checked = false;
    document.getElementById("nocliente").checked = false;

    //Limpia el imput restante
    document.getElementById("codCliente").value = '';

    //Limpia la barra lateral derecha
    window.location.reload();

    //Limpia las variables
    precio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    contador = 0;
    precioMedio = 0;
}


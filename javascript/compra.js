window.onload = () => {
    //Botón limpiar
    document.getElementById("volv").addEventListener("click", function () {
        window.close();
    });

    //Botón Terminar Pedido
    document.getElementById("term").addEventListener("click", function () {
        window.close();
        ventana.limpiarFormulario();
    });

    //Variable para acceder al otro fichero de JavaScript
    let ventana = window.opener;

    //Variables para usar otras variables del otro fichero
    let venta = ventana.precio;

    let d = new Date();
    let n = d.toLocaleString();
    document.getElementById("p0").innerHTML = ("Fecha de compra: " + n);

    //Mostrar Las Frutas - Ordenado Inverso
    document.getElementById("p2").innerHTML = (" Pomelo --- " + ventana.pomeloObject.kilos + "kg --- " + ventana.pomeloObject.precio + "€u --- " + venta[1] + "€ ");
    document.getElementById("p1").innerHTML = (" Pinna --- " + ventana.pinnaObject.kilos + "kg --- " + ventana.pinnaObject.precio + "€u --- " + venta[0] + "€ ");
    document.getElementById("p11").innerHTML = (" Papaya --- " + ventana.papayaObject.kilos + "kg --- " + ventana.papayaObject.precio + "€u --- " + venta[10] + "€ ");
    document.getElementById("p10").innerHTML = (" Naranja --- " + ventana.naranjaObject.kilos + "kg --- " + ventana.naranjaObject.precio + "€u --- " + venta[9] + "€ ");
    document.getElementById("p9").innerHTML = (" Mora --- " + ventana.moraObject.kilos + "kg --- " + ventana.moraObject.precio + "€u --- " + venta[8] + "€ ");
    document.getElementById("p8").innerHTML = (" Lichi --- " + ventana.lichiObject.kilos + "kg --- " + ventana.lichiObject.precio + "€u --- " + venta[7] + "€ ");
    document.getElementById("p7").innerHTML = (" Higo --- " + ventana.higoObject.kilos + "kg --- " + ventana.higoObject.precio + "€u --- " + venta[6] + "€ ");
    document.getElementById("p6").innerHTML = (" Grosella --- " + ventana.grosellaObject.kilos + "kg --- " + ventana.grosellaObject.precio + "€u --- " + venta[5] + "€ ");
    document.getElementById("p5").innerHTML = (" Fresa --- " + ventana.fresaObject.kilos + "kg --- " + ventana.fresaObject.precio + "€u --- " + venta[4] + "€ ");
    document.getElementById("p4").innerHTML = (" Coco --- " + ventana.cocoObject.kilos + "kg --- " + ventana.cocoObject.precio + "€u --- " + venta[3] + "€ ");
    document.getElementById("p3").innerHTML = (" Castaña --- " + ventana.castannaObject.kilos + "kg --- " + ventana.castannaObject.precio + "€u --- " + venta[2] + "€ ");

    document.getElementById("separador").innerHTML = (" ------------------------------ ");

    /**
     * Función que recibe precioTotal() y lo muestra seguido del PrecioMedio.
     * Cumple los requisitos de redondeo.
     */
    function mediaYPrecioTotal() {
        let precioTotal = precioTotalFunc();
        let cont = ventana.contador;

        document.getElementById("p12").innerHTML = (" Precio Total --- " + (Math.floor(precioTotal * 100) / 100).toFixed(2) + " €"); //Redondeo hacia abajo y dos decimales
        let PrecioMedio = (precioTotal / cont); console.log(cont);
        document.getElementById("p13").innerHTML = (" Precio Medio --- " + PrecioMedio.toFixed(3) + " €/kg"); //Tres decimales
    }

    /**
     * Función que calcula el precio total.
     */
    function precioTotalFunc() {
        var precioTotal = 0;

        for (let index = 0; index < venta.length; index++) {
            precioTotal = precioTotal + venta[index];
        }
        return precioTotal;
    }

    mediaYPrecioTotal(); //Mostramos precio total y precio medio
}
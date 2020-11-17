window.onload = () => {
    let volv = document.getElementById("volver");
    let term = document.getElementById("terminar");

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

    document.getElementById("separador").innerHTML = (" ------------------------------ ");

    //Media y Precio Total.
    mediaYPrecioTotal();
    //MostrarFrutaInviernoOVerano.
    inviernoVerano(arrayInviernoVerano);
    //Limpiar a los 10 segundos.
    //window.setInterval('refrescar()', 10000);
}
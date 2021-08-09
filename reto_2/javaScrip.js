function rebaja (precio, descuento){
   return precio * (100 - descuento) / 100;
}


function calcularDescuento() {
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = parseFloat(inputPrecio.value);

    const inputDescuento = document.getElementById("inputDescuento");
    const descuento = parseFloat(inputDescuento.value);

    const descuentoFinal = rebaja(precio, descuento);
    let resultado = document.getElementById("resultado");
    // Llamo toda la etiqueta "p" a "resultado"
    resultado.innerText = descuentoFinal;
    // Con es to escribes en HTML con JS
}


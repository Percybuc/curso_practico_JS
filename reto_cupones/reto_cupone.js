class ofertas {
    constructor(n, v){
        this.name = n;
        this.valor = v;
    }
}

let cupones = [];
cupones.push( new ofertas("DESCUENTO25", 25));
cupones.push( new ofertas("DESCUENTO50", 50));
cupones.push( new ofertas("DESCUENTO75", 75));

function descuentoConCupon () {
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = parseFloat(inputPrecio.value);

    const inputCupon = document.getElementById("inputCupon");
    const cupon = inputCupon.value;
}

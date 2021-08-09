class Ofertas {
    constructor(n, v){
        this.name = n;
        this.valor = v;
    }
}
function rebaja (precio, descuento){
    return precio * (100 - descuento) / 100;
}

let cupones = [];
cupones.push( new Ofertas("DESCUENTO25", 25));
cupones.push( new Ofertas("DESCUENTO50", 50));
cupones.push( new Ofertas("DESCUENTO75", 75));

function descuentoConCupon () {
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = parseFloat(inputPrecio.value);

    const inputCupon = document.getElementById("inputCupon");
    const cupon = inputCupon.value;

    if (cupon == "DESCUENTO25"){
        const descuentoFinal = rebaja(precio, cupones[0].valor);
        const resultado = document.getElementById("resultado");
        resultado.innerText = descuentoFinal;
    }
    else if (cupon == "DESCUENTO50"){
        const descuentoFinal = rebaja(precio, cupones[1].valor);
        const resultado = document.getElementById("resultado");
        resultado.innerText = descuentoFinal;
    }
    else if (cupon == "DESCUENTO75"){
        const descuentoFinal = rebaja(precio, cupones[2].valor);
        const resultado = document.getElementById("resultado");
        resultado.innerText = descuentoFinal;
    }
    else {
        const resultado = document.getElementById("resultado");
        resultado.innerText = "FAIL";
    }
}
    
    // switch(cupon){
    //     case "DESCUENTO25":
    //         const precioFinal = rebaja(precio, cupones[0].valor);
    //         let resultado = document.getElementById("resultado");
    //         resultado.innerText = precioFinal;
    //     break;
    //     case "DESCUENTO50":
    //         const precioFinal = rebaja(precio, cupones[1].valor);
    //         let resultado = document.getElementById("resultado");
    //         resultado.innerText = precioFinal;
    //     break;
    //     case "DESCUENTO75":
    //         const precioFinal = rebaja(precio, cupones[2].valor);
    //         let resultado = document.getElementById("resultado");
    //         resultado.innerText = precioFinal;
    //     break;
    //     default:
    //         let resultado = document.getElementById("resultado");
    //         resultado.innerText = "FAIL";
    //     break;
    // }    
// -------------------MI PRIMER SEGUNDO INTENTO Y SALIÓ BIEN ---------------------
class Ofertas {
    constructor(n, v){
        this.name = n;
        this.valor = v;
    }
}
function rebaja (costo, descuento){
    return costo * (100 - descuento) / 100;
}

let cupones = [];
cupones.push( new Ofertas("DESCUENTO25", 25));
cupones.push( new Ofertas("DESCUENTO50", 50));
cupones.push( new Ofertas("DESCUENTO75", 75));

function descuentoConCupon() {
    const inputCupon = document.getElementById("inputCupon");
    const cupon = inputCupon.value;

    const inputPrecio = document.getElementById("inputPrecio");
    const precio = parseFloat(inputPrecio.value);

    let encontrar = cupones.find(tiket => {
        return tiket.name === cupon;
    // Es lo mismo qué:
    // let encontrar = function(tiket) {
    //     return tiket.name === cupon;
    // }
    // let encontrarCupon = cupones.find(encontrar);
    // Solo que en esta versión primero metemos la función a una variable, y luego recién les pasamos el método FIND
    //RECORDAR -------- Si te retorna TRUE, entonces encontrar = A TODO EL OBJETO. 
    });
    if (!encontrar){
    // Si la variables encontrar sale FALSE
        const resultado = document.getElementById("resultado");
        resultado.innerText = "FAIL o:";
    } 
    else {
        const porcentaje = encontrar.valor;
        const precioFinal = rebaja(precio, porcentaje); 
        
        const resultado = document.getElementById("resultado");
        resultado.innerText = precioFinal;
    }
}





// ------ ESTE SÍ FUNCIONÓ -------
// function descuentoConCupon() {
//     const inputPrecio = document.getElementById("inputPrecio");
//     const precio = parseFloat(inputPrecio.value);

//     const inputCupon = document.getElementById("inputCupon");
//     const cupon = inputCupon.value;
// }
// function descuentoConCupon () {
//     const inputPrecio = document.getElementById("inputPrecio");
//     const precio = parseFloat(inputPrecio.value);

//     const inputCupon = document.getElementById("inputCupon");
//     const cupon = inputCupon.value;

//     if (cupon == "DESCUENTO25"){
//         descuentoFinal = rebaja(precio, cupones[0].valor);
//         const resultado = document.getElementById("resultado");
//         resultado.innerText = descuentoFinal;
//     }
//     else if (cupon == "DESCUENTO50"){
//         descuentoFinal = rebaja(precio, cupones[1].valor);
//         const resultado = document.getElementById("resultado");
//         resultado.innerText = descuentoFinal;
//     }
//     else if (cupon == "DESCUENTO75"){
//         descuentoFinal = rebaja(precio, cupones[2].valor);
//         const resultado = document.getElementById("resultado");
//         resultado.innerText = descuentoFinal;
//     }
//     else {
//         const resultado = document.getElementById("resultado");
//         resultado.innerText = "FAIL";
//     }
// }




// --------  ESTE INTENTO CON switch NO SIRVIÓ :'V ----------------
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
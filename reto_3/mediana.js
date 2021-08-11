
// ------------ MEDIANA ----------------

function calcularPromedio (lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    return sumaLista / lista.length;
}

let lista1 = [
    100, 
    200, 
    500, 
    800,
    40000000];

function esPar (numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediana (listado){
    
    let mitadListado = parseInt(listado.length / 2);
    let mediana;

    if (esPar(listado.length)) {
        const elemento1 = listado[mitadListado - 1];
        const elemento2 = listado[mitadListado];
        const caulcularPromedioE1yE2 = calcularPromedio([
            elemento1, 
            elemento2]);
        mediana = caulcularPromedioE1yE2;
    } else {
        mediana = listado[mitadListado];
    }
    console.log(mediana);
}

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
    40000000,
    100, 
    500, 
    200,
    800];

function esPar (numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediana (listado){
    
    let listadoOrdenado = listado.sort((a, b) => a - b);
    //Para ordenar la lista
    let mitadListado = parseInt(listado.length / 2);
    let mediana;

    if (esPar(listado.length)) {
        const elemento1 = listadoOrdenado[mitadListado - 1];
        const elemento2 = listadoOrdenado[mitadListado];
        const caulcularPromedioE1yE2 = calcularPromedio([
            elemento1, 
            elemento2]);
        mediana = caulcularPromedioE1yE2;
    } else {
        mediana = listado[mitadListado];
    }
    console.log(mediana);
}
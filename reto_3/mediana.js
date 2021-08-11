
// ------------ MEDIANA ----------------

function calcularPromedio (lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    console.log(promedioLista);
}

let lista1 = [
    100, 
    200, 
    500, 
    40000000];
    
let mitadLista1 = parseInt(lista1.length / 2);

function esPar (numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const caulcularPromedioE1yE2 = calcularPromedio([
        elemento1, 
        elemento2]);
    mediana = caulcularPromedioE1yE2;
} else {
    mediana = lista1[mitadLista1];
}
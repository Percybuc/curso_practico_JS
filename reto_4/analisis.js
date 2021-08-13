// Helper
function esPar (numerito) {
    return (numerito % 2 === 0);
}

function calcularPromedio (lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    return sumaLista / lista.length;
}

//Calculadora de mediana
function medianaSalarios(listado) {
    const mitad = parseInt(listado.length / 2);

    if (esPar(listado.length)){
        const elemento1 = listado[mitad] - 1;
        const elemento2 = listado[mitad];
    
        const mediana = calcularPromedio([elemento2, elemento1]);
        return mediana;
    } 
    else {
        const personitaMitad = listado[mitad];
        return personitaMitad;
    }
}

//Mediana GENERAL
const salariosFuncion = (arreglo) => arreglo.salario;
const soloSalario = colombia.map(salariosFuncion); 

const salariosOrdenados = soloSalario.sort((a, b) => a - b);

const medianaGeneralSalarios = medianaSalarios(salariosOrdenados);

const medianaSalariosTopX = promedioSalariosTopX(salariosOrdenados, 10);

//Mediana Top 10%

//EJEMPLO CON .FILTER
// let valorTop = salariosOrdenados.filter((elemento, posicion, arreglo) => {
//     if (posicion >= arreglo.length - cantidadTop(10, salariosOrdenados)){
//         return elemento;
//     }
// });
//EJEMPLO CON SLICE
function promedioSalariosTopX (arreglo, porcentaje){
    const soloTop = arreglo.slice(-(cantidadTop(porcentaje, arreglo)));
    const medianaTopX = calcularPromedio(soloTop);
    return medianaTopX;
}

function cantidadTop (porcentaje, arreglo) {
    const posiblesDecimales = (porcentaje * arreglo.length) / 100;
    const final = Math.ceil(posiblesDecimales);
    return final;
}



console.log({
    medianaGeneralSalarios,
    medianaSalariosTopX,
});
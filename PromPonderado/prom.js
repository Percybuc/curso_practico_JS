class Notas {
    constructor (v, c) {
        this.valor = v;
        this.creditos = c;
    }
}

let resultados = [];

resultados.push(new Notas (15, 3));
resultados.push(new Notas (13, 2));
resultados.push(new Notas (9, 3));
resultados.push(new Notas (15, 6));
resultados.push(new Notas (16, 5));
resultados.push(new Notas (20, 1));
resultados.push(new Notas (12, 2));
resultados.push(new Notas (9, 4));

function calcularPromedio (lista){
    
    const valorCredito = (elemento) => elemento.valor * elemento.creditos;
    const valorTotal = lista.map(valorCredito);
    const sumaArray = (acumulado, nuevo) => acumulado + nuevo;
    const sumaTotal = valorTotal.reduce(sumaArray, 0);
 
    const sumarCreditos = (a, b) => a + b.creditos;
    const sumaCreditosTotal = lista.reduce(sumarCreditos, 0);
    
    const promedioPonderado = sumaTotal / sumaCreditosTotal;
    console.log(promedioPonderado.toFixed(2));
}
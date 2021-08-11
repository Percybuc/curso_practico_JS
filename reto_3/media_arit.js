//media arit o promedio: Todo sumado / cantidad de sumandos
//Mediana: El valor centrar de una lista ordenada. Si son 2 datos se divide entre 2 (sirve cuando hay datos excepcionales) 
//Moda: El dato que más se repite

// -----------MEDIA ARIT ----------------
function calcularPromedio (lista){
    // let sumaLista = 0;
    
    // for (var i = 0; i < lista.length; i ++){
    //     sumaLista = lista[i] + sumaLista;
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
        // Recibe 2 parámetros(1ro el valorAcumulado, 2do el nuevoElemento)
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    console.log(promedioLista);
}



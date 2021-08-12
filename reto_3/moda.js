lista1 = [1, 2, 2, 2, 2, 1, 1, 4, 5, 3, 3, 3, 2, 6, 5, 6, 1, 1, 2];

const lista1count = {};

lista1.map(
    function (elemento){
        if (lista1count[elemento]) {
            //lista1count[elemento] = lista1count[elemento] + 1 esto es lo mismo que abajo
            lista1count[elemento] += 1;
        } else {
            lista1count[elemento] = 1;
            // Aquí aumentas al objeto una propiedad "elemento" con el valor de 1
        }
    }
);

const listaArray = Object.entries(lista1count).sort(
    function (a, b) {
        a[1] - b[1];
    }
);
// Object.entries le enviamos como argumento el objeto que queremos convertir en un array
// Se pone [1] por que los parámetros son todo el array, pero nosotros queremos que el array se ordene con el [1] que es la cantidad de veces que se repetía el valor en el array original 

const arrayModa = listaArray[listaArray.length - 1];
const moda = parseInt(arrayModa[1]);

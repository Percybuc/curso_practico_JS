//-----------Código del cuadrado----------------
console.group("Cuadrado");

function perimetroCuadrado (lado) {
    return lado * 4;

}

function areaCuadrado (lado) { 
    return lado * lado;

}
console.groupEnd();

//-----------Código del triángulo----------------
console.group("Triangulos");


function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}


function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

console.groupEnd(); 

//-----------Código del círculo----------------
console.group("Círculo");

function diametroCirculo (radio) {
    return radio * 2;
}

// const PI = 3.1416; 
const PI = Math.PI;

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio) {
    return PI * (radio * radio);
}


console.groupEnd(); 
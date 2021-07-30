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


// ------- Aquí interactuamos con el HTML ----------
function calcularPerimetroCuadrado () {
    const input = document.getElementById("inputCuadrado");
    // Esto lo puedes poner en consola. Te trae TODA la etiqueta HTML con ese ID
    const value = input.value; 
    // Pero como nosotros solo queremos el valor de esta etiqueta, usamos input.value y la metemos en una variable

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    
    const value = input.value; 
    

    const area = areaCuadrado(value);
    alert(area);
}
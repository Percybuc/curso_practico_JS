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


// ------- Aquí interactuamos con el HTML cuadrado ----------
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

// ------- Aquí interactuamos con el HTML triángulo ----------
function calcularPerimetroTriangulo () {
    const inputLadoOne = document.getElementById("inputTriangulo1"); 
    const valueOne = parseFloat(inputLadoOne.value); 
    const inputLadoTwo = document.getElementById("inputTriangulo2");
    const valueTwo = parseFloat(inputLadoTwo.value);
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueBase = parseFloat(inputBase.value);

    const perimetro = perimetroTriangulo(valueOne, valueTwo, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueBase = parseFloat(inputBase.value);
    const inputAltura = document.getElementById("inputAlturaTriangulo");
    const valueAltura = parseFloat(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

// ------- Aquí interactuamos con el HTML círculo ----------
function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const value = parseFloat(inputRadio.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const value = parseFloat(inputRadio.value);

    const area = areaCirculo(value);
    alert(area);
}

//-----------Código del cuadrado----------------
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();

//-----------Código del triángulo----------------
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4; 
const alturaTriangulo = 5.5; 

console.log("Los lados del triángulo miden: " + ladoTriangulo1+ "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
console.log("La atura del triángulo mide: " + baseTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm");

console.groupEnd(); 

//-----------Código del círculo----------------
console.group("Círculo");

const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// const PI = 3.1416; 
const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
console.log("El diámetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es: " + areaCirculo + "cm2");


console.groupEnd(); 
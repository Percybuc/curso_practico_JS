function alturaIsosceles (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado3 != lado1) {
        const baseMedia = lado3 /2;
        const altura = Math.sqrt(Math.pow(lado1,2) - Math.pow(baseMedia,2)); 
        return altura;
    }
    else if  (lado1 == lado3 && lado2 != lado1){
        const baseMedia = lado2 / 2;
        const altura = Math.sqrt(Math.pow(lado1,2) - Math.pow(baseMedia,2));
        return altura;
    }
    else if (lado3 == lado2 && lado1 != lado2) {
        const baseMedia = lado1 / 2;
        const altura = Math.sqrt(Math.pow(lado3,2) - Math.pow(baseMedia,2));
        return altura;
    }
    else {
        return "Esto no es un triángulo isósceles";
    } 
}
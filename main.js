/* a = 2;
b = 4; 

class Ejercicio {
    result1;

    constructor () {
        //suma (a,b) = a + b;
    }
}

const result1 = suma (a,b)

console.log(result1) */

class Ejercicio{
Adicion;
Sustraccion;
Division;
Multiplicacion;

Suma (num1 , num2){
    this.Adicion = num1 + num2;
    return true;
};
Resta (num3 , num4){
    this.Sustraccion = num3 - num4;
    return true;
};
Div (num5 , num6) {
    this.Division = num5 / num6;
    return true;
};
Mult (num7 , num8){
    this.Multiplicacion = num7*num8
};
}



const Results = new Ejercicio(/* Suma(8,1) */);
Results.Suma(8,1);
Results.Resta(9,2);
Results.Div(18,3);
Results.Mult(5,9)
console.log(Results)

// Implementar de forma RECURSIVA el método Newton-Raphson. Este método es utilizado para aproximar
// la raiz cuadrada de un número entero positivo.
//
// Parametros:
//   count: cantidad de veces que se requiere iterar
//   x: valor entero positivo al que se le quiere calcular la raiz cuadrada
//
// Formula:
//   y = (valorAnterior + (x/valorAnterior))/2
//   valorAnterior(0) = x/2
// 
// Salida:
//   > -1 si no es invocado con un x positivo (Ejemplo: -4)
//   > -1 si no es invocado con un x entero   (Ejemplo

// Salida:
//   > -1 si no es invocado con un x positivo (Ejemplo: -4)
//   > -1 si no es invocado con un x entero   (Ejemplo: 4.3)
//   > -1 si no es invocado con un x positivo y entero (Ejemplo: -4.3)
//   > El valor obtenido luego de haber aplicado la formula count veces a x
// 
// Ejemplos:
//   x = 20
//   count = 4
//   valorAnterior(0) = 10                //x / 2
//   y(1) = (10 + (20/10))/2 = 6
//   valorAnterior = 6
//   y(2) = (6 + (20/6))/2 = 4.666
//   valorAnterior = 4.666
//   y(3) = (4.666 + (20/4
Ejemplos:
//   x = 20
//   count = 4
//   valorAnterior(0) = 10                //x / 2
//   y(1) = (10 + (20/10))/2 = 6
//   valorAnterior = 6
//   y(2) = (6 + (20/6))/2 = 4.666
//   valorAnterior = 4.666
//   y(3) = (4.666 + (20/4.666))/2 = 4.476
//   valorAnterior = 4.476
//   y(4) = (4.476+ (20/4.476))/2 = 4.472
x = 45
//   count = 4
//   valorAnterior(0) = 22.5
//   y(1) = (22.5 + (45/22.5))/2 = 12.25
//   valorAnterior = 12.25
//   y(2) = (12.25 + (45/12.25))/2 = 7.96
//   valorAnterior = 7.96
//   y(3) = (7.96 + (45/7.96))/2 = 6.80
//   valorAnterior = 6.80
//   y(4) = (6.80 + (45/6.80))/2 = 6.70

function newtonRaphson(x, count){
    if(x<0 || Number.isInteger(x) === false || count < 0) return -1;

    if(count === 0) return x/2;

    let valorAnterior = newtonRaphson(x, count - 1);
    
     return (valorAnterior + (x / valorAnterior)) / 2;


};
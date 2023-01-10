let company = {sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],   
    development: {sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]}
  };
  
  
  function sumSalaries(department) {
    if (Array.isArray(department)) {                                            // En los componentes que estan dentro
      return department.reduce (function(prev, current) {                       // arreglos
        return prev + current.salary;}, 0);                                       // suma del Array
    } else {                                                                    // caso (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep);                                             // llama recursivamente a 
      }                                                                         // subdepartamentos, suma los resultados
      return sum;
    }
  }
  console.log(sumSalaries(company));

/* let cant = 100;

function sumTo(n) { 

    if (n === 1) return 1;                                               // Cuando n llegue a 1 el número a sumar es 1
    return n + sumTo(n-1);                                               // Mientras sumar el número con sus inmediatos 
}                                                                        // anteriores
console.log(sumTo(cant)); */ 
// CLOSURE --> función hija que retorna otra función que utiliza parametros de su funcion padre.

var creaFuncion = function(){
    var arreglo = [];
  
    for ( var i=0; i < 10; i++){
        arreglo.push(
          (function(j){
            return function() {console.log(j);}
          }(i))
        )
      }
    return arreglo;
  }
  
  var arr = creaFuncion();
  
 arr[5]();
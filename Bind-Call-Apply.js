// BIND debe utilizarse con una variable que es la nueva función
// CALL & APPLY devuelven su resultado directamente en el console.log

var persona = {
    nombre: 'Franco',
    apellido: 'Chequer',
  
    getNombre: function(){
      var nombreCompleto = this.nombre + ' ' + this.apellido;
      return nombreCompleto;
    }
  }
  
  
  var logNombre = function(){
    console.log(this.getNombre());
  }
  
    var logNombrePersona = logNombre.bind(persona);
    logNombrePersona();

    ////

    var logNombre = function(arg1, arg2){
        console.log(arg1 +' '+ this.getNombre() +' '+ arg2);
      }
      
      logNombre.call(persona, 'Hola', ', Cómo estas?'); //Hola Franco Chequer , Cómo estas?

      /////

      var logNombre = function(arg1, arg2){
        console.log(arg1 +' '+ this.getNombre() +' '+ arg2);
      }
      
      logNombre.apply(persona, ['Hola', ', Cómo estas?']); //Hola Franco Chequer , Cómo estas?
      
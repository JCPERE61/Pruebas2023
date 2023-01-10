var persona = {
    nombre: 'Default',
    apellido: 'Default',
    getNombre : function() {
     return this.nombre + ' ' + this.apellido;
    }
   };
   
   var santi = {
    nombre: 'Santi',
    apellido: 'Scanlan'
   };
   
   santi.__proto__ = persona;
   
   for (var key in santi){
    console.log( key + ":" + santi[key] );
   } // imprime todo! inclusive getNombre, que esta en su proto.
   
   for(var key in santi){
    if(santi.hasOwnProperty(key)){
     console.log( key + ":" + santi[key] );
    }// imprime solo las propiedades del objeto Santi.
   }

   var guille = {
    direccion : 'Armenia 636 6to F',
    getNombreFormal : function(){
     return this.apellido + ', ' + this.nombre
    }
   }
   var toni = {
    getPrimerNombre : function() {
     return this.nombre;
    }
   }
   
   _.extend(santi, guille, toni);

   // ----------------------

   class Persona {
 
    constructor (nombre, apellido){
     this.nombre = nombre,
     this.apellido = apellido
    }
   
    saludar() {
     console.log('Hola!' + this.nombre);
    }
   }
   
   var toni = new Persona('Toni', 'Tralice');
   toni.saludar();

   class Empleado extends Persona {
    constructor (nombre, apellido, empleo, sueldo){
     super(nombre, apellido);
     this.empleo = empleo;
     this.sueldo = sueldo;
    }
   }
   
   var toni = new Empleado('Toni', 'Tralice', 'Profesor', 100);
   toni.saludar();

   
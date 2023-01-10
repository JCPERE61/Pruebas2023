var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',  
        getFullname: function() {
            return this.fullname;  //A qué apunta este this?
        }
    }
};
var test;
function saludar( saludo, obj ){ //A qué apunta el this en este momento?
    test = obj.prop.getFullname() 
    return function( nombre, test ){
        console.log(saludo + ' ' + nombre);
        console.log(test)  //Qué quedó guardado en la variable test?
    }
}

var saludarHola = saludar('Hola', obj); //Soy la primer llamada de función

saludarHola('Toni', test); //Fijate que aparece en Scope cuando ejecutamos esta función...


'use strict'

var sayHello = 'Hello';

function     person() {
    var first = 'David';
    var last = 'Shariff';
        
    function firstName() {
        return first;
    } 
    function lastName() {
        return last;
    } 
    console.log(sayHello + ' ' + firstName() + ' ' + lastName());
}

person();
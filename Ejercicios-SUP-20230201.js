const { LinkedList } = require ("./DS");
const { BinarySearchTree } = require ("./DS");

// EJERCICIO 8
// Implementar la función isAncestor: debe determinar si dado dos nombres de personas las mismas
// son parientes o no (La primera debe ser ancestro de la segunda). La función recibira un objeto
// que va a representar sólo la parte femenina del "arbol genealogico" familiar y será de la siguiente forma:
// const genealogyTree = {
//   "Mona Simpson": [],
//   "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
//   "Jacqueline Bouvier": [ "Patty Bouvier", "Marge Simpson", "Selma Bouvier": ["Ling Bouvier"],
//   "Edwina": ["Abigail Simpson"],
//   "Lisa Simpson": [],
//   "Maggie Simpson": [],
//   "Ling Bouvier": []
// }
// Ejemplo:
//  - Caso que devuelve true --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
//  - Caso que devuelve false --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")


var isAncestor = function (genealogyTree, ancestor, descendant) {
    // Tu código aca:
var solucion = false;

// VERIFICO QUE EXISTEN LAS PROPIEDADES

if(genealogyTree.hasOwnProperty(ancestor)) {

// VERIFICO QUE NO ESTEN VACIAS

if(genealogyTree[ancestor].length > 0) {
//SI NO ESTAN VACIAS , LAS RECORRO
  for (var i = 0; i < genealogyTree[ancestor].length; i++) { 
// aca verifico QUE EL NOMBRE DE LA HIJA SEA EL MISMO QUE INGRESO COMO PARAMETRO

          if (genealogyTree[ancestor][i] === descendant) 
        
            solucion = true;

         //SI NO SE CUMPLE LA IGUALDAD VUELVE A EJECUTAR LA FUNCION CON RECURSIVIDAD

          else if (solucion === false) {           
            solucion = isAncestor(genealogyTree, genealogyTree[ancestor][i], descendant);}
        }
    }
}
        return solucion;
      }
    

      //Implementar el método addInPos dentro del prototype de LinkedList que deberá agregar un elemento en
      // la posición indicada. Ambos datos serán brindados como parámetro (pos, value). Donde "pos" será la
      // posición en la cual se deberá agregar el valor "value". En el caso de que la posición en la que se
      // quiera hacer la inserción no sea válida (Supere el tamaño de la lista actual) debe devolver false.
      // Si el nodo fue agregado correctamente devolver true.

      // Aclaración: la posición cero corresponde al head de la LinkedList

      // Ejemplo 1:
      //    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [4]
      //    lista.addInPos(2, 3);
      //    Ahora la lista quedaría: Head --> [1] --> [2] --> [3] --> [4]

      // Ejemplo 2:
      //    Suponiendo que la lista está vacía: Head --> null
      //    lista.addInPos(2, 3); --> Debería devolver false ya que no es posible agregar en la posición 2
      //    sin antes tener cargada la posición 0 y 1.
      /* Tu codigo aqui */

      LinkedList.prototype.addInPos = function(pos,value){

        let current = this.head;
        let newNode = new Node(value)  //INICIALIZAR LA LISTA
      
        let size = this.size(); // ME GUARDO EL TAMAÑO DE LA LISTA EN UNA VARIABLE ... = 3
        let actual = 1
        let aux = null
        if (size < actual) { return false } //EL TAMAÑO ES MENOR A 1 , DEVOLVER FALSO
          
        // CHEQUEAMOS SI EL TAMAÑO DE LA LISTA ES MENOR A LA POSICION PASADO POR PARAMETRO Y SI ES ASI
        // DEVOLVER FALSO
      
        if (size < pos) { return false  }

      // SI LA CABECERA TIENE UN "NULL" DEVOLVER FALSO
      
        if (current === null) return false //  LA LISTA ESTA VACIA
      
      // MIENTRAS LA LISTA TENGA UN SIGUIENTE DIFERENTE A NULO, RECORRO LA LISTA ENLAZADA

        while (current) {  

        // CUANDO ''POS'' ES IGUAL A DONDE YO APUNTO GUARDO EL NODO SIGUIENTE, COLOCO EL VALOR EN
        // LA POSICION INDICADA Y A CONTINUACION COLOCO EL NODO QUE GUARDE

          if (actual === pos) { 
            aux = current.next; // 4
            current.next = newNode;   // 
            current.next.next = aux; // 
            return true; //  
          }

        //  MIENTRAS NO ESTE EN LA POSICION, VOY RECORRIENDO LOS NODOS

          actual++
          current = current.next // 4

        }
      
      
      }

// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array = [16,6,23,2,17,31,14,5];
//    - arbol generado:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5

var generateBST = function (array) {
    /* Tu codigo aqui */
      let tree = new BinarySearchTree(array[0]);
      for (let i = 1 ; i < array.length; i++) {
        tree.insert(array[i])
      }
      return tree;
  
    }
    
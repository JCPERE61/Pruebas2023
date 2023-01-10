function lastElement(array) {
    if (array.length > 0)
      return array[array.length - 1];
    else
      throw "No existe el último elemento de un arreglo vacío.";
  }
  
  function lastElementPlusTen(array) {
    return lastElement(array) + 10;
  }
  
  try {
    print(lastElementPlusTen([]));
  }
  catch (error) {
    print("Hubo un problema ", error);
  }
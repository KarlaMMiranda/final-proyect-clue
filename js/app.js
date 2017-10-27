//Métodos de arreglos
var testArray = [];
for(var i = 0; i <= 10; i++){
//agregar elementos al arreglo en la última posición
  testArray.push(i);
}
console.log(testArray);
//eliminar el primer elemento del arreglo
testArray.shift();
console.log(testArray);
//eliminar el último elemento del arreglo
testArray.pop();
console.log(testArray);
//Revertir elementos del arreglo
testArray.reverse();
console.log(testArray);

/*-----------------------------------------------------------------------*/
var testString = "abcde";
testString.charAt(2);
/*c
Para obtener un carácter a partir de su codigo Ascii
Utilizo el metodo String.fromCharcode*/

var codigo = testString.charCodeAt(2);
console.log(codigo);

String.fromCharcode(codigo);
console.log(codigo);

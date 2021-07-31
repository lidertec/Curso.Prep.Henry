// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  
  for (let clave in objeto){
      array.push([clave, objeto[clave]])
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};

  for(var i=0; i<String(string).length;i++){
      if(obj[string[i]]){
          for (let clave in obj){
              if(clave===string[i]){
                  obj[clave]= obj[clave] + 1;
              }
          }
      }
      else
          obj[string[i]]= 1;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  function esMayus(cara){
    if(cara===String(cara).toUpperCase())
      return true;
    else
      return false;
  }

  var aux = "";

  for (var i=0; i<String(s).length;i++)
    if(esMayus(s[i]))
      aux=aux+s[i];
  for (var i=0; i<String(s).length;i++)
  if(!esMayus(s[i]))
    aux=aux+s[i];
  
  //console.log(aux);
  return aux;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var aux = "";
  var inicio = 0;

  for (var i=0; i<String(str).length; i++) {
    if (str[i] === " ") {
      for (var j=i; j>inicio; j--) {
        aux += str[j-1];
        //console.log("inicio: "+ inicio + " j:" + j + " aux:" + aux);
      }
      aux += " ";
      inicio=i+1;
    }
  }
  for (var j=i; j>inicio; j--) {
      aux += str[j-1];
      ///console.log("inicio: "+ inicio + " j:" + j + " aux:" + aux);
  }
  return aux;
} 



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var t= numero.toString();
if(t === 0) {
  return "No es capicua";
}
for(var i=0; i<t.length/2; i++) {
  if(t[i] !== t[t.length-1-i]) {
    return "No es capicua";
  }
}
return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var sinABC = "";
  for (var i=0; i<cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      sinABC += cadena[i];
    }
  }
  return sinABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var creciente = [];
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length > arr[i+1].length) {
      creciente.push(arr[i]);
    } else {
      creciente.push(arr[i+1]);
    }
  }
  return creciente;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var interseccion = [];

  for (var i=0; i<arreglo1.length; i++) {
    for (var j=0; j<arreglo2.length; j++) {
      if (arreglo2[j] === arreglo1[i]) {
        interseccion.push(arreglo2[j]);
      }
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


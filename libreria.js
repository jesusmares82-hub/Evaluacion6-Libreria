//El metodo forEach ejecuta una función una vez por cada elento de mi arreglo, en orden.
//Nota: la función no se ejecuta para elementos de matriz sin valores.

const numberForEach = [1, 2, 3, 4, 5];
let suma = 0;
function sumaElements(element) {
  suma += element;
}

const jesus = {};
jesus.each = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};
jesus.each(numberForEach, sumaElements);
console.log(
  "Mi forEach sumo los elementos del array: [" +
    numberForEach +
    "] la suma es: " +
    suma
);

//El metodo filter() crea un array y lo llena con todos los elementos
//de otro array que cumplan una condicion
// finalmente retorna el arreglo que ha llenado.
//Nota: filter () no ejecuta la función para elementos de matriz sin valores.
//Nota: filter () no cambia la matriz original.

const numberFilter = [1, 20, 56, 3, 4, 100];

function customFilter(array, fn) {
  const data = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      data.push(array[i]);
    }
  }
  return data;
}
function biggerThan10(element) {
  return element > 10;
}
function lessThan10(element) {
  return element < 10;
}

const newData = customFilter(numberFilter, biggerThan10);
console.log(
  "Mi filter filtro los números > 10 del array: [ " +
    numberFilter +
    "] :" +
    newData
);

const newData2 = customFilter(numberFilter, lessThan10);
console.log(
  "Mi filter filtro los números < 10 del array: [ " +
    numberFilter +
    "] :" +
    newData2
);

// El método map () crea una nueva matriz con el resultado de llamar
//a una función para cada elemento de la matriz.
//El método map () llama a la función proporcionada una vez para cada
// elemento de una matriz, en orden.
//Nota: map () no ejecuta la función para elementos de matriz sin valores.
//Nota: este método no cambia la matriz original.

const numberMap = [1, 20, 56, 3, 4, 100];

function customMap(array, fn) {
  const newData = [];
  for (let i = 0; i < array.length; i++) {
    newData.push(fn(array[i]));
  }
  return newData;
}

function addOne(element) {
  return element + 1;
}
const newArrayMap = customMap(numberMap, addOne);
console.log(
  "Mi Map sumo 1 a los elementos del array: [" +
    numberMap +
    "]. Resultado: [" +
    newArrayMap +
    "]"
);

// El método find () devuelve el valor del primer elemento de una
//matriz que pasa una prueba (proporcionado como función).
//El método find () ejecuta la función una vez para cada elemento
//presente en la matriz: Si encuentra un elemento de matriz donde
//la función devuelve un valor verdadero, find () devuelve el valor
//de ese elemento de matriz (y no comprueba los valores restantes)
//De lo contrario, devuelve indefinido
//Nota: find () no ejecuta la función para matrices vacías.
//Nota: find () no cambia la matriz original.

const numberFind = [23, 52, 1, 205, 6, 3, 4, 10];
let responseFind = undefined;

function customFind(array, fn) {
  const newData = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return array[i];
    }
  }
  return responseFind;
}

function biggerThan20(element) {
  return element > 200;
}
const newArrayFind = customFind(numberFind, biggerThan20);
console.log(
  "Mi find encuentra el primer elemento > 200 en el array: [" +
    numberFind +
    "]. Resultado: " +
    newArrayFind
);

//El método findIndex devuelve el índice del primer elemento de una matriz que
//pasa una prueba (proporcionado como función).
//Si encuentra un elemento de matriz donde la función devuelve un valor verdadero,
//findIndex () devuelve el índice de ese elemento de matriz
//(y no verifica los valores restantes) De lo contrario, devuelve -1
//Nota: findIndex () no ejecuta la función para elementos de matriz sin valores.
//Nota: findIndex () no cambia la matriz original.

const numberFindIndex = [23, 50, 1, 20, 6, 3, 540, 10];
let response = -1;

function customFindIndex(array, fn) {
  const newData = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return i;
    }
  }
  return response;
}

function biggerThan100(element) {
  return element > 100;
}
const newArrayFindIndex = customFindIndex(numberFindIndex, biggerThan100);
console.log(
  "Mi finfIndex devuelve el indice del primer elemento mayor a 100 dentro del array: [" +
    numberFindIndex +
    "]. Resultado: " +
    newArrayFindIndex
);

// Contains (list, value, [fromIndex])
//Devuelve verdadero si el valor está presente en la lista. Utiliza indexOf
//internamente, si la lista es una matriz.
//Utilice fromIndex para comenzar su búsqueda en un índice determinado.
const numberContains = [23, 52, 1, 200, 6, 3, 4, 10];
let responseContains = false;
let value = 1;
function customContains(array, element) {
  const newData = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return true;
    }
  }
  return responseContains;
}

const newArrayContains = customContains(numberContains, value);
console.log(
  "Mi Contains devuelve verdadero si el elemento se encuentra dentro del array: [" +
    numberContains +
    "]. Elemento: " +
    value +
    " Resultado: " +
    newArrayContains
);

// Pluck (list, propertyName)
//Una versión conveniente de lo que quizás sea el caso de uso más común para
//map: extraer una lista de valores de propiedad.

const numberPluck = [
  { name: "Jesús", job: "Web Development" },
  { name: "Erik", job: "Teacher" },
  { name: "Georg", job: "Administrator" },
  { name: "Alex", job: "Artist" },
];

function customPluck(array, key) {
  const newData = [];
  for (var i = 0, x = array.length; i < x; i++) {
    if (array[i].hasOwnProperty(key)) {
      newData.push(array[i][key]);
    }
  }
  return newData;
}

const newArrayPluck = customPluck(numberPluck, "job");
console.log(
  "Mi Pluck extrae una lista de valores del objeto con la propiedad job: [" +
    newArrayPluck +
    "]"
);

//Without (matriz, * valores)
//Devuelve una copia de la matriz con todas las instancias de los valores eliminados.

const numberWithout = [23, 52, 1, 200, 6, 3, 4, 10];
function customWithout(array, elements) {
  const newData = [];
  let j = 0;
  let bandera;
  let cont = -1;
  for (let i = 0; i < array.length; i++) {
    bandera = true;
    for (let j = 0; j < elements.length; j++) {
      if (array[i] == elements[j]) {
        if (!bandera) {
          newData.splice(cont, 1);
          cont--;
          break;
        } else {
          j = 0;
          break;
        }
      } else if (bandera) {
        newData.push(array[i]);
        cont++;
        bandera = false;
      }
    }
  }
  return newData;
}
let valuesDelete = [10, 23, 52, 4];
const newArrayWithout = customWithout(numberWithout, valuesDelete);
console.log(
  "Mi Without devuelve una copia del array: [" +
    numberWithout +
    "] donde elimino los valores: [" +
    valuesDelete +
    "]. Resultado: [" +
    newArrayWithout +
    "]."
);

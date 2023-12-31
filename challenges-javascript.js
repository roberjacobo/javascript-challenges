/**
 * Retos de programación
 * 1.-
 * 2.-palindromos
 * 3.-coincidencias
 * 4.-invertir
 * 5.-
 * 6.-
 * 7.-
 * 8.-
 * 9.-
 * 10.-
 * 11.-
 * 12.-
 *
 */

(() => {
  let coche = {
    modelo: "Mercedes",
    placas: "L8KJQ89",
    anio: 2020,
    mostrarDatos() {
      // console.log("2.- ", this.modelo, this.anio);
    },
  };

  // console.log("1.- ", coche);

  // Hacer un console.log de una función que hace
  // otro console.log da undefined

  // console.log("UNDEFINED: ", coche.mostrarDatos());
  // coche.mostrarDatos();
  // coche.funcion = "taxi";
  // console.log("3.-", coche);
  // console.log(coche.modelo);

  // Promises
  let saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
      let saludo = "Hola a todos!";
      // set saludo a false para usar reject.
      // saludo = false;

      if (saludo) {
        resolve(saludo);
      } else {
        reject("No hay saludo");
      }
    }, 2000);
  });

  saludar
    .then((resultado) => {
      //console.log(resultado);
    })
    .catch((err) => {
      //console.log(err);
    });
})();

// 1.- Dado un número, devolver su tabla de multiplicar completa.
(() => {
  function multiplicacionCompleta(num) {
    for (let i = 0; i < 10; i++) {
      // console.log(`${num} * ${i + 1} = ${num * i + 1}`);
    }
  }
  multiplicacionCompleta(1);
})();

/**
 * 2.- Dada una cadena de texto
 * comprobar si es un palíndromo o no.
 * */

(() => {
  function palindromos(str) {
    if (str === str.split("").reverse().join("")) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  let str = "pop";
  // palindromos(str);
})();

/**
 * 3.- Dada una palabra, buscarla en una frase
 * y devolver cuantas veces aparece la palabra
 * en la frase.
 *
 * Nota: La frase y la palabra deben ser parámetros
 * de una función.
 */

(() => {
  function coincidencias(palabra, frase) {
    let res = 0;
    let texto_limpio = frase
      .toLowerCase()
      .replace(/[¡!.,¿?]/gi, "")
      .split(" ");

    for (const i of texto_limpio) {
      if (i === palabra.toLowerCase()) {
        res++;
      }
    }

    // Return resultado
    console.log(res);
  }

  // coincidencias("Roberto", "hola Roberto, como estas robertO?");
})();

/**
 * 11 - 13 (2)
 * 9 - 11 (2)
 *
 * 6 - 8 (3)
 * 8 - 10 (3)
 * 8 - 7 (3)
 * 8 - 10 (3)
 * 8 - 7 (3)
 */

/**
 * Dada una cadena de texto, darle la vuelta e invertir
 * el orden de sus caracteres, sin usar métodos propios del
 * lenguaje, sólo estructuras de control.
 */

function invertir(str) {
  let res = "";
  for (let i = str.length; i--; i === 0) {
    res += str[i];
  }
  return res;
}
//console.log(invertir("hola"));

/**
 * The destructuring assignment syntax is a JavaScript
 * expression that makes it possible to unpack values
 * from arrays, or properties from objects, into distinct
 * variables.
 */

let x = [1, 2, 3];
x[6] = 1;
//console.log(x[5]);
let y = { ...x };
//console.log(y);

/**
 * tantoPorciento(5, 200) Return el 5% de 200
 */

function tantoPorciento(numero, porcentaje) {
  return ((numero * porcentaje) / 100).toFixed(2) + "%";
}

// console.log(tantoPorciento(10, 200123));

/**
 * dibujar un cuadrado con asteriscos
 * recibiendo sólo un número como parámetro.
 */

function cuadrado(size) {
  const row = "*".repeat(size);
  const space = " ".repeat(size - 2);
  return `${row}\n${("*" + space + "*" + "\n").repeat(size - 2)}${row}`;
}

// console.log(cuadrado(6));

/**
 * Dados dos números devolver cuántos números impares hay entre ellos
 */

function impares(num1, num2) {
  let resImpares = 0;

  if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++) {
      if (i % 2 !== 0) resImpares++;
    }
    return `Resultado: ${resImpares}`;
  } else {
    return `El primer número debe ser menor al segundo`;
  }
}

// console.log(impares(40, 10));

/**
 * Dado un número invertirlo y devuelve de nuevo el número entero
 */

function invertirNumero(numero) {
  let res = Number(numero.toString().split("").reverse().join(""));
  return res;
}

//console.log(invertirNumero(43));

/**
 * Dados dos arrays, devolver uno solo con todos los elementos en común.
 */

function elementosEnComun(array1, array2) {
  const filtrado = array1.filter((elemento) => array2.includes(elemento));
  return filtrado;
}

let arr1 = ["hola", 2, 3, 4];
let arr2 = [3, 4, 5, "hola"];
// console.log(elementosEnComun(arr1, arr2));

/**
 * Dado un número hacer una escalera de [-] con el número de escalones
 * del número recibido.
 */

function escalera(numero) {
  let escalera = "";
  for (let i = 1; i <= numero; i++) {
    escalera += "[-]".repeat(i) + "\n";
  }
  return escalera;
}

// console.log(escalera(10));

/**
 * Dado un texto y una búsqueda, censurar todas las
 * coincidencias de la búsqueda en el texto con [-CENSURADO-]
 *
 * si no se recibe ningún parámetro mostrar:
 * "No puedes leer el texto y la búsqueda."
 */

function censurado(frase, busqueda) {
  if (!frase && !busqueda) {
    return "No puedes leer el texto y la búsqueda.";
  } else if (!frase) {
    return "No puedes leer el texto.";
  } else if (!busqueda) {
    return "No puedes leer la búsqueda.";
  }
  let res = "";

  res = frase.replaceAll(busqueda, "[-CENSURADO-]");
  return res;
}

// console.log(censurado("hola lkj hola", "hola"));
// console.log(censurado("hola"));
// console.log(censurado(undefined, "hola"));

/**
 * Dado un número mostrar todos los números desde ese
 * hasta el cero de 8 en 8 y terminar con --FIN--.
 */

function secuencia(numero) {
  let res = `Del ${numero} al 0 \nn°${numero} \n`;
  let newNum = numero;
  while (newNum > 0) {
    newNum = newNum - 8;
    if (newNum < 0) {
      res += "--FIN--";
      break;
    }
    res += "n°" + newNum + "\n";
  }
  return res;
}

// console.log(secuencia(84));

/**
 * Dado un array, dividirlo en tantos sub-arrays
 * como se indique en el número indicado.
 *
 * divideArray([7,8,9,10,5], 2);
 *
 * Devuelve:
 *  [[7,8], [9,10], [5]]
 */

function divideArray(array_principal, numero_elementos) {
  let arreglos = [];

  // Se recorre el array principal para obtener cada elemento.
  for (let elemento of array_principal) {
    let ultimo = arreglos[arreglos.length - 1];

    if (!ultimo || ultimo.length === numero_elementos) {
      arreglos.push([elemento]);
    } else {
      ultimo.push(elemento);
    }
  }
  return arreglos;
}

// console.table(divideArray([7, 8, 9, 10, 5, 1, 123, 34], 4));

/**
 * Dado un string y un número, repetir el string tantas veces
 * como el número indique y concatenar el resultado.
 */

function repetirString(str, repeticiones) {
  let res = "";

  res = `${str}`.repeat(repeticiones);
  return res;
}

// console.log(repetirString("hola", 2));

/**
 * Dada una cadena de texto devolver el caracter más
 * usado.
 */

function masUsado(texto) {
  let mapeo_letras = {};
  let maximo_repeticiones = 0;
  let letra_mas_repetida = "";

  /**
   * Se recorre el string recibido y si no existe se agrega con
   * valor 1 si ya existe se aumenta en 1 la cuenta.
   */

  for (let letra of texto) {
    if (!mapeo_letras[letra]) {
      mapeo_letras[letra] = 1;
    } else {
      mapeo_letras[letra]++;
    }
  }

  for (let letra in mapeo_letras) {
    if (
      mapeo_letras[letra].toString().trim().length === 1 &&
      mapeo_letras[letra] > maximo_repeticiones
    ) {
      maximo_repeticiones = mapeo_letras[letra];
      letra_mas_repetida = letra;
    }
  }

  return letra_mas_repetida;
}

// console.log(masUsado("aÑ Ñ Ñ Ñ "));

/**
 * Dada una cadena de texto devolver cuántas vocales tiene
 * (a, e, i, o u)
 */

function vocales(cadena) {
  let vocales = /[aeiou]/gi;
  let res = 0;
  for (let element of cadena) {
    if (element.match(vocales)) {
      res++;
    }
  }
  return res;
}

// console.log(vocales("aeiouun"));

/**
 * Dado un número, mostrar los números de 1 hasta el número.
 * Pero para múltiplos de tres imprimir "buzz" en lugar del número
 * y para los múltiplos de cisnco imprimir "Lightyear".
 * Para múltiplos de tres y 5 imprimir "BuzzLightyear".
 */

function multiplos_cinco_tres(num) {
  let res = "";
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0) {
      res += "buzz\n";
    } else if (index % 5 === 0) {
      res += "Lightyear\n";
    } else if (index % 3 === 0 && index % 5 === 0) {
      res += "BuzzLightyear\n";
    } else {
      res += index.toString() + "\n";
    }
  }
  return res;
}

// console.log(multiplos_cinco_tres(15));

/**
 * 18.- Dado un número, mostrar todos sus números divisores
 * desde el cero.
 */

function divisores(num) {
  let res = "";
  for (let index = 1; index <= num; index++) {
    if (num % index === 0) {
      res += index.toString() + "\n";
    }
  }
  return res.trim();
}

// console.log(divisores(15));

/**
 * 19.-Dado un array de objetos de películas
 * (título, director y vista), mostrar todas las
 * películas indicando cuál viste y cuál no.
 *
 * Devuelve:
 * Ya has visto:
 * Te falta ver:
 */

let peliculas = [
  {
    pelicula: "Sonrisas de una noche de verano",
    director: "Ingmar Bergman",
    vista: false,
  },
  {
    pelicula: "2001: odisea del espacio",
    director: "Stanley Kubrick",
    vista: false,
  },
  {
    pelicula: "Iron Man",
    director: "Jon Favreau",
    vista: true,
  },
  {
    pelicula: "Gladiador",
    director: "Ridley Scott",
    vista: true,
  },
  {
    pelicula: "Avatar",
    director: "James Cameron",
    vista: true,
  },
  {
    pelicula: "The Witch",
    director: "Robert Eggers",
    vista: true,
  },
];

function listaPeliculas(lista) {
  let arrayRes = [];
  for (let element of lista) {
    if (element.vista === true) {
      arrayRes.push(`Ya has visto ${element.pelicula} de ${element.director}√`);
    } else {
      arrayRes.unshift(
        `Te falta ver ${element.pelicula} de ${element.director}`
      );
    }
  }
  let result = "";
  for (let element of arrayRes) {
    result += element + "\n";
  }
  return result;
}

// console.log(listaPeliculas(peliculas));

/**
 *
 * 20.- Anagramas
 * devolver true o false si es un anagrama o
 * no
 */

function limpiarTextos(str) {
  /**
   * ^ es negación
   * \w todo lo que no sea letra
   */
  return str.toLowerCase().replace(/[^\w]/gi, "").split("").sort().join("");
}

function anagramas(str_1, str_2) {
  return limpiarTextos(str_1) === limpiarTextos(str_2);
}

let texto1 = "Hola. Soy - Roberto!";
let texto2 = "Hola soy- roberto !!!";

// console.log(anagramas(texto1, texto2));

/**
 * Dada una cadena de texto y un número, recortar
 * el string mostrando los primeros x caracteres.
 */

function recortar(str, num) {
  let result = str.slice(0, num);
  return result;
}

let texto = "Cursos de desarrollo web";
console.log(recortar(texto, 6));

// Ejercicio 2: Nomenclatura
// Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor 
// su función.

function Warehouse(Shirts, Shoes, trousers) {
    let sum = Shirts + Shoes;
    let products = sum * trousers;
    let senoResult = Math.sin(products);
    return senoResult;
   }
  
// Ejercicio 3: Pensamiento lógico
// Escribe una función que tome un número entero como entrada y devuelva un array con 
// todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el 
// número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].

const oddNumbers = (n) => {
    const arrayNumber = []
    for(let i = 1; i <= n; i += 2){
      arrayNumber.push(i)
    } 
    return arrayNumber
  }
  console.log(oddNumbers(9)); 
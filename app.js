const numero = Number(prompt("Ingrese un numero del que quiera saber la tabla de multiplicar"))

for (let i = 1; i<= 10; i++) {
    let resultado = numero * i
       if (resultado % 2 == 0) {
           console.log (`${numero} por ${i} es igual a ${resultado}, a su vez ${resultado} es par`)
       } else {
        let resultado = numero * i
        console.log (`${numero} por ${i} es igual a ${resultado}, a su vez ${resultado} es impar`)
       }
}



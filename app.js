const tusFondos = Number(prompt("Ingrese cuantos fondos tiene"))  
const fondosTarjetaDebito = Number(prompt("Ingrese cuantos fondos tiene en su tarjeta"))

if (tusFondos >= 1000 || fondosTarjetaDebito >= 1000) {
    console.log("Puedes comprarte un control")
} else if (tusFondos <= 500 && tusFondos >=300 || fondosTarjetaDebito <= 500 && fondosTarjetaDebito >= 300) {
    console.log("No puedes comprarte un control pero si te podes comprar un combo de McDonalds ")
} else {
    console.log ("No te compras minga")
}
let nombre = prompt("Para empezar ingresa tu nombre")
let saldo = Number(prompt("Ahora ingresa con cuanto dinero (US$) dispones"))
let precioTotal = 0;
let precioVuelo = (min, max) => {return Math.floor(Math.random() * (max - min) + min) }
alert (`Bienvenido ${nombre}, empieza a planear tu viaje a Qatar presionando ENTER!`)

function estasSeguro () {
    let decision = prompt("Quieres seguir con esta aerolinea o deseas cambiar ver otras opciones? \n 1. Quiero seguir \n 2. No, quiero cambiar de aerolinea")
    if (decision == 1) {
        if (precioTotal <= saldo) {
            saldo -= precioTotal
            alert (`Sigamos planificando tu viaje a Qatar, te quedan US$ ${saldo}`)
        } else {
            alert("Tu saldo no es suficiente para esa aerolinea, elije otra mas economica")
            vuelo()
        }
    } else {
        vuelo();
    }
}

function vuelo () {
    let aerolinea = Number(prompt("En que aerolinea deseas viajar: \n 1. Iberia \n 2. Turkish Airlines \n 3. Latam \n 4. Copa Airlines \n 5. Salir"))
    switch (aerolinea) {
        case 1: 
            precioTotal = precioVuelo(9000, 15000);
            alert (`Con Iberia el viaje tiene dos escalas y tiene un precio de ${precioTotal}`)
            estasSeguro ()
        break;
        
        case 2:
            precioTotal = precioVuelo(4000, 7000);
            alert (`Con Turkish Airlines el viaje tiene una escala y tiene un precio de ${precioTotal}`)
            estasSeguro()
        break;

        case 3:
            precioTotal = precioVuelo(7000, 9000);
            alert (`Con Latam el viaje tiene una escala y tiene un precio de ${precioTotal}`)
            estasSeguro()
        break;

        case 4:
            precioTotal = precioVuelo(2000, 4000);
            alert (`Con Copa Airlines el viaje tiene una escala y tiene un precio de ${precioTotal}`)
            estasSeguro()
        break;       

        case 5: 
        break;

        default:
            alert("Ingrese un numero entre el 1 y el 5")
            vuelo()
        break;
    } 
}

vuelo ()
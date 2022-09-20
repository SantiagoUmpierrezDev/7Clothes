let carrito = []

class Prenda {
    constructor (id, tipoPrenda, marca, precio, inventario) {
        this.id = id;
        this.tipoPrenda = tipoPrenda;
        this.marca = marca;
        this.precio = precio;
        this.inventario = inventario;
    }
}

const prendas = [
    new Prenda(1, 'Camiseta', 'Nike', 90, 13),
    new Prenda(2, 'Buzo', 'Nike', 200, 8),
    new Prenda(3, 'Pantalon', 'Adidas', 100, 6),
    new Prenda(4, 'Campera', 'Adidas', 70, 15),
    new Prenda(5, 'Jean', 'Drew House', 200, 3),
    new Prenda(6, 'Gorro', 'Adidas', 30, 20),
    new Prenda(7, 'Short', 'Nike', 50, 10),
]

function agregarAlCarrito() {
    let prendaId = Number(prompt('ID de la prenda:'))
    let cantidad =  Number(prompt('Cuantas prendas deseas comprar:'))
    let prenda = prendas.find(prenda => prenda.id===prendaId)
    prenda.cantidad = cantidad
    prenda.total = prenda.precio * cantidad
    carrito.push(prenda)
}

function totalCarrito(carrito){
    let total = 0;
    carrito.forEach(prenda => {
        total += prenda.total
    })
   return total
}

function eliminarPrenda(){
    let idEliminar = Number(prompt('Id de la prenda a eliminar'))
    let prendaBorrar = carrito.find(prenda=> prenda.id == idEliminar)
    let indexCarrito = carrito?.indexOf(prendaBorrar)
    carrito.splice(indexCarrito, 1)
}

function modificarCantidad(){
    let idRestar = Number(prompt('Id de la prenda de la que desea menos cantidad'))
    let cantidadARestar = Number(prompt('Cuantas prendas desea'))
    let prendaRestar = carrito.find(prenda => prenda.id == idRestar)
    prendaRestar.cantidad = cantidadARestar
    prendaRestar.total = prendaRestar.precio * cantidadARestar
}  

function estasSeguro () {
   let decision = prompt("Quieres agregar esta prenda a tu carrito o deseas ver otras opciones? \n 1. Quiero agregarlo al carrito \n 2. No, quiero comprar algo mas")
   if (decision == 1) {
       agregarAlCarrito();
            alert (`La prenda seleccionada a sido agregada al carrito con exito sigue comprando`)
            compra();
        } else {
            compra();
        }
 }



function carritos() {
    let opciones = Number(prompt('Ingresa que deseas ver o modificar de tu carrito \n 1. El total del carrito \n 2. Modificar la cantidad \n 3. Eliminar una prenda \n 4. Volver a comprar \n 5. Mostrar carrito \n 6. Salir'))
    switch (opciones) {
        case 1: 
            alert(`El total a pagar de tu carrito es ${totalCarrito(carrito)} dolares`);
            carritos()
            break;
    
        case 2: 
            alert(`Ingrese el id de la prenda de la que desea modificarle su cantidad`)
            modificarCantidad();   
            carritos()
            break;

        case 3:
            alert(`Ingrese el id de la prenda que desea eliminar`)
            eliminarPrenda();    
            carritos()
            break;

        case 4: 
            alert('Volviendo a la tienda...')
            compra()
            break;

        case 5:
            let a = carrito.forEach(({tipoPrenda, marca, precio}) => {
                alert(`Tienes una ${tipoPrenda} de marca ${marca}, de precio ${precio}`)
            })
            carritos()
        break;

        case 6:
        break;

        default: 
        alert("Ingrese un numero entre el 1 y el 5")
        carritos();
        break;
    }
}

let nombre = prompt("Para empezar ingresa tu nombre")
alert (`Bienvenido ${nombre}, empieza a comprar ropa de la mejor calidad presionando ENTER!`)

function compra() {
    let compras = Number(prompt("Que prenda deseas comprar \n 1. Camiseta Nike \n 2. Buzo Nike \n 3. Pantalon Adidas \n 4. Campera Adidas \n 5. Jean Drew \n 6. Gorro Adidas \n 7. Short Nike \n 8. Carrito \n 9. Finalizar Compra \n 10. Salir"))
    switch (compras) {
        case 1: 
            alert (`Has seleccionado una Camiseta Nike`)
            estasSeguro ()
        break;
        
        case 2:
            alert (`Has seleccionado una Buzo Nike`)
            estasSeguro()
        break;

        case 3:
            alert (`Has seleccionado una Pantalon Adidas`)
            estasSeguro()
        break;

        case 4:
            alert (`Has seleccionado una Campera Adidas`)
            estasSeguro()
        break;       

        case 5: 
            alert (`Has seleccionado una Jean Drew`)
            estasSeguro()
        break;

        case 6: 
            alert (`Has seleccionado una Gorro Adidas`)
            estasSeguro()
        break;

        case 7: 
            alert (`Has seleccionado una Short Nike`)
            estasSeguro()
        break;

        case 8: 
            alert (`Vamos a tu carrito`)
            carritos();
        break;

        case 9: 
            finalizarCompra()
        break;

        case 10: 
        break;

        default:
            alert("Ingrese un numero entre el 1 y el 10");
            compra()
        break;
    } 
}

compra ()

function finalizarCompra() {
    let finalizarCompra = Number(prompt("Deseas finalizar tu compra? \n 1. Si \n 2. No"))
    if (finalizarCompra === 1) {
        alert (`Muchas gracias por tu compra ${nombre}!, el total de tu compra es ${totalCarrito(carrito)}`)
    } else {
        alert("Sigue comprando...")
        compra();
    }
}



// function play(){
//     let resultado = 0
//    let precio_play = 500
   
//     function iva(){
//         return precio_play * 0.6
//     }
//     do{

//         resultado =  precio_play + iva()
       
//         alert(`Play 5: ${precio_play} dolares\nCon iva: ${resultado} dolares`)
//         class Play {
//             constructor(nombre, precio){
//                 this.nombre = nombre 
//                 this.precio = precio
//             }
//             descuento(){
//                 this.precio = (this.precio + iva()) * 0.8;
//             }
            
//         }
//         const play = []
//         play.push(new Play("Play 5", 500))
      

//         for (producto of play){
//             let descuento = "Colocar la palabra 'descuento' para 20% OFF"
//             if(prompt(descuento).toLowerCase() == "descuento"){
//             producto.descuento();
//             alert(`Total con 20% OFF: ${producto.precio} dolares`)
//         }
//         else{
//             alert(`Lo siento no obtuviste el descuento el precio final es:\nTotal: ${resultado} dolares`)
//         }
//     }
    
//         rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
//     }while(rta != "salir")

 
    

// }
// function button(){
//     play();
// }


// function returnal(){
//     let resultado = 0
//    let precio_returnal = 50
   
//     function iva(){
//         return precio_returnal * 0.6
//     }
//     do{

//         resultado =  precio_returnal + iva()
       
//         alert(`Returnal: ${precio_returnal} dolares\nCon iva: ${resultado} dolares`)
//         class Returnal {
//             constructor(nombre, precio){
//                 this.nombre = nombre 
//                 this.precio = precio
//             }
//             descuento(){
//                 this.precio = (this.precio + iva()) * 0.8;
//             }
            
//         }
//         const returnal = []
//         returnal.push(new Returnal("Returnal", 50))

//         for (producto of returnal){
//            let descuento = "Colocar la palabra 'descuento' para 20% OFF"
//             if(prompt(descuento).toLowerCase() == "descuento"){
                
//             producto.descuento();
//             alert(`Total con 20% OFF: ${producto.precio} dolares`)
//         }
//         else{
//             alert(`Lo siento no obtuviste el descuento el precio final es:\nTotal: ${resultado} dolares`)
//         }
//     }
//         rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
//     }while(rta != "salir")

 
    

// }
// function button2(){
//     returnal();
// }

// function auris(){
//     let resultado = 0
//    let precio_auris = 300
   
//     function iva(){
//         return precio_auris * 0.6
//     }
//     do{

//         resultado =  precio_auris + iva()
       
//         alert(`Auriculares play 5: ${precio_auris} dolares\nCon iva: ${resultado} dolares`)
//         class Auris {
//             constructor(nombre, precio){
//                 this.nombre = nombre 
//                 this.precio = precio
//             }
//             descuento(){
//                 this.precio = (this.precio + iva()) * 0.8;
//             }
            
//         }
//         const auris = []
//         auris.push(new Auris("Auriculares play 5", 300))

//         for (producto of auris){
//             let descuento = "Colocar la palabra 'descuento' para 20% OFF"
//             if(prompt(descuento).toLowerCase() == "descuento"){
//             producto.descuento();
//             alert(`Total con 20% OFF: ${producto.precio} dolares`)
//         }
//         else{
//             alert(`Lo siento no obtuviste el descuento el precio final es:\nTotal: ${resultado} dolares`)
//         }
//     }
//         rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
//     }while(rta != "salir")

 
    

// }
// function button3(){
//     auris();
// }



let articulosCarrito = []

const listaProductos = document.querySelector(".papa")
//console.log(listaProductos)
const carrito = document.querySelector("#carrito")
//console.log(carrito)
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
//console.log(vaciarCarritoBtn)
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
//console.log(contenedorCarrito)

document.addEventListener('DOMContentLoaded', ()=>{
    if(JSON.parse(localStorage.getItem('carrito')) == null){
        articulosCarrito = []
        console.log(articulosCarrito)
    }
    else{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
        console.log(articulosCarrito)

    }
    carritoHTML()
})

listaProductos.addEventListener('click', agregarProducto)
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
carrito.addEventListener('click', eliminarProducto)

function eliminarProducto(e){
    e.preventDefault();
    //console.log(e.target.parentElement)
    if(e.target.classList.contains('borrarProducto')){
        const producto = e.target.parentElement.parentElement
        const productoID = producto.querySelector('a').getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(producto => producto.id != productoID);

        carritoHTML()
    }
}

function agregarProducto(e){
    e.preventDefault()
    if(e.target.classList.contains('agregarCarrito')){
        const producto = e.target.parentElement
        //console.log(producto)
        leerDatosProducto(producto)

    }
}

function leerDatosProducto(i){
    const infoProducto = {
        img: i.querySelector('img').src,
        title: i.querySelector('p').textContent,
        price: i.querySelector('.precio').textContent,
        id: i.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }
    //console.log(infoProducto)
    if(articulosCarrito.some(item => item.id === infoProducto.id)){
       const productos = articulosCarrito.map(producto =>{
        if(producto.id == infoProducto.id){
            let cantidad = parseInt(producto.cantidad);
            cantidad ++;
            producto.cantidad = cantidad;
            return producto;
        }
        else{
            return producto;
        }

    })
    articulosCarrito = productos.slice();
       }
    else{
        articulosCarrito.push(infoProducto)

    }
    
    //console.log(articulosCarrito)
    carritoHTML()

}

function carritoHTML(){
    limpiarCarrito();
    articulosCarrito.forEach(producto =>{
        const fila = document.createElement('tr')
        fila.innerHTML = `
          <td> <img src= "${producto.img}"  width="125"/> </td>
          <td>   ${producto.title}   </td>
          <td>   ${producto.price}   </td>
          <td>   ${producto.cantidad}   </td>
          <td> 
          <a href="#" class="borrarProducto" data-id="${producto.id}"> ❌ </a>
          </td>
        `;
        contenedorCarrito.appendChild(fila)
    })
    sincronizarStorage();

}
function limpiarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
    
}
function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))

}
function vaciarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    articulosCarrito = [];
    sincronizarStorage();
}
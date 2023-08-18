
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


//carrito vacio para agrear las cosas luego
let articulosCarrito = []



//selccionar el contenedor padre dond ese encuentran los productos
const listaProductos = document.querySelector(".papa")
//console.log(listaProductos)

// selecionar el carrito
const carrito = document.querySelector("#carrito")
//console.log(carrito)

//seleccion del boton vaciar carrito
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
//console.log(vaciarCarritoBtn)

// seleccionar l lista carrito tbody para agregar los nuevos productos al carrito
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
//console.log(contenedorCarrito)

const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')

const btnComprar = document.querySelector('.bubbly-button')

//evnto para guardar el carrito cuando se recare la web
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

//eventos 
listaProductos.addEventListener('click', agregarProducto) 
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
carrito.addEventListener('click', eliminarProducto)
btnComprar.addEventListener('click', ()=>{
    if(articulosCarrito.length){
        Swal.fire({
            title: 'Estas seguro que quieres realizar la compra?',
            text: "Una vez confirmado se realizara la compra!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Seguro!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Tu compra se realizo con exito!',
                '',
                'success'
              )
              vaciarCarrito()
              
            }
            
            
          })

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El carrito se encuentra vacio!',
            
          })
    }
    
      
})

// eliminar producto
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

// agregar producto
function agregarProducto(e){
    e.preventDefault()
    if(e.target.classList.contains('agregarCarrito')){
        const producto = e.target.parentElement
        //console.log(producto)
        leerDatosProducto(producto)

    }
}

//seleccionar los datos del producto que qeuremos que se muestre en el carrito
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

// mostrar los datos del producto
function carritoHTML(){
 
    let total = 0;
	let totalOfProducts = 0;
    limpiarCarrito();
    articulosCarrito.forEach(producto =>{
        const fila = document.createElement('tr')
        fila.innerHTML = `
          <td class='img-pro-carrito'> <img src= "${producto.img}"  width="125"/> </td>
          <td>   ${producto.title}   </td>
          <td class='price-pro-carrito'>   ${producto.price}   </td>
          <td class='cantidad-pro-carrito'>   ${producto.cantidad}   </td>
          <td> 
          <a href="#" class="borrarProducto" data-id="${producto.id}"> ❌ </a>
          </td>
        `;
        contenedorCarrito.appendChild(fila)
        
        total = total + parseInt(producto.cantidad * producto.price.slice(1))
        totalOfProducts = totalOfProducts + producto.cantidad;
    })
    sincronizarStorage();

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
    

}
//limpiar el carrito asi no se repite el  producto agregado anteriormente cuando queremos agregar otro producto
function limpiarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
    
}
function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))

}
//boton vaciar carrito
function vaciarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    articulosCarrito = [];
    valorTotal.innerText = 0;
    countProducts.innerText = 0;
    sincronizarStorage();
}
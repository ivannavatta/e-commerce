


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
          <td class='price-pro-carrito'>  $${parseInt(producto.cantidad * producto.price.slice(1))}   </td>
         

          
          <td class='cantidad-pro-carrito'> <span class='quantity-btn-decrese'>-</span> ${producto.cantidad} <span class='quantity-btn-increse'>+</span></td>
          
          
      
          
          
          <td> 
          <a href="#" class="borrarProducto" data-id="${producto.id}"> ❌ </a>
          </td>
        `;
        contenedorCarrito.appendChild(fila)

        const decrese = fila.querySelector('.quantity-btn-decrese')
        decrese.addEventListener('click', ()=>{
            if(producto.cantidad !== 1){
                producto.cantidad --;
            carritoHTML();

            }
            
        })
        const increse = fila.querySelector('.quantity-btn-increse')
        increse.addEventListener('click', ()=>{
        
                producto.cantidad ++;
            carritoHTML();

            
        })

        
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
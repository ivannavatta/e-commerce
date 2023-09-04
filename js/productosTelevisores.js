const contenidoTelevisores = document.querySelector('.container-productos');


let productosTelevisores = []; // Define y asigna los productos de televisores

const getProducts = async () => {
    const response = await fetch("data2.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'televisores') {
            productosTelevisores.push(product);
        }

        const content = document.createElement('article');
        content.className = "articulos";
        content.innerHTML = `
            <img class="productos" src='${product.img}'>
            <p>${product.productName}</p>
            <p class="precio">${product.price}</p>
            <button class="agregarCarrito" data-id="${product.id}">Comprar</button>
        `;
        contenidoTelevisores.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'televisores'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container-productos');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'televisores') {
        productos = productosTelevisores;
    }

    productos.forEach(product => {
        if (product.productName.toLowerCase().includes(filtro.toLowerCase())) {
            const content = document.createElement('article');
            content.className = "articulos";
            content.innerHTML = `
                <img class="productos" src='${product.img}'>
                <p>${product.productName}</p>
                <p class="precio">${product.price}</p>
                <button class="agregarCarrito" data-id="${product.id}">Comprar</button>
            `;
            contenido.append(content);
        }
    });
}

const filtroProductosTelevisoresInput = document.querySelector('#search-input-televisores');
const botonBuscarTelevisores = document.querySelector('#submit-televisores');
botonBuscarTelevisores.addEventListener('click', () => {
    const filtro = filtroProductosTelevisoresInput.value;
    mostrarProductosSegunFiltro(filtro, 'televisores');
});

filtroProductosTelevisoresInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        const filtro = filtroProductosTelevisoresInput.value;
        mostrarProductosSegunFiltro(filtro, 'televisores');
    }
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();




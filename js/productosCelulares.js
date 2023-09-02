
const contenidoCelulares = document.querySelector('.papa');

let productosCelulares = []; // Define y asigna los productos de celulares

const getProducts = async () => {
    const response = await fetch("data3.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a la categoría de celulares
        productosCelulares.push(product);

        const content = document.createElement('article');
        content.className = "articulos"
        content.innerHTML = `
        <img class="productos" src='${product.img}'>
        <p>${product.productName}</p>
        <p class="precio">${product.price}</p>
        <button class="agregarCarrito" data-id="${product.id}">Comprar</button>
        `;
        contenidoCelulares.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'celulares'); // Puedes usar un filtro inicial vacío si lo deseas
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.papa');
    contenido.innerHTML = '';

    let productos;

    if (categoria === 'videojuegos') {
        productos = productosVideoJuegos;
    } else if (categoria === 'celulares') {
        productos = productosCelulares;
    } else if (categoria === 'televisores') {
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

const filtroProductosCelularesInput = document.querySelector('#search-input-celular');
const botonBuscarCelulares = document.querySelector('#submit-celulares');
botonBuscarCelulares.addEventListener('click', () => {
    const filtro = filtroProductosCelularesInput.value;
    mostrarProductosSegunFiltro(filtro, 'celulares');
});
filtroProductosCelularesInput.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        const filtro = filtroProductosCelularesInput.value;
        mostrarProductosSegunFiltro(filtro, 'celulares');
    }
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();




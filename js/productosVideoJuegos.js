
const contenidoVideojuegos = document.querySelector('.container-productos');

let productosVideojuegos = []; // Define y asigna los productos de videojuegos

const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a la categoría de videojuegos
        productosVideojuegos.push(product);

        const content = document.createElement('article');
        content.className = "articulos"
        content.innerHTML = `
        <img class="productos" src='${product.img}'>
        <p>${product.productName}</p>
        <p class="precio">${product.price}</p>
        <button class="agregarCarrito" data-id="${product.id}">Comprar</button>
        `;
        contenidoVideojuegos.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'videojuegos'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container-productos');
    contenido.innerHTML = '';

    let productos;

    if (categoria === 'videojuegos') {
        productos = productosVideojuegos;
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

const filtroProductosVideojuegosInput = document.querySelector('#search-input');
const botonBuscarVideojuegos = document.querySelector('#submit-videojuegos');
botonBuscarVideojuegos.addEventListener('click', () => {
    const filtro = filtroProductosVideojuegosInput.value;
    mostrarProductosSegunFiltro(filtro, 'videojuegos');
});

filtroProductosVideojuegosInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        const filtro = filtroProductosVideojuegosInput.value;
        mostrarProductosSegunFiltro(filtro, 'videojuegos');
    }
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();
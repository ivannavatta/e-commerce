const contenidoVidojuegos = document.querySelector('.papa')

productosVideoJuegos.forEach((product) =>{
    const content = document.createElement('article');
    content.className = "articulos"
    content.innerHTML = `
    <img class="productos" src='${product.img}'>
    <p>${product.productName}</p>
    <p class="precio">${product.price}</p>
    <button class="agregarCarrito" data-id="${product.id}">Comprar</button>
    `;
    contenidoVidojuegos.append(content);
})
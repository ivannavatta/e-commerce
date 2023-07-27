// const productos = [
//     {id: 1, producto: "Play 5"},
//     {id: 2, producto: "Fifa 23"},
//     {id: 3, producto: "Auriculares play 5"}
// ]

function play(){
    let resultado = 0
   let precio_play = 500
   
    function iva(){
        return precio_play * 0.6
    }
    do{

        resultado =  precio_play + iva()
       
        alert(`Play 5: ${precio_play} dolares 
        Con iva: ${resultado} dolares`)
        const descuento = prompt("Agrega codigo de descuento para un 20% OFF").toLowerCase()
        if (descuento == "banana" || descuento == "sandia"){
            let resultadoConDescuento = resultado * 0.8
            alert(`Total con descuento aplicado: ${resultadoConDescuento} dolares`)
        }
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")

 
    

}
function button(){
    play();
}


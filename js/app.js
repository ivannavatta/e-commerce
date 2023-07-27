
function play(){
    let resultado = 0
   let precio_play = 500
   
    function iva(){
        return precio_play * 0.6
    }
    do{

        resultado =  precio_play + iva()
       
        alert(`Play 5: ${precio_play} dolares\nCon iva: ${resultado} dolares`)
        class Play {
            constructor(nombre, precio){
                this.nombre = nombre 
                this.precio = precio
            }
            descuento(){
                this.precio = this.precio * 0.8;
            }
            
        }
        const play = []
        play.push(new Play("Play 5", 500))

        for (producto of play){
            producto.descuento();
            alert(`Total con 20% OFF: ${producto.precio} dolares`)
        }
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")

 
    

}
function button(){
    play();
}


function fifa(){
    let resultado = 0
   let precio_fifa = 50
   
    function iva(){
        return precio_fifa * 0.6
    }
    do{

        resultado =  precio_fifa + iva()
       
        alert(`Fifa 23: ${precio_fifa} dolares\nCon iva: ${resultado} dolares`)
        class Fifa {
            constructor(nombre, precio){
                this.nombre = nombre 
                this.precio = precio
            }
            descuento(){
                this.precio = this.precio * 0.8;
            }
            
        }
        const fifa = []
        fifa.push(new Fifa("FIfa 23", 50))

        for (producto of fifa){
            producto.descuento();
            alert(`Total con 20% OFF: ${producto.precio} dolares`)
        }
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")

 
    

}
function button2(){
    fifa();
}

function auris(){
    let resultado = 0
   let precio_auris = 300
   
    function iva(){
        return precio_auris * 0.6
    }
    do{

        resultado =  precio_auris + iva()
       
        alert(`Auriculares play 5: ${precio_auris} dolares\nCon iva: ${resultado} dolares`)
        class Auris {
            constructor(nombre, precio){
                this.nombre = nombre 
                this.precio = precio
            }
            descuento(){
                this.precio = this.precio * 0.8;
            }
            
        }
        const auris = []
        auris.push(new Auris("Auriculares play 5", 300))

        for (producto of auris){
            producto.descuento();
            alert(`Total con 20% OFF: ${producto.precio} dolares`)
        }
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")

 
    

}
function button3(){
    auris();
}


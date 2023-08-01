
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
                this.precio = (this.precio + iva()) * 0.8;
            }
            
        }
        const play = []
        play.push(new Play("Play 5", 500))
      

        for (producto of play){
            let descuento = "Colocar la palabra 'descuento' para 20% OFF"
            if(prompt(descuento).toLowerCase() == "descuento"){
            producto.descuento();
            alert(`Total con 20% OFF: ${producto.precio} dolares`)
        }
        else{
            alert(`Lo siento no obtuviste el descuento el precio final es:\nTotal: ${resultado} dolares`)
        }
    }
    
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")

 
    

}
function button(){
    play();
}


function returnal(){
    let resultado = 0
   let precio_returnal = 50
   
    function iva(){
        return precio_returnal * 0.6
    }
    do{

        resultado =  precio_returnal + iva()
       
        alert(`Returnal: ${precio_returnal} dolares\nCon iva: ${resultado} dolares`)
        class Returnal {
            constructor(nombre, precio){
                this.nombre = nombre 
                this.precio = precio
            }
            descuento(){
                this.precio = (this.precio + iva()) * 0.8;
            }
            
        }
        const returnal = []
        returnal.push(new Returnal("Returnal", 50))

        for (producto of returnal){
           let descuento = "Colocar la palabra 'descuento' para 20% OFF"
            if(prompt(descuento).toLowerCase() == "descuento"){
                
            producto.descuento();
            alert(`Total con 20% OFF: ${producto.precio} dolares`)
        }
        else{
            alert(`Lo siento no obtuviste el descuento el precio final es:\nTotal: ${resultado} dolares`)
        }
    }
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")

 
    

}
function button2(){
    returnal();
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
                this.precio = (this.precio + iva()) * 0.8;
            }
            
        }
        const auris = []
        auris.push(new Auris("Auriculares play 5", 300))

        for (producto of auris){
            let descuento = "Colocar la palabra 'descuento' para 20% OFF"
            if(prompt(descuento).toLowerCase() == "descuento"){
            producto.descuento();
            alert(`Total con 20% OFF: ${producto.precio} dolares`)
        }
        else{
            alert(`Lo siento no obtuviste el descuento el precio final es:\nTotal: ${resultado} dolares`)
        }
    }
        rta = prompt("Escriba 'salir' para finalizar el pedido").toLowerCase()
    }while(rta != "salir")

 
    

}
function button3(){
    auris();
}


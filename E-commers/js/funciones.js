function Traerelemento(key,value){
    let elemento=localStorage.getItem(key)
     value=JSON.parse(elemento)
    return value
    
}

function addelementchange(variable,valor){
    valor.addEventListener("change",e =>{variable=e.target.value},false)
}





export{
    addelementchange
   }
function Traerelemento(key,value){
    let elemento=localStorage.getItem(key)
     value=JSON.parse(elemento)
    return value
    
}

function addelementchange(variable,valor){
    valor.addelement("change",variable=e.target.value,false)
    return variable
}

function addelementclick(variable,valor,obj){
    valor.addelement("click",(e)=>{
        e.preventDefault();
        e.stopPropagation();
        obj.nombres=nombres
        obj.apellidos= apellidos       
        obj.email=email
        obj.contraseña=contraseña
        obj.nombreusuario=nombreususario
        obj.pais=pais
        obj.provincia=provincia
        obj.ciudad=ciudad
        obj.direccion=direccion
        obj.numero=numero
        obj.codigopostal=codigopostal
        obj.telefono=telefono
        obj.departamento=departamento
        obj.piso=piso
        variable.push({obj})    
    },false)
    return variable
}

export{addelementclick,
    addelementchange,
    Traerelemento}
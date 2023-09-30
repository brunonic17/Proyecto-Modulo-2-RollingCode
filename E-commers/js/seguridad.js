
let regnombre=document.getElementById("regnombre")
let regapellido=document.getElementById("regapellido")
let regnemail=document.getElementById("regnemail")
let regnombredeusuario=document.getElementById("regnombredeusuario")
let regcontrase=document.getElementById("regcontrase")
let regconfcontrase=document.getElementById("regconfcontrase")
let regpais=document.getElementById("regpais")
let regprovincia=document.getElementById("regprovincia")
let regciudad=document.getElementById("regciudad")
let regtelefono=document.getElementById("regtelefono")
let regdireccion=document.getElementById("regdireccion")
let regcodpostal=document.getElementById("regcodpostal")
let regpiso=document.getElementById("regpiso")
let regdepartamento=document.getElementById("regdepartamento")
let regnumero=document.getElementById("regnumero")
let regbutton=document.getElementById("regbutton")

        class Usuario
        {   nombres=""
            apellidos= ""     
            email=""
            contrase=""
            nombreusuario=""
            pais=""
            provincia=""
            ciudad=""
            direccion=""
            numero=""
            codigopostal=""
            telefono=""
            departamento=""
            piso=""
            id=""}

        
        let Usuari= new Usuario
        let nombres=""
        let apellidos=""       
        let email=""
        let contrase=""
        let confcontrase=""
        let nombreusuario=""
        let pais=""
        let provincia=""
        let ciudad=""
        let direccion=""
        let numero=""
        let codigopostal=""
        let telefono=""
        let departamento=""
        let piso=""
        let id= 1



regnombre.addEventListener("change",e =>{nombres=e.target.value},false)
regapellido.addEventListener("change",e =>{apellidos=e.target.value},false)
regnemail.addEventListener("change",e =>{email=e.target.value},false)
regnombredeusuario.addEventListener("change",e =>{nombreusuario=e.target.value},false)
regcontrase.addEventListener("change",e =>{contrase=e.target.value},false)
regconfcontrase.addEventListener("change",e =>{confcontrase=e.target.value},false)
regpais.addEventListener("change",e =>{pais=e.target.value},false)
regciudad.addEventListener("change",e =>{ciudad=e.target.value},false)
regdireccion.addEventListener("change",e =>{direccion=e.target.value},false)
regnumero.addEventListener("change",e =>{numero=e.target.value},false)
regpiso.addEventListener("change",e =>{piso=e.target.value},false)
regdepartamento.addEventListener("change",e =>{departamento=e.target.value},false)
regtelefono.addEventListener("change",e =>{telefono=e.target.value},false)
regprovincia.addEventListener("change",e =>{provincia=e.target.value},false)
regcodpostal.addEventListener("change",e =>{codigopostal=e.target.value},false)


regbutton.addEventListener("click",e=>{
    e.preventDefault();
    e.stopPropagation();
     Usuari.nombres=nombres,
     Usuari.apellidos= apellidos  ,     
     Usuari.email=email,
     Usuari.contrase=contrase,
     Usuari.nombreusuario=nombreusuario
     Usuari.pais=pais,
     Usuari.provincia=provincia
     Usuari.ciudad=ciudad
     Usuari.direccion=direccion
     Usuari.numero=numero
     Usuari.codigopostal=codigopostal
     Usuari.telefono=telefono
     Usuari.departamento=departamento
     Usuari.piso=piso ;
    
    
    
    if(contrase === confcontrase){
        let localstorageelement=localStorage.getItem("Usuarios");
        let Traerelemento=JSON.parse(localstorageelement) 
       
       
      
         if (Traerelemento===null){
          
            Usuari.id=id
            
          localStorage.setItem("Usuarios",JSON.stringify([Usuari]))}

         else{
            
            let compararemail=Traerelemento.find((tUsuario) => tUsuario.Email === Usuari.email)
            console.log(compararemail)

            if(compararemail=== undefined){
             console.log(Traerelemento);
             let largo=Traerelemento.length+id
             console.log(largo)          
             Usuari.id=largo                  
            Traerelemento.push(Usuari);    
            localStorage.setItem("Usuarios",JSON.stringify(Traerelemento));
            }
            else{alert("El usuario ya existe")}}}
    else{alert("Las contraseñas no coinciden")}
},false)



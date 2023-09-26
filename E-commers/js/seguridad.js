
const Nomb= document.getElementById("inputNombre");
const Email= document.getElementById("inputEmail");
const Contrase_Mail= document.getElementById("inputContrasena");
const Contrase_Confir= document.getElementById("inputConfirContrase");
const Registar = document.getElementById("UsuarioGuardar");

var registroUsuario = new Object();

let nombre = "";
let email = "";
let contrasena = "";
let confirmar = "";


Nomb.addEventListener("change", e => {
    nombre = e.target.value
}, false);
Email.addEventListener("change", e => {
    email = e.target.value
}, false);
Contrase_Confir.addEventListener("change", e => {
    confirmar = e.target.value
}, false);
Contrase_Mail.addEventListener("change", e => {
    contrasena = e.target.value
}, false);
let idUsuario =""

function comparar(key){
    let comparid=localStorage.getItem(key)
    if(email=comparid){
        let mensaje="capo ya tenes una cuneta"
        alert(mensaje)
    }
    else{localStorage.setItem(key, JSON.stringify(registroUsuario))}
}


Registar.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    
    registroUsuario.nombre = nombre;
    registroUsuario.email = email;
    registroUsuario.contrasena = contrasena;
    idUsuario=email

    comparar(idUsuario)
    // let idslocal = localStorage.getItem(registroUsuario.key)
    // JSON.parse(idslocal)
    // console.log(idslocal)
    
    
}

//   let idlocal=localStorage.getItem(registroUsuario)


)

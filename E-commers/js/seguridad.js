
const Nomb= document.getElementById("inputNombre");
const Mail= document.getElementById("inputEmail");
const Contrase_Mail= document.getElementById("inputContrase");
const Contrase_Confir= document.getElementById("inputConfirContrase");
const Registar = document.getElementById("UsuarioGuardar");

class Usuario {
    Id_Usu = "";
    Nombre = "";
    Email = "";
    Contrase = "";
  }

let registroUsuario = new Usuario();

let Id_Usu = 1;
let Nombre = "";
let Email = "";
let Contrase = "";
let Confirmar = "";
let TipoUsuario="user";


Nomb.addEventListener("change", e => {
    Nombre = e.target.value
}, false);
Mail.addEventListener("change", e => {
    Email = e.target.value
}, false);
Contrase_Mail.addEventListener("change", e => {
    Contrase = e.target.value
}, false);
Contrase_Confir.addEventListener("change", e => {
    Confirmar = e.target.value
}, false);


Registar.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    
    registroUsuario.Nombre = Nombre;
    registroUsuario.Email = Email;
    registroUsuario.Contrase = Contrase;
    registroUsuario.TipoUsuario = TipoUsuario;
    
    if (Contrase === Confirmar) {   
        
        let usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
        
        if (usuariosLocalStorage === null) {
          registroUsuario.Id_Usu = Id_Usu;
          localStorage.setItem("usuarios", JSON.stringify([registroUsuario]));
        } else {
          Id_Usu = usuariosLocalStorage.length +1;
          registroUsuario.Id_Usu = Id_Usu;
          usuariosLocalStorage.push(registroUsuario);
          localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
        }
      } else {
        alert("Contraseñas No Coinciden")
    }
})
    
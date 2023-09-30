

const Mail= document.getElementById("inputEmail");
const Contrase_Mail= document.getElementById("inputContrase");
const Login = document.getElementById("UsuarioLogin");


class Usuario {
    Id_Usu = "";
    Email = "";
    Contrase = "";
  }

let registroUsuario = new Usuario();

let Id_Usu = 1;
let Email = "";
let Contrase = "";


Mail.addEventListener("change", e => {
    Email = e.target.value
}, false);
Contrase_Mail.addEventListener("change", e => {
    Contrase = e.target.value
}, false);



//#region Login
Login.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  registroUsuario.Email = Email;
  registroUsuario.Contrase = Contrase;
  
  let usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
  //usuariosLocalStorage = Array Objetos
  //Usuario = Cada Objeto dentro del Array 
  //usuarios = Clave del Local Storage

  let conf_email = usuariosLocalStorage.find(
    (Usuario) => Usuario.Email === registroUsuario.Email
  );

  if (conf_email === undefined) {
      alert("Usuario o Contraseña Incorrecta 1");
    } else {
      if(registroUsuario.Contrase === conf_email.Contrase)  {
        if (conf_email.TipoUsuario == "user") {
          alert("Puede entrar como User, habilita Solo el CARRITO");
          console.log("Usuario: ",conf_email.Nombre," Tipo: ",conf_email.TipoUsuario);
        } else  {
            if (conf_email.TipoUsuario == "admin") {
              alert("Puede entrar como Administrador, habilita El Modulo para Administrar");
              console.log("Usuario: ",conf_email.Nombre," Tipo: ",conf_email.TipoUsuario);
            }
        }
        

      } else {
        alert("Usuario o Contraseña Incorrecta 2");
      }


  } 
})
  

//#endregion Login



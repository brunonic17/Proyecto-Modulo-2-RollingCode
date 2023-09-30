const Nomb = document.getElementById("inputNombre");
const Mail = document.getElementById("inputEmail");
const Contrase_Mail = document.getElementById("inputContrase");
const Contrase_Confir = document.getElementById("inputConfirContrase");
const Registar = document.getElementById("UsuarioGuardar");


// export default function  seguridad (Nomb, Mail, Contrase_Mail, Contrase_Confir, Registar ){
// let $Nomb = document.querySelector(Nomb)
// console.log($Nomb)
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
let TipoUsuario = "user";

Nomb.addEventListener(
  "change",
  (e) => {
    Nombre = e.target.value;
  },
  false
);
Mail.addEventListener(
  "change",
  (e) => {
    Email = e.target.value;
  },
  false
);
Contrase_Mail.addEventListener(
  "change",
  (e) => {
    Contrase = e.target.value;
  },
  false
);
Contrase_Confir.addEventListener(
  "change",
  (e) => {
    Confirmar = e.target.value;
  },
  false
);

//#region Registrar
Registar.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  registroUsuario.Nombre = Nombre;
  registroUsuario.Email = Email;
  registroUsuario.Contrase = Contrase;
  registroUsuario.TipoUsuario = TipoUsuario;

  if (Contrase === Confirmar) {
    let usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
    //usuariosLocalStorage = Array Objetos
    //Usuario = Cada Objeto dentro del Array
    //usuarios = Clave del Local Storage

    if (usuariosLocalStorage === null) {
      registroUsuario.Id_Usu = Id_Usu;
      localStorage.setItem("usuarios", JSON.stringify([registroUsuario]));
    } else {
      let conf_email = usuariosLocalStorage.find(
        (Usuario) => Usuario.Email === registroUsuario.Email
      );

      if (conf_email === undefined) {
        let ult = usuariosLocalStorage[usuariosLocalStorage.length - 1];
        Id_Usu = ult.Id_Usu + 1;
        registroUsuario.Id_Usu = Id_Usu;
        usuariosLocalStorage.push(registroUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
      } else {
        alert("Mail Ya Registrado");
      }
    }
  } else {
    alert("Contraseñas No Coinciden");
  }
});
// }
//#endregion Registrar
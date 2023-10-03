// export default function registrarLogin (nomb, email, btn) {
//     const d = document,
//     w = window;

// }

const d = document;

const Mail = document.getElementById("inputEmail");
// console.log(Mail)
const Contrase_Mail = document.getElementById("inputContrase");
const Login = document.getElementById("UsuarioLogin");
const $iconoAcceder = d.getElementById("icono_acceder"),
  $iconoContacto = d.getElementById("icono_contacto"),
  $iconoNosotros = d.getElementById("icono_nosotros"),
  $iconoAdmin = d.getElementById("icono_admin"),
  $iconoCerrarSesion = d.getElementById("icono_cerrar_sesion"),
  $iconoInicio = d.getElementById("icono_inicio");
// $a = d.querySelector(".aa")

// console.log($a.dataset);

class Usuario {
  Id_Usu = "";
  Email = "";
  Contrase = "";
}

let registroUsuario = new Usuario();

let Id_Usu = 1;
let Email = "";
let Contrase = "";

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
 let adminOpen = () => {
  // $iconoAcceder.classList.add("display_none");
  // $iconoContacto.classList.add("display_none");
  // $iconoNosotros.classList.add("display_none");
  // $iconoAdmin.classList.remove("display_none");
  // $iconoCerrarSesion.classList.remove("display_none");
  // $iconoInicio.classList.add("display_none")
  // if (conf_email.TipoUsuario == "admin") {
  //  $iconoAcceder.innerHTML = `<i class="bi bi-person-fill-slash"></i>`;
  //  $iconoContacto.innerHTML = `<i class="bi bi-person-gear"></i>`;
  // $a.setAttribute("data-bs-title", "Admin");
  localStorage.setItem("adminAbierto", "trabajandoenpage");
  window.location.href = "./admin-login-panel.html";
  // alert("Puede entrar como Administrador, habilita El Modulo para Administrar");
  // console.log("Usuario: ",conf_email.Nombre," Tipo: ",conf_email.TipoUsuario);
  // }
};

let $carrito = document.getElementById("carrito");
let carro = () => {
  window.location.href = "../index.html"
  localStorage.setItem("carrito", "habilitado")

      
}    

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
    if (registroUsuario.Contrase === conf_email.Contrase) {
      if (conf_email.TipoUsuario == "user") {
        carro()
        
        // window.location.href = "../index.html"
        // let $carrito = document.getElementById("carrito");
        // $carrito.className.remove = "display_none";
        // alert("Puede entrar como User, habilita Solo el CARRITO");
        // console.log("Usuario: ",conf_email.Nombre," Tipo: ",conf_email.TipoUsuario);
      } else {
        if (conf_email.TipoUsuario == "admin") {
          adminOpen();
        }
        //   $iconoAcceder.classList.add("display_none");
        //   $iconoContacto.classList.add("display_none");
        //   $iconoNosotros.classList.add("display_none");
        //   $iconoAdmin.classList.remove("display_none");
        //   $iconoCerrarSesion.classList.remove("display_none");
        //   localStorage.setItem("adminAbierto", "trabajandoenpage")
        //   // alert("Puede entrar como Administrador, habilita El Modulo para Administrar");
        //   console.log("Usuario: ",conf_email.Nombre," Tipo: ",conf_email.TipoUsuario);
        //
      }
    } else {
      alert("Usuario o Contraseña Incorrecta 2");
    }
  }
  
});
 
//#endregion Login

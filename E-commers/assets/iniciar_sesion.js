


export default function iniciar_sesion () {
  let $nombreUsuario = document.getElementById("icono_acceder")
    let $carrito = document.getElementById("carrito");
    let $cerrarSesionUsuario = document.getElementById("cerrar_sesion_usuario")
    

    // let usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
    //usuariosLocalStorage = Array Objetos
    //Usuario = Cada Objeto dentro del Array
    //usuarios = Clave del Local Storage
  


    document.addEventListener("DOMContentLoaded", () => {
     
        // if (localStorage.getItem("carrito" === null)) {
        //   localStorage.setItem("carrito", "habilitado");
        // }
        if (localStorage.getItem("usuario") === "habilitado") {
          $carrito.classList.remove("display_none");
          $cerrarSesionUsuario.classList.remove("display_none")
      
      
        }
        if (localStorage.getItem("usuario") === null) {
          $carrito.classList.add("display_none");
          $cerrarSesionUsuario.classList.add("display_none")
        }
     });
   
    // document.addEventListener("DOMContentLoaded", () => {
        
    //     if (localStorage.getItem("Administrador") === "habilitado") {
          
    //       $cerrarSesionUsuario.classList.remove("display_none")
    //     }
    //     if (localStorage.getItem("administrador") === null) {
          
    //       $cerrarSesionUsuario.classList.add("display_none");
    //     }
    //   });
    }
   


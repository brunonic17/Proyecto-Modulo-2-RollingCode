import{cerrarSesionAdmin,
   
    iniciar_sesion,
    themeDark,
    buscador,
    scrollTopBtn
} from "./funciones.js";


const d = document;

d.addEventListener("DOMContentLoaded", e =>{ //traigo la function y les pasos 
    //los id o clases que necesito seleccionar de mi html
    
    scrollTopBtn(".scroll_top_btn");
    // registrarLogin( "#input_nomb","#input_email", "#btn_regis")
    // seguridad("#inputNombre", "#inputEmail", "#inputContrase", "#inputConfirContrase","#UsuarioGuardar")
    
    
});
    // cerrarSesionAdmin()
    buscador();
    cerrarSesionAdmin();
    // cerrar_sesion_usuario();
    iniciar_sesion();
    themeDark(".theme_dark", "dark_mode")
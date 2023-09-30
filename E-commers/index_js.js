import registrarLogin from "./assets/login_registrar.js";
import seguridad from "./assets/seguridad_login_admin.js";
import scrollTopBtn from "./assets/sroll_btn.js"; 
import themeDark from "./assets/tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{ //traigo la function y les pasos 
    //los id o clases que necesito seleccionar de mi html
    
    scrollTopBtn(".scroll_top_btn");
    registrarLogin( "#input_nomb","#input_email", "#btn_regis")
    seguridad("#inputNombre", "#inputEmail", "#inputContrase", "#inputConfirContrase","#UsuarioGuardar"  )
})

    themeDark(".theme_dark", "dark_mode")
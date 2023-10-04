let $cerrarSesionUsuario = document.getElementById("cerrar_sesion_usuario")

$cerrarSesionUsuario.addEventListener('click', (e) => {
    localStorage.removeItem("usuario");
     alert("Muchas gracias, hasta pronto 👏")
     window.location.reload()
})

let $cerrarSesionUsuario = document.getElementById("cerrar_sesion_usuario")

$cerrarSesionUsuario.addEventListener('click', (e) => {
    localStorage.removeItem("iconos");
    localStorage.removeItem("usuario");
     alert("Muchas gracias por elegirnos, hasta pronto 👏")
     window.location.reload()
})

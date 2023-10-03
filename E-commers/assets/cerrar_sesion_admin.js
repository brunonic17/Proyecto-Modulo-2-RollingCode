
 export default function cerrarSesion () {
    let $cerrarSesion = document.getElementById("icono_cerrar_sesion");

    $cerrarSesion.addEventListener('click', function (e) {

            localStorage.removeItem("carrito")
    // window.location.href = "../index.html"
    })
}
 
    let $btnCerrarSesion = document.getElementById("icono_finalizar_sesion")

    $btnCerrarSesion.addEventListener('click', (e) => {
        localStorage.removeItem("administrador");
        window.location.href = "../index.html"
    })
        if (localStorage.getItem("administrador") === null) {
        window.location.href = "../pages/error404.html"   
      }

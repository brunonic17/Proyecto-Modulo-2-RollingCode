 export default function carrito () {

    let $carrito = document.getElementById("carrito");

    document.addEventListener("DOMContentLoaded", () => {
        if (localStorage.getItem("carrito" === null)) {
          localStorage.setItem("carrito", "habilitado");
        }
        if (localStorage.getItem("carrito") === "habilitado") {
          $carrito.classList.remove("display_none");
        }
        if (localStorage.getItem("carrito") === null) {
          $carrito.classList.add("display_none");
        }
      });
}
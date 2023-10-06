
const Rub = document.getElementById("Rubro");
const Nomb = document.getElementById("NombreArt");
const Tal = document.getElementById("Talle");
const Desc = document.getElementById("Descripcion");
const Pcio = document.getElementById("Precio");
const St = document.getElementById("Stock");
const Img = document.getElementById("Urlimg");
const Registar = document.getElementById("AgregaProd");

class Producto {
  Id_Prod = "";
  RubroArt="";
  NombreArt = "";
  Talle = "";
  Descripcion = "";
  Precio = "";
  Stock = "";
  Urlimg ="";
}
let arrayprduct= JSON.parse(localStorage.getItem("productos"))
let htmltablaproducto=""
console.log(arrayprduct);

    let pp = arrayprduct.map(function(prod){
        htmltablatarjetas =`<div class="card" style="width: 18rem;">
            <img src="/E-commers/img/alpargatas.jpg" class="card-img-top imgcard" alt="...">
            <div class="card-body">
            <h5 class="card-title">Alpargatas Lisas</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="./alpargata-lisa.html" class="btn btn-primary">Ver Producto</a>
            </div>
        </div>`
    })

        const tarjetas=document.getElementById("tarjetas")

        tarjetas.innerHTML=htmltablatarjetas

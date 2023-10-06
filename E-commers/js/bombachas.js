
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
arrayprduct = arrayprduct.filter(
    (Producto) => Producto.RubroArt === "Bombachas"
  );
let htmltablatarjetas=""
console.log(arrayprduct);

    let pp = arrayprduct.map(function(prod){
        htmltablatarjetas +=`<div class="card" style="width: 18rem;">
            <img src="${prod.Urlimg}" class="card-img-top imgcard" alt="${prod.NombreArt}">
            <div class="card-body">
            <h4 class="card-title">${prod.NombreArt}</h4>
            <h5 class="card-title">Precio: ${prod.Precio}</h5>
            <h5 class="card-title">Stock: ${prod.Stock}</h5>
            <p class="card-text">${prod.Descripcion}</p>
            <a href="./bombacha con guarda.html" class="btn btn-primary">Ver Producto</a>
            </div>
        </div>`
    })

        const tarjetas=document.getElementById("tarjetas")
        arrayprduct.forEach(element => {
            tarjetas.innerHTML=htmltablatarjetas
        });

        

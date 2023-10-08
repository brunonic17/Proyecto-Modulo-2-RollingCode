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
            <a href="../pages/productodetalle.html" class="btn btn-primary" id="${prod.Id_Prod}">Ver Producto</a>
            </div>
        </div>`
    })

        const tarjetas=document.getElementById("tarjetas")
        arrayprduct.forEach(element => {
            tarjetas.innerHTML=htmltablatarjetas
        });

        const ids = [];
        
        for (let index = 0; index < arrayprduct.length; index++) {
        const element = arrayprduct[index];
        ids.push(element.Id_Prod);
        }
        console.log(ids);
        
        for (let index = 0; index < ids.length; index++) {
            const id= ids[index];

            let btn = document.getElementById(id);
            
                        
            if (btn === null) continue;
        
            btn.addEventListener("click", (e) => {
            let posicion = +e.target.id;
            let prodposicion = arrayprduct.findIndex(registroProducto => registroProducto.Id_Prod === posicion);
            console.log(prodposicion);
            let productoacomprar= arrayprduct[prodposicion];
            sessionStorage.setItem("detallepro",JSON.stringify(productoacomprar))           
            });
        }

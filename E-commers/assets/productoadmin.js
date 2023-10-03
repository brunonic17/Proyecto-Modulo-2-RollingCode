const Rub = document.getElementById("Rubro");
const Nomb = document.getElementById("NombreArt");
const Tal = document.getElementById("Talle");
const Desc = document.getElementById("Descripcion");
const Pcio = document.getElementById("Precio");
const St = document.getElementById("Stock");
const Img = document.getElementById("Urlimg");
const Registar = document.getElementById("AgregaProd");
const $cerrarSesion = document.getElementById("icono_cerrar_sesion");

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

let registroProducto = new Producto();

  let Id_Prod = 1;
  let RubroArt="";
  let NombreArt = "";
  let Talle = "";
  let Descripcion = "";
  let Precio = "";
  let Stock = "";
  let Urlimg ="";
  let ii = 0
Rub.addEventListener(
  "change",
  (e) => {
    RubroArt = e.target.value;
  },
  false
);
Nomb.addEventListener(
  "change",
  (e) => {
    NombreArt = e.target.value;
  },
  false
);
Tal.addEventListener(
  "change",
  (e) => {
    Talle = e.target.value;
  },
  false
);
Desc.addEventListener(
  "change",
  (e) => {
    Descripcion = e.target.value;
  },
  false
);
Pcio.addEventListener(
  "change",
  (e) => {
    Precio = e.target.value;
  },
  false
);
St.addEventListener(
  "change",
  (e) => {
    Stock = e.target.value;
  },
  false
);
Img.addEventListener(
  "change",
  (e) => {
    Urlimg = e.target.value;
  },
  false
);

//#region Registrar
Registar.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  registroProducto.RubroArt = RubroArt;
  registroProducto.NombreArt = NombreArt;
  registroProducto.Talle = Talle;
  registroProducto.Descripcion = Descripcion;
  registroProducto.Precio = Precio;
  registroProducto.Stock = Stock;
  registroProducto.Urlimg = Urlimg;

  
    let productosLocalStorage = JSON.parse(localStorage.getItem("productos"));
    //usuariosLocalStorage = Array Objetos
    //Usuario = Cada Objeto dentro del Array
    //usuarios = Clave del Local Storage

    if (productosLocalStorage === null) {
      registroProducto.Id_Prod = Id_Prod;
      localStorage.setItem("productos", JSON.stringify([registroProducto]));
    } else {
      let conf_product = productosLocalStorage.find(
        (Producto) => Producto.NombreArt === registroProducto.NombreArt
      );

      if (conf_product === undefined) {
        let ult = productosLocalStorage[productosLocalStorage.length - 1];
        Id_Prod = ult.Id_Prod + 1;
        registroProducto.Id_Prod = Id_Prod;
        productosLocalStorage.push(registroProducto);
        localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
      } else {
        alert("PRODUCTO Ya Registrado");
      }
    }
    console.log(Id_Prod)
  }
  );
  

//dregion Registrar

//#region productos en tabla
let arrayprduct= JSON.parse(localStorage.getItem("productos"))
let htmltablaproducto=""

let pp = arrayprduct.map(function(prod){
  htmltablaproducto += `<tr>
              
              <td>${prod.NombreArt}</td>
              <td>${prod.Descripcion}</td>
              <td>${prod.RubroArt}</td>
              <td class="d-flex justify-content-center"><img src="${prod.Urlimg}" class="img-fluid w-25" alt="${prod.NombreArt}"></td>
              <td>${prod.Precio}</td>
              <td>${prod.Stock}</td>
              <td><button type="button" class="btn btn-success">Editar</button>
                  <button type="button" onclick="window.location.reload()" class="btn btn-danger" id="${prod.Id_Prod}">Eliminar</button>
              </td>
          </tr>`       
        })


const tbody=document.getElementById("tbody")

tbody.innerHTML=htmltablaproducto

const productos = JSON.parse(localStorage.getItem("productos"));
const ids = [];

for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  ids.push(element.Id_Prod);
 }
for (let index = 0; index < ids.length; index++) {
  const id= ids[index];
  let btn = document.getElementById(id);

  if (btn === null) continue;

  btn.addEventListener("click", (e) => {
    let elimina = +e.target.id;
    console.log(elimina);
    console.log(productos);
    let prodeliminar = productos.findIndex(registroProducto => registroProducto.Id_Prod === elimina);
    console.log(prodeliminar);
    productos.splice(prodeliminar,1);
    console.log(productos);
    localStorage.setItem("productos", JSON.stringify(productos));

    //console.log(productos.find(registroProducto => registroProducto.Id_Prod === elimina));
    //console.log(prodeliminar)
    
  });

}

    $cerrarSesion.addEventListener("click", ()=> {
        console.log("hola soy el boton")
        window.location.href = "../index.html"
    })

// let array_ids_m=[]
// let array_ids_e=[]

// tbody.childNodes.forEach((tablerow)=>{
// tablerow.childNodes.forEach((tabledatacell)=>{
// if(tabledatacell.length>1){
//   array_ids_m.push(tabledatacell.firstChild.id);
//   array_ids_e.push(tabledatacell.lastChild.id);
// }})})
// console.log (array_ids_m)
// console.log (array_ids_e)




// let btneliminar = document.getElementById(Id_Prod)

// btneliminar.addEventListener("click", (e) => {
// console.log(pp.id)
//   //arrayprduct.splice(Id_Prod, 2)
// localStorage.setItem("productos", JSON.stringify(arrayprduct));
//})
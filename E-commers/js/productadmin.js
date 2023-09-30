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

let registroProducto = new Producto();

  let Id_Prod = "1";
  let RubroArt="";
  let NombreArt = "";
  let Talle = "";
  let Descripcion = "";
  let Precio = "";
  let Stock = "";
  let Urlimg ="";

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
  });
//#endregion Registrar

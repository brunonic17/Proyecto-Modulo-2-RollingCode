const Rub = document.getElementById("Rubro");
const Nomb = document.getElementById("NombreArt");
const Tal = document.getElementById("Talle");
const Desc = document.getElementById("Descripcion");
const Pcio = document.getElementById("Precio");
const St = document.getElementById("Stock");
const Img = document.getElementById("Urlimg");
const Img2 = document.getElementById("Urlimg2");
const Img3 = document.getElementById("Urlimg3");
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
  Urlimg2 =""; 
  Urlimg3 ="";
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
  let Urlimg2 ="";
  let Urlimg3 ="";
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
Img2.addEventListener(
  "change",
  (e) => {
    Urlimg2 = e.target.value;
  },
  false
);
Img3.addEventListener(
  "change",
  (e) => {
    Urlimg3 = e.target.value;
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
  registroProducto.Urlimg2 = Urlimg2;
  registroProducto.Urlimg3 = Urlimg3;

  
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
//#endregion Registrar

//#region productos en tabla
let arrayprduct= JSON.parse(localStorage.getItem("productos"))
let htmltablaproducto=""

let pp = arrayprduct.map(function(prod){
  htmltablaproducto += `<tr>
              <td>${prod.RubroArt}</td>
              <td>${prod.NombreArt}</td>
              <td>${prod.Descripcion}</td>
              <td class="d-flex justify-content-center"><img src="${prod.Urlimg}" class="img-fluid w-25" alt="${prod.NombreArt}"></td>
              <td>${prod.Precio}</td>
              <td>${prod.Stock}</td>
              <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" id="m-${prod.Id_Prod}">Editar</button>
              <button type="button"  class="btn btn-danger" onclick="window.location.reload()" id="${prod.Id_Prod}">Eliminar</button>

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">MODIFICANDO</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <form class="m-3">
                  <div class="row">
                    <div class="mb-3 col-6">
                        <label for="Rubro" class="form-label">Rubro</label>
                        <h3 id="mRubro">${prod.RubroArt}</h3>
                    </div>
                    <div class="mb-3 col-6">
                        <label for="NombreArt" class="form-label">Nombre del Articulo</label>
                        <h3 id="mNombreArt">${prod.NombreArt}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="mb-3 col-9">
                        <label for="Url-img" class="form-label">Url's de imagenes</label>
                        <input type="text" class="form-control" id="mUrlimg">
                        <input type="text" class="form-control" id="mUrlimg2">
                        <input type="text" class="form-control" id="mUrlimg3">
                    </div>
                    <div class="mb-3 col-3">
                        <label for="Talle" class="form-label">Talle:</label>
                        <input type="text" class="form-control" id="mTalle">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="Descripcion" class="form-label">Descripcion</label>
                    <textarea class="form-control" id="mDescripcion"></textarea>
                </div>
                <div class="row">
                    <div class="mb-3 col-6">
                        <label for="Precio" class="form-label">Precio</label>
                        <input type="number" class="form-control" id="mPrecio">
                    </div>
                    <div class="mb-3 col-6">
                        <label for="Stock" class="form-label">Stock</label>
                        <input type="number" class="form-control" id="mStock">
                    </div>
      
            </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" onclick="window.location.reload()"   data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary" onclick="window.location.reload()"  id="Guardar" >Guardar</button>
                </div>
              </div>
            </div>
          </div>     
              </td>
          </tr>`       
})

let _talle, _descripcion, _precio , _stock, _urlimg 
const tbody=document.getElementById("tbody")

tbody.innerHTML=htmltablaproducto

const productos = JSON.parse(localStorage.getItem("productos"));
const ids = [];
const ids_m = [];

for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  ids.push(element.Id_Prod);
  ids_m.push("m-"+element.Id_Prod);
}
 console.log(ids);
 console.log(ids_m);
 
for (let index = 0; index < ids.length; index++) {
  const id= ids[index];
  const id_m= ids_m[index];
  let btn = document.getElementById(id);
  let btn_m = document.getElementById(id_m);
  console.log(id);
  console.log(btn);
  if (btn === null) continue;

    btn.addEventListener("click", (e) => {
      let elimina = +e.target.id;
      console.log(elimina);
      console.log(productos);
      let prodeliminar = productos.findIndex(registroProducto => registroProducto.Id_Prod === elimina);
      console.log(prodeliminar);
      // productos.splice(prodeliminar,1);
      console.log(productos);
      alert("tecla")
      // localStorage.setItem("productos", JSON.stringify(productos));

    });

  if (btn_m === null) continue;

      btn_m.addEventListener("click", (e) => {
        let modifica = e.target.id;
        modifica = +modifica.slice(2)

        console.log(modifica);
        console.log(productos);
          
        let prodmodifica = productos.findIndex(registroProducto => registroProducto.Id_Prod === modifica);
        let productoModificar = productos[prodmodifica]
        console.log(productoModificar)
        console.log(prodmodifica);
        document.getElementById("modal-title").innerText = "Modificar: " + prodmodifica.NombreArt;

        Tal.value = prodmodifica.Talle;
        Desc.value = prodmodifica.Descripcion;
        Pcio.value = prodmodifica.Precio;
        St.value = prodmodifica.Stock;
        Img.value = prodmodifica.Urlimg;

        _talle = prodmodifica.Talle;
        _descripcion = prodmodifica.Descripcion;
        _precio = prodmodifica.Precio;
        _stock= prodmodifica.Stock;
        _urlimg= prodmodifica.Urlimg;

      });
    }


    mTalle.addEventListener("change", (e) => {
        _talle = e.target.value;
      });

    mDescripcion.addEventListener("change", (e) => {
        _descripcion = e.target.value;
    });

    mPrecio.addEventListener("change", (e) => {
      _precio = e.target.value;
    });

    mStock.addEventListener("change", (e) => {
      _stock = e.target.value;
    });


    let btn_guardar = document.getElementById("Guardar");
    
    btn_guardar.addEventListener("click", () => {
        let productoAModif = productos[prodeliminar];
        productoAModif.Descripcion = _descripcion
        localStorage.setItem("productos", JSON.stringify(productos));
        console.log(productos)
    })

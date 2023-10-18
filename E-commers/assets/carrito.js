const tbodycarrito=document.getElementById("tbodycarrito");
const tarjeta=document.getElementById("tarjeta");
const transfiere=document.getElementById("transfiere");
const borra=document.getElementById("borra")
const spantotal= document.getElementById("spantotal");
const spancant= document.getElementById("spancant");
let arraycarrito= JSON.parse(localStorage.getItem("carrito"));
const datosusuario=document.getElementById("datosusuario")
let usuariolocal=JSON.parse(localStorage.getItem("usuario"))


class Cabecera_Venta {
    Id_Vta = 0;
    Id_Usuario = "";
    CantProduc = "";
    TotalVenta ="";

  }
  
  let registroCabecera_Venta = new Cabecera_Venta();
    let Id_Vta = 0;
    let Id_Usuario = "";
    let CantProduc ="";
    let TotalVenta = "";

// class Venta {
//     Id_Vta= "";
//     Id_Prod = "";
//     RubroArt="";
//     NombreArt = "";
//     Talle = "";
//     Descripcion = "";
//     Precio = "";
//     cantidad ="";
//   }
  
//   let registroVenta = new Venta();
//     let Id_Vta="1";
//     let Id_Prod = "";
//     let RubroArt="";
//     let NombreArt = "";
//     let Talle = "";
//     let Descripcion = "";
//     let Precio = "";
//     let cantidad = "";


let htmltablacarrito=""
let carritototal= 0
let articulototal=0



arraycarrito.forEach(element => {
    carritototal+= element.importe
    articulototal+= +element.cantidad
});

console.log(arraycarrito)

let tablacarrito = arraycarrito.map(function(prod){
    htmltablacarrito += `
<tr>
<td>${prod.cantidad}</td>
<td>${prod.NombreArt}</td>
<td>${prod.Precio}</td>
<td>${prod.importe}</td>
<td><button type="button"  class="btn btn-danger" onclick="window.location.reload()" id="${prod.Id_Prod}">Eliminar</button></td>
</tr>

`
});



spantotal.innerHTML= "$ " + carritototal
spancant.innerHTML= articulototal

 tbodycarrito.innerHTML= htmltablacarrito

 const ids = [];
 
 for (let index = 0; index < arraycarrito.length; index++) {
   const element = arraycarrito[index];
   ids.push(element.Id_Prod);
 }
  console.log(ids);
 for (let index = 0; index < ids.length; index++) {
   const id= ids[index];
   let btn = document.getElementById(id)

   if (btn === null) continue;

  btn.addEventListener("click", (e) => {
    let elimina = +e.target.id;
    console.log(elimina);
    console.log(arraycarrito);
    let prodeliminar = arraycarrito.findIndex(registroProducto => registroProducto.Id_Prod === elimina);
    console.log(prodeliminar);
    let conf = "N"
    conf = prompt("Confirma la Eliminacon del Producto en el Carrito S/N:").toUpperCase()
    if (conf==="S"){
        arraycarrito.splice(prodeliminar,1);
        console.log(arraycarrito);
        localStorage.setItem("carrito", JSON.stringify(arraycarrito));
    } else {
        alert("No se Borrara")
        let hh = DateTime.now()
        console.log(hh)
    }
  });}

  

tarjeta.addEventListener("click", (e) => {
   
    if (arraycarrito === null){
        alert("Carrito vacio No Puede Pagar")
    } else {
        let conf = "N"
        conf = prompt("Confirma la Compra de los Producto del Carrito S/N:").toUpperCase()
        if (conf==="S"){
            // registroCabecera_Venta.Id_Vta = Id_Vta;
            registroCabecera_Venta.TotalVenta= carritototal;
            registroCabecera_Venta.CantProduc= articulototal;
            registroCabecera_Venta.Id_Usuario=usuariolocal.Nombre
            console.log(arraycarrito);
            let cabeceraventas = JSON.parse(localStorage.getItem("cabeceraventas"));
            let ventas = JSON.parse(localStorage.getItem("ventas"));
            let ult = arraycarrito[arraycarrito.length - 1];
            console.log(ult);
            let id = ult.Id_Vta;
            console.log(id);
            Id_Vta = id;
            registroCabecera_Venta.Id_Vta = Id_Vta;
            alert("Tecla");
            if (ventas === null) {
                localStorage.setItem("ventas", JSON.stringify(arraycarrito));
                localStorage.setItem("cabeceraventas", JSON.stringify([registroCabecera_Venta]));
                localStorage.removeItem("carrito");
                console.log(ventas);            
            } else {
                cabeceraventas.push(registroCabecera_Venta);
                localStorage.setItem("cabeceraventas", JSON.stringify(cabeceraventas));
                ventas.push(arraycarrito);
                localStorage.setItem("ventas", JSON.stringify(ventas));
                localStorage.removeItem("carrito");
                window.location.reload()
            }
            
        } else {
            alert("No se Borrara")
        }
        console.log(arraycarrito);
    }

})

transfiere.addEventListener("click", (e) => {
   
    if (arraycarrito === null){
        alert("Carrito vacio No Puede Pagar")
    } else {
        let conf = "N"
        conf = prompt("Confirma la Compra de los Producto del Carrito S/N:").toUpperCase()
        if (conf==="S"){
            // registroCabecera_Venta.Id_Vta = Id_Vta;
            registroCabecera_Venta.TotalVenta= carritototal;
            registroCabecera_Venta.CantProduc= articulototal;
            registroCabecera_Venta.Id_Usuario=usuariolocal.Nombre
            console.log(arraycarrito);
            let cabeceraventas = JSON.parse(localStorage.getItem("cabeceraventas"));
            let ventas = JSON.parse(localStorage.getItem("ventas"));
            let ult = arraycarrito[arraycarrito.length - 1];
            console.log(ult);
            let id = ult.Id_Vta;
            console.log(id);
            Id_Vta = id;
            registroCabecera_Venta.Id_Vta = Id_Vta;
            alert("Tecla");
            if (ventas === null) {
                localStorage.setItem("ventas", JSON.stringify(arraycarrito));
                localStorage.setItem("cabeceraventas", JSON.stringify([registroCabecera_Venta]));
                localStorage.removeItem("carrito");
                console.log(ventas);            
            } else {
                cabeceraventas.push(registroCabecera_Venta);
                localStorage.setItem("cabeceraventas", JSON.stringify(cabeceraventas));
                ventas.push(arraycarrito);
                localStorage.setItem("ventas", JSON.stringify(ventas));
                localStorage.removeItem("carrito");
                window.location.reload()
            }
            
        } else {
            alert("No se Borrara")
        }
        console.log(arraycarrito);
    }

})

borra.addEventListener("click", (e) => {
   
    if (arraycarrito === null){
        alert("Carrito vacio No Puede Borrarlo")
    } else {
        let conf = "N"
        conf = prompt("Confirma la Eliminacion del Carrito S/N:").toUpperCase()
        if (conf==="S"){
            localStorage.removeItem("carrito");
            window.location.reload()
         
        } else {
            alert("No Borrara el Carrito")
        }
        console.log(arraycarrito);
    }

})
let htmlususario =`<h5 class="card-title">Usuario:</h5>
<p class="card-text">${usuariolocal.Nombre}</p>`

datosusuario.innerHTML=htmlususario

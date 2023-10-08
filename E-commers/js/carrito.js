const tbodycarrito=document.getElementById("tbodycarrito");
const spantotal= document.getElementById("spantotal");
const spancant= document.getElementById("spancant");
let arraycarrito= JSON.parse(localStorage.getItem("carrito"));
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
   console.log(btn);

   if (btn === null) continue;

  btn.addEventListener("click", (e) => {
    let elimina = +e.target.id;
    console.log(elimina);
    console.log(arraycarrito);
    let prodeliminar = arraycarrito.findIndex(registroProducto => registroProducto.Id_Prod === elimina);
    console.log(prodeliminar);
    let conf = "N"
    conf = prompt("Confirma la Eliminacon del Producto en el Carrito S/N:")
    if (conf==="S"){
    arraycarrito.splice(prodeliminar,1);
    console.log(arraycarrito);
    localStorage.setItem("carrito", JSON.stringify(arraycarrito));
    } else {
        alert("No se Borrara")
    }
  });}
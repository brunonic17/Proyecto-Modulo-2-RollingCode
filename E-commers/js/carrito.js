
const tbodycarrito=document.getElementById("tbodycarrito")
const spantotal= document.getElementById("spantotal")
const spancant= document.getElementById("spancant")
let arraycarrito= JSON.parse(localStorage.getItem("carrito"))
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

              
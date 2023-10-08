document.addEventListener("keyup", e=> {
    if (e.target.matches("#buscador")){
  
        document.querySelectorAll(".articulo").forEach(articulo =>{
  
            articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?articulo.classList.add("filtro")
              :articulo.classList.remove("filtro")
        })
  
    }
  
})

let arrayproduct = JSON.parse(localStorage.getItem("productos"))
console.log(arrayproduct)

let arraynombres = []

arrayproduct.forEach(element => {
    arraynombres.push(element.NombreArt)
});

console.log(arraynombres)

let htmllistaart= ""

arraynombres.forEach(e => {
    htmllistaart += `<li class="articulo filtro">${e}</li>`
})

const listaarticulo= document.getElementById("listaArticulos")

listaarticulo.innerHTML= htmllistaart
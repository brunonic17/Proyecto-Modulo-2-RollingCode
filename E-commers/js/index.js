let arrayproduct = JSON.parse(localStorage.getItem("productos"))
console.log(arrayproduct)


let htmllistaart= ""

arrayproduct.forEach(e => {
    htmllistaart += `<li class="articulo filtro"><a href="/E-commers/pages/productodetalle.html" id="${e.Id_Prod}">${e.NombreArt.toLowerCase()}</a></li>`
})

const listaarticulo= document.getElementById("listaArticulos")

listaarticulo.innerHTML= htmllistaart

document.addEventListener("keyup", e=> {
    
    document.querySelectorAll(".articulo").forEach(articulo =>{
        
        if (articulo.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) && e.target.value != ""  &&  e.target.value != " ") {
            articulo.classList.remove("filtro")
            }
           
            else{
                articulo.classList.add("filtro")
            }
            
    })  
})

const ids = [];
        
        for (let index = 0; index < arrayproduct.length; index++) {
        const element = arrayproduct[index];
        ids.push(element.Id_Prod);
        }
        console.log(ids);
        
        for (let index = 0; index < ids.length; index++) {
            const id= ids[index];

            let ancor = document.getElementById(id);
            
                        
            if (ancor === null) continue;
        
            ancor.addEventListener("click", (e) => {
            let posicion = +e.target.id;
            let prodposicion = arrayproduct.findIndex(registroProducto => registroProducto.Id_Prod === posicion);
            console.log(prodposicion);
            let productoacomprar= arrayproduct[prodposicion];
            sessionStorage.setItem("detallepro",JSON.stringify(productoacomprar))           
            });
        }


        

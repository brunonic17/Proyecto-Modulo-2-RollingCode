let arrayproduct = JSON.parse(localStorage.getItem("productos"))
console.log(arrayproduct)


let htmllistaart= ""

arrayproduct.forEach(e => {
    htmllistaart += `<li class="articulo filtro"><a href="../pages/productodetalle.html" id="${e.Id_Prod}">${e.NombreArt.toLowerCase()}</a></li>`
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

const idss = [];
        
        for (let index = 0; index < arrayproduct.length; index++) {
        const element = arrayproduct[index];
        idss.push(element.Id_Prod);
        }
        console.log(idss);
        
        for (let index = 0; index < idss.length; index++) {
            const id= idss[index];

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

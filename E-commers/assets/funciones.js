
const d = document,
  w = window,
  ls = localStorage;
 

  


  function scrollTopBtn (btn){
    let $scrollBtn = d.querySelector(btn)
    w.addEventListener("scroll", e => {
        let $scrollTopBtn = d.documentElement.scrollTop;
        // console.log($scrollTopBtn)
        if ($scrollTopBtn > 1000) {
            $scrollBtn.classList.remove("hidden")
        }else{
            $scrollBtn.classList.add('hidden')
        }
    }
    )
    d.addEventListener("click", (e)=>{
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        
    }

}
    )}

function cerrarSesionAdmin(){
let $btnCerrarSesion = document.getElementById("icono_finalizar_sesion")

  

if($btnCerrarSesion){

$btnCerrarSesion.addEventListener('click', (e) => {
  alert("no borro")
    localStorage.removeItem("administrador");
    localStorage.removeItem("usuario");
    localStorage.removeItem("carrito")
    window.location.href = "../index.html"
    localStorage.removeItem("iconos");
    // window.location.reload()
  })
  // if (localStorage.getItem("administrador") === null) {
  //   window.location.href = "../pages/error404.html"  
  //   localStorage.removeItem("usuario"); 
  //   localStorage.removeItem("iconos");
  // // window.location.reload()
  // }
}
// else if(admlocal === null && localStorage.getItem("iconos") === null) { window.location.href = "../pages/error404.html"}
}


  function cerrar_sesion_usuario(){
  let $cerrarSesionUsuario = document.getElementById("cerrar_sesion_usuario")
  
  if($cerrarSesionUsuario){

$cerrarSesionUsuario.addEventListener('click', (e) => {
    localStorage.removeItem("iconos");
    localStorage.removeItem("usuario");
     alert("Muchas gracias por elegirnos, hasta pronto 👏")
    })}
    
}

function iniciar_sesion () {
    let $nombreUsuario = document.getElementById("icono_acceder")
      let $carrito = document.getElementById("carrito");
      let $cerrarSesionUsuario = document.getElementById("cerrar_sesion_usuario"),
      $iconoContacto = d.getElementById("icono_contacto"),
      $iconoNosotros = d.getElementById("icono_nosotros"),
      $iconoAdmin = d.getElementById("icono_adminstrador"),
      $iconoCerrarSesionAdmin = d.getElementById("icono_finalizar_sesion")
      
  
      // let usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
      //usuariosLocalStorage = Array Objetos
      //Usuario = Cada Objeto dentro del Array
      //usuarios = Clave del Local Storage
    
  
  
      document.addEventListener("DOMContentLoaded", () => {
       
          // if (localStorage.getItem("carrito" === null)) {
          //   localStorage.setItem("carrito", "habilitado");
          // }
          if (localStorage.getItem("iconos") === "habilitado" &&localStorage.getItem("administrador") === null) {
            $carrito.classList.remove("display_none");
            $cerrarSesionUsuario.classList.remove("display_none");
           
            let usuariosLocalStorage = JSON.parse(localStorage.getItem('usuario'));
            $nombreUsuario.innerHTML = `${usuariosLocalStorage.Nombre}`
            console.log(usuariosLocalStorage.Nombre)
            
          }
          else if(localStorage.getItem("administrador") === "habilitado" && localStorage.getItem("iconos") === "habilitado" ){
            $iconoAdmin.classList.remove("display_none");
            $iconoCerrarSesionAdmin.classList.remove("display_none");
            let usuariosLocalStorage = JSON.parse(localStorage.getItem('usuario'));
            $nombreUsuario.innerHTML = `${usuariosLocalStorage.Nombre}`
            console.log(usuariosLocalStorage.Nombre)
          }
          
  
          else {
            
           
            $carrito.classList.add("display_none");
            $cerrarSesionUsuario.classList.add("display_none")
          
       ;}
     
      // document.addEventListener("DOMContentLoaded", () => {
          
      //     if (localStorage.getItem("Administrador") === "habilitado") {
            
      //       $cerrarSesionUsuario.classList.remove("display_none")
      //     }
      //     if (localStorage.getItem("administrador") === null) {
            
      //       $cerrarSesionUsuario.classList.add("display_none");
      //     }
      //   });
      })};

      function themeDark(themeBtn, classMode) {
        const $themedark = d.querySelector(themeBtn),
          $selctores = d.querySelectorAll("[data-mode]");
      
        let luna = "🌙",
          sol = "☀️";
      
        let lightMode = () => {
          $selctores.forEach((el) => el.classList.remove(classMode));
          $themedark.innerHTML = luna;
          ls.setItem("theme", "ligth");
        };
        let darkMode = () => {
          $selctores.forEach((el) => el.classList.add(classMode));
          $themedark.innerHTML = sol;
          ls.setItem("theme", "dark");
        };
      
        d.addEventListener("click", (e) => {
          if (e.target.matches(themeBtn) || e.target.matches(`${themeBtn} *`)) {
          if ($themedark.innerHTML === luna) {
              darkMode();
          } else {
              lightMode();
              }
        }
        
      });
      
        d.addEventListener("DOMContentLoaded", () => {
          if (ls.getItem("theme") === null) {
            ls.setItem("theme", "light");
          }
          if (ls.getItem("theme") === "light") {
            lightMode();
          }
          if (ls.getItem("theme") === "dark") {
            darkMode();
          }
        });
      }

      function buscador(){
        let arrayproduct = JSON.parse(localStorage.getItem("productos"))

        if(arrayproduct){
console.log(arrayproduct)


let htmllistaart= ""

arrayproduct.forEach(e => {
    htmllistaart += `<li class="articulo filtro"><a href="/E-commers/pages/productodetalle.html" id="${e.Id_Prod}">${e.NombreArt.toLowerCase()}</a></li>`
})

const listaarticulo= document.getElementById("listaArticulos")

listaarticulo.innerHTML= htmllistaart
let buscador = document.getElementById("buscador")
buscador.addEventListener("keyup", e=> {
    
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
            sessionStorage.setItem("detallepro",JSON.stringify(productoacomprar));


            });
        }

      }
    }

export{cerrarSesionAdmin,
    cerrar_sesion_usuario,
    iniciar_sesion,
    themeDark,
    buscador,
    scrollTopBtn}
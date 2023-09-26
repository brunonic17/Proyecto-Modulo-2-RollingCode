
const usuariohtml=document.getElementById("exampleInputEmail1")
const contraseñahtml=document.getElementById("exampleInputPassword1")
const button_logingtml=document.getElementById("btnlogin")
 
var login= new Object()

let usuario=""
let contraseña=""
var Usuario="Usuario"

usuariohtml.addEventListener("change",function cargausuario(e){ usuario=e.target.value},false
)
contraseñahtml.addEventListener("change",function cargacontraseña (e ){ contraseña=e.target.value
},false
 )
button_logingtml.addEventListener ("click" ,function cargardatos(e){
  e.preventDefault();
e.stopPropagation();
login.usuario=usuario
login.contraseña=contraseña
// localStorage.setItem(Usuario,JSON.stringify(login))
sessionStorage.setItem(Usuario,JSON.stringify(login))
}
,false)


// class Login{
//     constructor(Usuario,Contraseña){
//       this._Usuario=Usuario
//       this._Contraseña=Contraseña
//     }

//     set cargaUsuario(usuariohtml){
//         this._Usuario =usuariohtml ;
//     }

//     set cargaContraseña(contraseñahtml){
//       this._Contraseña=contraseñahtml;
//     }

//     get cargaLogin(){
//         return console.log(this._Contraseña,this._Usuario)
//     }
// }


// button_logingtml.addEventListener('click',function cargardatos(e){
//     Login(usuariohtml,contraseñahtml)
//     console.log(Login+e.taget.value)
//     })


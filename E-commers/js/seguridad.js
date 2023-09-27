import {  
    addelementclick,
    addelementchange,
    Traerelemento} from "/E-commers/js/funciones.js"
   
     

let regnombre=document.getElementById("regnombre")
let regapellido=document.getElementById("regapellido")
let regnemail=document.getElementById("regnemail")
let regnombredeusuario=document.getElementById("regnombredeusuario")
let regcontraseña=document.getElementById("regcontraseña")
let regconfcontraseña=document.getElementById("regconfcontraseña")
let regpais=document.getElementById("regpais")
let regprovincia=document.getElementById("regprovincia")
let regciudad=document.getElementById("regciudad")
let regtelefono=document.getElementById("regtelefono")
let regdireccion=document.getElementById("regdireccion")
let regcodpostal=document.getElementById("regcodpostal")
let regpiso=document.getElementById("regpiso")
let regdepartamento=document.getElementById("regdepartamento")
let regnumero=document.getElementById("regnumero")
let regbutton=document.getElementById("regbutton")


        let Usuarios=[]
        let Usuario= new Object()
        let nombres=""
        let apellidos=""       
        let email=""
        let contraseña=""
        let confcontraseña=""
        let nombreusuario=""
        let pais=""
        let provincia=""
        let ciudad=""
        let direccion=""
        let numero=""
        let codigopostal=""
        let telefono=""
        let departamento=""
        let piso=""


addelementchange(nombres,regnombre)
addelementchange(apellidos,regapellido)
addelementchange(email,regnemail)
addelementchange(nombreusuario,regnombredeusuario)
addelementchange(contraseña,regcontraseña)
addelementchange(confcontraseña,regconfcontraseña)
addelementchange(pais,regpais)
addelementchange(ciudad,regciudad)
addelementchange(direccion,regdireccion)
addelementchange(numero,regnumero)
addelementchange(piso,regpiso)
addelementchange(departamento,regdepartamento)
addelementchange(telefono,regtelefono)
addelementchange(provincia,regprovincia)
addelementchange(codigopostal,regcodpostal)

addelementclick(Usuarios,regbutton,Usuario)

console.log(addelementchange(nombres,regnombre))
console.log(addelementclick(Usuarios,regbutton,Usuario))
const comment = document.getElementById("comment")
const btncomment = document.getElementById("btncomment")
console.log(comment)
console.log(btncomment)

class Comentario {
    NombUsu= ""
    comentario=""
}

let getcomment = new Comentario();

let NombUsu= ""
let comentario= ""


comment.addEventListener("change", e => {
    comentario = e.target.value
}, false);



btncomment.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    getcomment.comentario = comentario
    getcomment.NombUsu = "jon doe"
    
    let commentLocalStorage = JSON.parse(localStorage.getItem(getcomment))

    if (commentLocalStorage === null) {
        localStorage.setItem("comentarios", JSON.stringify([getcomment]))
        console.log(getcomment)
    } else{
        commentLocalStorage.push(getcomment)
        localStorage.setItem("comentarios", JSON.stringify(commentLocalStorage))
        alert ("comentario guardado")
    }
    })

    
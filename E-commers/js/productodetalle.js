
const creadorprod=document.getElementById("creadorprod")
let prodsession= JSON.parse(sessionStorage.getItem("detallepro"))
console.log(prodsession)
// prodsession.RubroArt
// prodsession.NombreArt
// prodsession.Talle
// prodsession.Descripcion
// prodsession.Precio
// prodsession.Stock
// prodsession.Urlimg
let htmpro=""
htmpro +=`<div class="row pt-3">
<div class="col-lg-6">
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${prodsession.Urlimg}" class="d-block w-100" alt="${prodsession.NombreArt}">
      </div>
      <div class="carousel-item">
      <img src="${prodsession.Urlimg2}" class="d-block w-100" alt="${prodsession.NombreArt}">
      </div>
      <div class="carousel-item">
      <img src="${prodsession.Urlimg3}" class="d-block w-100" alt="${prodsession.NombreArt}">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
<div class="col-lg-6">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="pt-5">
        <label for="">Articulo:</label>
        <h3>${prodsession.NombreArt}</h3>
        <label for="">Precio:</label>
        <h4 class="form-control">$ ${prodsession.Precio}</h4>
        <hr>
        <label for="">Descrición:</label>
        <p>${prodsession.Descripcion}</p>
        <br>
        <label for="">Selecciona un color:</label>
        <div class="pt-3">
          <input class="form-check-input bg-color-check1" type="radio" name="flexRadioDefault"
            id="flexRadioDefault1">
          <input class="form-check-input bg-color-check2" type="radio" name="flexRadioDefault"
            id="flexRadioDefault1">
          <input class="form-check-input bg-color-check3" type="radio" name="flexRadioDefault"
            id="flexRadioDefault1">
            <br>
            <label for="Url-img" class="form-label">Cantidad</label>
            <input type="text" class="form-control" id="cantidad">
        </div>
        </div>
        <br>
        <select class="form-select" aria-label="Default select example">
          <option selected>Selecciona un Talle</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
        </select>
        <hr>
        <button id="btn_agregar" class="btn btn-lg btn-primary">Agregar al carro</button>
      </div>
    </div>
  </div>
</div>
</div>`

creadorprod.innerHTML=htmpro;

const cant=document.getElementById("cantidad");
let cantidad="";
cant.addEventListener("change", (e)=> cantidad=e.target.value,false );

let btn_agregar = document.getElementById("btn_agregar");
 
let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

btn_agregar.addEventListener("click", (e) =>{
    e.preventDefault();
    e.stopPropagation();
    if (cantidad > "0") {
        prodsession.cantidad=cantidad
        let precio=prodsession.Precio
        prodsession.importe= precio*cantidad
        console.log(prodsession.cantidad);
        console.log(prodsession.importe);
        console.log(prodsession);
        if (carritoLocalStorage === null) {
          
            localStorage.setItem("carrito", JSON.stringify([prodsession]))
        } else {
            carritoLocalStorage.push(prodsession);
            localStorage.setItem("carrito", JSON.stringify(carritoLocalStorage))
        }
  } else {
        alert("Debe elegir la cantidad a Comprar");
  }
})
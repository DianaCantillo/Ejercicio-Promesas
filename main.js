const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products/";


function getData(){
fetch(URLMain).then( (response) => {
    console.log(response);
    response.json().then((res) => {
        console.log(res);
        createCards(res);
});   
}).catch((err) => {
    alertError.innerText = `Problema al traer la información ${err}`;
    alertError.style.display = "block";
});

}

getData();

function createCards(res) {
    res.forEach((element) => {
        divProductos.insertAdjacentHTML("beforeend",
            `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card" style="width: 100%;">
          <img src="${element.image}" class="card-img-top" alt="${element.title}">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">Precio: $${element.price}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>`
            );
        });
        }

getData();




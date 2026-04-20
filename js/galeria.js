function renderizar(){
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";
  
  productos.forEach((prod) =>{
    const card = document.createElement("div");
    card.classList.add('card');
    
    card.innerHTML = `
    
    <div class = "card-body">
    <img src= "${prod.imagen}">
    
    <p class = "card-nombre">${prod.nombre}</p>
    
    <p class="card-descripcion">${prod.descripcion}</p>
    
    <p class =  "card-precio">$${prod.precio.toLocaleString('es-CO')}</p>
    
    </div>
    
    `
    galeria.appendChild(card);
  });
}
renderizar();
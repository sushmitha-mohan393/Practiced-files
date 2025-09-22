const CART_KEY = "cartProducts";


let cartProducts = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cartProducts));
}


function addTocart(product) {
  if (!product) {
    console.error("addTocart called with no product");
    return;
  }


  const exists = cartProducts.find(p => p.name === product.name);
  if (!exists) {
    cartProducts.push(product);
    saveCart();
  }

  window.location.href = "cart.html";
}

function renderCartPage() {
  const cartContainer = document.querySelector(".cart");
  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  cartProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("out");
    card.innerHTML = `
      <div class="options">
        <img src="${product.img}" style="width:80px;height:80px;object-fit:cover;">
      </div>
      <div class="in">
        <div style="font-family:Poppins;font-weight:600;">${product.name}</div>
        <p style="color:#C9AA05;font-weight:600">${product.price}</p>
      </div>
      <div style="justify-content:flex-end;">
        <i class="fa-solid fa-square-xmark" style="color:#BA3535;font-size: larger;cursor:pointer;"></i>
      </div>
    `;
    cartContainer.appendChild(card);
  });
}


if (document.querySelector(".cart")) {
  renderCartPage();
}

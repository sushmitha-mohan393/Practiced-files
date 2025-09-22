const data ={
    

all:[
  { img: "/images/burg.png", name: "Beef burger", descrip: "Big juicy beef burger with cheese, lettuce, tomato, onions and special sauce.", price:"$15",id:"1" },
  { img: "/biryanii.png", name: "Dum Biryani", descrip: "Aromatic basmati rice layered with rich spices and tender meat, slow-cooked to perfection.",price:"$20",id:"2" },
  { img: "/soft-removebg-preview.png", name: "Pepsi", descrip: "Refreshing fizzy cola with a bold, crisp taste.",price:"$7",id:"3"  },
  { img: "/piz.png", name: "Cheese Pizza", descrip: "Classic cheesy pizza topped with golden melted mozzarella.",price:"$18",id:"4" }
],

burger:[
  { img: "/images/burg.png", name: "Beef Burger", descrip: "Juicy beef patty stacked with lettuce, tomato, cheese and zesty sauce." ,price:"$15",id:"5" },
  { img: "/chicken.png", name: "Chicken Burger", descrip: "Crispy chicken fillet with fresh veggies and creamy mayo inside a soft bun.",price:"$14",id:"6" },
  { img: "/burger.png", name: "Veg Burger", descrip: "Grilled veggie patty loaded with lettuce, tomato and tangy sauce." ,price:"$16",id:"7" },
  { img: "/cheese.png", name: "Cheese Burger", descrip: "Savory burger smothered with extra melted cheese for a rich bite.",price:"$18",id:"8" }
],

pizza:[
  { img: "/piz.png", name: "Cheese Pizza", descrip: "Cheesy delight with gooey mozzarella on a crispy crust.",price:"$18",id:"9" },
  { img: "/pizza2.png", name: "Paneer Pizza", descrip: "Soft paneer cubes with spicy seasoning on a cheesy pizza base.",price:"$17",id:"10" },
  { img: "/pizza1.png", name: "Veggie Pizza", descrip: "Loaded with colorful veggies, herbs, and mozzarella cheese.",price:"$18",id:"11"  },
  { img: "/pizza3.png", name: "BBQ Pizza", descrip: "Smoky barbecue sauce topped with veggies, cheese and grilled toppings.",price:"$20",id:"12" }
],

biryani:[
  { img: "/biryanii.png", name: "Dum Biryani", descrip: "Fragrant rice cooked with spices and juicy meat in traditional dum style.",price:"$20" ,id:"13" },
  { img: "/pngtree-chicken-biryani-front-view-png-image_9167532.png", name: "Chicken Biryani", descrip: "Spiced chicken pieces layered with aromatic rice and herbs.",price:"$22",id:"14"  },
  { img: "/pngtree-elegant-presentation-of-delicious-mutton-biryani-png-image_13388364 (1).png", name: "Egg Biryani", descrip: "Fluffy basmati rice with boiled eggs and flavorful spices.",price:"$19",id:"15" },
  { img: "/paneer-biryani-8229 (1).png", name: "Veg Biryani", descrip: "Basmati rice cooked with seasonal vegetables and fragrant masalas.",price:"$20",id:"16"  }
],

soft:[
  { img: "/coke.png", name: "Coke", descrip: "Classic cola with a refreshing sweet fizz.",price:"$6",id:"17" },
  { img: "/fan.png", name: "Fanta", descrip: "Bright and bubbly orange-flavored soft drink.",price:"$6.5",id:"18" },
  { img: "/soft-removebg-preview.png", name: "Pepsi", descrip: "Crisp, bold cola flavor for instant refreshment.",price:"7",id:"19"  },
  { img: "/mir.png", name: "Mirinda", descrip: "Fruity, tangy orange soda full of zest.",price:"$5",id:"20" }
],

dessert:[
  { img: "/cake.png", name: "Cheesecake", descrip: "Creamy and smooth cheesecake with a buttery base.", price:"$12" ,id:"21" },
  { img: "/cup.jpg", name: "Cupcake", descrip: "Soft, fluffy cupcake topped with sweet frosting.",price:"$10",id:"22"  },
  { img: "/tir.png", name: "Tiramisu", descrip: "Classic Italian dessert with coffee-soaked layers and creamy mascarpone." ,price:"$15" ,id:"23" },
  { img: "/fal.png", name: "Falooda", descrip: "Refreshing Indian dessert drink with vermicelli, rose syrup and ice cream." ,price:"$13",id:"24"  }
]
};

function renderItems(category) {
    const container = document.querySelector(".vertical");
    const itemsArray = data[category];
    
    if (!itemsArray) return;
 
    container.innerHTML = itemsArray.map(item => `
      <div class="no-results" style="display:none; font-size:20px;font-family:Poppins; color:#858585; text-align:center; margin:20px;">
        No results found🙁
    </div>
       <div class="row" style="display:flex;flex-direction:row;width:45%">
        <div class="opt" data-descrip="${item.descrip}" data-img="${item.img}" data-name="${item.name}" data-price="${item.price}" data-id="${item.id}">
            <img src="${item.img}" alt="${item.name}">
            <div id="fon" style="font-family: Poppins;">${item.name}</div>
            <div style="display:flex;flex-direction: row;justify-content: space-between;margin:10px 0px;">
                <p style="color:#C9AA05">${item.price}</p>
                <i class="fa-solid fa-circle-plus" style="color:#0E803C"></i>
            </div>
        </div>
        
        </div>
    `).join("");
    
    attachItemClickEvents();
}
 
function attachItemClickEvents() {
    const container = document.querySelector(".vertical");
    const items = container.querySelectorAll(".opt");
 
    items.forEach(item => {
        item.addEventListener("click", () => {
            const img = item.dataset.img;
            const name = item.dataset.name;
            const price = item.dataset.price;
            const descrip = item.dataset.descrip;
            const id = item.dataset.id;
 
            localStorage.setItem("img", img);
            localStorage.setItem("name", name);
            localStorage.setItem("price", price);
            localStorage.setItem("descrip", descrip);
            localStorage.setItem("id", id);
 
            window.location.href = "descrip.html";
        });
    });
}
const buut = document.querySelectorAll(".options");
 window.onload=()=>
 {
  renderItems("all");
 }
buut.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.target;
        renderItems(category);
    });
});











/* let allItems = [];
let popular = [];
 
window.onload = function() {
    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            allItems = data.allItems;
            popular = data.popular;
            displayItems(popular); 
        })
        .catch(error => {
            console.error("No results found", error);
        });
};
function displayItems(items) {
    const container = document.querySelector(".vertical");
    container.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("opt");
 
       
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;
        img.style.width = "100px"; 
 
        
        const name = document.createElement("p");
        name.textContent = item.name;
 
       
        div.appendChild(img);
        div.appendChild(name);
 
        container.appendChild(div);
    });
}
function searchItems() {
    const input = document.getElementById("ser").value.trim();
    const filteredItems = popular.filter(item => item.name.includes(input));
    displayItems(filteredItems);
}
 */
 const searchInput = document.getElementById('ser');
const im = document.querySelectorAll('.vertical .opt');

//  const noResultsDiv = document.querySelector(".vertical .no-results");

function showInitialItems() {
    im.forEach((item, index) => {
        if(index < 4){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
} 
 
/* 
function searchItems() {
 
     
    const noResultsDiv = document.querySelectorAll(".no-results");
      const qury = searchInput.value.toLowerCase().trim();
    let anyVisible = false;

    im.forEach(item => {
        const name = item.querySelector("div").textContent.toLowerCase();
        if (name.includes(qury)) {
            item.style.display = "block";
            anyVisible = true;
        } else {
            item.style.display = "none";
        }
    });

    noResultsDiv.style.display = anyVisible ? "none" : "block";


    const query = searchInput.value.toLowerCase();
    im.forEach(item => {
        if(item.textContent.toLowerCase().includes(query)){
            item.style.display = "block";
        } else {
            
            if(query === "") {
                showInitialItems();
            } else {
                item.style.display = "none";
            }
        }
    });
   
} */
function searchItems() {
    const container = document.querySelector(".vertical");
    const searchInput = document.getElementById('ser');
    const query = searchInput.value.toLowerCase().trim();
    const items = container.querySelectorAll(".opt"); 
    const noRe = container.querySelector(".no-results");
 
    let anyVisible = false;
    console.log('items',items);
    
    items.forEach(item => {
        const name = item.querySelector("div").textContent.toLowerCase();
        if (name.includes(query)) {
            item.style.display = "block";
            anyVisible = true;
        } else {
            item.style.display = "none";
        }
        if(query==="")
        {
          items.forEach(item=>{
          item.style.display="block";
          });
        }

    });
 
    noRe.style.display = anyVisible ? "none" : "block";
}

/* function searchItems() {
    const query = searchInput.value.toLowerCase().trim();
    const container = document.querySelector(".vertical");
    const noResultsDiv = container.querySelector(".no-results");

    container.querySelectorAll(".opt").forEach(el => el.remove()); // clear previous

    const filt = data.filter(item => item.name.toLowerCase().includes(query));

    if (filt.length === 0) {
        noResultsDiv.style.display = "block";
    } else {
        noResultsDiv.style.display = "none";
        filt.forEach(item => {
            const div = document.createElement("div");
            div.className = "opt";
            div.textContent = item.name;
            container.appendChild(div);
        });
    }
} */

 

showInitialItems();

 

// searchInput.addEventListener('input', searchItems); 
 


 
/* function searchItems() {
    const input = document.getElementById("ser").value.toLowerCase().trim();
    const items = document.querySelectorAll(".vertical .opt");
 
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
} */
/* document.getElementById("ser").addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        searchItems();
    }
}); */
const imgs={
all:[{img:"/fries-3 1.png",h4:"Free Box of Fries"}],
burger:[{img:"/b1g1.png",h4:"Buy 1 Get 1 Burgers"}],
pizza:[{img:"/gar.png",h4:"Extra Garlicc Bread"}],
biryani:[{img:"/kabeb.png",h4:"Kebabs on the house"}],
soft:[{img:"/coff.png",h4:"Get brewed with a free latte"}],
dessert:[{img:"/waffle (2).png",h4:"Sweet Deal:Free Waffles"}]
}

const popu={
  all:[{title:"Popular✨"}],
burger:[{title:"Hot Deals on Burgers🍔"}],
pizza:[{title:"Cheesy Deals on Pizzas🍕"}],
biryani:[{title:"Spicy Deals on Biryani🌶️"}],
soft:[{title:"Cool Deals on Soft Drinks🍹 "}],
dessert:[{title:"Sweet Deals on Desserts🍨"}]

}





const container=document.querySelectorAll(".vertical");



container.forEach(btn=>{
btn.addEventListener("click", (e) => {
  const item = e.target.closest(".opt");
  if (!item) return; 

  const imgEl = item.querySelector("img");
  const nameEl = item.querySelector("div");
  const price=item.querySelector("p")

  localStorage.setItem("img", imgEl.src);
  localStorage.setItem("name", nameEl.textContent );
   localStorage.setItem("price", price.textContent );
  localStorage.setItem("descrip", item.dataset.descrip);

  window.location.href = "descrip.html";
}); 
});

/* window.onload = () => {
  const items = document.querySelectorAll(".vertical .opt");

  items.forEach(item => {
   
    const name = item.querySelector("div")?.textContent.trim();
    const found = data.all.find(d => d.name === name);

    if (found) {
      item.dataset.descrip = found.descrip;
      item.dataset.img = found.img;
      item.dataset.name = found.name;
    }

    // --- Step 2: Add click listener ---
    item.addEventListener("click", () => {
      localStorage.setItem("img", item.dataset.img);
      localStorage.setItem("name", item.dataset.name);
      localStorage.setItem("descrip", item.dataset.descrip);
      window.location.href = "descrip.html";
    });
  });
}; */





























/* const ids=document.querySelector(".vertical").innerHTML=dat.map(datas=>`
    <div style="display:flex;flex-direction:row; gap:40px;">
    <div class="opt">
        <img src="/images/burg.png">
        <div style="font-family: Poppins;">Beef Burger</div>
        
        <div style="display:flex;flex-direction: row;justify-content: space-between;margin:10px 0px;">
            <div style="color:#C9AA05">
              $20
            </div>
           
            <i class="fa-solid fa-circle-plus" style="color:#0E803C"></i>  
         
        </div>

</div>
    <div class="opt">
        <img src="/biryanii.png">
        <div style="font-family: Poppins;">Dum biryani</div>
        
        <div style="display:flex;flex-direction: row;justify-content: space-between;margin:10px 0px;">
            <div style="color:#C9AA05">
              $20
            </div>
            <div>
            <i class="fa-solid fa-circle-plus" style="color:#0E803C"></i>  
            </div>
        </div>

</div>
</div>`); */
const b = document.querySelectorAll(".options");
const prom=document.querySelectorAll(".prom");
const pop=document.getElementById("pop");
const items = document.querySelectorAll(".vertical .opt");

const cir=document.querySelector(".cir")



 
  //  localStorage.setItem("descrip",data[cat][index].descrip.textContent);

    
    /* const cat = item.dataset.target; 
    const  sell=data[cat][index];
    */
   
      // localStorage.setItem("descrip", data[category][index].descrip);
    
 
   /*  const cat = item.dataset.target;

    if (!cat || !data[cat] || !data[cat][index]) {
      console.warn("Invalid category or index:", cat, index);
      return;
    }

    const sell = data[cat][index];
    localStorage.setItem("descrip", sell.descrip || "No description available");
  


 
    // window.location.href = "descrip.html";
  // });
// }); */




b.forEach(btn => {
  btn.addEventListener("click", () => {
    
    
    const category = btn.dataset.target;
    const selected = data[category];
    const sel=imgs[category];
    const tit=popu[category];
    if(!selected && !sel && !tit) return;
 /*    cir.forEach((item,index)=>{
      const img=item.querySelector("img");
      if(selected[index])
      {
        localStorage.setItem("des-img",img);
      }
    //  */
    // });
      prom.forEach((item, index) => {
      const img = item.querySelector("img");
      const h4 = item.querySelector("h4");
     
      if(sel[index]){

      img.src=sel[index].img;
      h4.textContent = sel[index].h4;
     /* 
      h4.style.fontSize="20px";
      h4.style.margin="10px 0px";
      h4.style.fontWeight=" 600";
      p.style.margin="10px 0px"; */
      // item.style.display="block";
      }
      else
      {
        item.style.display="none";
      }
      });
      const pop=document.getElementById("pop");
      const title= pop.querySelector("span");
      if(tit && tit[0]){
      title.textContent = tit[0].title;
      pop.style.display="block";
      }
      else
      {
        pop.style.display="none";
      }
      
     
  
    items.forEach((item, index) => {
      const img = item.querySelector("img");
      const name = item.querySelector("div");
      const pri=item.querySelector("p");
      if(selected[index]){

      img.src=selected[index].img;
      name.textContent = selected[index].name;
      pri.textContent=selected[index].price;
                     
    item.dataset.descrip = selected[index].descrip;   
    item.dataset.name = selected[index].name;
    item.dataset.img = selected[index].img;
    item.dataset.price=selected[index].price;
      item.style.display="block";
        item.addEventListener("click", () => {
          localStorage.setItem("img", item.dataset.img);
          localStorage.setItem("name", item.dataset.name);
          localStorage.setItem("price", item.dataset.price);
          localStorage.setItem("descrip", item.dataset.descrip);
          localStorage.setItem("id",item.dataset.id);
          window.location.href = "descrip.html";
        });
      }
      else
      {
        item.style.display="none";
        item.onclick=null;
      }
    });
  });
});

  let products=[];
 let cartprod=[];

 const init=()=>{
    fetch('items.json').then
    (response => response.json()).then
    (data=>{

    products=data;
   
 })
 }
init();

/* const row = document.querySelector(".row");
category=row.dataset.target;
data.category.forEach(product => {

const post = document.createElement("div");
      post.classList.add("opt");
      post.innerHTML = `
       
        <img src="${product.img}">
        <div style="font-family: Poppins;">${product.name}</div>
        
        <div style="display:flex;flex-direction: row;justify-content: space-between;margin:10px 0px;">
            <p style="color:#C9AA05">
             ${product.price}
            </p>
           
            <i class="fa-solid fa-circle-plus" style="color:#0E803C"></i>  
         
        </div>

</div>
      `;
      row.appendChild(post);

}) */
/*



  const currentProduct = {
    img: localStorage.getItem("img"),
    name: localStorage.getItem("name"),
    price: localStorage.getItem("price"),
    descrip: localStorage.getItem("descrip"),
    id: localStorage.getItem("id"),
  };


  document.querySelector(".detl").src = currentProduct.img;
  document.querySelector(".product-name").textContent = currentProduct.name;
  document.querySelector(".product-price").textContent = currentProduct.price;
  document.querySelector(".product-descrip").textContent = currentProduct.descrip; 

 
  
  document.querySelector(".addtocart").addEventListener("click", () => {
    addTocart(currentProduct);
  });
const cartTab =document.querySelector(".cart-tab");
const cart = document.querySelector(".cart");
const addTocart=(product)=>{ 
  let quantity=1;
  let price=parseFloat(product.price.replace('$',''))
  const existingProd=cartprod.find(item=>item.id==product.id);
  if(existingProd)
  {
    alert('Item already in your cart');
    return;
  }
  cartprod.push(product);
 
  
   const card=document.createElement('div');
        card.classList.add('out');
         card.innerHTML=`<div class="options">
             <img class="product-img"src="${product.img}">
        </div>
        <div class="in">
              <div class="product-name" style="font-family: Poppins;font-weight:600;">${product.name}</div>
        
       
           <p class="product-price" style="color:#C9AA05;font-weight:600">
               ${product.price}
             </p>
            
             <div style="color:#493e97;"><a href="#" class ="quantity-btn minus"
            <i class="fa-solid fa-circle-minus"></i><span class="quantity-value">${quantity}</span><a href="#"  class ="quantity-btn plus"<i class="fa-solid fa-circle-plus" ></i></div>
            
       

        </div>
         <div style="justify-content: flex-end;">
        <i class="fa-solid fa-square-xmark" style="color:#BA3535;font-size: larger;"></i>
 </div>
 `;
cart.appendChild(card) ;
   const plusBtn= card.querySelector(".plus");
   const quantityValue=card.querySelector(".quantity-value");
  const itemTotal= card.querySelector(".itemTotal");
  const minusBtn=card.querySelector(".minus");
   plusBtn.addEventListener('click',(e)=>{
    e.preventDefault();
     quantity++;
     quantityValue.textContent=quantity;
     itemTotal.textContent=`$${(price*quantity).toFixed(2)}`;
   });
   minusBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(quantity>1){
     quantity--;
     quantityValue.textContent=quantity;
     itemTotal.textContent=`$${(price*quantity).toFixed(2)}`;
    }
    else{
      card.remove();
      cartprod=cartprod.filter(item=>item.id!==product.id);
    }
   });
  
  }
 */
document.querySelectorAll(".opt").forEach((opt, index) => {
  opt.addEventListener("click", () => {
    const img = opt.querySelector("img").getAttribute("src");
    const name = opt.querySelector("div").textContent.trim();
    const price = opt.querySelector("p").textContent.trim();
    const descrip = opt.dataset.descrip || "";

   
    const id = name + "-" + index;


    localStorage.setItem("img", img);
    localStorage.setItem("name", name);
    localStorage.setItem("price", price);
    localStorage.setItem("descrip", descrip);
    localStorage.setItem("id", id);

   
    window.location.href = "descrip.html";
  });
});



let cart = JSON.parse(localStorage.getItem("cart")) || [];


if (window.location.pathname.includes("descrip.html")) {
  const currentProduct = {
    img: localStorage.getItem("img"),
    name: localStorage.getItem("name"),
    price: localStorage.getItem("price"),
    descrip: localStorage.getItem("descrip"),
    id: localStorage.getItem("id"),
  };

  if (document.getElementById("detl")) document.getElementById("detl").src = currentProduct.img;
  if (document.getElementById("dename")) document.getElementById("dename").textContent = currentProduct.name;
  if (document.getElementById("price")) document.getElementById("price").textContent = currentProduct.price;
  if (document.getElementById("dText")) document.getElementById("dText").textContent = currentProduct.descrip;

products.forEach(item => {
  const button = document.createElement("button");
  button.textContent = "Add to Cart";

  button.addEventListener("click", () => {
    const product = {
      id: item.id,
      name: item.name,
      price: item.price,
      descrip: item.descrip,
      img: item.img
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart.find(p => p.id === product.id)) {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
  });

  document.querySelector(".menu-list").appendChild(button);
});





document.querySelector(".addtocart").addEventListener("click", () => {
  const product = {
    id: localStorage.getItem("id"),
    name: localStorage.getItem("name"),
    price: localStorage.getItem("price"),
    descrip: localStorage.getItem("descrip"),
    img: localStorage.getItem("img")
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.find(p => p.id === product.id)) {
    cart.push(product);
  }
  else{
    alert("Item already in your cart");
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cart.html";
});



  // Add to cart button
 /*  const addBtn = document.querySelector(".addtocart");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const product = {
  id: item.id,
  name: item.name,
  price: item.price,
  descrip: item.descrip,
  img: item.img
};



// check if already exists
if (!cart.find(p => p.id === product.id)) {
  cart.push(product);
}

// save back
localStorage.setItem("cart", JSON.stringify(cart));

// now go to cart page directly (optional)
window.location.href = "cart.html";
    
    });
  } */
}
 const bal=document.querySelector('.quan')
const itemTotal=document.querySelector(".itemTotal");
const cartTot=document.querySelector(".total");
 const updateTotal=()=>{
  let del=2.50;
  let total=0;
  let totalQuan=0;
  document.querySelectorAll(".out").forEach(item=>{
    const quan=parseInt(item.querySelector(".quantity-value").textContent)
    const pri=parseFloat(item.querySelector(".product-price").textContent.replace('$',''));
     total+=pri;
     totalQuan+=quan;
  });
  if(total==0){

    itemTotal.textContent=`$${total.toFixed(2)}`;
  }
  itemTotal.textContent=`$${total.toFixed(2)}`;
/*   bal.textContent=totalQuan;
  localStorage.setItem("quan", totalQuan) */
  const text= itemTotal.textContent;
 
const num = Number(text.replace('$', ''));
console.log("num",num)
 if (num==0)
  {
       
    cartTot.textContent=`$0.00`;
  }
  else{
    const ti=num+del;
  cartTot.textContent=`$${ti.toFixed(2)}`

  }
;
 }


// localStorage.setItem("cart", JSON.stringify([]));
if (window.location.pathname.includes("cart.html")) {
   
   
  const cartContainer = document.querySelector(".cart");
  const cartItems=document.querySelector(".cart-Items");
  
   const tots=document.querySelector(".tots");
   
  function renderCart() {
    cartItems.innerHTML = "";
   
   if(cart.length==0)

    {
      const cartEmpty=document.querySelector(".emp");
       tots.style.display="none";
      cartEmpty.style.display="block";
     
    }
    else
      { const cartEmpty=document.querySelector(".emp");
         tots.style.display="block";
          cartEmpty.style.display="none";
     
      }  

    cart.forEach(product => {
      let quantity = 1;
      let price = parseFloat(product.price.replace("$", ""));

      const card = document.createElement("div");
      card.classList.add("out");
      card.innerHTML = `
        <div class="options">
          <img class="product-img" src="${product.img}">
        </div>
        <div class="in">
          <div class="product-name" style="font-family: Poppins;font-weight:600;">${product.name}</div>
          <p class="product-price" style="color:#C9AA05;font-weight:600">${product.price}</p>
          <div>
            <a href="#" class="quantity-btn minus"><i class="fa-solid fa-circle-minus"></i></a>
            <span class="quantity-value">${quantity}</span>
            <a href="#" class="quantity-btn plus"><i class="fa-solid fa-circle-plus"></i></a>
          </div>
        </div>
        <div style="justify-content: flex-end;">
          <i class="fa-solid fa-square-xmark remove" style="color:#BA3535;font-size: larger;cursor:pointer;"></i>
        </div>
      `;
      cartItems.appendChild(card);
      
     

      updateTotal();

      const plusBtn = card.querySelector(".plus");
      const minusBtn = card.querySelector(".minus");
      const removeBtn = card.querySelector(".remove");
      const quantityValue = card.querySelector(".quantity-value");
      const prodPrice=card.querySelector(".product-price");
     
      plusBtn.addEventListener("click", e => {
        e.preventDefault();
        quantity++;
        quantityValue.textContent = quantity;
        
         prodPrice.textContent=`$${(price*quantity).toFixed(2)}`;
          updateTotal();
      });

      minusBtn.addEventListener("click", e => {
        e.preventDefault();
        if (quantity > 1) {
          quantity--;
          quantityValue.textContent = quantity;
           
           prodPrice.textContent=`$${(price*quantity).toFixed(2)}`;
                     
         updateTotal();
         
        } else {
          card.remove();
          cart = cart.filter(item => item.id !== product.id);
          
          localStorage.setItem("cart", JSON.stringify(cart));
          updateTotal();
           renderCart();
        }
      });

      removeBtn.addEventListener("click", () => {
        card.remove();
        cart = cart.filter(item => item.id !== product.id);
        
        localStorage.setItem("cart", JSON.stringify(cart));
        updateTotal();
       renderCart();
      });
    });
  }

  renderCart();
  
     
}
const foot=document.querySelectorAll(".ficon");
  foot.forEach(button=>
  {button.addEventListener("click",function(){
    
     button.style.color="#462B96";
   
    });
 
  
  });



let cursor = document.getElementById("cursor");
let logo = document.getElementById("logo");
let slider = document.getElementById("slider");
let filterBtn = document.querySelectorAll(".filter-btn");
let productContainer = document.querySelector("#filterable");
let filterableCard = document.querySelectorAll(".card");
let cartIcon = document.querySelector("#card-icon");
let innerCartIcon = document.querySelector("#cart-icon")
let cartPage = document.querySelector("#cart-inner")
let cartClose = document.querySelector("#cart-close-btn")

// CURSOR
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x - 80 + "px";
  cursor.style.top = dets.y - 80 + "px";
});

// NAVBAR
function navAnimation() {
  gsap.from(".left-nav", {
    opacity: 0,
    delay: 0.5,
  });
  gsap.from(".right-nav", {
    opacity: 0,
    delay: 0.5,
  });
}
navAnimation();

// CART_OPEN
    innerCartIcon.addEventListener("click",function(){
        gsap.to("#cart-inner",{
            right:0,
            display:"block",
            delay:0.1,
            duration:0.5,
            ease:"power1.inOut"
        })
    })
// CART_CLOSE   
    cartClose.addEventListener("click",function(){
        gsap.to("#cart-inner",{
            right:"-100%",
            display:"none",
            delay:0.1,
            duration:0.5,
            ease:"power1.inOut"
        })
    })


// MAIN_LOGIC

let bagItems = [];
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayProducts();
  displayBagIcon();
}

// ADDTOBAG

function addToBag(productId) {
  bagItems.push(productId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector("#cart-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.display = "flex";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.display = "none";
  }
}

// GENERATE_PRODUCTS

function displayProducts() {
  let innerHtml = "";
  products.forEach((product) => {
    innerHtml += ` 
    <div class="card ${product.data_name}" data-name="${product.data_name}" data-id="${product.id}">
     <div class="card-img">
       <img src="${product.product_img}" alt="">
     </div>
     <div class="card-content">
      <h3>
        ${product.product_name}
        <i id="card-icon" onclick="addToBag(${product.id})" class="ri-shopping-cart-line cart"></i>
      </h3>
      <span>${product.product_price}</span>
     </div>
    </div>`;
  });
  productContainer.innerHTML = innerHtml;
}

import {basket,removeFromBasket} from '../data/basket.js';
import {products} from '../data/products.js';
import {formatMoney} from './assets/money.js';
import { customerService } from './assets/general.js';
import { viewTotal } from './basketWorkout.js';
//Generating the html

let basketHtml = '';

basket.forEach((basketItem) => {
  
  const productId = basketItem.productId;

  let sameProduct;
  products.forEach((product) =>{
      if(product.id === productId){
        sameProduct = product;
      }
  });

  basketHtml += `
  <div class="cart-item-container 
  js-basket-item-container-${sameProduct.id}">
    <div class="delivery-date">
      Delivery date: Tommorow
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${sameProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${sameProduct.name}
        </div>
        <div class="product-price">
          £${formatMoney(sameProduct.pricePennies)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${basketItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${sameProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Delivery Date: 
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${sameProduct.id}">
          <div>
            <div class="delivery-option-date">
                3 Days
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

`;
});



document.querySelector('.js-order-summary-page').innerHTML = basketHtml;

document.querySelectorAll('.js-delete-link').forEach(link =>{

    link.addEventListener('click', ()=>{

      const productId = link.dataset.productId;
      removeFromBasket(productId);
      console.log(basket);

      const container = document.querySelector(`.js-basket-item-container-${productId}`);
      container.remove();
    });


});

document.querySelector('.js-place-order').addEventListener('click', ()=>{

  

})



customerService();

viewTotal();

export let inBasket = false;
document.querySelector('.js-place-order').addEventListener('click', ()=>{
      // I dont know what thats for
      for(let i=0; i<basket.length- 1; i++){
          
      }
      window.location.href = "orderPage.html";
    
});
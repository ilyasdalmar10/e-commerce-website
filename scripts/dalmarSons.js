import { basket, addToBasket } from '../data/basket.js';
import{products} from '../data/products.js';
import{formatMoney} from '../scripts/assets/money.js';

let productsHtml = '';

products.forEach((product) =>{
    productsHtml += `
        <div class="product-container">
            <div class="product-image-container">
                    <img class="product-image"
                        src="${product.image}">
                </div>

             <div class="product-name limit-text-to-2-lines">
                    ${product.name}
              </div>

             <div class="product-rating-container">
                <img class="product-rating-stars"
                 src="images/icons/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div> 

            <div class="product-price">
                 £${formatMoney(product.pricePennies)}
             </div>

            <div class="product-quantity-container">
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
             </div>

             <div class="product-spacer"></div>

                <div class="added-to-basket">
                     <img src="images/icons/basket-icon.PNG">
                            Added
                </div>

             <button class="add-to-basket-button button-primary      js-add-to-basket"
                data-product-id="${product.id}">
                     Add to Basket
            </button>
         </div>
    `
});

document.querySelector('.js-products-grid').innerHTML = productsHtml;

function updateBasketQuantity(){
    let basketQuantity = 0;
      
    basket.forEach((basketItem) =>{
        basketQuantity += basketItem.quantity;
    });
    document.querySelector('.js-basket-num-container').innerHTML = basketQuantity;
    localStorage.setItem('basketQuantity', JSON.stringify(basketQuantity));
};




document.querySelectorAll('.js-add-to-basket')
    .forEach((button) =>{
         button.addEventListener('click', () =>{
             const productId = button.dataset.productId;
             addToBasket(productId);
             updateBasketQuantity();
    
        });
    });

console.log(basket);

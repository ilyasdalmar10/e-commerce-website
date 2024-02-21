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

                <div class="added-to-cart">
                     <img src="images/icons/basket-icon.PNG">
                            Added
                </div>

             <button class="add-to-cart-button button-primary      js-add-to-cart"
                data-product-id="${product.id}">
                     Add to Cart
            </button>
         </div>
    `
});

document.querySelector('.js-products-grid').innerHTML = productsHtml;


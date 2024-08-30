import { basket, addToBasket } from '../data/basket.js';
import{products} from '../data/products.js';
import{formatMoney} from '../scripts/assets/money.js';
import { customerService } from './assets/general.js';
// import { correctUserName,isSignedIn,changeHtmlUserName } from './singIn.js';

let productsHtml = '';


products.forEach((product) =>{
    productsHtml += `
        <div class="product-container">
            <div class="product-image-container">
                    <a class="js-item-click" data-product-id="${product.id}" href="#"><img class="product-image"
                        src="${product.image}"></a>
                </div>
            
             <div class="product-name limit-text-to-2-lines">
                <a class="js-item-click" data-product-id="${product.id}" href="#">  
                ${product.name}
                </a>
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

           

             <div class="product-spacer"></div>

                <div class="added-to-basket">
                     <img src="images/icons/basket-icon.PNG">
                            Added
                </div>

             <button class="add-to-basket-button button-primary      js-add-to-basket"
                data-product-id="${product.id}">
                     Add to Basket
            </button>
            <button class="buy-now-button js-buy-now" data-product-id="${product.id}"> 
                    Buy now
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
    localStorage.setItem('basketQuantity', JSON.stringify(basketQuantity));
    const retrieveQuantity = JSON.parse(localStorage.getItem('basketQuantity')); 
    document.querySelector('.js-basket-num-container').innerHTML = retrieveQuantity;
   return retrieveQuantity;
};
updateBasketQuantity();


document.querySelectorAll('.js-add-to-basket')
    .forEach((button) =>{
         button.addEventListener('click', () =>{
            
             const productId = button.dataset.productId;
             addToBasket(productId);
             updateBasketQuantity();
    
        });
    });
  
  
    let newHtml = '';
    
   function displayItem(product){
  
    newHtml = `
      <div class="overrall-container">
      <div class="product-details">
          <div class="name-container">
            ${product.name}
          </div>
          <div class="image-product-container">
            <img src="${product.image}" class="
            image-product">
          </div>
          
      </div>
      <div class="description-product"> 
        <div class="price-container"><h2>£${formatMoney(product.pricePennies)}</h2></div>
        <div><p>${product.description}</p><div>
        <div class="rating-product-container">
            <img class="rating-product" src="images/icons/ratings/rating-${product.rating.stars * 10}.png">
            <div class="rating-count-product">
                ${product.rating.count}
            </div>
          </div>
      
      </div>
      <div class="comment-container">
        <div class="comment-title">Comments:</div>
        <div class="comment-inner">
          <textarea id="subject-comment" placeholder="Submit your review...." data-product-id="${product.id}"></textarea>
          
          <button class="js-comment-submit" data-product-id="${product.id}">Submit</button>
        </div>
      </div>
      <div class="container-comments-submitted">
        
      </div>

      </div>
      
    `;
    return newHtml;

  } 
    
    document.querySelectorAll('.js-item-click').forEach(link =>{
      
      link.addEventListener('click', ()=>{
          const productId = link.dataset.productId;
          
          const specificProduct = products.find(obj => obj.id === productId);
          
          displayItem(specificProduct);
          document.querySelector('.main').innerHTML = newHtml;
          
         
      })
    });
      

    customerService();
    
   /* if(isSignedIn){
      changeHtmlUserName(correctUserName);
    }*/
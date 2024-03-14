import { basket } from "../data/basket.js";
import { products } from "../data/products.js";
import {formatMoney} from "./assets/money.js";

export function viewTotal(){
    let totalItemPrice = 0;
    
    basket.forEach(basketItem => {
        const productId = basketItem.productId;
        let sameProduct;
        products.forEach(product =>{
            if (product.id === productId){
                sameProduct = product;
            }
        });
        totalItemPrice += sameProduct.pricePennies;
        
    });
    console.log(formatMoney(totalItemPrice));
    document.querySelector('.payment-summary-money').innerHTML = formatMoney(totalItemPrice);
}
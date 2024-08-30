import { basket } from "../data/basket";
import { saveToStorage } from "../data/basket";

export let orderContainer = JSON.parse(localStorage.getItem('orderContainer'));


function saveOrderStorage(){
    localStorage.setItem('orderContainer', JSON.stringify(orderContainer));
}
orderContainer = [{},{}];

const orderFrom = document.querySelector('.order-container');

document.querySelector('.confirming').addEventListener('click', ()=>{
    orderFrom.addEventListener('submit', (event)=>{
        let isFormComplete = true;

        const Fieldform = orderFrom.querySelectorAll('input, select');
        Fieldform.forEach(function(field) {
          
          if (field.required && field.value.trim() === '') {
            isFormValid = false;
            
          }
        });
    });
    if(isFormComplete){
    
        orderContainer.push(basket);
        basket.remove();
        saveToStorage();
        saveOrderStorage();
    }

})
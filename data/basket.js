
export let basket = JSON.parse(localStorage.getItem('basket'));

if(!basket) {
  basket = [{
    productId : 'v2c1987d-936d-4d0c-944b-5c6a1835ebc2',
    quantity: 2,
    deliveryChoiceId : '1'
  },
  {
    productId : 't2y3u4i5o6p7l8k9j0h1g2f3d4s5a6q7w8e9r0t',
    quantity: 1,
    deliveryChoiceId : '2'

  }];
}

export function saveToStorage(){
  localStorage.setItem('basket', JSON.stringify(basket));
}

// This function adds to the basket by first checking if an existing item is in the basket if so increments the quantity otherwise adds the item to the basket.//


export function addToBasket(productId){
  let sameItem;
  basket.forEach((basketItem) => {
    if(productId === basketItem.productId)
    {
      sameItem = basketItem;
    }
  });

  if(sameItem){
    sameItem.quantity += 1;
  }else{
    basket.push({
      productId : productId,
      quantity : 1,
      deliveryChoiceId : '1'
    });
  }
  saveToStorage();
};

//This functions allows me to pop the item from the basket//
export function removeFromBasket(productId){
  
  const newBasket = [];
  
  basket.forEach(basketItem =>{ 
    if(basketItem.productId !== productId){
      newBasket.push(basketItem);
    }
  });

  basket = newBasket; 

  saveToStorage();
  
}
/*
export function updatedeliveryChoice(productId,deliveryChoiceId){
  let sameItem;
  basket.forEach((basketItem) =>{
    if(productId === basketItem.productId){
      sameItem = basketItem;
    }
  });
  sameItem.deliveryChoiceId = deliveryChoiceId;

  saveToStorage();
}
*/

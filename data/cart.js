// basically cart jo bhi add hoga wo 1 array of objects hoga
export const cart = [];

export function addToCart(productId) {
    //check if productName is already in the cart
    let matchingItem;
    cart.forEach((cartItem) =>{
     if(productId===cartItem.productId) {
         matchingItem = cartItem;
     }
    });
    // if already present just increase the quantity
    if(matchingItem) {
     matchingItem.quantity++;
    }
    // else add that item as an object in the cart array
    else {
     cart.push({
         productId,
         quantity: 1
        });
    }
};
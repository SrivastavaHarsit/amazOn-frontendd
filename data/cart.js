// basically cart jo bhi add hoga wo 1 array of objects hoga
export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
},
{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];

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
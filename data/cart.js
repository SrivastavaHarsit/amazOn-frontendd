// basically cart jo bhi add hoga wo 1 array of objects hoga
//localStorage me string me hoga store toh usko apna array of objects banane ke liyte JSON.parse() use kar rhe apan
export let cart = JSON.parse(localStorage.getItem('cart'));

//agar localStorage me kuch ni hai toh default value
if(!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '1'
    }];
    
}

function saveToStorage() {
    //localStorage only stores string and localStorage.setItem('name', data)
    localStorage.setItem('cart', JSON.stringify(cart));
}

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
         quantity: 1,
         deliveryOptionId: '1' //default is free wala delivery option
        });
    }
    saveToStorage();
};

export function removeFromCart(productId) {
    const newCart = cart.reduce((acc, curr) => {
        if(curr.productId !== productId) {
            acc.push(curr);
        }
        return acc;
    }, []);

    cart = newCart;
    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    cart.forEach((cartItem) =>{
     if(productId===cartItem.productId) {
         matchingItem = cartItem;
     }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}
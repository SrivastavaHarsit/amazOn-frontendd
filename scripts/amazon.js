//we want to render products as HTML for that we are using js
// the products data is in data/products.js
// const products = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4.5,
//         count: 87
//     },
//     priceCents: 1090
// }, 
// {
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating: {
//         stars: 4,
//         count: 127
//     },
//     priceCents: 2095
// },
// {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//         stars: 4.5,
//         count: 56
//     },
//     priceCents: 799
// },
// {
//     image: 'https://supersimple.dev/projects/amazon/images/products/black-2-slot-toaster.jpg',
//     name: '2 Slot Toaster - Black',
//     rating: {
//         stars: 5,
//         count: 2197
//     },
//     priceCents: 1899
// }];

import { cart } from '../data/cart.js';
//loop through array and render HTML
let productsHTML = ``;
products.forEach((product) => {
    productsHTML += `
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
                    src="images/ratings/rating-${product.rating.stars*10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                 <!-- will show till 2 decimal place -->
                $${(product.priceCents /100).toFixed(2)}
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
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;
});

// console.log(productsHTML);

// Now we will render this whole HTML string to page using DOM
document.querySelector('.js-products-grid').
innerHTML = productsHTML;

// saare add to cart button par event listner lagayenge
document.querySelectorAll('.js-add-to-cart')
.forEach((button) =>{
    button.addEventListener('click', () => {
        // .dataset gives/fetches all data attributes of the HTML element (note that in html i was storing product-name as a data attribute but to retrieve it we are using camelCase notation)
       const productId = button.dataset.productId;

       //check if productName is already in the cart
       let matchingItem;
       cart.forEach((item) =>{
        if(productId===item.productId) {
            matchingItem = item;
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
           })
       }
       let cartQuantity = 0;
       cart.forEach((item) =>{
        cartQuantity += item.quantity;
       });

       document.querySelector('.js-cart-quantity')
       .innerHTML = cartQuantity;
    });
});
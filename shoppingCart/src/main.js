import createItem from './services/item.js';
import * as cartService from './services/cart.js';

const myCart = [];
const wishList = [];

console.log("Welcome to your shopping cart.");
console.log(`----------------------------------------------------------------------`);

const item1 = await createItem("Apple", 29.99, 1);
const item2 = await createItem("Banana", 1.0, 3);
const item3 = await createItem("Orange", 0.5, 1);
const item4 = await createItem("Grape", 2.0, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

//await cartService.deleteItem(myCart, 1);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.updateItem(myCart, item2);

await cartService.displayCart(myCart);

console.log(`----------------------------------------------------------------------`);
console.log(`Cart total: $${(await cartService.calculateTotal(myCart)).toFixed(2)}`);
//console.log(`Wish list total: $${(await cartService.calculateTotal(wishList)).toFixed(2)}`);
console.log(`----------------------------------------------------------------------`);
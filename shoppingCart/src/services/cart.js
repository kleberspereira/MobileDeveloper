async function addItem(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.Subtotal(), 0);
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex(p => p.Name === item.Name);
    if (indexFound == -1) {
        console.log(`Item ${item.Name} not found in the cart.`);
        return;
    }
    if(userCart[indexFound].Quantity > 1) {
        userCart[indexFound].Quantity -= 1;
        return;
    }
    if(userCart[indexFound].Quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function updateItem(userCart, item) {
    const indexFound = userCart.findIndex(p => p.Name === item.Name);
    if (indexFound == -1) {
        console.log(`Item ${item.Name} not found in the cart.`);
        return;
    }
    if(userCart[indexFound].Quantity >= 1) {
        userCart[indexFound].Quantity += 1;
        return;
    }
}


async function deleteItem(userCart, index) {
    const deletedIndex = index - 1; // Adjust for zero-based index
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deletedIndex, 1);
    }
}

async function displayCart(userCart) {
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.Name}: $${item.Price.toFixed(2)} x ${item.Quantity} = $${item.Subtotal().toFixed(2)}`);
    });
}

export { addItem, calculateTotal, deleteItem, removeItem, updateItem, displayCart };
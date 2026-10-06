async function createItem(Name, Price, Quantity) {
    return {
        Name: Name,
        Price: Price,
        Quantity: Quantity,
        Subtotal: () => Price * Quantity
    } 
}

export default createItem;
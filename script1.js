// Initialize subtotal
let subtotal = 0;

// Function to add an item to the cart
function addToCart(price, itemName) {
    // Add the item price to the subtotal
    subtotal += price;

    // Update the subtotal display
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);

    // Add the item to the cart list
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.innerText = `${itemName}: $${price.toFixed(2)}`;
    cartItems.appendChild(listItem);
}

// Function to reset the cart (optional)
function resetCart() {
    subtotal = 0;
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('cart-items').innerHTML = '';
}

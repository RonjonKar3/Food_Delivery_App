let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(foodName, price) {
    let existingItem = cart.find(item => item.name === foodName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: foodName, price: price, quantity: 1 });
    }
    updateCart();
    saveCart();
}

function changeQuantity(index, amount) {
    if (cart[index]) {
        cart[index].quantity += amount;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1); // Remove item if quantity goes to zero
        }
    }
    updateCart();
    saveCart();
}

function updateCart() {
    let cartItemsElement = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        let listItem = document.createElement('li');
        
        listItem.innerHTML = `
            ${item.name} = ${item.quantity} x $${item.price} = $${(item.price * item.quantity).toFixed(2)}
            <button onclick="changeQuantity(${index}, 1)">➕</button>
            <button onclick="changeQuantity(${index}, -1)">➖</button>
        `;

        cartItemsElement.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart on page load
document.addEventListener('DOMContentLoaded', updateCart);

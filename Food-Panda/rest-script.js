let cart = [];

function addToCart(foodName, price) {
    cart.push({ name: foodName, price: price });
    updateCart();
}

function updateCart() {
    let cartItemsElement = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function toggleCartStatus() {
    
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');

    if (cartWrapper.children.length > 0) {
        cartEmpty.classList.add('hide');
        orderForm.classList.remove('hide');
    } else {
        cartEmpty.classList.remove('hide');
        orderForm.classList.add('hide');
    }
}
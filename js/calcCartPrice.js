const element = document.querySelector('.cart__btn');
const cart = document.querySelector('.cart')
element.addEventListener('click', function(){
	cart.classList.toggle('hide');
})


function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPrice = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');
	const cartBtn = document.querySelector('.cart__btn-price');

	let priceTotal = 0;
	let deliveryCostPrice = 0;

	priceElements.forEach(function (item) {
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	if (priceTotal > 0) {
		cartDelivery.classList.remove('hide');
	} else {
		cartDelivery.classList.add('hide');
	}

	if (priceTotal >= 3000) {
		deliveryCost.innerText = 'бесплатно';
		deliveryCostPrice = 0;
	} else {
		deliveryCost.innerText = '450 ₽';
		deliveryCostPrice = 450;
	}

	totalPrice.innerText = priceTotal + deliveryCostPrice;// Отображение итоговой стоимости с учетом доставки
	cartBtn.innerHTML = priceTotal; //Отображение итоговой стоимости на кнопке корзины

}
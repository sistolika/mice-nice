const productsContainer = document.querySelector('#products-container');

getProducts();

async function getProducts() {
  const response = await fetch('../json/db.json');
  const productsArray = await response.json();
  renderProducts(productsArray);
}

function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    const productHTML = `<div class="catalog__items">
						<div class="card" data-id="${item.id}">
							<img class="product-img" src="${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p class="product__info">${item.info}</p>

								<div class="price">
										<div class="price__currency">${item.price} ₽</div>
									</div>

									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>

								<button data-cart type="button" class="btn catalog__btn">
									в корзину
								</button>
							</div>
						</div>
					</div>`;
    productsContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}

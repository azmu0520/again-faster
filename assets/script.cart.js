class Cart {
  async fetchAPI(api, formData) {
    const response = await fetch(`/cart/${api}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  }
  addItem(formData) {
    return this.fetchAPI('add.js', formData);
  }
  renderCartItems(cartDetails) {
    const cartItemsWrapper = document.querySelector('.side-cart__items');
    cartItemsWrapper.innerHTML = '';
    for (let item of cartDetails.items) {
      const template = `
            <div class="side-cart__item">
                <div class="item__image-wrapper">
                    <img class="item__image" src="${item.image}" alt="" />
                </div>
                <div class="item__details">
                    <p class="h2 heading">${item.title}</p>
                    <p class="h3 heading">${this.formatter.format(
                      item.price / 100
                    )}</p>
                    <p class="h4 heading">REMOVE</p>
                </div>
            </div>
        `;
      cartItemsWrapper.insertAdjacentHTML('beforeend', template);
    }
    const sideCartTotalPrice = document.querySelector(
      '.side-cart__total-price'
    );
    sideCartTotalPrice.textContent =
      'Subtotal ' + this.formatter.format(cartDetails.total_price / 100);
    const sideCartItemCart = document.querySelector('.side-cart__item-cart');
    sideCartItemCart.textContent = '(' + cartDetails.item_count + ')';
  }
}

const sideCart = new Cart();

let head = document.querySelector('.modal--header');

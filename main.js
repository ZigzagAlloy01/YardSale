const barraEmail = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const cardIcon = document.querySelector('.cards-container');
const xIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideOne = document.querySelector('#tarjetaChica');
const asideTwo = document.querySelector('#tarjetaDetallada');
const cardsContainer = document.querySelector('.cards-container');
const backgroundDarkening = document.querySelector('.darken');
const productsList = [];

function toggleBurgerMenu() {
    mobileMenu.classList.toggle('inactive');
    backgroundDarkening.classList.toggle('inactive');
    asideOne.classList.add('inactive');
    asideTwo.classList.add('inactive');
    if (mobileMenu.classList.contains('inactive')) {
        backgroundDarkening.classList.add('inactive');
    }
}
function toggleCarritoMenu() {
    asideOne.classList.toggle('inactive');
    backgroundDarkening.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideTwo.classList.add('inactive');
    if (asideOne.classList.contains('inactive')) {
        backgroundDarkening.classList.add('inactive');
    }
}
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    backgroundDarkening.classList.toggle('inactive');
    asideOne.classList.add('inactive');
    asideTwo.classList.add('inactive');
    if (desktopMenu.classList.contains('inactive')) {
        backgroundDarkening.classList.add('inactive');
    }
}
function toggleTarjetaDetallada() {
    asideTwo.classList.toggle('inactive');
    backgroundDarkening.classList.toggle('inactive');
    asideOne.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    if (asideTwo.classList.contains('inactive')) {
        backgroundDarkening.classList.add('inactive');
    }
}
function toggleTarjetaDetalladaDos() {
    asideTwo.classList.toggle('inactive');
    backgroundDarkening.classList.add('inactive');
}
function toggleDarken() {
    backgroundDarkening.classList.toggle('inactive');
}
function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const divCardOne = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    

        const productInfoFigure = document.createElement('figure');
        const productFigure = document.createElement('img');
        productFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

        divCardOne.appendChild(productPrice);
        divCardOne.appendChild(productName);
        productInfoFigure.appendChild(productFigure);
        productInfo.appendChild(divCardOne);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productInfo);
        productCard.appendChild(productImage);
        cardsContainer.appendChild(productCard);
    }
}

productsList.push({
    name: 'Bike',
    price: 820,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
    name: 'Les Miserables',
    price: 320,
    image: 'https://www.elejandria.com/covers/Los_Miserables-Hugo_Victor-lg.png',
});
productsList.push({
    name: 'Mouse HP',
    price: 520,
    image: 'https://fichashppervasive.blob.core.windows.net/imagenes/Mouse_HP_100_Wired_5_6VY96AA.png',
});

renderProducts(productsList);

barraEmail.addEventListener('click', toggleDesktopMenu);
carritoIcon.addEventListener('click', toggleCarritoMenu);
burgerIcon.addEventListener('click', toggleBurgerMenu);
cardIcon.addEventListener('click', toggleTarjetaDetallada);
xIcon.addEventListener('click', toggleTarjetaDetalladaDos);
backgroundDarkening.addEventListener('click', toggleDarken);

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>

function toggleBackgroundDarkeningOne() {
    desktopMenu.classList.toggle('inactive');
    backgroundDarkening.classList.toggle('inactive');
    asideOne.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
function toggleBackgroundDarkeningTwo() {
    asideOne.classList.toggle('inactive');
    backgroundDarkening.classList.toggle('inactive');
    asideTwo.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
function toggleBackgroundDarkeningThree() {
    mobileMenu.classList.toggle('inactive');
    backgroundDarkening.classList.toggle('inactive');
    asideOne.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

barraEmail.addEventListener('click', toggleDesktopMenu);
barraEmail.addEventListener('click', toggleBackgroundDarkeningOne);
carritoIcon.addEventListener('click', toggleCarritoMenu);
carritoIcon.addEventListener('click', toggleBackgroundDarkeningTwo);
burgerIcon.addEventListener('click', toggleBurgerMenu);
burgerIcon.addEventListener('click', toggleBackgroundDarkeningThree);


*/
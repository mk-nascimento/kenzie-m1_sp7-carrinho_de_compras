const productsCart = [
	{
		id: 1,
		name: 'Uva Crimson',
		price: 44.99
	}, {
		id: 2,
		name: 'Vinho Canção',
		price: 17.98
	}, {
		id: 3,
		name: 'Água de coco',
		price: 8.99
	},
	{
		id: 4,
		name: 'Mamão',
		price: 9.98
	},
	{
		id: 5,
		name: 'Água Tônica',
		price: 17.98
	}
];

// sum products
function sum(products) {
	let sumProductsList = 0;
	for (let sum = 0; sum < products.length; sum++) { sumProductsList += products[sum].price };
	let s = sumProductsList.toString().length
	return `R$ ${sumProductsList.toString().substring(0, s - 3)},${sumProductsList.toString().substr(-2)}`
};

// tags
const body = document.body;
const header = document.createElement('header');
const main = document.createElement('main');
const productList = document.createElement('ul');
const productDescription = document.createElement('div');
const item = document.createElement('span');
const priceItem = document.createElement('span');
const productsDetails = document.createElement('section');
const sumProducts = document.createElement('div');
const total = document.createElement('span');
const price = document.createElement('span');
const buttonEnd = document.createElement('button');

// appendChild-
body.appendChild(header);
header.insertAdjacentHTML('afterbegin', '<h1>Virtual Market</h1>');
body.appendChild(main);
main.appendChild(productDescription);
main.appendChild(productList);
main.appendChild(productsDetails);
productDescription.appendChild(item);
productDescription.appendChild(priceItem);
sumProducts.appendChild(total);
sumProducts.appendChild(price);
productsDetails.appendChild(sumProducts)
productsDetails.appendChild(buttonEnd);

// class
header.classList.add('header');
main.classList.add('main');
productList.classList.add('cart');
productDescription.classList.add('description-cart');
item.classList.add('item');
priceItem.classList.add('price-item');
productsDetails.classList.add('end-cart');
sumProducts.classList.add('total-area');
total.classList.add('total');
price.classList.add('total-price');


// insert elements
item.innerText = 'Item';
priceItem.innerText = 'Valor';
total.innerText = 'Total';
price.innerText = sum(productsCart);

// fill list itens
function fillLi(liItems) {
	for (let li = 0; li < liItems.length; li++) {
		let elementList = document.createElement('li');
		let product = document.createElement('span');
		let priceProduct = document.createElement('span');
		let priceForProduct = (liItems[li].price).toString();

		elementList.classList.add('cart-item');
		product.classList.add('product');
		priceProduct.classList.add('priceProduct');

		product.innerText = liItems[li].name;
		let t = `R$ ${priceForProduct.substring(0, priceForProduct.length - 3)},${priceForProduct.substr(-2)}`
		priceProduct.innerText = t;

		elementList.appendChild(product);
		elementList.appendChild(priceProduct);
		productList.appendChild(elementList);
	};

	return;
};
fillLi(productsCart);
buttonEnd.innerText = 'Finalizar Compra';
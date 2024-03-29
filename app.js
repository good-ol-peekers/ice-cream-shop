const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
},  {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

// const toppings = [{
//     name: 'Sprinkles',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
//     price: 1
// }, {
//     name: 'Chocolate Chips',
//     image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
//     price: 2
// }]

// const containers = [{
//     name: 'Waffle Cone',
//     image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
//     price: 2
// }, {
//     name: 'Waffle Bowl',
//     image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
//     price: 4
// }]
function drawStore() {

    let storeElem = document.getElementById('product-cards')
    let template = ''

    for (let i = 0; i < iceCream.length; i++) {
        const product = iceCream[i];
        template += `           <div class="col-5 card card-body">
                                <div>
                                    <h1 >ice cream flavors</h1>
                                    <div class"card">
                                    <img src="${product.image}" alt="">
                                    </div>
                                    <h3>${product.name}</h3>
                                    <h3>$${product.price}</h3>
                                    <div class"btn btn-secondary btn btn-outline">buy now</div>
                                </div>
                                </div>`
    }
storeElem.innerHTML = template
console.log('drawStore')
}
drawStore()
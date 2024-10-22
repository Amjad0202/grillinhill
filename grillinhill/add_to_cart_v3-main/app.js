let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">Rs.${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    })
const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">Rs.${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    // get data product
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();

const menuItems = [
    {
      id: 1,
      name: "Pizza",
      price: 2250,
      image: "image/i1.png"
    },
    {
      id: 2,
      name: "Pasta",
      price: 925,
      image: "image/i2.png"
    },
    {
      id: 3,
      name: "Avocado Toast",
      price: 350,
      image: "image/i3.png"
    },
    {
      id: 4,
      name: "Sushi Burritos",
      price: 575,
      image: "image/i4.png"
    },
    {
      id: 5,
      name: "Acai Bowls",
      price: 1250,
      image: "image/i5.png"
    },
    {
      id: 6,
      name: "Laksa",
      price: 1300,
      image: "image/i7.png"
    },
    {
      id: 7,
      name: "Tacos",
      price: 550,
      image: "image/i8.png"
    },
    {
      id: 8,
      name: "Burgers",
      price: 850,
      image: "image/i9.png"
    },
    {
      id: 9,
      name: "Fries",
      price: 400,
      image: "image/i10.png"
    },
    {
      id: 10,
      name: "Quinoa Bowls",
      price: 1100,
      image: "image/i6.png"
    },
    {
      id: 11,
      name: "Coffee",
      price: 120,
      image: "image/d1.png"
    },
    {
      id: 12,
      name: "Matcha Lattes",
      price: 640,
      image: "image/d2.png"
    },
    {
      id: 13,
      name: "Kombucha",
      price: 480,
      image: "image/d3.png"
    },
    {
      id: 14,
      name: "Smoothies",
      price: 750,
      image: "image/d4.png"
    },
    {
      id: 15,
      name: "Fruit Infused Water",
      price: 700,
      image: "image/d5.png"
    },
    {
      id: 16,
      name: "Coconut Water",
      price: 350,
      image: "image/d6.png"
    },
    {
      id: 17,
      name: "Teas",
      price: 240,
      image: "image/d7.png"
    },
    {
      id: 18,
      name: "Vegetable Juices",
      price: 220,
      image: "image/d8.png"
    },
    {
      id: 19,
      name: "Sparkling Water",
      price: 220,
      image: "image/d9.png"
    },
    {
      id: 20,
      name: "Milk",
      price: 180,
      image: "image/d10.png"
    }
  ];
  
  
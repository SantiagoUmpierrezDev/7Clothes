let cart = JSON.parse(localStorage.getItem("cart")) || [];
let store = document.getElementById("store");


async function fetchItems() {
    const response = await fetch('src/products.json')
    return await response.json()
}

let items = []

fetchItems().then(products => {
    items = products
    renderProducts()
})

function renderProducts() {
    for (product of items) {
        const { id, name, price, img, alt} = product 
        const article = document.createElement("article")
        article.className = "store__article"
        article.id = `cart__${id}`
        article.innerHTML = `
            <img
            class="article__img"
            src=${img}
            alt=${alt}
        />
        <div class="productInformation">
            <div class="article__div">
                <p class="article__paragraph">${name}</p>
                <p class="price__paragraph">$ ${price}</p>
            </div>
            <div class="store__div">
            <button id="addToCartBtn" class="cart__add" onClick="addToCart(${id})">Add to cart</button>
            </div>
            </div>
            `
            store.append(article)
    }
}

renderProducts()


let addToCart = (id) => {
    let search = items.find(i => i.id === id);

    if (cart.find(i => i.id === id)) {
        const item = cart.find(x => x.id == id)
        item.amount++
    } else {
        cart.push({
            ...search, 
            amount: 1
        })
    }
    addedToCartNoti(`${search.name} added to cart`)
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addedToCartNoti(prodName) {
    Toastify({
        text: prodName,
        destination: '../pages/cart.html',
        duration: 2500,
        stopOnFocus: true,
        className: "toast",
        style: {
            background: "#CAF0F8",
            color: "#03045E"
            
          }
    }).showToast()
}


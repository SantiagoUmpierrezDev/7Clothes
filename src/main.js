let cart = JSON.parse(localStorage.getItem("cart")) || [];
let store = document.getElementById("store");


async function fetchProductos() {
    const response = await fetch('src/products.json')
    return await response.json()
}

let items = []

fetchProductos().then(products => {
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

    localStorage.setItem("cart", JSON.stringify(cart));
}


    


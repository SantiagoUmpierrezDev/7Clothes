let cart = JSON.parse(localStorage.getItem("cart")) || [];
let store = document.getElementById("store");

     let generateCards = () => {
        return (store.innerHTML = clothesData.map((i) => {
            let {id,name,price,img,alt} = i;
            let search = cart.find ((i) => i.id === id) || []
            return `<article id="cart__${id}" class="store__article">
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
                    <button class="cart__add" onClick="addToCart(${id})">Add to cart</button>
                </div>
            </div>
            </article>`
        }) 
        .join(""));
    };   
    
    generateCards();

const add = document.querySelectorAll(".article__button")

add.forEach(element => {
    element.addEventListener('click', function() {
        const clickedItem = (element.parentElement).parentElement;
        const clickedItemId = clickedItem.id.charAt(6);
        cart.push(clothesData[clickedItemId])
        generateCardsinCart()
    });
});

let addToCart = (id) => {
    let selectedItem = id;
    let search = cart.find((i) => i.id === selectedItem);
    if (search === undefined) {
        cart.push({
        id: selectedItem,
        amount: 1,
    });
    } else {
        search.amount += 1;
    }    

    localStorage.setItem("cart", JSON.stringify(cart));
}



    


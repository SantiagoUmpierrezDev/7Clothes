let cart = []; 
let store = document.getElementById("store");

     let generateCards = () => {
        return (store.innerHTML = clothesData.map((i) => {
            let {id,name,price,img,alt} = i;
            return `<article id="card__${id}" class="section__article">
            <img
            class="article__img"
            src=${img}
            alt=${alt}
            />
            <div class="article__div">
            <p class="article__paragraph">${name}</p>
            <button id="button__${id}" class="article__button">Add to cart</button>
            </div>
            <div>
            <p class="price__paragraph">U$D ${price}</p>
            </div>
            </article>`;
        }) 
        .join(""));
    };   
    
    generateCards();

    let cartSection = document.getElementById("cart__section");

    function generateCardsinCart() {
        if(cart.length > 0) {
            document.getElementById('cart__h2').innerHTML= "Your Cart";
        }else {
            document.getElementById('cart__h2').innerHTML= "Your cart is empty";
        }
        
        cart__section.innerHTML = '';
        cart.forEach((item) => {
            cart__section.innerHTML +=         
            `<article id="cart__${item.id}" class="section__article">
            <img
            class="article__img"
            src=${item.img}
            alt=${item.alt}
            />
            <div class="article__div">
            <p class="article__paragraph">${item.name}</p>
            <button id="buttonCart__${item.id}" class="article__button">Add to cart</button>
            </div>
            <div>
            <p class="price__paragraph">U$D ${item.price}</p>
            <button class="cart__remove" onClick="removeItemFromCart(${item.id})">Remove</button>
            </div>
            </article>`;
        })
    };
    

const add = document.querySelectorAll(".article__button")

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    generateCardsinCart();
}

function clearCart() {
    cart = [];
    generateCardsinCart();
}

add.forEach(element => {
    element.addEventListener('click', function() {
        const clickedItem = (element.parentElement).parentElement;
        const clickedItemId = clickedItem.id.charAt(6);
        cart.push(clothesData[clickedItemId])
        console.log(cart)
        generateCardsinCart()
    });
});



    


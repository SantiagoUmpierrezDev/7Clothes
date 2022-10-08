let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cart__section = document.getElementById('cart__section');
let cart__items = document.getElementById('cart__items');



function renderCart() {
    if(cart.length > 0) {
        cart__items.innerHTML = '';
        for (items of cart) {
            const { id, name, price, img, alt, amount} = items
            const article = document.createElement("article")
            article.className = "store__article"
            article.id = `cart__${id}`
            article.innerHTML = `<img
            class="article__img"
            src=../${img}
            alt=${alt}
            />
            <div class="productInformation">
            <div class="article__div">
            <p class="article__paragraph">${name}</p>
            <p class="price__paragraph">$ ${price}</p>
              </div>
              <div class="inCart__div">
              <div class="quantity__div">
              <button class="plus-minus"><i onClick="decrement(${id})" class="fa-solid fa-minus"></i></button>
              <div id="${id}">${amount}</div>
              <button class="plus-minus"><i onclick="increment(${id})" class="fa-solid fa-plus"></i></button>
              </div>
              </div>
              </div>
              <div class="remove__div">
              <button class="cart__remove" onClick="removeItemFromCart(${id})">Remove</button>
              </div>`
              cart__items.append(article)
            }
        }else {
            cart__items.innerHTML = ``;
            cart__section.innerHTML = `<h1 class="cart__h1">Your cart is empty</h1>
            <a href="../index.html" class="cart__button">Back to the store</a>`;
        }
    }

    let getAmount = (id) => {
        let selectedItem = id;
        let search = cart.find((i) => i.id === selectedItem);
        document.getElementById(id).innerHTML = search.amount;
        totalPrice();
    };
    
    let increment = (id) => {
        let selectedItem = id;
        let search = cart.find((i) => i.id === selectedItem);
        if (search.amount === undefined) {
            cart.push({
                ...search,
                amount: 1,
    });
    } else {
        search.amount += 1;
    }    

    localStorage.setItem("cart", JSON.stringify(cart));

    getAmount(selectedItem);
}

let decrement = (id) => {
    let selectedItem = id;
    let search = cart.find((i) => i.id === selectedItem);
    if (search.amount === undefined) return;
    if (search === 0) return; 
    else {
        search.amount -= 1;
    }    

    cart = cart.filter ((i) => i.amount !== 0);
    
    renderCart();
    
    localStorage.setItem("cart", JSON.stringify(cart));

    getAmount(selectedItem);

}


function removeItemFromCart(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4fbf2b',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        customClass: 'swal-size'
      }).then((result) => {
        if (result.isConfirmed) {
          cart = cart.filter((item) => item.id !== id);  
          localStorage.setItem("cart", JSON.stringify(cart));
          totalPrice();
          renderCart();
          Swal.fire({
              title:'An item has been removed from your cart',
              text:'',
              icon: 'success',
              confirmButtonText: 'Ok',
              confirmButtonColor:'#03045E',
              customClass: 'swal-after'
          }
          )
        }
      })
}

let totalPrice = () => {
    if (cart.length > 0) {
        let price = 0
    for (item of cart) {
        price += item.price * item.amount
        cart__section.innerHTML = `
            <h1 class="cart__h1">Cart total: $ ${price}</h1>
            <button class="cart__button">Complete purchase</button>
            <button id="emptyCart" class="cart__button" onClick="emptyCartAlert ()">Empty Cart</button>
             `;                            
    }
    }
}
totalPrice()

function emptyCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
} 

function emptyCartAlert () {
    Swal.fire({
        title: 'Are you sure?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4fbf2b',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        customClass: 'swal-size'
      }).then((result) => {
        if (result.isConfirmed) {
        emptyCart();
          Swal.fire({
              title:'Your cart is empty',
              text:'',
              icon: 'success',
              confirmButtonText: 'Ok',
              confirmButtonColor:'#03045E',
              customClass: 'swal-after'
          }
            
          )
        }
      })
}

renderCart();
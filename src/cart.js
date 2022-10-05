let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cart__section = document.getElementById('cart__section');
let cart__items = document.getElementById('cart__items');

function generateCardsinCart() {
    if(cart.length > 0) {
        return (cart__items.innerHTML = cart
            .map((i) => {
              let { id, amount } = i;
              let search = clothesData.find((x) => x.id === id) || [];
              return`<article id="cart__${id}" class="cart__article">
              <img
              class="article__img"
              src=../${search.img}
              alt=${search.alt}
              />
              <div class="productInformation">
                <div class="article__div">
                    <p class="article__paragraph">${search.name}</p>
                    <p class="price__paragraph">$ ${search.price}</p>
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
              </div>
              </article>
              `; })
              .join(""));
    }else {
        cart__items.innerHTML = ``;
        cart__section.innerHTML = `<h1 class="cart__h1">Your cart is empty</h1>
        <a href="../index.html" class="cart__button">Back to the store</a>`;
    }
};

generateCardsinCart ();


let increment = (id) => {
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

    amount(selectedItem);
}

let decrement = (id) => {
    let selectedItem = id;
    let search = cart.find((i) => i.id === selectedItem);
    if (search === undefined) return;
    if (search.amount === 0) return;
    else {
        search.amount -= 1;
    }    

    amount(selectedItem);

    cart = cart.filter ((i) => i.amount !== 0);

    generateCardsinCart();

    localStorage.setItem("cart", JSON.stringify(cart));

}

let amount = (id) => {
    let selectedItem = id;
    let search = cart.find((i) => i.id === selectedItem);
    document.getElementById(id).innerHTML = search.amount;
    totalPrice();
};

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    totalPrice();
    generateCardsinCart();
}

let totalPrice = () => {
    if (cart.length > 0) {
        let price = cart
        .map((i) => {
            let { id, amount } = i;
            let search = clothesData.find((x) => x.id === id) || [];
            return amount * search.price;
        })
        .reduce((i, x) => i + x, 0);
      cart__section.innerHTML = `
      <h1 class="cart__h1">Cart total : $ ${price}</h1>
      <button class="cart__button">Complete purchase</button>
      <button id="emptyCart" class="cart__button">Empty Cart</button>
      `;
    } else return;
};

totalPrice();

function emptyCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    generateCardsinCart();
} 

const emptyCartBtn = document.getElementById("emptyCart");
emptyCartBtn.addEventListener ("click", () => {
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
})

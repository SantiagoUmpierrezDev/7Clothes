let cart = JSON.parse(localStorage.getItem("cart")) || [];

const completePurchase = document.querySelector("#completePurchase") 
completePurchase.addEventListener("click", (() => {
    const names = document.querySelector("#name").value 
    const lastName = document.querySelector("#lastName").value 
    const tel = document.querySelector("#tel").value 
    const email = document.querySelector("#email").value 
    const inputs = document.querySelectorAll ('#name, #lastName, #tel, #email')
    if (names == "" || lastName == "" || tel == "" || email == "") {
        Swal.fire ({
            title: 'Fill out the form to continue',
            icon: 'warning',
            confirmButtonColor: '#03045E',
            customClass: 'swal-after',
        }) 
        inputs.forEach (input => {
            input.value = "";
        })
    } else if (cart.length === 0) {
        Swal.fire ({
            title: 'You have to add something to your cart',
            icon: 'warning',
            confirmButtonColor: '#03045E',
            customClass: 'swal-after'
        })
    } else {
        Swal.fire ({
            title: 'THANK YOU FOR YOUR PURCHASE!',
            icon: 'success',
            confirmButtonColor: '#4fbf2b',
            confirmButtonText: 'Continue',
            customClass: 'swal-size',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                  title:`Hi ${names} ${lastName} we sent you an email at ${email} with the instructions to finish your purchase`,
                  text:'',
                  icon: 'success',
                  confirmButtonText: 'Ok',
                  confirmButtonColor:'#03045E',
                  customClass: 'swal-after'
              }
              )
            }
          })
          inputs.forEach (input => {
            input.value = "";
        })
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}))


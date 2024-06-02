import { getCartProductFromLS } from "./getCardProductLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


// to update the cart data from localstorage
// to update the cart value and also to get the data always ready  from localstorage
getCartProductFromLS();


// to add the data into localstorage
export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`)
    // console.log(currentProdElem)

    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;

    // console.log(quantity, price)

    price = price.replace("₹", "");

    // Update the cart button value
    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);


    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = { id, quantity, price };

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });

        console.log(updatedCart)

        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));


    }

    if (existingProd) {
        // alert('This product is already exist in add to cart')
        return false;
    }
    // update products price before adding to local storage
    price = Number(price * quantity);
    quantity = Number(quantity);

    // let updateCart = {id, quantity, price}
    arrLocalStorageProduct.push({ id, quantity, price })
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    // Update the cart button value
    updateCartValue(arrLocalStorageProduct);

    showToast("add", id);
}
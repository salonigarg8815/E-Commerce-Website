import { getCartProductFromLS } from "./getCardProductLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`)
    const productQuantity = currentCardElement.querySelector(".productQuantity")
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    // get the data from local storage
    let LocalCartProducts = getCartProductFromLS();

    let existingProd = LocalCartProducts.find((curProd) => curProd.id === id);

    if (existingProd) {
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    } else {
        localStoragePrice = price;
        price = price;
    }

    if (event.target.className == "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        }
        else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = { id, quantity, price: localStoragePrice };

    updatedCart = LocalCartProducts.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd;
    });

    // console.log(updatedCart)

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    // also we need to reflect the changes on the screen too
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    // calculating the card total in our cartProducts page
    updateCartProductTotal();

};
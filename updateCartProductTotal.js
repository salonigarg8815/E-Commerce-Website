import { getCartProductFromLS } from "./getCardProductLS";

export const updateCartProductTotal = () => {

    let productSubTotal = document.querySelector(".productSubTotal")
    let productFinalTotal = document.querySelector(".productFinalTotal")

    let LocalCartProducts = getCartProductFromLS();

    let intialValue = 0
    let totalProductPrice = LocalCartProducts.reduce((accum, curElem) => {
        let productPrie = parseInt(curElem.price) || 0;
        return accum + productPrie

    }, intialValue)

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`
}

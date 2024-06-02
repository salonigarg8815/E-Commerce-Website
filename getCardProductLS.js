import { updateCartValue } from "./updateCartValue";

export const i = () => {

    let cartProducts = localStorage.getItem("cartProductLS"); // get the existing data from local storage
    if (!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);

    // Update the cart button value
    updateCartValue(cartProducts);

    return cartProducts;

};
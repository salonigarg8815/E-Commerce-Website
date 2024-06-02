import { getCartProductFromLS } from "./getCardProductLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS(); // data of localStorage

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id); //***********//

    // update the local storage after removing the item
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    //  to remove div element
    let removeDiv = document.getElementById(`card${id}`)
    if (removeDiv) {
        removeDiv.remove();

        // show toast when product added to the card
        showToast("delete", id);
    }

    updateCartValue(cartProducts);
}
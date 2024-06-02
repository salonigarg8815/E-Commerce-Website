import { getCartProductFromLS } from "./getCardProductLS";

export const fetchQuantityFromCartLS = (id, price) => {

    let cardProducts = getCartProductFromLS();

    let existingProducts = cardProducts.find((curProd) => curProd.id === id);
    let quantity = 1

    if (existingProducts) {
        quantity = existingProducts.quantity;
        price = existingProducts.price;
    }

    return { quantity, price };
}
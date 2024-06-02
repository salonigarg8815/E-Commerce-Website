import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCardProductLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS(); // data of localStorage

let filterProducts = products.filter((curPro) => {
    // console.log(curPro.id);
    return cartProducts.some((curElem) => curElem.id === curPro.id) // Match the id with the help of some method

});
// console.log(filterProducts)

const showCartProducts = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, stock, price, name } = curProd;

        let productClone = document.importNode(templateContainer.content, true);

        const lsActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").textContent = lsActualData.price;
        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;

        productClone.querySelector(".stockElement").addEventListener(("click"), (event) => {
            incrementDecrement(event, id, stock, price);

        })
        // remove add to cart product
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProdFromCart(id));


        cartElement.appendChild(productClone);

    })
}

// to update the add to cart page
const cartElement = document.querySelector("#productCartContainer")
const templateContainer = document.querySelector("#ProductCartTemplate")

// Showing the cart products
showCartProducts();


// calculating the card total in our cartProducts page
updateCartProductTotal();
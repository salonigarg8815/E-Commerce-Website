import './style.css';

import products from "./api/products.json";
import { showProductContainer } from './homeProductCard';

// console.log(products)

// call the function to display all the products as a card
showProductContainer(products);
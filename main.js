import './style.css';

// import products from "./api/products.json";
import { showProductContainer } from './homeProductCard.js';


// console.log(products)

// call the function to display all the products as a card
const products = [
    {
        "id": 1,
        "name": "Laptop",
        "category": "Computers",
        "brand": "ExampleBrand",
        "price": 999.99,
        "stock": 50,
        "description": "Powerful laptop with a quad-core is processor, 8gb RAM, 246GB SSD, and a 14-inch-FHD display.",
        "image": "./public/images/lapi.png"
    },
    {
        "id": 2,
        "name": "Smartphone",
        "category": "Mobiles",
        "brand": "TechGadget",
        "price": 499.99,
        "stock": 100,
        "description": "Powerful laptop with a quad-core is processor, 8gb RAM, 246GB SSD, and a 14-inch-FHD display.",
        "image": "./public/images/iphone.png"
    },
    {
        "id": 3,
        "name": "Watches",
        "category": "Audio",
        "brand": "SoundBeats",
        "price": 149.99,
        "stock": 30,
        "description": "Powerful laptop with a quad-core is processor, 8gb RAM, 246GB SSD, and a 14-inch-FHD display.",
        "image": "./public/images/headphone.png"
    },
    {
        "id": 4,
        "name": "Headphones",
        "category": "Wearables",
        "brand": "FitTech",
        "price": 149.99,
        "stock": 30,
        "description": "Powerful laptop with a quad-core is processor, 8gb RAM, 246GB SSD, and a 14-inch-FHD display.",
        "image": "public/images/headphoneEcom.png"
    },
    {
        "id": 5,
        "name": "Speakers",
        "category": "Audio",
        "brand": "SoundBeats",
        "price": 149.99,
        "stock": 30,
        "description": "Powerful laptop with a quad-core is processor, 8gb RAM, 246GB SSD, and a 14-inch-FHD display.",
        "image": "./public/images/speakers.png"
    },
    {
        "id": 6,
        "name": "Television",
        "category": "video",
        "brand": "Samsung",
        "price": 199.99,
        "stock": 20,
        "description": "Powerful laptop with a quad-core is processor, 8gb RAM, 246GB SSD, and a 14-inch-FHD display.",
        "image": "./public/images/tv.png"
    }
    
];
showProductContainer(products);
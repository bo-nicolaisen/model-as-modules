// write cool JS hwere!!
import getAllPRoducts from './modules/dummyJSON/dummyJson.js';
import showAllProducts from './modules/dummyJSONapp/showAllProducts.js';

// globals for the app
export let myAppElement = document.getElementById('app')


// entrypoint for the app
getAllPRoducts()
    .then((data) => {
        showAllProducts(data.products)
    })



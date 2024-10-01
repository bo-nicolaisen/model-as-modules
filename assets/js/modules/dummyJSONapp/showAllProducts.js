import { getOnePRoduct } from '../dummyJSON/dummyJson.js';
import showProduct from './showOneProduct.js';
import { myAppElement } from '../../site.js';


//requires a html element and a data array of objects to display the products in the html element.
export default function showAllProducts(myData) {

    console.log(myData);

    myAppElement.innerHTML = ''
    myData.forEach(element => {

        let myCard = document.createElement('div')
        myCard.classList.add('card')
        myCard.innerHTML = `<img src="${element.thumbnail}" alt="${element.title}"><div class="card-body"><h5 class="card-title">${element.title}</h5>`

        myCard.addEventListener('click', function () {
            productCallback(element.id)
        })

        myAppElement.appendChild(myCard)
    });

}

//callback function for the product event listener
function productCallback(id) {

    //get data for the product
    getOnePRoduct(id)
        .then((data) => {
            showProduct(data)
        })
}           
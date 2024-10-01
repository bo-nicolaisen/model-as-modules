import { myAppElement } from '../../site.js';


export default function showProduct(myProductData) {
    console.log(myProductData);


    myAppElement.innerHTML = `<img src="${myProductData.thumbnail}" alt="${myProductData.title}"><div class="card-body"><h5>${myProductData.title}</h5><p>${myProductData.description}</p><p>${myProductData.price}</p>`

    let myButton = document.createElement('button')
    myButton.innerHTML = 'Back to all products'
    myButton.addEventListener('click', function () {
        window.location.reload()
    })
    myAppElement.appendChild(myButton)
}
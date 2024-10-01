

export default async function getAllPRoducts() {

    return fetch('https://dummyjson.com/products')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {

            return data;
        })
        .catch((error) => {

            return error
        })
}




export async function getOnePRoduct(myId) {

    return fetch(`https://dummyjson.com/products/${myId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {

            return data;
        })
        .catch((error) => {

            return error
        })
}





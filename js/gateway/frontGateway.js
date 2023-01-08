'use strict'
class FrontGateway {

    async creteCustomer(customer) {

        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customer)
        };


        const response = await fetch('http://localhost:8080/customer', config);
        return response;
    }

    async findCustomer(username){
        const config = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(`http://localhost:8080/customer/${username}`, config);
        return response;
    }

    async addBasketItem(basketItem, username){
        const config = {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(basketItem)
        }

        const customerResponse = await fetch(`http://localhost:8080/basketItems/${username}`, config);
        return customerResponse;
    }
}
"use strict"

class AccountView {

    setUserInformation(customer) {
        return `
             <div class="account-info">
                <div class="customer-info">
                    <ion-icon name="person"></ion-icon>
                    <h4>username: ${customer.username}</h4>
                </div>
                <div class="customer-info">
                    <ion-icon name="person"></ion-icon>
                    <h4>first name: ${customer.firstName}</h4>
                </div>
                <div class="customer-info">
                    <ion-icon name="person"></ion-icon>
                    <h4>last name: ${customer.lastName}</h4>
                </div>
            </div>
        `;
    }
}
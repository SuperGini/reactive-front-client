'use strict'

const loginPageLink = document.querySelector('.login-page');
const createBtn = document.querySelector('.create-btn2');

const createAccountService = new CreateAccountService();

class CreateAccountController {

    username = document.querySelector('.create-username');
    firstName = document.querySelector('.create-first-name');
    lastName = document.querySelector('.create-last-name');

    mapCustomer() {
        return new Customer(
            this.username.value,
            this.firstName.value,
            this.lastName.value
        );
    }
}

const creatAccountController = new CreateAccountController();


createBtn.addEventListener('click', () => createAccountService.createCustomer(creatAccountController.mapCustomer()));

loginPageLink.addEventListener('click', () => loginPageLink.href = './login.html');
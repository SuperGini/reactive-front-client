'use strict'

const createAccountLink = document.querySelector('.create-Account-page');
const loginBtn = document.querySelector(".login-btn");

class LoginController {

    loginService = new LoginService();
    loginUsername = document.querySelector(".login-username");

     async findCustomer() {


        const response = this.loginService.findCustomer(this.loginUsername.value);
    }
}
const loginController = new LoginController();

loginBtn.addEventListener("click",  async () => loginController.findCustomer().then());

createAccountLink.addEventListener('click', () => createAccountLink.href = './create-account.html');

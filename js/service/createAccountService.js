'use strict'
class CreateAccountService {

    username = document.querySelector('.create-username');
    firstName = document.querySelector('.create-first-name');
    lastName = document.querySelector('.create-last-name');
    createAccountInfo = document.querySelector('.create-account-info');

    createView = new CreateAccountView();
    gateway = new FrontGateway();

    async createCustomer(customer) {
        try {

            const response = await this.gateway.creteCustomer(customer);

           // const responseBody = await response.json();

            if (CREATED === response.status) {
                this.createAccountInfo.innerHTML = "";
                this.createAccountInfo.insertAdjacentHTML('afterbegin', this.createView.renderSuccessCreateAccountMessage());
                this.createAccountInfo.classList.remove('display-info-none');
                this.createAccountInfo.classList.add('display-info-show');

                this.username.value = "";
                this.firstName.value = "";
                this.lastName.value = "";
            }

            if (BAD_REQUEST === response.status) {
                this.createAccountInfo.innerHTML = "";
                this.createAccountInfo.insertAdjacentHTML('afterbegin', this.createView.renderFailToCreateAccountMessage());
                this.createAccountInfo.classList.remove('display-info-none');
                this.createAccountInfo.classList.add('display-info-show');
            }

            if (400 < response.status && response.status <= 500) {
                this.createAccountInfo.innerHTML = "";
                this.createAccountInfo.insertAdjacentHTML('afterbegin', this.createView.renderGeneralFail());
                this.createAccountInfo.classList.remove('display-info-none');
                this.createAccountInfo.classList.add('display-info-show');
                throw new Error("Unable to process application!!!");
            }

        } catch (e) {
            throw new Error(e.message);
        }
    }
}

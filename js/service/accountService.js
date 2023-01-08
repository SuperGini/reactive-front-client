"use strict"
class AccountService {

    accountInfo = document.querySelector(".account-info");

    accountView = new AccountView();
    gateway = new FrontGateway();

    async getCustomer(){

        try {
            const username = sessionStorage.getItem("ginitoruAppUsername");

            const customerResponse = await this.gateway.findCustomer(username);
            const customer = await customerResponse.json();

            this.accountInfo.innerHTML = "";
            this.accountInfo.insertAdjacentHTML("afterbegin", this.accountView.setUserInformation(customer));

        }catch (e){
            throw new Error(e);
        }

    }
}

const accountService = new AccountService();
accountService.getCustomer();
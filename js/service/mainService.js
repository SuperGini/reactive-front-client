"use strict"
class MainService {

    loggedUser = document.querySelector(".logged-user");
    tableBody = document.querySelector(".table-body");
    mainView = new MainView();
    gateway = new FrontGateway();

    setUsernameOnTheView(username){
        this.loggedUser.innerHTML="";
        this.loggedUser.insertAdjacentHTML("afterbegin", this.mainView.setUsernameOnTheView(username));
    }

     async setItemsOnTable(username){

        try{
            const response = await this.gateway.findCustomer(username);
            const customer = await response.json();
            console.log(customer);
            const itemsList = customer.basketItems;

            this.tableBody.innerHTML="";

            itemsList.forEach(item =>
                this.tableBody
                    .insertAdjacentHTML("afterbegin",
                                                 this.mainView.populateTableWithItems(item))
            );

        }catch (e) {
            throw Error(e);
        }
    }

    async addBasketItem(basketItem, username){

        try{

            const customerResponse = await this.gateway.addBasketItem(basketItem, username);
            const customer = await customerResponse.json();

            const itemsList = customer.basketItems;

            this.tableBody.innerHTML="";

            itemsList.forEach(item =>
                this.tableBody
                    .insertAdjacentHTML("afterbegin", this.mainView.populateTableWithItems(item))
            );

        }catch (e) {
            throw Error(e);
        }
    }




}

const mainService = new MainService();

//gets the username from sessionStorage that I set it up during login and put it on the html page
mainService.setUsernameOnTheView(sessionStorage.getItem("ginitoruAppUsername"));

mainService.setItemsOnTable(sessionStorage.getItem("ginitoruAppUsername"));

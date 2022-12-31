'use strict'

const username = document.querySelector('.create-username');
const firstName = document.querySelector('.create-first-name');
const lastName = document.querySelector('.create-last-name');
const createAccountInfo = document.querySelector('.create-account-info');
const loginPageLink = document.querySelector('.login-page');

const createBtn = document.querySelector('.create-btn2');

const createView = new CreateAccountView();

const createUser = async () => {
    const customer = new Customer(
        username.value,
        firstName.value,
        lastName.value
    );

    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer)
    };

    try {
        const response = await fetch('http://localhost:8080/customer', config);
        const responseBody = await response.json();

        if(response.status === 201){
            createAccountInfo.innerHTML = "";
            createAccountInfo.insertAdjacentHTML('afterbegin', createView.renderSuccessCreateAccountMessage());
            createAccountInfo.classList.remove('display-info-none');
            createAccountInfo.classList.add('display-info-show');

            username.value="";
            firstName.value="";
            lastName.value="";

        }

        if(response.status === 400){
            createAccountInfo.innerHTML = "";
            createAccountInfo.insertAdjacentHTML('afterbegin', createView.renderFailToCreateAccountMessage());
            createAccountInfo.classList.remove('display-info-none');
            createAccountInfo.classList.add('display-info-show');
        }

        if(400 < response.status <= 500){
            createAccountInfo.innerHTML= "";
            createAccountInfo.insertAdjacentHTML('afterbegin', createView.renderGeneralFail());
            createAccountInfo.classList.remove('display-info-none');
            createAccountInfo.classList.add('display-info-show');
            throw new Error("Unable to process application!!!");
        }


    } catch (err) {
        console.log(err.message);
        throw new Error(err.message)
    }
}


createBtn.addEventListener('click', createUser);

loginPageLink.addEventListener('click', () => {
    loginPageLink.href = './login.html';
})

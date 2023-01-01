'use strict'

class LoginService {

    usernameError = document.querySelector(".username-error-message");

    gateway = new FrontGateway();
    loginVew = new LoginView();

    async findCustomer(usernameRequest) {

        try {
            const response = await this.gateway.findCustomer(usernameRequest);
            const responseBody = await response.json();

            if (OK === response.status) {
                const {username} = responseBody;
                if (usernameRequest === username) {
                    console.log(`usernameRequest: =  ${usernameRequest} si username: = ${username}`);

                    this.usernameError.innerHTML = "";
                    return username;
                }
            }

            if (NOT_FOUND === response.status) {
                this.usernameError.innerHTML = "";
                this.usernameError.insertAdjacentHTML('afterbegin', this.loginVew.renderErrorMessage());
                throw new Error(`${responseBody.detail}`)
            }

        } catch (e) {
            throw new Error(e.message)
        }
    }
}

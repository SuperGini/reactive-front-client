'use strict'

class CreateAccountView {

    renderSuccessCreateAccountMessage() {
        return `
            <p>Account created.</p>
            <p>Please go login page to login</p>
        `;
    }

    renderFailToCreateAccountMessage() {
        return `
            <p>Account already exists.</p>
        `;
    }

    renderGeneralFail(){
        return `
            <p>Unable to process application</p>
        `;
    }
}
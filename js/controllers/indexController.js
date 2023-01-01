'use strict'

const indexBtnContainer = document.querySelector('.central-container');
const htmlPageSelector = new HtmlPageSelector();


indexBtnContainer.addEventListener('click', e => {
    if(e.target.classList.contains('create-bt1')){
        htmlPageSelector.changePageTo('./create-account.html');
    }

    if(e.target.classList.contains('login-btn1')){
        htmlPageSelector.changePageTo('./login.html');
    }
});

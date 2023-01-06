'use strict'

const indexBtnContainer = document.querySelector('.central-container');
const htmlPageSelector = new PageSelector();


indexBtnContainer.addEventListener('click', e => {
    if(e.target.classList.contains('create-bt1')){
        htmlPageSelector.changeToInternalPage('./create-account.html');
    }

    if(e.target.classList.contains('login-btn1')){
        htmlPageSelector.changeToInternalPage('./login.html');
    }
});

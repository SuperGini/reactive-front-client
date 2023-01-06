'use strict'
const contactIcons = document.querySelector('.contact-icons');
const addItemBtn = document.querySelector(".add-item-btn");
const accountLink = document.querySelector(".account-settings");

const changeThePage = new PageSelector();

contactIcons.addEventListener('click', e => {

    if (e.target.classList.contains("linkedin-link")) {
        changeThePage.changeToExternalPage("https://www.linkedin.com/in/mihai-iordache-27a98615a/");
    }

    if (e.target.classList.contains("github-link")) {
        changeThePage.changeToExternalPage("https://github.com/SuperGini?tab=repositories");
    }

});

accountLink.addEventListener("click", () => accountLink.href = "./account.html");

addItemBtn.addEventListener("click", () => {
    //todo to stuff and shit -> to add items to database and display them to table
})




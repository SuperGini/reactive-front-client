'use strict'
const accountLinks = document.querySelector(".contact-icons");
const mainPageBtn = document.querySelector(".main-page-btn");

const changeToPage = new PageSelector();

accountLinks.addEventListener('click', evt => {

    if(evt.target.classList.contains("linkedin-link")){
        changeToPage.changeToExternalPage("https://www.linkedin.com/in/mihai-iordache-27a98615a/");
    }

    if(evt.target.classList.contains("github-link")){
        changeToPage.changeToExternalPage("https://github.com/SuperGini?tab=repositories");
    }
});

mainPageBtn.addEventListener("click", () => changeToPage.changeToInternalPage("./main.html"));
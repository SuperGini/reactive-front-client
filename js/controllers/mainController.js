'use strict'
const contactIcons = document.querySelector('.contact-icons');

class MainController {

    changePage(url) {
        window.open(url, "_blank").focus();
    }

}

const mainPageController = new MainController();

contactIcons.addEventListener('click', e => {

    if (e.target.classList.contains("linkedin-link")) {
        mainPageController.changePage("https://www.linkedin.com/in/mihai-iordache-27a98615a/");
    }

    if (e.target.classList.contains("github-link")) {
        mainPageController.changePage("https://github.com/SuperGini?tab=repositories");
    }

});




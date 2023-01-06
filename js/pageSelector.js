'use strict'

class PageSelector {

    changeToInternalPage(htmlPage){
        window.location.href = htmlPage;
    }

    changeToExternalPage(url) {
        window.open(url, "_blank").focus();
    }
}
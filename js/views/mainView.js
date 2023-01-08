"use strict"

class MainView {

    setUsernameOnTheView(username) {
        return `
           username: ${username} 
        `;
    }

    populateTableWithItems(basketItem) {
        return `
            <div class="table-row">
                <div class="row">${basketItem.itemName}</div>
                <div class="row">${basketItem.itemsNumber}</div>
                <div class="row">${basketItem.price} lei</div>
            </div>
        `;
    }
}
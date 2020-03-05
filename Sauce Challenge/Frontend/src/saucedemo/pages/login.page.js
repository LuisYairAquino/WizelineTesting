import { Selector, t } from 'testcafe';

class LoginPage{

    constructor() {
        this.userName = Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginButton = Selector('input[class="btn_action"]');

        //Logout
        this.burguerButton = Selector('div > div:nth-child(3) > div > button');
        this.logoutButton = Selector('#logout_sidebar_link');

        //Add an item to shopping cart
        this.shoppingCartButton = Selector('div[id="shopping_cart_container"]');
        this.itemToShoppingCart = Selector('button').withText('ADD TO CART');

        //Adding Multiple Items to Shopping cart
        this.productOne = Selector('div > div:nth-child(1) > div.pricebar > button');
        this.productTwo = Selector('div > div:nth-child(2) > div.pricebar > button');
        this.productThree = Selector('div > div:nth-child(3) > div.pricebar > button');
        this.productFour = Selector('div > div:nth-child(4) > div.pricebar > button');

        //Missing Mail information
        this.checkoutButton = Selector('a[class="btn_action checkout_button"] ');
        this.continueInformationButton = Selector('input[class="btn_primary cart_button"] ');

        //Your Information Filled
        this.firstName = Selector('#first-name');
        this.lastName = Selector('#last-name');
        this.postalCode = Selector('#postal-code');

        //Finish button
        this.orderItems = Selector('a[class="btn_action cart_button"]');
    }

    async login(username, password){
        await t.typeText(this.userName, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
    }

    async logout(username, password){
        await t.typeText(this.userName, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
        .click(this.burguerButton)
        .click(this.logoutButton)
    }

    async shoppingCart(username, password){
        await t.typeText(this.userName, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
        .click(this.shoppingCartButton)
    }

    async addItemToShoppingCart(username, password){
        await t.typeText(this.userName, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
        .click(this.itemToShoppingCart)
        .click(this.shoppingCartButton);
    }

    async addMultipleItemsShoppingCart(username, password){
        await t.maximizeWindow()
        .typeText(this.userName, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
        .click(this.productOne)
        .click(this.productTwo)
        .click(this.productThree)
        .click(this.productFour)
        .click(this.shoppingCartButton);
    }

    async failFilledInformationToContinueCheckout(username, password){
        await t.maximizeWindow()
        .typeText(this.userName, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
        .click(this.itemToShoppingCart)
        .click(this.shoppingCartButton)
        .click(this.checkoutButton)
        .click(this.continueInformationButton);
    }

    async fillInformationToOverviewAndFinish(username, password, firstname, lastname, postalcode){
        await t.maximizeWindow()
        .typeText(this.userName, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
        .click(this.productOne)
        .click(this.productTwo)
        .click(this.productThree)
        .click(this.productFour)
        .click(this.shoppingCartButton)
        .click(this.checkoutButton)
        .typeText(this.firstName, firstname)
        .typeText(this.lastName, lastname)
        .typeText(this.postalCode, postalcode)
        .click(this.continueInformationButton)
        .wait(5000)
        //.click(this.orderItems);
    }

    async fillInformationToOverviewAndFinish(username, password, firstname, lastname, postalcode){
        await t.maximizeWindow()
        .typeText(this.userName, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
        .click(this.productOne)
        .click(this.productTwo)
        .click(this.productThree)
        .click(this.productFour)
        .click(this.shoppingCartButton)
        .click(this.checkoutButton)
        .typeText(this.firstName, firstname)
        .typeText(this.lastName, lastname)
        .typeText(this.postalCode, postalcode)
        .click(this.continueInformationButton)
        .wait(5000)
        //.click(this.orderItems);
    }

    async completePurchase(username, password, firstname, lastname, postalcode){
        await t.maximizeWindow()
        .typeText(this.userName, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
        .click(this.productOne)
        .click(this.productTwo)
        .click(this.productThree)
        .click(this.productFour)
        .click(this.shoppingCartButton)
        .click(this.checkoutButton)
        .typeText(this.firstName, firstname)
        .typeText(this.lastName, lastname)
        .typeText(this.postalCode, postalcode)
        .click(this.continueInformationButton)
        .click(this.orderItems);
    }

    /*async isPassFailed(){
        //el ok sirve para boolean true or false
        return this.passFailed.visible
        //&& await t.expect(this.element2.exists).ok() puedes poner and cuantas veces se requiera
        //);
    }*/
}

export default new LoginPage();
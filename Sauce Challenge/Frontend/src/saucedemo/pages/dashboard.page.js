import { Selector, t } from 'testcafe';

class DashboardPage{

    constructor(){
        this.productText = Selector('#inventory_filter_container > div');
        this.errorText = Selector('#login_button_container > div > form > h3');
        this.robotImageHome = Selector('body > div.login_wrapper > div.login_wrapper-inner > div.bot_column');
        this.yourCart = Selector('#contents_wrapper > div.subheader');
        this.itemAdded = Selector('#item_4_title_link > div');

        this.itemOne = Selector('#cart_contents_container > div > div.cart_list > div:nth-child(3)');
        this.itemTwo = Selector('#cart_contents_container > div > div.cart_list > div:nth-child(4)');
        this.itemThree = Selector('#cart_contents_container > div > div.cart_list > div:nth-child(5)');
        this.itemFour = Selector('#cart_contents_container > div > div.cart_list > div:nth-child(6)');

        //Checkout
        this.errorNameRequired = Selector('#checkout_info_container > div > form > h3');
        this.checkoutOverview = Selector('#contents_wrapper > div.subheader');


        //CheckCart to Complete a Purchase
        this.overviewOne = Selector('div > div.cart_list > div:nth-child(4)');
        this.overviewTwo = Selector('div > div.cart_list > div:nth-child(4)');
        this.overviewThree = Selector('div > div.cart_list > div:nth-child(5)');
        this.overviewFour = Selector('div > div.cart_list > div:nth-child(6)');
        //Order Finished
        this.ponyExpressImage = Selector('div[class="pony_express"]');


    }

    async isPageLoaded(){
        return await this.productText.exists;
    }

    async isWrongUser(){
        return await this.errorText.exists;
    }

    async isLogout(){
        return await this.robotImageHome.exists;
    }

    async isShoppingCartSelected(){
        return await this.yourCart.exists;
    }

    async isItemAddedInShoopingCart(){
        return await this.itemAdded.exists;
    }

    async isMultipleItemAdded(){
        return await this.itemOne.exists && await this.itemTwo.exists 
        && await this.itemThree.exists && await this.itemFour.exists;
    }

    async isMissingInformation(){
        return await this.errorNameRequired.exists;
    }

    async isCheckoutOverview(){
        return await this.checkoutOverview.exists;
    }

    async isCheckoutforItemsList(){
        return await this.overviewOne.exists && await this.overviewTwo.exists 
        && await this.overviewThree.exists && await this.overviewFour.exists;
    }

    async isFinished(){
        return await this.ponyExpressImage.exists;
    }
    
}

export default new DashboardPage();
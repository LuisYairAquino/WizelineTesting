import LoginPage from '../pages/login.page';
import DashboardPage from '../pages/dashboard.page';

const USERNAME = "standard_user"
const PASSWORD = "secret_sauce" //process.env.TODOIST_PASSWORD

const WRONG_USERNAME = "locked_out"

const FIRSTNAME = "Luis"
const LASTNAME = "Aquino"
const POSTALCODE = "12345"

//const PASS_FAILED ="12345"

fixture('Login Test').page('https://www.saucedemo.com/');

test('Login Successful', async t =>{
    await LoginPage.login(USERNAME, PASSWORD);
    await t.expect(await DashboardPage.isPageLoaded()).ok();
});

test('Login Failed By Wrong User', async t =>{
    await LoginPage.login(WRONG_USERNAME, PASSWORD);
    await t.expect(await DashboardPage.isWrongUser()).ok();
});

test('Logout Page', async t =>{
    await LoginPage.logout(USERNAME, PASSWORD);
    await t.expect(await DashboardPage.isLogout()).ok();
});

test('Shopping Cart Successful', async t =>{
    await LoginPage.shoppingCart(USERNAME, PASSWORD);
    await t.expect(await DashboardPage.isShoppingCartSelected()).ok();
});

test('Adding Item to Shopping Cart Successful', async t =>{
    await LoginPage.addItemToShoppingCart(USERNAME, PASSWORD);
    await t.expect(await DashboardPage.isItemAddedInShoopingCart()).ok();
});


test('Adding Multiple Items to Shopping Cart', async t =>{
    await LoginPage.addMultipleItemsShoppingCart(USERNAME, PASSWORD);
    await t.expect(await DashboardPage.isMultipleItemAdded()).ok();
});

//I dint'n understand at all this required point Continue with missing mail information
test('Missing Mail Information', async t =>{
    await LoginPage.failFilledInformationToContinueCheckout(USERNAME, PASSWORD);
    await t.expect(await DashboardPage.isMissingInformation()).ok();
});

test('Checkout Overview Information', async t =>{
    await LoginPage.fillInformationToOverviewAndFinish(USERNAME, PASSWORD, FIRSTNAME, LASTNAME, POSTALCODE);
    await t.expect(await DashboardPage.isCheckoutOverview()).ok();
    await t.expect(await DashboardPage.isCheckoutforItemsList()).ok();
});

test('Complete Purchase Successful', async t =>{
    await LoginPage.completePurchase(USERNAME, PASSWORD, FIRSTNAME, LASTNAME, POSTALCODE);
    await t.expect(await DashboardPage.isFinished()).ok();
});
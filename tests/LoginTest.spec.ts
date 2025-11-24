import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Login Functionality Tests', ()=>{

    test('should login successfully', async ({page}) => {
        let loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.login('standard_user','secret_sauce');
        await expect(page).toHaveTitle('Swag Labs');
    });

        test('testing invalid login', async ({page}) => {
        let loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.login('teewewqst','ewqeqw');
        let errrMsg =await loginPage.doInvalidLogin();
        await expect(errrMsg).toContain('Username and password do not match');
    });

    test('should add to cart successfully', async ({page}) => {
        let loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        let inventoryPage = await loginPage.login('standard_user','secret_sauce');
        await expect(page).toHaveTitle('Swag Labs');
        // let inventoryPage = new InventoryPage(page);
        let productItemPage = await inventoryPage.clickOnProduct();
        await productItemPage.clickAddToCart();
        await productItemPage.getItemPrice();
    });
});
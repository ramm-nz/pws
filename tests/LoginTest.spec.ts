import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

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

});
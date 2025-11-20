import { test, expect } from '../fixtures/fixtures';
const userData = JSON.parse(JSON.stringify(require("../testData/userDetails.json")));


test("Sauce demo POM as user", async({ page, loginPage, inventoryPage })=>{

    //** The below method is commented because the user is already logged in using storage state
    // check the global-setup file */

    // await loginPage.login(userData.username,userData.password);

    await page.goto("https://www.saucedemo.com/inventory.html");  //Directly navigating to inventory page since user is already logged in
 
    await inventoryPage.addToCart();

    await page.pause();

    await page.getByText("Open Menu").click();

    await page.locator("//a[@data-test='logout-sidebar-link']").click();
});
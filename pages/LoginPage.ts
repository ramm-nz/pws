import { Locator, Page } from "@playwright/test";
import { Element } from "../utils/Element";
import { InventoryPage } from "./InventoryPage";

export class LoginPage{

private readonly page: Page;
private readonly userName : Locator;
private readonly passWord : Locator;
private readonly loginButton : Locator;
private readonly errorMessage : Locator;
private readonly element: Element;
// private readonly userName = 'input[data-test="username"]';
// private readonly passWord = 'input[data-test="password"]';
// private readonly loginButton = 'input[data-test="login-button"]';


//page class constructor
// constructor(page: Page){
//     this.page = page;
//     this.userName = 'input[data-test="username"]';
//     this.passWord = 'input[data-test="password"]';
//     this.loginButton = 'input[data-test="login-button"]';
// }
constructor(page: Page){
    this.page = page;
    this.element = new Element(page);
    this.userName = page.getByRole('textbox', { name: 'Username' });
    this.passWord = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="error"]');
}

//method to perform login action
async goToLoginPage(){
    await this.page.goto('https://www.saucedemo.com/');
}

async login(userName:string,passWord:string) : Promise<InventoryPage>{
    //** Older approach */
    // await this.userName.fill(userName);
    // await this.passWord.fill(passWord);
    // await this.loginButton.click();

    //** New approach using Element utils */
    await this.element.fill(this.userName,userName);
    await this.element.fill(this.passWord,passWord);
    await this.element.click(this.loginButton);
    console.log(`Page Title is: ${await this.page.title()}`);
    // return await this.page.title(); instead we are going to return Inventory page ****
    return new InventoryPage(this.page);
}
 
async doInvalidLogin(): Promise<string | null> {
    // await this.element.fill(this.userName,userName);
    // await this.element.fill(this.passWord,passWord);
    // await this.element.click(this.loginButton);
    // return await this.errorMessage.textContent() || ""; Below is the new approach using Element utils
    console.log(`Error message is : ${await this.element.getText(this.errorMessage)}`);
    return await this.element.getText(this.errorMessage);
}

}
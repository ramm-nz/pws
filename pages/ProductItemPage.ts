import { Page, Locator } from "@playwright/test";
import { Element } from "../utils/Element";

 export class ProductItemPage{

    private readonly page: Page;
    private readonly element: Element
    private readonly addToCartButton: Locator;
    private readonly itemPrice: Locator;

    constructor(page: Page){
        this.page = page;
        this.element = new Element(page);
        this.addToCartButton = page.locator('button:has-text("Add to cart")');
        this.itemPrice = page.locator('.inventory_details_price');
    }

    async clickAddToCart(): Promise<void>{
        await this.element.click(this.addToCartButton);
    }

    async getItemPrice(){
        console.log(`ITEM PRICE: ${await this.element.getText(this.itemPrice)}`);
    }
 }

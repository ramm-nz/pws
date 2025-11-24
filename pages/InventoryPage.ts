import { Page, Locator } from "@playwright/test";
import { Element } from "../utils/Element";
import { ProductItemPage } from "./ProductItemPage";

export class InventoryPage{
    private readonly page: Page;
    private readonly element: Element;
    private readonly productBackpack: Locator;
    private readonly productName: string | undefined;

    constructor(page: Page){
        this.page = page;
        this.element = new Element(page);
        // this.productBackpack = page.locator(`div:has-text(${productName})`);
        this.productBackpack = page.locator(`//div[normalize-space()='Sauce Labs Backpack']`);
        // page.locator(`div:has-text("Sauce Labs Backpack")`)
    }

    async clickOnProduct(): Promise<ProductItemPage> {
        await this.element.click(this.productBackpack);
        return new ProductItemPage(this.page);
    }
}
class POInventoryPage {
    constructor(page) {
      this.page = page;
    //   this.inventoryItems = page.locator('.inventory_item');
    //   this.cartButton = page.locator('#shoppingCart');

      this.backPackAddToCart = page.locator("button[name='add-to-cart-sauce-labs-backpack']");
      this.bikeLightAddToCart = page.locator("[data-test*='add-to-cart-sauce-labs-bike']");
    }

    async addToCart()
    {
        await this.backPackAddToCart.click();
        await this.bikeLightAddToCart.click();
    }
  
    async getInventoryCount() {
      return await this.inventoryItems.count();
    }
  
    async goToCart() {
      await this.cartButton.click();
    }
  }
  
  module.exports = POInventoryPage; // ✅ Export the class correctly
  
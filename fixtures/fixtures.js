const { test: base, expect } = require('@playwright/test');
const PageObjectManager = require('../pageObjects/POManager');

exports.test = base.extend({
  loginPage: async ({ page }, use) => {
    const pom = new PageObjectManager(page);
    await use(pom.getLoginPage()); // ✅ Pass the LoginPage instance
  },
  inventoryPage: async ({ page }, use) => {
    const pom = new PageObjectManager(page);
    await use(pom.getInventoryPage()); // ✅ Pass the InventoryPage instance
  },
});

exports.expect = expect;

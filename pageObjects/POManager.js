const LoginPage = require('./POLoginPage');
const InventoryPage = require('./POInventoryPage');

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getInventoryPage() {
    return this.inventoryPage;
  }
}

module.exports = POManager;

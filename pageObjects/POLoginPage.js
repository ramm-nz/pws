class POLoginPage {
    constructor(page) {
      this.page = page;

      this.usernameField = page.getByPlaceholder("Username");
      this.passwordField = page.locator("input[data-test='password']");
      this.loginButton = page.locator(".submit-button.btn_action");
    }
  
    async gotoLoginPage() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async login(username, password) {
      await this.usernameField.fill(username);
      await this.passwordField.fill(password);
      await this.loginButton.click();
    }
  }
  
  module.exports = POLoginPage; // ✅ Export the class correctly
  
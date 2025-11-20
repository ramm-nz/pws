import { test, expect } from '@playwright/test';



// ** Here we are using the storage state file created for VISUAL USER in global-setup.js ** //
// ** But at same time it is also OVER RIDING the playwright.config.js which is using LoginAuth storage state file ** //
test.use({storageState: "./VisualAuth.json"})

test('Test storage state',async ({page})=>
{
    await page.goto("https://www.saucedemo.com/inventory.html");
    await page.goto("https://www.saucedemo.com/cart.html");
    await expect(page.locator('.shopping_cart_link')).toBeVisible({timeout:10000});
})

test('Test storage state2',async ({page})=>
{
    await page.goto("https://www.saucedemo.com/cart.html");
    await expect(page.locator('.shopping_cart_link')).toBeVisible({timeout:10000});
})



test('As VISUAL USER Test storage state',async ({page,context})=>
{
    await page.goto("https://www.saucedemo.com/inventory.html");
    await expect(page.locator('.title')).toHaveText("Products");

    const productName = await page.locator('.inventory-item-name');

    const prodCount = productName.count();

    for(let i=0; i< prodCount;i++){

        const productItemName = await products.nth(i).textContent();

        if (productItemName.trim() === 'Sauce Labs Onesie') {
            await productName.nth(i).click();
            console.log('✅ Product clicked: iPhone 16 Pro Max');
            break;
          }
          await expect(page.locator('.title')).toHaveText("Products");
        // if(productName.nth(i).textContent() === 'Sauce Labs Onesie') {
        //     await productName.nth(i).click();
        //     page.pause();
        // }
    }
})
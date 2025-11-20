import { test, expect } from '@playwright/test';

test('Admin User Login storage state',async ({page})=>
{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.locator("input[data-test='password']").fill("secret_sauce");
    await page.locator(".submit-button.btn_action").click();
    await expect(page.locator('.shopping_cart_link')).toBeVisible();

    await page.context().storageState({path:"./LoginAuth.json"});
})

test('Visual User Login storage state',async ({page})=>
{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("visual_user");
    await page.locator("input[data-test='password']").fill("secret_sauce");
    await page.locator(".submit-button.btn_action").click();
    await expect(page.locator('.shopping_cart_link')).toBeVisible();

    await page.context().storageState({path:"./VisualAuth.json"});
})


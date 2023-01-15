import { test, expect } from '@playwright/test';
// const { test, expect } = require('@playwright/test');

test('Opencat login test with valid username and password', async ({page}) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    const username = page.locator('#input-email');
    await username.fill('pavelqatesting01@gmail.com');

    const password = page.locator('#input-password');
    await password.fill('Qatesting@123');

    const loginBtn = page.locator("//input[@class='btn btn-primary']");
    await loginBtn.click();

    await expect(page).toHaveTitle("My Account");

    // await page.pause();
})

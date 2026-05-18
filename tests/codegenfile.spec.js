import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('newone1379');
  await page.locator('#loginpassword').fill('abc@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});
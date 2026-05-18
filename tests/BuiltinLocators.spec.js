const {test,expect}= require('@playwright/test')

test("Builtin locators",async({page})=>{

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   const text=await page.getByAltText('company-branding')
   await expect(text).toBeVisible();

   await page.getByPlaceholder('Username').fill('Admin')
   await page.getByPlaceholder('Password').fill('admin123')

   await page.getByRole('button',{type:'submit'}).click()

   await expect(await page.getByText('Ava King')).toBeVisible();

})
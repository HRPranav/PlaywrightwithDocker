const {test,expect}= require('@playwright/test')

test("Home page",async({page})=>{

   await page.goto('https://www.demoblaze.com/')

    const pagetitle=await page.title()

    console.log('Page title',pagetitle)

    await expect(page).toHaveTitle('STORE')

    await expect(page).toHaveURL('https://www.demoblaze.com/')

    const pageurl=await page.url()

    console.log('Page title',pageurl)

   await page.close();

})
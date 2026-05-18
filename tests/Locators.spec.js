//const {test,expect}=require('@playwright/test')

import {test,expect} from '@playwright/test'

test("Locators local",async({page})=>{

  await page.goto('https://www.demoblaze.com/')

  //on click login buttton--property

  await page.click('id=login2')

  //provide username--css in 3 diff ways
  await page.locator('#loginusername').fill('abc')
  await page.fill('#loginusername','newone1379')
  await page.type('#loginusername','newyear')

  //provide password

  await page.fill("input[id='loginpassword']",'abc@123')

  //click on login button using xpath

  await page.click("//*[@id='logInModal']/div/div/div[3]/button[2]")

  //title verification post login

  const logoutlink=await page.locator('#logout2')


  await expect(logoutlink).toBeVisible;

  await page.close();

})
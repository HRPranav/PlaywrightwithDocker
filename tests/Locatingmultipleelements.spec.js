import {test,expect} from '@playwright/test'

test(" multiple Locators",async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //locating multiple elements

    const links= await page.$$('a');

    for(const link of links)
    {
        const linktext= await link.textContent();
        console.log(linktext)
    }

    //The below command is optional if the value is not assigning then use it
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const products= await page.$$("//div[@id='tbodyid']//h4/a");

    for(const product of products)
        {
            const eachproduct= await product.textContent();
            console.log(eachproduct);
        }


})
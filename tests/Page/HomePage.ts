import { expect, Locator, Page } from '@playwright/test';

export class HomePage{

    // Define Selectors
    readonly page:Page
    readonly h1Header:Locator
    readonly freeStrategyBtn: Locator


    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.h1Header= page.locator("h1[class='et_pb_module_heading']")
        this.freeStrategyBtn= page.locator("(//a[@class='et_pb_button et_pb_button_0 et_pb_bg_layout_light'])[1]")

    }

    //add functions down here
    async visit() {
        await this.page.goto("https://ultimateqa.com/")
    }

    async assertHomePage () {

        await expect(this.h1Header).toBeVisible()
        await expect(this.freeStrategyBtn).toBeVisible()
        
    }

}
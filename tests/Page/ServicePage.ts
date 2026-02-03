import { expect, Locator, Page } from '@playwright/test';


export class ServicePage {
    // Define Selectors
    readonly page:Page
    readonly serviceTab:Locator
    readonly schSessionBtn: Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.serviceTab = page.locator("//ul[@id='menu-main-menu']//a[normalize-space()='Services']")
        this.schSessionBtn= page.locator("//a[@class='et_pb_button et_pb_button_0 et_pb_bg_layout_light']")
    }

    //add functions down here
    async gotoServicePage () {
        this.serviceTab.click()
        
    }

    //check for button
    async isTheBtnThere () {
        await expect(this.schSessionBtn).toBeVisible()
    }
}
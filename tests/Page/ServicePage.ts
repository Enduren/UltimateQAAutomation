import { expect, Locator, Page } from '@playwright/test';


export class ServicePage {
    // Define Selectors
    readonly page:Page
    readonly serviceTab:Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.serviceTab = page.locator("//ul[@id='menu-main-menu']//a[normalize-space()='Services']")
    }

    //add functions down here
    async gotoServicePage () {
        this.serviceTab.click()
        
    }
}
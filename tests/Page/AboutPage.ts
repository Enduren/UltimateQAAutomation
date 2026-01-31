import { expect, Locator, Page } from '@playwright/test';

export class AboutPage {
    // Define Selectors
    readonly page:Page
    readonly aboutPage:Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.aboutPage = page.locator("//ul[@id='menu-main-menu']//a[normalize-space()='About']")
    }

    //add functions down here
    async gotoAboutPage () {
        this.aboutPage.click()
    }
}
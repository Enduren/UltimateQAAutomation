import { expect, Locator, Page } from '@playwright/test';


export class NewsletterPage {
    // Define Selectors
    readonly page:Page
    readonly newslettersTab: Locator
    readonly emailInput:Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.newslettersTab = page.locator("//ul[@id='menu-main-menu']//a[normalize-space()='Newsletter']")
        this.emailInput = page.locator("//input[@id='email']")
    }

    //add functions down here
    async gotoNewslettersPage () {
        this.newslettersTab.click()
    }

    async checkEmail () {
        await expect(this.emailInput).toBeVisible()
    }
}
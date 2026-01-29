import { expect, Locator, Page } from '@playwright/test';


export class NewsletterPage {
    // Define Selectors
    readonly page:Page
    readonly newslettersTab: Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.newslettersTab = page.locator("//ul[@id='menu-main-menu']//a[normalize-space()='Newsletter']")
    }

    //add functions down here
}
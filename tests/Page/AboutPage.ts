import { expect, Locator, Page } from '@playwright/test';

export class AboutPage {
    // Define Selectors
    readonly page:Page
    readonly aboutPage:Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.aboutPage = page.locator("(//a[normalize-space()='Blog'])[1]")
    }

    //add functions down here
}
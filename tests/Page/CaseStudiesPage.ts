import { expect, Locator, Page } from '@playwright/test';

export class CaseStudiesPage {
    // Define Selectors
    readonly page:Page
    readonly caseStudiesTab: Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.caseStudiesTab = page.locator("//ul[@id='menu-main-menu']//a[normalize-space()='Case Studies']")

    }

    //add functions down here
    async gotoCaseStudiesPage () {
        this.caseStudiesTab.click()
    }
}
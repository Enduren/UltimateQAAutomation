import { expect, Locator, Page } from '@playwright/test';

export class CaseStudiesPage {
    // Define Selectors
    readonly page:Page
    readonly caseStudiesTab: Locator
    readonly h1CaseStudies: Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.caseStudiesTab = page.locator("//ul[@id='menu-main-menu']//a[normalize-space()='Case Studies']")
        this.h1CaseStudies = page.locator("div[class='et_pb_text_inner'] h1")
    }

    //add functions down here
    async gotoCaseStudiesPage () {
        this.caseStudiesTab.click()
    }

    async checkH1 () {
        await expect(this.h1CaseStudies).toBeVisible()
        
    }
}
import { expect, Locator, Page } from '@playwright/test';

export class CaseStudiesPage {
    // Define Selectors
    readonly page:Page
    readonly caseStudiesTab: Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.caseStudiesTab = page.locator("(//a[@href='#'][normalize-space()='Education'])[1]")

    }

    //add functions down here
}
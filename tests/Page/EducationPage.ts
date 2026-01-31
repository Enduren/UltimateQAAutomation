import { expect, Locator, Page } from '@playwright/test';


export class EducationPage {
    // Define Selectors
    readonly page:Page
    readonly educationPage:Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.educationPage = page.locator("(//a[@href='#'][normalize-space()='Education'])[1]")
    }

    //add functions down here
    async gotoEducationPage () {
        this.educationPage.click()
    }
}
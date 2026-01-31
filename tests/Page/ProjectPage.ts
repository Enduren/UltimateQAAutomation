import { expect, Locator, Page } from '@playwright/test';


export class ProjectPage {
    // Define Selectors
    readonly page:Page
    readonly projectsTab:Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.projectsTab = page.locator("//ul[@id='menu-main-menu']//a[normalize-space()='Projects']")
    }

    //add functions down here

    async gotoProjectPage () {
        this.projectsTab.click()
        
    }
}
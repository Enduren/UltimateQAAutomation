import { expect, Locator, Page } from '@playwright/test';


export class ProjectPage {
    // Define Selectors
    readonly page:Page
    readonly projectsTab:Locator
    readonly freeStrategyCallBtn:Locator
    readonly viewSolutionsBtn:Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.projectsTab = page.locator("//ul[@id='menu-main-menu']//a[normalize-space()='Projects']")
        this.freeStrategyCallBtn= page.locator('body > div:nth-child(2) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)')
        this.viewSolutionsBtn= page.locator("body > div:nth-child(2) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(1)")
    
    }

    //add functions down here

    async gotoProjectPage () {
        this.projectsTab.click()
        
    }

    async checkBtns () {

        await expect(this.freeStrategyCallBtn).toBeVisible()
       await expect(this.freeStrategyCallBtn).toBeVisible()
        
    }
}
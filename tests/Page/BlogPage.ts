import { expect, Locator, Page } from '@playwright/test';

export class BlogPage {
    // Define Selectors
    readonly page:Page
    readonly blogTab: Locator

    // Initialize selectors using constructor
    constructor(page:Page) {
        this.page=page
        this.blogTab = page.locator("(//a[normalize-space()='Blog'])[1]")

    }

    //add functions down here
}
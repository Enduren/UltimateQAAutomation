import { test, expect } from '@playwright/test';
import { HomePage } from '../Page/HomePage';

test.describe('check Ultimate website', () => {

  //Page Object
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    // Initialize Page Objects
    homePage= new HomePage(page)
    await homePage.visit()
    
  })
  

  test('Check That you are on the Home Page', async ({ page }) => {
    //check to see h1 is visible
    await homePage.assertHomePage()
  });
})



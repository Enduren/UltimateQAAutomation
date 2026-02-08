import { test, expect } from '@playwright/test';
import { HomePage } from '../Page/HomePage';
import { AboutPage } from '../Page/AboutPage';
import { BlogPage } from '../Page/BlogPage';
import { CaseStudiesPage } from '../Page/CaseStudiesPage';
import { EducationPage } from '../Page/EducationPage';
import { NewsletterPage } from '../Page/NewsletterPage';
import { ProjectPage } from '../Page/ProjectPage';
import { ServicePage } from '../Page/ServicePage';


test.describe('check Ultimate website', () => {

  //Page Object
  let homePage: HomePage
  let aboutPage: AboutPage
  let blogPage: BlogPage
  let caseStudiesPage:CaseStudiesPage
  let educationPage:EducationPage
  let newsletterPage:NewsletterPage
  let projectsPage: ProjectPage
  let servicePage:ServicePage

  test.beforeEach(async ({ page }) => {
    // Initialize Page Objects
    homePage= new HomePage(page)
    aboutPage = new AboutPage(page)
    blogPage= new BlogPage(page)
    caseStudiesPage= new CaseStudiesPage(page)
    educationPage= new EducationPage(page)
    newsletterPage= new NewsletterPage(page)
    projectsPage = new ProjectPage(page)
    servicePage = new ServicePage(page)

    await homePage.visit()
    await page.waitForTimeout(3000)
    
  })
  

  test('Check That you are on the Home Page', async ({ page }) => {
    //check to see h1 is visible
    await homePage.assertHomePage()
  });

   test('Check That you are on the Service Page', async ({ page }) => {
    //goto Service Page
    await servicePage.gotoServicePage()
    await page.waitForTimeout(3000)
    await servicePage.isTheBtnThere()
    
  });

  test('Check That you are on the Projects Page', async ({ page }) => {
    //goto Projects Page
    await projectsPage.gotoProjectPage()
    await page.waitForTimeout(3000)
    await projectsPage.checkBtns()
    
  });

   test('Check That you are on the Case Studies Page', async ({ page }) => {
    //goto Case Studies Page
    await caseStudiesPage.gotoCaseStudiesPage()
    await page.waitForTimeout(3000)
    await caseStudiesPage.checkH1()
  });

  test('Check That you are on the Blog Page', async ({ page }) => {
    //goto Blog Page
    await blogPage.gotoBlogPage()
    await page.waitForTimeout(3000)
    await blogPage.verifyBlogText()

  });

  test('Check That you are on the Newsletter Page', async ({ page }) => {
    //goto Newsletters Page
    await newsletterPage.gotoNewslettersPage()
    await page.waitForTimeout(3000)
  });

  test('Check That you are on the Education Page', async ({ page }) => {
    //goto Education Page
    await educationPage.gotoEducationPage()
    await page.waitForTimeout(3000)
  });

  test('Check That you are on the About Page', async ({ page }) => {
    //goto About Page
    await aboutPage.gotoAboutPage()
    await page.waitForTimeout(3000)
  });
  
 
  
  
 
  
})



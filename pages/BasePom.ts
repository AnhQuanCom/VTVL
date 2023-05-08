import { Page, Locator } from "@playwright/test";

export class BasePom{
    page;
    constructor(page: Page){
        this.page = page;
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async getPageUrl() {
        return this.page.url();
    }

    /**
   * Keeps reloading the page until the Locator is available or {MaxRetry} is reached
   * @param ExpectedLocator 
   * Locator needed to be available after the page reload
   * @param WaitTime 
   * Explicit wait {timeout} for the locator
   * @param page 
   * Page to be reloaded
   * @param MaxRetry
   * Max number of retries to reload the page
   */
  //  async ContinuousReload(ExpectedLocator: Locator, WaitTime: number, page: Page, MaxRetry: number){
  //   await page.reload({waitUntil: "load"});
    // await ExpectedLocator.waitFor({timeout: WaitTime}).catch(async () =>{
    //   (MaxRetry>0) ? await this.ContinuousReload(ExpectedLocator,WaitTime, page, MaxRetry-1) : null
    // })    
  //}
}

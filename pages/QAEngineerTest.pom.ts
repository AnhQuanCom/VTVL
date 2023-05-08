import { Page, Locator } from '@playwright/test';
import fs from 'fs';
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

export class QAEngineerTestPom{
  readonly page: Page;
  readonly icoVTVL: Locator;
  readonly btnAddress: Locator;
  readonly txtbxAddress: Locator;
  readonly txtbxMessage: Locator;
  readonly txtbxSignTheMessage: Locator;
  readonly txtbxVerifyTheMessage: Locator;
  readonly btnConnectionStatus: Locator;
  readonly btnSign:Locator;
  constructor(page: Page) {    
    this.page = page;
    this.btnAddress = page.locator('//div[@class=\'selected-account__address\']');
    this.icoVTVL = page.locator(`//*[@class='logo']`);
    this.txtbxAddress=page.locator('//*[@id="address"]');
    this.txtbxMessage=page.locator('//*[@id="message"]');
    this.txtbxSignTheMessage=page.locator('//button[text()=\'Sign the message\']');
    this.txtbxVerifyTheMessage=page.locator('//button[text()=\'Verify the signature\']');
    this.btnConnectionStatus=page.locator('//button[@class="btn_connect"]');
    this.btnSign=page.locator('//button[text()=\'Sign\']');
    }

  //#region General Page Object functions
  async getPageTitle() {
    return await this.page.title();
  }

  async getPageUrl() {
    return this.page.url();
  }

  // compares 2 images. function returns 0 if matched, a non-zero value if not matched
  async compareImages(pathImage1: string, pathImage2: string) {
    const img1 = PNG.sync.read(fs.readFileSync(pathImage1))
    const img2 = PNG.sync.read(fs.readFileSync(pathImage2))
    const {width, height} = img1
    return pixelmatch(img1.data, img2.data, null, width, height, {threshold: 0.1})
  }

  // async searchHorseWithRetries(input: string, maxRetries: number): Promise<string | null> {
  //   if (!maxRetries) 
  //     return null;
  //   await this.tfSearch.fill(input)
  //   await this.page.waitForTimeout(2000)
  //   await this.loader.waitFor({state: 'hidden', timeout: 30000})
  //   const result = await this.firstHorseName.innerText({timeout: 1000}).catch(() => null)
  //   if (!result) {
  //     await this.btnClearSearch.click()
  //     await this.loader.waitFor()
  //     await this.page.waitForTimeout(10000)
  //     return this.searchHorseWithRetries(input, maxRetries - 1)
  //   }
  //   return result
  // }

  // async getHorseWithOffspring(startId: number): Promise<any> {
  //   let res: any = await this.horseList(startId).click({timeout: 10000}).catch(() => null)
  //   if (res !== null) {
  //     res = await this.lblPanelValue(9).innerText()
  //     if (res === '0')
  //       return await this.getHorseWithOffspring(startId + 1)
  //   }
  //   return res
  // }

  // async getHorseWithNoOffspring(startId: number): Promise<any> {
  //   let res: any = await this.horseList(startId).click({timeout: 10000}).catch(() => null)
  //   if (res !== null) {
  //     res = await this.lblPanelValue(9).innerText()
  //     if (res !== '0')
  //       return await this.getHorseWithNoOffspring(startId + 1)
  //   }
  //   return res
  // }
  //#endregion

}

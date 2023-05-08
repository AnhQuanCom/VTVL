import {
  Page,
  Locator
} from '@playwright/test';
import {
  BasePom
} from './BasePom';

export class Metamask extends BasePom {
  readonly btnMetamaskGetStarted: Locator;
  readonly btnMetamaskImportWallet: Locator;
  readonly btnMetamaskIAgree: Locator;
  readonly textAreaMetamaskPassphrase: Locator;
  readonly txtMetamaskPassword: Locator;
  readonly txtMetamaskPasswordConfirm: Locator;
  readonly checkboxMetamaskAgree: Locator;
  readonly btnMetamaskImport: Locator;
  readonly btnMetamaskAllDone: Locator;
  readonly btnMetamaskClose: Locator;
  readonly btnMetamaskNetworkName: Locator;
  readonly btnMetamaskChooseNetwork: Locator;
  readonly btnMetamaskNext: Locator;
  readonly btnMetamaskConnect: Locator;
  readonly btnMetamaskSign: Locator;
  readonly btnMetamaskConfirm: Locator;
  readonly btnPolygonDepositSign: Locator;
  readonly addressInPolygonScan: Locator;
  readonly btnTransactionSign: Locator;
  readonly btnMetamaskCloseWhatNews: Locator;
  readonly btnAddress: Locator;
  readonly btnSign: Locator;
  readonly icoVTVL: Locator;
  readonly txtbxAddress: Locator;
  readonly txtbxMessage: Locator;
  readonly txtbxSignTheMessage: Locator;
  readonly txtbxVerifyTheMessage: Locator;
  readonly btnConnectionStatus: Locator;
  readonly toastifyValidationSignature:Locator;
  constructor(page: Page) {
    super(page);

    //These are from MM page
    this.btnMetamaskGetStarted = page.locator(`//button[text()='Get Started']`);
    this.btnMetamaskImportWallet = page.locator('//button[text()=\'Import wallet\']');
    this.btnMetamaskIAgree = page.locator('//button[text()=\'I Agree\']');
    this.textAreaMetamaskPassphrase = page.locator('[placeholder=\'Paste Secret Recovery Phrase from clipboard\']');
    this.txtMetamaskPassword = page.locator('#password');
    this.txtMetamaskPasswordConfirm = page.locator('#confirm-password');
    this.checkboxMetamaskAgree = page.locator('.first-time-flow__terms');
    this.btnMetamaskImport = page.locator('//button[text()=\'Import\']');
    this.btnMetamaskAllDone = page.locator('text=\'All Done\'');
    this.btnMetamaskClose = page.locator('[title=\'Close\']');
    this.btnMetamaskNetworkName = page.locator('.network-display');
    this.btnMetamaskChooseNetwork = page.locator('text=\'Goerli Test Network\'');
    this.btnMetamaskNext = page.locator('text=\'Next\'');
    this.btnMetamaskConnect = page.locator('text=\'Connect\'');
    this.btnMetamaskCloseWhatNews = page.locator('//button[@title=\'Close\']')
    this.btnMetamaskSign = page.locator('text=\'Sign\'');
    this.btnMetamaskConfirm = page.locator('//button[text()=\'Confirm\']');
    this.btnPolygonDepositSign = page.locator('.signature-request-footer .btn-primary.button');
    this.addressInPolygonScan = page.locator(`//span[contains(@class,'text-size-address text-secondary')]`);
    this.btnTransactionSign = page.locator('.signature-request-footer button.btn-primary');
    this.btnAddress = page.locator('//div[@class=\'selected-account__address\']');
    this.btnSign=page.locator('//button[text()=\'Sign\']');
    this.btnAddress = page.locator('//div[@class=\'selected-account__address\']');
    this.icoVTVL = page.locator(`//*[@class='logo']`);
    this.txtbxAddress=page.locator('//*[@id="address"]');
    this.txtbxMessage=page.locator('//*[@id="message"]');
    this.txtbxSignTheMessage=page.locator('//button[text()=\'Sign the message\']');
    this.txtbxVerifyTheMessage=page.locator('//button[text()=\'Verify the signature\']');
    this.btnConnectionStatus=page.locator('//button[@class="btn_connect"]');
    this.btnSign=page.locator('//button[text()=\'Sign\']');
    this.toastifyValidationSignature=page.locator('//div[@class="Toastify__toast-container Toastify__toast-container--top-right"]')
  }
}
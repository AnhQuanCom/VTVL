import * as data from './qa.json';
import {Metamask} from '../pages/Metamask.pom';
import fs from 'fs-extra';

import {
    test as baseTest,
    BrowserContext,
    chromium
} from '@playwright/test';

const pathToExtension = require('path').join(
    __dirname,
    '../extensions/MetaMask_10.1.1',
);

const testMM = baseTest.extend < {
    metamask: Metamask;
} > ({
    metamask: async ({
        baseURL
    }, use) => {
        let browserContext: BrowserContext = await chromium.launchPersistentContext('', {
            baseURL: baseURL,
            headless: false,
            timeout: 0,
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`,
                `--start-maximized`,
            ],
            recordVideo: {
                dir: 'videos/',
                size: {
                    width: 640,
                    height: 480
                },
            }
        });
        browserContext.grantPermissions(["clipboard-read", "notifications"]);

        let metamask: Metamask;
        let recipientSign: Metamask; //ToDo Isolate the zed locators.

        recipientSign = new Metamask(browserContext.pages()[0]);
        await Promise.all([
            browserContext.waitForEvent('page'),
            browserContext.backgroundPages()[0]
        ]);
        await browserContext.pages()[1].waitForLoadState();
        metamask = new Metamask(browserContext.pages()[1]);
        await metamask.btnMetamaskGetStarted.click();
        await metamask.btnMetamaskImportWallet.click();
        await metamask.btnMetamaskIAgree.click();
        await metamask.textAreaMetamaskPassphrase.type(data.seed_phrase);
        await metamask.txtMetamaskPassword.type(data.password);
        await metamask.txtMetamaskPasswordConfirm.type(data.password);
        await metamask.checkboxMetamaskAgree.click();
        await metamask.btnMetamaskImport.click();
        await metamask.btnMetamaskAllDone.click();
        await metamask.btnMetamaskClose.click();
        await metamask.btnMetamaskNetworkName.click();
        await metamask.btnMetamaskChooseNetwork.click();
        await recipientSign.page.bringToFront();
        await recipientSign.page.goto('/');
        await metamask.page.bringToFront();
        await metamask.page.reload();
        await metamask.btnMetamaskNext.click();
        await metamask.btnMetamaskConnect.click();
        await metamask.btnMetamaskClose.click();
        await metamask.btnAddress.click();
        // await metamask.page.close();
        await recipientSign.page.bringToFront();
        await recipientSign.btnConnectionStatus.click();
        await expect(recipientSign.btnConnectionStatus).toHaveText(/Connected!/);
        await recipientSign.txtbxAddress.click();
        await recipientSign.page.keyboard.press('Meta+KeyV');
        await recipientSign.txtbxMessage.fill('Hello from Candidate');
        await recipientSign.txtbxSignTheMessage.click();
        await recipientSign.txtbxMessage.focus();
        await metamask.page.bringToFront();
        await metamask.page.reload();
        await metamask.btnSign.click();
        await recipientSign.page.bringToFront();
        await recipientSign.txtbxVerifyTheMessage.click();
        await expect(recipientSign.toastifyValidationSignature).toContainText('Valid signature');
        let randomAddress='0x9948cF6323C5A41Bf673ADb9CFDf9D39a65A86e1'
        await recipientSign.txtbxAddress.click();
        await recipientSign.page.keyboard.press('Meta+KeyA');
        await recipientSign.page.keyboard.press('Backspace');
        await recipientSign.txtbxAddress.type(randomAddress,{delay:100});
        await recipientSign.txtbxVerifyTheMessage.click();
        await expect(recipientSign.toastifyValidationSignature).toContainText('Invalid signature');
        await use(recipientSign);
      
    }
})
export const test = testMM;
export const expect = test.expect;
const { chromium } = require('playwright');
const crx = require('crx');

// Path to the Metamask extension CRX file
const CRX_PATH = 'metamask.crx';
(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
      // Load the Metamask extension as a CRX file
      extensions: [await crx.load(CRX_PATH)],
    });
    const page = await context.newPage();
    
    // Navigate to a website that uses Metamask
    await page.goto('https://app.uniswap.org/');
    
    // Perform actions with Metamask here...
    
    await browser.close();
  })();
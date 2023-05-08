module.exports = {
    browser: ["chromium"],
    contextOptions: {
        ignoreHTTPSErrors: true,
        viewport: {
            width: 1280,
            height: 800
        },
        recordVideo: {
            dir: 'video/'
        }
    },
    errorOnPageError: false,
    launchOptions:{
        headless: false,
        screenshot: 'only-on-failure'
    }
}

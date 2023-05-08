module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    testRunner : 'jasmine2',
    transform:{
        "^.+\\.tsx?$": "ts-jest",
    },
    testTimeout: 120000,
    reporters: ["default", "jest-allure"],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['jest-allure/dist/setup','expect-playwright'],
    testMatch: [
        "**/tests/**/*.spec.(js|jsx|ts|tsx)",
        // "**/tests/**/*.test.(js|jsx|ts|tsx)"
    ],
    bail: 10,
    collectCoverage: true,
    testEnvironmentOptions: {
        "jest-playwright": {
            exitOnPageError: false,
            browsers: ["chromium"],
            launchOptions: {
                headless: false,
                screenshot: 'only-on-failure',
                trace: 'retain-on-failure',
            },
        },
    }
};

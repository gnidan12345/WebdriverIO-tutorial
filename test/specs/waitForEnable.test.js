const LoginPage = require('../pageobjects/login.page');
describe("Wait For Enabled", function () {
    it('should wait for the input field to be enabled', async () => {
        await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
        await LoginPage.enableButton.waitForDisplayed()
        await LoginPage.enableButton.click()
        await LoginPage.inputEnabledField.waitForEnabled({timeout:4000 })
        expect(LoginPage.inputEnabledField).toBeEnabled()
        expect(LoginPage.inputEnabledField).not.toBeDisplayed()
        await expect(LoginPage.enableButton).toHaveAttributeContaining('autocomplete', 'off')

        //browser.debug() Uncomment to test how the debug functionality works
    })
    it('should wait for the input field to be disabled', async () => {
        await LoginPage.enableButton.waitForDisplayed()
        await LoginPage.enableButton.click()
        await LoginPage.inputEnabledField.waitForEnabled({timeout:4000,reverse:true})
        expect(LoginPage.inputEnabledField).toBeDisabled()
    })
})
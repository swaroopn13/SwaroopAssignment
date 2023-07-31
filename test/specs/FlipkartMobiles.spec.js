const fObj = require('../pageobjects/Flipkart.page')
const fdata = require('../TestData/Flipkart.data')

describe('Verify the sort Functionality of flipkart for Mobiles search', function(){
    it('Search and sort the mobiles with brands', async() =>{

        await fObj.open()
        await fObj.verifyTitle(fdata.homeTitle)
        await browser.maximizeWindow()
        await fObj.signInPopup.click()
        await fObj.searchFunction(fdata.searchOption)
        await fObj.verifyTitle(fdata.mobileTitle)

        await fObj.selectAndSort()
        browser.pause(2000)
    })
})
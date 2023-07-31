const tpage = require('../pageobjects/Test.page')

describe('The Internet app', function(){
    it('Login functionality',  async () =>{

        await tpage.open()
        await browser.maximizeWindow()

        await tpage.searchAndSort()
        browser.pause(2000)
    })
})
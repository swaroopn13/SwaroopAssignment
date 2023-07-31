const page = require('./page');

class FlipkartPage extends page{

    open(){
        return super.open('flipkart')
    }

    async timeout(){
        await browser.pause(2000)
    }

    async verifyTitle(actTitle){
        expect(browser).toHaveTitle(actTitle)
    }

    get searchbox(){
        return $('input[name="q"]')
    }

    get searchButton(){
        return $('button[type="submit"]')
    }

    get signInPopup(){
        return $('/html/body/div[2]/div/div/button')
    }

    get lowtoHigh(){
        return $('//div[text()="Price -- Low to High"]')
    }

    get hightoLow(){
        return $('//div[text()="Price -- High to Low"]')
    }

    get firstMob(){
        return $('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div/div/a/div[2]/div[1]/div[1]')
    }
    
    get secondMob(){
        return $('//*[@id="container"]/div/div[3]/div/div[2]/div[3]/div/div/div/a/div[2]/div[1]/div[1]')
    }

    get thirdMob(){
        return $('//*[@id="container"]/div/div[3]/div/div[2]/div[4]/div/div/div/a/div[3]/div[1]/div[1]')
    }

    get forthMob(){
        return $('//*[@id="container"]/div/div[3]/div/div[2]/div[5]/div/div/div/a/div[2]/div[1]/div[1]')
    }

    get bName(){
        return $("//div[text()="+"'"+names[i]+"'"+"]")
    } 

    get firstPrice(){
        return $('//*[@id="container"]/div/div[3]/div/div[2]/div[2]/div/div/div/a/div[2]/div[2]/div[1]/div/div')
    }

    get price(){
        return $('//*[@id="container"]/div/div[3]/div/div[2]/div[2]/div/div/div/a/div[2]/div[2]/div[1]')
    }

    get dumPrice(){
        return $('//*[@id="container"]/div/div[3]/div/div[2]/div[2]/div/div/div/a/div[3]/div[2]/div[1]/div[1]')
    }

    async brandName(names) {
        // this.names = names[i]
         await $("//div[text()="+"'"+names+"'"+"]").click()
    } 

    getName(){
        return this.names
    }

    async searchFunction(searchOption){
        await this.searchbox.setValue(searchOption)
        await this.searchButton.click()
    }

    async selectAndSort(){
        const names = ["SAMSUNG", "APPLE", "realme", "OPPO"];

        for (let i=0; i<names.length; i++ ){
                
                await this.brandName(names[i])
                await this.timeout()
                await this.lowtoHigh.click() 
                await this.timeout()

                try {
                    var lowestPrice = await this.firstPrice.getText()
                    
                } catch (error) {
                    var lowestPrice = await this.dumPrice.getText()
                } 

                console.log("Lowest priced phone from "+names[i]+" = "+await this.firstMob.getText()+" And Price = "+lowestPrice)
                await this.timeout()
                await this.hightoLow.click()
                await this.timeout()

                try {
                    var highestPrice =  +await this.firstPrice.getText()
                    
                } catch (error) {
                    var highestPrice = await this.dumPrice.getText()
                }
            
                console.log("Heighest priced phone from "+names[i]+" = "+await this.firstMob.getText()+" and Price = "+highestPrice)
               
                await this.timeout()
                await this.brandName(names[i])
            }       
    }

}
module.exports = new FlipkartPage()
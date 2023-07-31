class TestPage {
    async brandName(names){
         $("//div[text()="+"'"+names+"'"+"]").click()
        
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

    get firstPriceH(){
        return $('//*[@id="container"]/div/div[3]/div/div[2]/div[2]/div/div/div/a/div[3]/div[2]/div[1]/div[1]')
    }


    get firstMob(){
        return $('//*[@id="container"]/div/div[3]/div/div[2]/div[2]/div/div/div/a/div[2]/div[2]/div[1]')
    }

    get lowtoHigh(){
        return $('//div[text()="Price -- Low to High"]')
    }

    get hightoLow(){
        return $('//div[text()="Price -- High to Low"]')
    }

    async open(){
        browser.url('https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY')
    }

    async searchAndSort(){
    const names = ["SAMSUNG", "APPLE", "realme", "OPPO"];

        for (let i=0; i<names.length; i++ ){
                
                await this.brandName(names[i])
                await browser.pause(2000)
                await this.lowtoHigh.click() 
                await browser.pause(2000)

                try {
                    var lowestPrice = await this.firstPrice.getText()
                    
                } catch (error) {
                    var lowestPrice = await this.dumPrice.getText()
                } 

                console.log("Lowest priced phone from "+names[i]+" = "+await this.firstMob.getText()+lowestPrice)

                

                await browser.pause(2000)
                await this.hightoLow.click()
                await browser.pause(2000)

                const print = "Demo";
                try {
                    var highestPrice =  +await this.firstPrice.getText()
                    
                } catch (error) {
                    var highestPrice = await this.dumPrice.getText()
                }
            

                console.log("Heighest priced phone from "+names[i]+" = "+await this.firstMob.getText()+highestPrice)
                
                await browser.pause(2000)
                await this.brandName(names[i])
                
            }
        }     
}
module.exports = new TestPage()
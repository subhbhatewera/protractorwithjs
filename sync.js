const { protractor } = require("protractor/built/ptor");
 
describe("Synchronization", function(){
 
    it("Sync Non Angular App", function(){
 
        browser.waitForAngularEnabled(false)
        browser.get("https://www.itgeared.com/demo/1506-ajax-loading.html");      
 
        element(by.css("a[href*='loadAjax']")).click();
 
        var EC = browser.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id("loader"))), 5000);
        //browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
        element(By.id("results")).getText().then(function(text)
        {
                console.log(text);
        })
 
 
        
    })
})

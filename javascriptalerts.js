const { element, browser } = require("protractor");

describe("Handling of Java Script Alert", function(){

    function openApp(){

        browser.waitForAngularEnabled(false)
        browser.get("https://rahulshettyacademy.com/AutomationPractice/");
        browser.manage().window().maximize();

    }

    function acceptAlert(){

        var alertBtn = element(by.id("alertbtn"));
        alertBtn.click();
        Alert = browser.switchTo().alert();
        Alert.accept().then(function(){
            browser.sleep(2000);
        })

    }

    function dismissAlert(){
        var alertBtn = element(by.id("alertbtn"));
        alertBtn.click();
        Alert = browser.switchTo().alert();
        Alert.dismiss().then(function(){
            browser.sleep(2000);
        })
    }

    it("Alert Test Case", function(){
        openApp();
        acceptAlert();
        dismissAlert();
    })
})
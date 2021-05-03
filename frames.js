const { browser, element } = require("protractor");

describe("Handle Iframe", function(){

    it("Switch to Iframe", function(){

        browser.waitForAngularEnabled(false)
        browser.get("https://rahulshettyacademy.com/AutomationPractice/");
        browser.manage().window().maximize();

        browser.switchTo().frame(0);

        element(by.linkText("Courses")).click();

        browser.switchTo().defaultContent();

        element(by.css("#name")).sendKeys("Rama").then(function(){
            browser.sleep(3000)
        })

    })
})
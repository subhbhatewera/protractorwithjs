const { browser, element } = require("protractor")

describe('Chain Locators Concept', function(){

    var firstNumber = element(by.model("first"));
    var secondNumber = element(by.model("second"));
    var goButton = element(by.id("gobutton"));
    var result ;

    var firstResultOfHistory = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));

    it('Use of Repeater Locator', function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.manage().window().maximize();
        firstNumber.sendKeys(2);
        secondNumber.sendKeys(5);
        goButton.click();

        result = (firstResultOfHistory.getText()).then(function(result){
            console.log(result)
        })

    })
})
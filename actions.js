const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Handle Shipsticks QQ Auto Suggest", function(){

    function closeWelcomeOfferPopup(){
        var closeIcon = element(by.css("div[class=modal-header] button[aria-label='Close']"));
        closeIcon.click();
    }

    function openApp(){
        browser.waitForAngularEnabled(false)
        browser.get("https://www.shipsticks.com/");
        browser.manage().window().maximize();
    }

    function selectOrigin(origin){
        var fromField = element(by.css("#o_company_name"));
        browser.actions().mouseMove(fromField.sendKeys(origin)).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    function selectDestination(destination){

        var toField = element(by.css("#d_company_name"));
        browser.actions().mouseMove(toField.sendKeys(destination)).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    function selectBag(bagType){
        
        var dropDown = element.all(by.tagName("option"));
        dropDown.each(function(item){
            item.getAttribute("value").then(function(value){
                if(value==bagType){
                    item.click();                    
                }
            })
        })
    }

    function clickOnGetQuoteButton(){
        var getQuoteButton = element(by.id("#get_quote"));
        getQuoteButton.click();
        var serviceType = element(by.css("span.service-type"));
        expect(serviceType.getText()).toEqual("Next Day Express");
    }
    
    
    it("Action Concepts", function(){

        openApp();
        closeWelcomeOfferPopup();
        selectOrigin("Aloha");
        selectDestination("Bandon");
        selectBag("Standard");
        clickOnGetQuoteButton();
        
    })

})
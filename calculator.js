const { browser, element } = require("protractor");

describe('Check different Calculator operations', function(){

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var operationDropDown = element(by.model('operator'));
    var substrationOption = element(by.xpath("//option[@value='SUBTRACTION']"));
    var multiplicationOption = element(by.xpath("//option[@value='MULTIPLICATION']"));
    var divisionOption = element(by.xpath("//option[@value='DIVISION']"));
    var result = element(by.xpath("//h2[@class='ng-binding']"));

    //This block will execute before each and every it block
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.manage().window().maximize();
    });

    //Test Case 1
    it('Validation Title of Webpage', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    //Test Case 2
    it('Validate Addition of two given numbers', function(){
        firstNumber.sendKeys(2);
        secondNumber.sendKeys(5);
        goButton.click();
        expect(result.getText()).toEqual("7");
    });

    //Test Case3
    it('Validate Substraction of two given numbers', function(){
        firstNumber.sendKeys(10);
        secondNumber.sendKeys(2);
        operationDropDown.click();
        substrationOption.click();
        goButton.click();
        expect(result.getText()).toEqual('8');
    });

    //Test Case4
    it('Validate Multiplication of two given numbers', function(){
        firstNumber.sendKeys(5);
        secondNumber.sendKeys(6);
        operationDropDown.click();
        multiplicationOption.click();
        goButton.click();
        expect(result.getText()).toEqual('30');
    });

    //Test Case5
    it('Validate Division of two given numbers', function(){
        firstNumber.sendKeys(100);
        secondNumber.sendKeys(4);
        operationDropDown.click();
        divisionOption.click();
        goButton.click();
        expect(result.getText()).toEqual('25');
    });

});
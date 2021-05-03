const { browser, element } = require("protractor");

describe('Calculator', function(){

    it('Validation Addition of two numbers', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.manage().window().maximize();
        element(by.model('first')).sendKeys(8);
        element(by.model('second')).sendKeys(5);
        element(by.model('operator')).click();
        element(by.xpath("//option[@value='SUBTRACTION']")).click();
        element(by.id('gobutton')).click();

        var result = element(by.xpath('//h2')).getText();
        expect(result).toEqual('3');

    });
});
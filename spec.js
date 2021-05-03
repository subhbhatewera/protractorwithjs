const { element, browser } = require("protractor");

describe('Enter name feature', function(){

    it('Should enter name as Ram', function(){

        browser.get('https://angularjs.org/');

        browser.manage().window().maximize();

        element(by.model('yourName')).sendKeys('Ram') ;

        var nameElement = element(by.xpath('(//h1)[2]')) ;

        expect(nameElement.getText()).toEqual('Hello Ram!') ;

    });
});

describe('Protractor Demo App', function(){

    it('Enter test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('Lalchand');

        browser.driver.sleep(2000);

    });

});
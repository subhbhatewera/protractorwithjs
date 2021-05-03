const { browser, element, by } = require("protractor")

describe('Super Calulator Test Suite', function(){

    //Use promise concept while reteriving data
    it('Add given numbers', function(){

        browser.get('http://juliemr.github.io/protractor-demo/')
        browser.manage().window().maximize();
        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(12);
        element(by.buttonText('Go!')).click();

        var result = element(by.css("h2[class='ng-binding']")).getText().then(function(result){
            console.log(result)
        })
    })

    it('Use Jasmine for validation', function(){
        element(by.model('first')).sendKeys(10);
        element(by.model('second')).sendKeys(15);
        element(by.buttonText('Go!')).click();

        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("25")
    })
})
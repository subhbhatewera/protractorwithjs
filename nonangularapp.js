const { browser, element } = require("protractor")

describe('Automate Non Angular Website', function(){

    var email = element(by.css('#username')) ;
    var password = element(by.css('#password')) ;
    var loginButton = element(by.css('#button'));
    var dashboardHeading = element(by.css('h1.page-head'));

    it('Opne Webgility Online', function(){
        browser.waitForAngularEnabled(false)
        browser.get('https://unify.webgility.com/')
        browser.manage().window().maximize();
    })

    it("Validate Login", function(){
       email.sendKeys("subhash.bhatewera+85wolive@webgility.com");
       password.sendKeys("Indore@1234");
       loginButton.click();
       expect(dashboardHeading.getText()).toBe("Dashboard");
    })
})
const { element, browser } = require("protractor");

describe("Switch Window", function(){

    function openApp(){
        browser.waitForAngularEnabled(false)
        browser.get("https://unify.webgility.com/");
        browser.manage().window().maximize();
    }

    function switchWindow(){

        var signUpLink = element(by.css("#linksignUpfree"));
        signUpLink.click();

         browser.getWindowHandle().then(function(parentWindow){

            browser.getAllWindowHandles().then(function(allWindows){

                for( var myWindow of allWindows){

                    if(myWindow != parentWindow){

                        browser.switchTo.window(myWindow).then(function(){
                            element(by.css(".form-field.Full_Name.required label")).sendKeys(Ram);
                        })                        
                    }
                }                
            })
         })
    }

    function newSwitch(){
        browser.getTitle().then(function(parentTitle){
            console.log("Parent window title before switching -> "+parentTitle)
        })
        var signUpLink = element(by.css("#linksignUpfree"));
        signUpLink.click();

        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                browser.getTitle().then(function(childTitle){
                    console.log("Child window title after switching -> "+childTitle);
                })
            });
            browser.switchTo().window(handles[0]).then(function(){
                browser.getTitle().then(function(title){
                    console.log("Parent window title after switching back -> "+title)
                })
            })
        })
    }
    
    
    
    it("Switch to WO Signup page", function(){
        openApp();
        //switchWindow();
        newSwitch();
    })
})
const using = require("jasmine-data-provider");
const { browser } = require("protractor");

describe("Super Calculator Automation using page objects", ()=>{
    var cal = require("./pageObjects/calculator");
    var d = require("./data.js")

    beforeEach(()=>{
        cal.getURL();
    })

    //data will hold the actual data from the file
    //description will hold sub oject name
    //for each iteration one data set will be picked
    using(d.datadriven, function(data, description){

        it("Add two numbers "+description, ()=>{        
            cal.firstEditField.sendKeys(data.firstInput);
            cal.secondEditField.sendKeys(data.secondInput);
            cal.goBtn.click();
            cal.firstResult.getText().then((text)=>{
                console.log(text);
            })
            expect(cal.firstResult.getText()).toEqual(data.result);
        })

    });

    
})
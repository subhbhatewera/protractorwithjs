const { element, browser } = require("protractor");

function calculator(){
    this.firstEditField = element(by.model("first"));
    this.secondEditField = element(by.model("second"));
    this.goBtn=element(by.buttonText("Go!"));
    this.firstResult=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));

    this.getURL=()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
    };
}

module.exports = new calculator();
const { element } = require("protractor");

describe("Enhanced Calculator Test Suite", function(){

    function calculation(operand1, operand2, operation){

        var firstNumber = element(by.model('first'));
        firstNumber.sendKeys(operand1);
        
        var secondNumber = element(by.model('second'));
        secondNumber.sendKeys(operand2);

        var dropdownOptions = element.all(by.tagName("option"));
        dropdownOptions.each(function(option){
            option.getAttribute("value").then(function(value){
                if(value==operation){
                    option.click();
                }
            })            
        })
        
        var goButton = element(by.id('gobutton'));
        goButton.click();
    }

    function getData(){

        var rows = element.all(by.repeater("result in memory"));
        rows.each(function(item){
            var resultElements = item.element(by.css("td:nth-child(3)"));
            resultElements.getText().then(function(result){
                console.log(result);
            })
        })
    }

    it("Execute Calculator", function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.manage().window().maximize();
        calculation(10,2,"SUBTRACTION")
        calculation(50,456,"ADDITION")
        calculation(1000,25,"DIVISION")
        calculation(100,3,"SUMODULOBTRACTION")
        calculation(21,42,"MULTIPLICATION")
        getData();

    })



})
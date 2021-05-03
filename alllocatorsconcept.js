const { browser, element } = require("protractor");

function add(a,b){

    var firstNumber = element(by.model("first"));
    var secondNumber = element(by.model("second"));
    var goButton = element(by.id("gobutton"));

    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();

}

describe("Handle Web PageTable", function(){

    it("Get the count of number of rows",function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.manage().window().maximize();

        var i = 4 ;
        var a = 5 ;
        var b = 8 ;
        
        while(i>0){

            add(a,b)
            a = a + 3 ;
            b = b + 7 ;
            i--;

        }
        //Print the count of number of rows
        var rows = element.all(by.repeater("result in memory"));
        rows.count().then(function(numberOfRows){
            console.log("Number of rows present under History section are -> "+numberOfRows)
            console.log("**********************************************************************")
        })
        
        //Print the result for each row
        rows.each(function(item){

            var resultElement = item.element(by.css("td:nth-child(3)"));
            
            resultElement.getText().then(function(result){
                console.log("Result is -> "+result);               
            })

        })



    })
})
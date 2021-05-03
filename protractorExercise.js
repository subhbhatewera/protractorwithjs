const { browser, element } = require("protractor")

describe("Automate Protractor Practice App", function(){

    var nameField = element(by.name("name"));
    var emailField = element(by.css("input[name='email']"));
    var passwordField = element(by.id("exampleInputPassword1"));
    var checkMeOutCheckBox = element(by.css("#exampleCheck1"));
    var femaleOption = element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female"));
    var studentRadioBtn = element(by.id("inlineRadio1"));
    var employedRadioBtn = element(by.id("inlineRadio2"));
    var dateField = element(by.css("[name='bday']"));
    var submitBtn = element(by.buttonText("Submit"));
    var successMsg = element(by.css("[class*='alert-success']"));
    var errorMsg = element(by.css("[class*='danger']"));
    var shopLink = element(by.linkText("Shop"));
    var cards = element.all(by.tagName("app-card"));    
    var addBtn = element(by.css("[class*=btn-info]"));
    var checkOutBtn = element(by.partialLinkText("Checkout"));

    function openApp(){
        browser.get("https://rahulshettyacademy.com/angularpractice/");
        browser.manage().window().maximize();
    }

    function enterName(name){
        nameField.sendKeys(name);
    }

    function enterEmail(email){
        emailField.sendKeys(email);
    }

    function enterPassword(password){
        passwordField.sendKeys(password);
    }

    function selectCheckMeOutCheckBox(){
        checkMeOutCheckBox.click();
    }

    function selectGender(){
        femaleOption.click();
    }

    function selectRadioBtn(status){
        if(status=="Student"){
            studentRadioBtn.click();
        }
        else if(status=="Employed"){
            employedRadioBtn.click();
        }
    }

    function enterDOB(dob){
        dateField.sendKeys(dob)
    }

    function clickOnSubmitBtn(){
        submitBtn.click();
        successMsg.getText().then(function(text){
            console.log(text);
        })
    }

    function clickOnShopLink(){
        shopLink.click();
    }

    function clickOnAddBtn(productName){
        cards.each(function(item){
            item.element(by.css("h4 a")).getText().then(function(text){
                if(text==productName){
                    addBtn.click();
                }
            })
        })
    }

    function getProductCount(productCount){
        checkOutBtn.getText().then(function(text){
            //We are getting text as Checkout ( 1 ) so we need to slice it for comparision
            var count = text.slice(11,12);
            var numericCount = Number(count);
           // expect(count).toEqual(productCount);
            expect(numericCount).toBe(productCount);
        })
    }

    beforeEach(function(){

        openApp();

    })


   it("ProtoCommerce Signup Form", function(){
            
            enterName("Hema");
            enterEmail("hema@yopmail.com");
            enterPassword("Welcome@123");
            selectCheckMeOutCheckBox();
            selectGender();
            selectRadioBtn("Employed");
            enterDOB("10081993")
            clickOnSubmitBtn();
         //   expect(successMsg.getText()).toEqual("Success! The Form has been submitted successfully!.");

        })

    it("Validate validation message for incomplete name", function(){

        enterName("R");  
        emailField.click();      
        expect(errorMsg.getText()).toEqual("Name should be at least 2 characters")
      
    })

    it("Validate validation for blank name field", function(){

        nameField.click();
        submitBtn.click();
        expect(errorMsg.getText()).toEqual("Name is required");

    })

    it("Validate validation for blank email field", function(){

        emailField.click();
        submitBtn.click();
        expect(errorMsg.getText()).toEqual("Email is required");

    })

    it("Add Product in Card", function(){

        clickOnShopLink();
        clickOnAddBtn("Nokia Edge");
        clickOnAddBtn("Blackberry");
        getProductCount(2);
        
    })
 })
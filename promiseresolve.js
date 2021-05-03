const { browser } = require("protractor")

describe('Validate the Asynchronous behaviour of JS', function(){

   

    it('Handle Asynchronous', function(){

        browser.get('https://angularjs.org/');
        browser.get('https://angular.io/').then(function(){
            console.log('Asynchronous - This is the last statement');
        })
    })
})
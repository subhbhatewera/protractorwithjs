const { browser } = require("protractor")

describe('Protractor Demo Suite', function(){
  
    it('Open legacy site of Angular', function(){

        browser.get("https://angularjs.org/");

    })

    it('Open latest site of Angular', function(){

        browser.get('https://angular.io/');

    })

})
const { browser} = require("protractor");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
   // seleniumAddress : 'http://localhost:4444/wd/hub/',
    directConnect:true,
    framework:'jasmine2',
    specs : ['calculatortest.js'],
    onPrepare: function() {
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
          })
        );
     },
     suites:{
        smoke : ['enhancedcalculator.js', 'javascriptalerts.js']
     },
     jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
      }    
};
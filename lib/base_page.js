var webdriver = require('selenium-webdriver');
var assert = require('assert');
chrome = require('selenium-webdriver/chrome');

By = webdriver.By;
until = webdriver.until;
var o = new chrome.Options();
var fake = require('../utils/fake_data.js')
// here i init a lot of basic functions
    var Page = function() {
      this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
      var driver = this.driver;
      this.fake = fake;

      this.visit = function(url){
        return driver.get(url);
      }
      this.quit = function(url){
        return driver.quit();
      }
      this.findXpath = function(xpath){

        return driver.findElement(By.xpath(xpath));
      }
      this.write = function(el,text){
         return this.findXpath(el).sendKeys(text);
      }
      this.stale = function(el){
         return driver.wait(until.stalenessOf(el,50000));
      }
      this.newpage = function(url)
      {
         return driver.wait(until.urlConatains(el),50000));
      }

    }

module.exports = Page;

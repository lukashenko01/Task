var Page = require ('./base_page.js');
var Xpath = require ('../utils/Xpathes.js');

Page.prototype.ElementHide = function ()
    {
        this.visit('http://2.qa.2min.club');
        this.write(Xpath.firstemail,this.fake().email);
        this.findXpath(Xpath.sbmtButton).click();
        var adv = this.findXpath('//*[@id="default-gw-ctrl"]/div/div/div[1]');
        var shop =  this.findXpath(Xpathes.ShopNowBtn);

       this.stale(adv);
      /*
        Here driver dont wait until element will deleting from DOM and
        run next function . I try execute a lot of variants like
        then(function(){ some code ... }) or change stale method of Page ,etc
        But it still dont work . Maybe i cant execute some code calling promise
        value that driver.wait() shold return .I dont find decision of this problem
      */

    }
Page.prototype.ShopNow = function ()
    {
        this.findXpath(Xpathes.ShopNowBtn).click();
        this.newpage('http://2.qa.2min.club/nxnbeauty/products?productId=138').then(function(){
            return this.findXpath('//*[@id="desktop-btn-atc"]').click();}

    }
Page.prototype.CheckOut = function ()
    {
        this.newpage('http://2.qa.2min.club/CartV2/SecureCheckout');
        this.write(Xpath.name,this.fake().name);
        this.write(Xpath.lastname,this.fake().lastname);
        this.write(Xpath.adress,this.fake().adress);
        this.write(Xpath.optional,this.fake().optional);
        this.write(Xpath.city,this.fake().city);
        this.write(Xpath.state,this.fake().state);
        this.write(Xpath.zipcode,this.fake().zipcode);
    }
Page.prototype.CheckCard = function (card number)
    {
      /*
        Here driver shouid find input for cardnumber but it cant do that.I guess
        that driver cant se it couse window should be scrolled to him.
        Try driver.executeScript("window.scrollBy(0,500)"), but windoe just jupm
        down ant return to the top
      */

      //then we click() on Pay button and wait intil element with Error is elementLocated
      driver.wait(until.elementisLocated(css),time);
      //Finaly we getText() the promise value of error,return it and chai check it
      return driver.findElement(By.css()) ;
    }



module.exports = Page;

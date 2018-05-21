
var Page = require ('../lib/home_page.js');
var webdriver = require('selenium-webdriver');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var should = chai.should();
chai.use(chaiAsPromised);
 { describe , before , after , it }  require('selenium-webdriver/testing');


var page;
    describe('library app scenarious', function() {
        this.timeout(50000);

        before(function ()
        {
            page = new Page();
            page.ElementHide();
            page.ShopNow();
        });
        after(function ()
        {
            page.quit();
        });
/* Each test  should sendKeys in the inputs and then assert using chai .
returns value will be equal to Eroor massage in test case
        it('Test1',function ()
          {
            CheckOut();
            var ErrorText = CheckCard(cardNumber);
            Errortext.should.eventualy.equal('Error text')

          });


          it('Test2',function ()
            {
              CheckOut();
              var ErrorText = CheckCard(cardNumber);
              Errortext.should.eventualy.equal('Error text')

            });
            it('Test3',function ()
              {
                CheckOut();
                var ErrorText = CheckCard(cardNumber);
                Errortext.should.eventualy.equal('Error text')

              });
*/
        });

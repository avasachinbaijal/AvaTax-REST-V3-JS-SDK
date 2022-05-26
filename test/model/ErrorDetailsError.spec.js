/**
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Sachin Baijal <sachin.baijal@avalara.com>
 * @author     Jonathan Wenger <jonathan.wenger@avalara.com>
 * @copyright  2004-2022 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    2.2.5
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AvalaraSdk);
  }
}(this, function(expect, AvalaraSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AvalaraSdk.Shipping.ErrorDetailsError();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ErrorDetailsError', function() {
    it('should create an instance of ErrorDetailsError', function() {
      // uncomment below and update the code to test ErrorDetailsError
      //var instance = new AvalaraSdk.ErrorDetailsError();
      //expect(instance).to.be.a(AvalaraSdk.ErrorDetailsError);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new AvalaraSdk.ErrorDetailsError();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new AvalaraSdk.ErrorDetailsError();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new AvalaraSdk.ErrorDetailsError();
      //expect(instance).to.be();
    });

  });

}));

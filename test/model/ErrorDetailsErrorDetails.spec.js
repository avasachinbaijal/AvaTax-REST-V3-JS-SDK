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
    instance = new AvalaraSdk.ErrorDetailsErrorDetails();
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

  describe('ErrorDetailsErrorDetails', function() {
    it('should create an instance of ErrorDetailsErrorDetails', function() {
      // uncomment below and update the code to test ErrorDetailsErrorDetails
      //var instance = new AvalaraSdk.ErrorDetailsErrorDetails();
      //expect(instance).to.be.a(AvalaraSdk.ErrorDetailsErrorDetails);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new AvalaraSdk.ErrorDetailsErrorDetails();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new AvalaraSdk.ErrorDetailsErrorDetails();
      //expect(instance).to.be();
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new AvalaraSdk.ErrorDetailsErrorDetails();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new AvalaraSdk.ErrorDetailsErrorDetails();
      //expect(instance).to.be();
    });

    it('should have the property faultCode (base name: "faultCode")', function() {
      // uncomment below and update the code to test the property faultCode
      //var instance = new AvalaraSdk.ErrorDetailsErrorDetails();
      //expect(instance).to.be();
    });

    it('should have the property helpLink (base name: "helpLink")', function() {
      // uncomment below and update the code to test the property helpLink
      //var instance = new AvalaraSdk.ErrorDetailsErrorDetails();
      //expect(instance).to.be();
    });

    it('should have the property severity (base name: "severity")', function() {
      // uncomment below and update the code to test the property severity
      //var instance = new AvalaraSdk.ErrorDetailsErrorDetails();
      //expect(instance).to.be();
    });

  });

}));

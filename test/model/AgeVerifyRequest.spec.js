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
    instance = new AvalaraSdk.AgeVerification.AgeVerifyRequest();
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

  describe('AgeVerifyRequest', function() {
    it('should create an instance of AgeVerifyRequest', function() {
      // uncomment below and update the code to test AgeVerifyRequest
      //var instance = new AvalaraSdk.AgeVerifyRequest();
      //expect(instance).to.be.a(AvalaraSdk.AgeVerifyRequest);
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new AvalaraSdk.AgeVerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new AvalaraSdk.AgeVerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new AvalaraSdk.AgeVerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property DOB (base name: "DOB")', function() {
      // uncomment below and update the code to test the property DOB
      //var instance = new AvalaraSdk.AgeVerifyRequest();
      //expect(instance).to.be();
    });

  });

}));

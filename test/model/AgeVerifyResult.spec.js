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
    instance = new AvalaraSdk.AgeVerifyResult();
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

  describe('AgeVerifyResult', function() {
    it('should create an instance of AgeVerifyResult', function() {
      // uncomment below and update the code to test AgeVerifyResult
      //var instance = new AvalaraSdk.AgeVerifyResult();
      //expect(instance).to.be.a(AvalaraSdk.AgeVerifyResult);
    });

    it('should have the property isOfAge (base name: "isOfAge")', function() {
      // uncomment below and update the code to test the property isOfAge
      //var instance = new AvalaraSdk.AgeVerifyResult();
      //expect(instance).to.be();
    });

    it('should have the property failureCodes (base name: "failureCodes")', function() {
      // uncomment below and update the code to test the property failureCodes
      //var instance = new AvalaraSdk.AgeVerifyResult();
      //expect(instance).to.be();
    });

  });

}));

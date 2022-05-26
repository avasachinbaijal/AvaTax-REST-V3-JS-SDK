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
  var config = {
      appName: 'asv-sdk-test-app',
      appVersion: '1.0',
      environment: 'sandbox',
      machineName: 'test-machine',
      timeout:200000000,
      username: 'foo',
      password: 'bar'
  };
  var apiClient = new AvalaraSdk.ApiClient(config);

  beforeEach(function() {
    instance = new AvalaraSdk.Shipping.ShippingVerificationApi(apiClient);
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

  describe('ShippingVerificationApi', function() {
    describe('deregisterShipment', function() {
      it('should call deregisterShipment successfully', function(done) {
        //uncomment below and update the code to test deregisterShipment
        //instance.deregisterShipment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerShipment', function() {
      it('should call registerShipment successfully', function(done) {
        //uncomment below and update the code to test registerShipment
        //instance.registerShipment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerShipmentIfCompliant', function() {
      it('should call registerShipmentIfCompliant successfully', function(done) {
        //uncomment below and update the code to test registerShipmentIfCompliant
        //instance.registerShipmentIfCompliant(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyShipment', function() {
      it('should call verifyShipment successfully', function(done) {
        //uncomment below and update the code to test verifyShipment
        //instance.verifyShipment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
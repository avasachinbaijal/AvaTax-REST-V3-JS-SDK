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
 * @version    2.4.13-beta
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AgeVerifyFailureCode', 'model/AgeVerifyRequest', 'model/AgeVerifyRequestAddress', 'model/AgeVerifyResult', 'model/ErrorDetails', 'model/ErrorDetailsError', 'model/ErrorDetailsErrorDetails', 'model/ShippingVerifyResult', 'model/ShippingVerifyResultLines', 'api/AgeVerificationApi', 'api/ShippingVerificationApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AgeVerifyFailureCode'), require('./model/AgeVerifyRequest'), require('./model/AgeVerifyRequestAddress'), require('./model/AgeVerifyResult'), require('./model/ErrorDetails'), require('./model/ErrorDetailsError'), require('./model/ErrorDetailsErrorDetails'), require('./model/ShippingVerifyResult'), require('./model/ShippingVerifyResultLines'), require('./api/AgeVerificationApi'), require('./api/ShippingVerificationApi'));
  }
}(function(ApiClient, AgeVerifyFailureCode, AgeVerifyRequest, AgeVerifyRequestAddress, AgeVerifyResult, ErrorDetails, ErrorDetailsError, ErrorDetailsErrorDetails, ShippingVerifyResult, ShippingVerifyResultLines, AgeVerificationApi, ShippingVerificationApi) {
  'use strict';

  /**
   * API_for_evaluating_transactions_against_direct_to_consumer_Beverage_Alcohol_shipping_regulations_This_API_is_currently_in_beta_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AvalaraShippingVerificationOnly = require('index'); // See note below*.
   * var xxxSvc = new AvalaraShippingVerificationOnly.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AvalaraShippingVerificationOnly.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AvalaraShippingVerificationOnly.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AvalaraShippingVerificationOnly.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.4.13-beta
   */
ApiClient.clientSdkVersion = '2.4.13-beta';
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient.default,
    /**
     * The AgeVerifyFailureCode model constructor.
     * @property {module:model/AgeVerifyFailureCode}
     */
    AgeVerifyFailureCode: AgeVerifyFailureCode.default,
    /**
     * The AgeVerifyRequest model constructor.
     * @property {module:model/AgeVerifyRequest}
     */
    AgeVerifyRequest: AgeVerifyRequest.default,
    /**
     * The AgeVerifyRequestAddress model constructor.
     * @property {module:model/AgeVerifyRequestAddress}
     */
    AgeVerifyRequestAddress: AgeVerifyRequestAddress.default,
    /**
     * The AgeVerifyResult model constructor.
     * @property {module:model/AgeVerifyResult}
     */
    AgeVerifyResult: AgeVerifyResult.default,
    /**
     * The ErrorDetails model constructor.
     * @property {module:model/ErrorDetails}
     */
    ErrorDetails: ErrorDetails.default,
    /**
     * The ErrorDetailsError model constructor.
     * @property {module:model/ErrorDetailsError}
     */
    ErrorDetailsError: ErrorDetailsError.default,
    /**
     * The ErrorDetailsErrorDetails model constructor.
     * @property {module:model/ErrorDetailsErrorDetails}
     */
    ErrorDetailsErrorDetails: ErrorDetailsErrorDetails.default,
    /**
     * The ShippingVerifyResult model constructor.
     * @property {module:model/ShippingVerifyResult}
     */
    ShippingVerifyResult: ShippingVerifyResult.default,
    /**
     * The ShippingVerifyResultLines model constructor.
     * @property {module:model/ShippingVerifyResultLines}
     */
    ShippingVerifyResultLines: ShippingVerifyResultLines.default,
    /**
     * The AgeVerificationApi service constructor.
     * @property {module:api/AgeVerificationApi}
     */
    AgeVerificationApi: AgeVerificationApi.default,
    /**
     * The ShippingVerificationApi service constructor.
     * @property {module:api/ShippingVerificationApi}
     */
    ShippingVerificationApi: ShippingVerificationApi.default
  };

  return exports;
}));
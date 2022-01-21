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
 * @version    2.1.6
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AgeVerifyFailureCode', 'model/AgeVerifyRequest', 'model/AgeVerifyResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AgeVerifyFailureCode'), require('../model/AgeVerifyRequest'), require('../model/AgeVerifyResult'));
  } else {
    // Browser globals (root is window)
    if (!root.AvalaraSdk) {
      root.AvalaraSdk = {};
    }
    root.AvalaraSdk.AgeVerificationApi = factory(root.AvalaraSdk.ApiClient, root.AvalaraSdk.AgeVerifyFailureCode, root.AvalaraSdk.AgeVerifyRequest, root.AvalaraSdk.AgeVerifyResult);
  }
}(this, function(ApiClient, AgeVerifyFailureCode, AgeVerifyRequest, AgeVerifyResult) {
  'use strict';

  /**
   * AgeVerification service.
   * @module api/AgeVerificationApi
   * @version 2.1.6
   */

  /**
   * Constructs a new AgeVerificationApi. 
   * @alias module:api/AgeVerificationApi
   * @class
   * @param {module:ApiClient} [apiClient] API client implementation to use.
   */
  var exports = function(apiClient) {
    if (!apiClient) {
        throw new Error('apiClient is a required parameter.');
    }
    this.apiClient = apiClient;


    /**
     * Callback function to receive the result of the verifyAge operation.
     * @callback module:api/AgeVerificationApi~verifyAgeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AgeVerifyResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Determines whether an individual meets or exceeds the minimum legal drinking age.
     * The request must meet the following criteria in order to be evaluated: * *firstName*, *lastName*, and *address* are required fields. * One of the following sets of attributes are required for the *address*:   * *line1, city, region*   * *line1, postalCode*  Optionally, the transaction and its lines may use the following parameters: * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21). * Beyond the required *address* fields above, a *country* field is permitted   * The valid values for this attribute are [*US, USA*]  **Security Policies** This API depends on the active subscription *AgeVerification*
     * @param {module:model/AgeVerifyRequest} ageVerifyRequest Information about the individual whose age is being verified.
     * @param {Object} opts Optional parameters
     * @param {module:model/AgeVerifyFailureCode} opts.simulatedFailureCode (Optional) The failure code included in the simulated response of the endpoint. Note that this endpoint is only available in Sandbox for testing purposes.
     * @param {module:api/AgeVerificationApi~verifyAgeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AgeVerifyResult}
     */
    this.verifyAge = function(ageVerifyRequest, opts, callback) {
      opts = opts || {};
      var postBody = ageVerifyRequest;
      // verify the required parameter 'ageVerifyRequest' is set
      if (ageVerifyRequest === undefined || ageVerifyRequest === null) {
        throw new Error("Missing the required parameter 'ageVerifyRequest' when calling verifyAge");
      }

      var pathParams = {
      };
      var queryParams = {
        'simulatedFailureCode': opts['simulatedFailureCode'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AgeVerifyResult;
      return this.apiClient.callApi(
        '/api/v2/ageverification/verify', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
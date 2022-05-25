"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _AgeVerifyFailureCode = _interopRequireDefault(require("../../model/AgeVerification/AgeVerifyFailureCode"));

var _AgeVerifyRequest = _interopRequireDefault(require("../../model/AgeVerification/AgeVerifyRequest"));

var _AgeVerifyResult = _interopRequireDefault(require("../../model/AgeVerification/AgeVerifyResult"));

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
 * @version    2.4.36
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

/**
* AgeVerification service.
* @module api/AgeVerification/AgeVerificationApi
* @version 2.4.36
*/
var AgeVerificationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AgeVerificationApi. 
  * @alias module:api/AgeVerification/AgeVerificationApi
  * @class
  * @param {module:ApiClient} [apiClient] API client implementation to use
  */
  function AgeVerificationApi(apiClient) {
    (0, _classCallCheck2["default"])(this, AgeVerificationApi);

    if (!apiClient) {
      throw new Error('apiClient is a required parameter.');
    }

    this.apiClient = apiClient;
    this.apiClient.sdkVersion = '2.4.36';
  }
  /**
   * Callback function to receive the result of the verifyAge operation.
   * @callback module:api/AgeVerification/AgeVerificationApi~verifyAgeCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AgeVerification/AgeVerifyResult} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Determines whether an individual meets or exceeds the minimum legal drinking age.
   * The request must meet the following criteria in order to be evaluated: * *firstName*, *lastName*, and *address* are required fields. * One of the following sets of attributes are required for the *address*:   * *line1, city, region*   * *line1, postalCode*  Optionally, the transaction and its lines may use the following parameters: * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21). * Beyond the required *address* fields above, a *country* field is permitted   * The valid values for this attribute are [*US, USA*]  **Security Policies** This API depends on the active subscription *AgeVerification*
   * @param {module:model/AgeVerification/AgeVerifyRequest} ageVerifyRequest Information about the individual whose age is being verified.
   * @param {Object} opts Optional parameters
   * @param {module:model/AgeVerification/AgeVerifyFailureCode} opts.simulatedFailureCode (Optional) The failure code included in the simulated response of the endpoint. Note that this endpoint is only available in Sandbox for testing purposes.
   * @param {module:api/AgeVerification/AgeVerificationApi~verifyAgeCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AgeVerification/AgeVerifyResult}
   */


  (0, _createClass2["default"])(AgeVerificationApi, [{
    key: "verifyAge",
    value: function verifyAge(ageVerifyRequest, opts, callback) {
      opts = opts || {};
      var postBody = ageVerifyRequest; // verify the required parameter 'ageVerifyRequest' is set

      if (ageVerifyRequest === undefined || ageVerifyRequest === null) {
        throw new Error("Missing the required parameter 'ageVerifyRequest' when calling verifyAge");
      }

      var pathParams = {};
      var queryParams = {
        'simulatedFailureCode': opts['simulatedFailureCode']
      };
      var headerParams = {};
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "";
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AgeVerifyResult["default"];
      return this.apiClient.callApi('/api/v2/ageverification/verify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
  }]);
  return AgeVerificationApi;
}();

exports["default"] = AgeVerificationApi;